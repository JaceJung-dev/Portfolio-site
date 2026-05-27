# Portfolio

AI 엔지니어 개인 포트폴리오 사이트. 단일 페이지(Hero / About / Projects / Skills / Contact)와 프로젝트별 상세 페이지(SSG)로 구성.

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript 5**
- **Tailwind CSS v4** (`@theme inline`, OKLCH 토큰) + **shadcn/ui** (`radix-nova`)
- **next-themes** (다크 기본), **lucide-react**, **@vercel/analytics**

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드 (프로젝트 상세는 SSG로 사전 생성)
npm run start    # 프로덕션 서버
npm run lint     # ESLint
```

## Project Structure

```
app/
  page.tsx                       # 메인 페이지 (섹션 합성)
  projects/[id]/                 # 프로젝트 상세 (generateStaticParams)
  globals.css                    # Tailwind v4 진입점 + 테마 토큰
components/
  projects.tsx                   # 프로젝트 데이터 + 그리드 컴포넌트 (single source of truth)
  ui/                            # shadcn/ui 프리미티브
public/assets/                   # 프로젝트 이미지/영상
```

상세 아키텍처와 코드 컨벤션은 [`CLAUDE.md`](./CLAUDE.md) 참고.

## Adding shadcn components

```bash
npx shadcn@latest add <name>     # components/ui/ 에 생성됨
```
