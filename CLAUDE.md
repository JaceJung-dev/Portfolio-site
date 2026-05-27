# CLAUDE.md

## Project

개인 포트폴리오 사이트 — AI 엔지니어로서의 프로젝트와 경력을 소개하는 단일 페이지 + 프로젝트 상세 SSG.
원래 v0.app에서 생성된 것을 마이그레이션해 사용 중(`init: migrate portfolio project from v0.app`).

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript 5** (`strict: true`)
- **Tailwind CSS v4** (`@tailwindcss/postcss`, `@theme inline` 방식, OKLCH 색상)
- **shadcn/ui** (style: `radix-nova`, Radix primitives 기반), **lucide-react** 아이콘
- **next-themes** (다크 기본, `defaultTheme="dark"`)
- **@vercel/analytics**

## Commands

```bash
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 프로덕션 빌드 (프로젝트 상세는 SSG로 사전 생성됨)
npm run start    # 프로덕션 서버
npm run lint     # ESLint (eslint-config-next: core-web-vitals + typescript)
```

테스트 설정은 없음. shadcn 컴포넌트 추가는 `npx shadcn@latest add <name>` (예: `button`) — `components/ui/`에 생성됨.

## Architecture

### Routing
- `app/page.tsx` — 메인 페이지. `Header` + `Hero` / `About` / `Projects` / `Skills` / `Contact` 섹션 합성. 섹션 이동은 `#about` 등 hash anchor.
- `app/projects/[id]/page.tsx` — 프로젝트 상세. **서버 컴포넌트**가 `generateStaticParams`로 `projects` 배열의 모든 id를 사전 생성하고, `ProjectDetailClient`에 `id`만 넘김.
- `app/projects/[id]/project-detail-client.tsx` — 모든 상세 렌더링/탭/다이얼로그 로직이 들어 있는 **클라이언트 컴포넌트**.

### 프로젝트 데이터 (중요)
- **`components/projects.tsx` (~2,800줄)** 은 단일 파일에 두 가지를 담고 있다:
  1. `export const projects = [...]` — 모든 프로젝트의 메타데이터 + 콘텐츠(개요, 기능, `coreWorks`, 트러블슈팅 등)가 인라인된 거대한 배열. 별도 TypeScript type 정의 없이 객체 리터럴 모양 그대로 사용됨.
  2. `export function Projects()` — 메인 페이지의 프로젝트 그리드 컴포넌트.
- 새 프로젝트를 추가하거나 기존 프로젝트 콘텐츠를 수정하려면 이 배열을 편집한다. `app/projects/[id]/page.tsx`와 `project-detail-client.tsx`가 모두 `@/components/projects`의 `projects`를 import해서 사용하므로 단일 출처(single source of truth) 역할을 한다.
- `coreWorks` 항목은 `type` 필드로 렌더링 분기(`feature` / `metric` / `troubleshoot` 등) — 새 형태를 추가할 때는 `project-detail-client.tsx`의 분기도 함께 손봐야 한다.

### 텍스트 마크업 컨벤션 (project-detail-client.tsx)
프로젝트 텍스트 필드는 두 가지 인라인 마크업을 지원하며, 전용 헬퍼로 렌더링된다:
- `` `code` `` → 인라인 코드 박스 (`renderTextWithInlineCode`)
- `**강조**` → `text-foreground font-medium` 강조 (`renderEmphasized`)

새 문자열을 작성할 때 이 컨벤션을 따르면 자동으로 스타일링된다. 별도 마크다운 파서는 없다.

### 테마 / 스타일링
- `app/globals.css`는 Tailwind v4 단일 진입점. `@theme inline`으로 CSS 변수를 토큰화하고 `:root` / `.dark`에서 OKLCH 색상 정의(라이트는 따뜻한 베이지/아이보리 톤, 다크는 차가운 블루 톤).
- 색은 항상 토큰을 사용한다: `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-muted/30`, `ring` 등. 하드코딩된 hex/rgb를 추가하지 말 것.
- 폰트는 Geist (sans) / Geist Mono (mono) — `app/layout.tsx`에서 CSS 변수로 주입.
- 본문 크기는 인라인 px 클래스를 빈번하게 사용한다 (`text-[18px]`, `text-[20.5px]` 등) — 의도된 디자인 결정이므로 임의로 표준 Tailwind 스케일(`text-lg` 등)로 통일하지 말 것.
- 클래스 합성은 `cn()` (`lib/utils.ts`, `clsx` + `tailwind-merge`).

### Client/Server 분리
- 메인 페이지 섹션 컴포넌트(`hero.tsx`, `about.tsx`, `skills.tsx`, `contact.tsx`)는 서버 컴포넌트.
- `header.tsx`, `theme-toggle.tsx`, `project-detail-client.tsx`는 `"use client"`. `Header`는 `ThemeToggle`을 `next/dynamic({ ssr: false })`로 로드 — hydration mismatch 회피용이니 그대로 둘 것.

### Path Aliases
`tsconfig.json` `paths`: `@/*` → repo root. shadcn aliases(`components.json`): `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils`, `@/hooks`.

### Assets
프로젝트 이미지/영상은 `public/assets/`. `projects` 배열의 `image` / `galleryImages` 경로는 `/assets/...`로 시작한다.

## Code Style

- **Prettier**: no semicolons, double quotes, 2-space indent, `printWidth: 80`, `trailingComma: "es5"`. `prettier-plugin-tailwindcss`가 `cn` / `cva` 호출 내부 클래스 정렬을 자동 처리. 새 헬퍼가 className을 받으면 `tailwindFunctions`에 추가 고려.
- **Naming**: 컴포넌트는 PascalCase, 파일은 kebab-case (`project-detail-client.tsx`).
- **수정 범위**: `components/projects.tsx`처럼 단일 파일에 다량의 콘텐츠가 있더라도, 작업 요청 범위에 명시되지 않은 다른 프로젝트 항목을 임의로 손대지 말 것.
