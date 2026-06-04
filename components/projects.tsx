import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const projects = [
  {
    id: "fanmate",
    title: "FanMate",
    description: "취향 분석과 다중 팬 페르소나 AI 대화를 통해 나에게 딱 맞는 KBO 팀을 찾아주고, 입덕부터 덕질까지 이어주는 맞춤형 야구 영업 챗봇 서비스",
    image: "/assets/fanmate-banner-SoxuUBCnLDbhHacbJ8flQLeUH4QVNB.png",
    tags: ["Python", "FastAPI", "LangChain", "PostgreSQL", "ChromaDB", "Airflow", "Naver HyperCLOVA X"],
    github: "https://github.com/boostcampaitech8/pro-nlp-finalproject-nlp-16",
    type: "AI 챗봇 서비스",
    period: "2026.01.22 - 2026.02.07",
    teamSize: "4명",
    role: "백엔드 개발 및 LLM 파이프라인 구축 및 데이터 증강",
    overview: "팬덤 소비가 단순 관람을 넘어 '참여'와 '정체성 형성' 중심으로 변화하는 흐름 속에서, 입덕 초기 사용자가 겪는 정보 과잉과 진입 장벽 문제를 해결하기 위해 기획된 서비스입니다.\n\n사용자의 성향과 취향을 대화 기반으로 분석하고, 각 구단 팬 페르소나를 가진 AI들과의 상호작용을 통해 가장 잘 맞는 KBO 리그 팀을 추천합니다. 단순한 팀 선택에 그치지 않고, 선택 이후에도 팬 AI와의 지속적인 대화를 통해 응원 포인트와 팀 서사를 자연스럽게 익히며 소속감을 형성하도록 설계된 입덕 여정 전반을 아우르는 야구 영업 챗봇 서비스입니다.",
    heroImage: "/assets/system-arch-ai2xogsfFbmtEcSWr1ib4S8C9xtUAU.png",
    heroCaption: "시스템 아키텍처 — 멀티 에이전트 · RAG · 데이터 파이프라인",
    keyMetrics: [
      { label: "RAG 답변 사실성 (Faithfulness)", value: "+14.7%" },
      { label: "검색 정밀도 (Context Precision)", value: "+24.7%" },
      { label: "페르소나 응답 품질 (G-Eval)", value: "+11.3%" },
    ],
    galleryImages: [
      "/assets/final-seg1-epgGN0W2dKNCitQhLuVEHEm6Nh0CJM.mp4",
      "/assets/final-seg2-JgPUP4I33PZgXfj3zdIm4nWSJ3YjuE.mp4",
      "/assets/final-seg3-xbLt8dej8etHQphdKeLtZTGw8wwDZl.mp4",
      "/assets/final-seg4-J31lbfZMGIbVq9kxRYQe6YJVVNLXsp.mp4",
      "/assets/system-arch-ai2xogsfFbmtEcSWr1ib4S8C9xtUAU.png",
      "/assets/rag-mE7AAXgGFbOQnY1EatJdh0HV3MZQ0d.png",
      "/assets/salesking-diagram-iohY3ItPdBMfmAYzFZzJGpiDlQtQu9.png",
      "/assets/edge_case-VPGcUOfmGOoxGkq6XwkdPbDFmcnpZd.png",
    ],
    features: [
      {
        category: "AI 챗봇 서비스",
        items: [
          "LangChain + LangGraph 기반 멀티 에이전트 아키텍처 (Tool Calling 자동 처리)",
          "HyperCLOVA X(HCX-005) 기반 팀별 페르소나 챗봇 2종 (영업왕 / 주접메이트)",
          "SSE(Server-Sent Events) 기반 실시간 토큰 단위 스트리밍 응답",
          "사용자 질의 자동 분류 및 라우팅 (sql / search / rag / blocked / general)",
          "PII 마스킹 미들웨어 (이메일, 전화번호) 및 민감 주제 차단 필터링",
          "PostgreSQL AsyncPostgresSaver 기반 멀티턴 대화 내역 저장 (체크포인터)",
          "톤 조정 미들웨어 및 후속 질문 자동 추천 기능",
        ],
      },
      {
        category: "AI 팀 추천 시스템",
        items: [
          "설문 기반 팀 매칭 점수 산출 (TeamScorer)",
          "사용자 거주지 기반 연고지 매칭 (LocationMatcher)",
          "HyperCLOVA X를 활용한 추천 사유 자동 생성 (AIDescriptionGenerator)",
          "1~3순위 팀 추천 결과 저장 및 조회",
          "설문 응답 → 점수 산출 → AI 설명 생성의 3단계 파이프라인",
        ],
      },
      {
        category: "데이터 수집 및 RAG 파이프라인",
        items: [
          "Apache Airflow 기반 일일 자동 크롤링 DAG (KBO 10개 구단)",
          "Playwright + BeautifulSoup 기반 나무위키 크롤러 (2-depth 하위 문서 포함)",
          "ChromaDB 벡터 임베딩(OpenAI text-embedding-3-small) 기반 의미 검색 (MMR)",
          "네이버 검색 API 연동 (뉴스 + 웹문서 실시간 검색)",
          "SQL Agent를 통한 구단 메타데이터 조회 (마스코트, 경기장, 응원가, 하이라이트, 유니폼)",
          "파일 버전 관리 (최대 30개) 및 current 심볼릭 링크 자동 갱신",
        ],
      },
      {
        category: "인프라 및 배포",
        items: [
          "Docker Compose 기반 멀티 컨테이너 구성 (Frontend, Backend, PostgreSQL, Airflow)",
          "FastAPI + Uvicorn 비동기 백엔드 서버",
          "React 19 + TypeScript + Vite 프론트엔드 (Nginx 서빙)",
          "SQLModel ORM + PostgreSQL 15 + psycopg 3.x 비동기 DB 연동",
          "GitHub Actions 기반 CI/CD 파이프라인",
          "LangSmith 연동을 통한 에이전트 트레이싱 및 디버깅",
        ],
      },
      {
        category: "사용자 인증 및 계정 관리",
        items: [
          "이메일/비밀번호 기반 회원가입 및 로그인 (bcrypt 해싱)",
          "OAuth 소셜 로그인 구조 (Kakao, Naver, Google)",
          "닉네임 고유성 검증 및 프로필 수정",
          "응원 팀 설정/변경 및 추천 결과 저장",
          "UUID 기반 사용자 식별 및 Pydantic 데이터 검증",
        ],
      },
      {
        category: "온보딩 로드맵 (입덕 가이드)",
        items: [
          "5단계 챕터 구성 (야구 기초 → KBO 리그 → 팬 문화 → 팀 입문 → 팀 홍보 영상)",
          "Markdown 기반 콘텐츠 관리 및 React Markdown + Rehype 렌더링",
          "선택한 팀에 따라 Chapter 5 동적 생성 (팀별 YouTube 영상 포함)",
          "Protected Route를 통한 인증 사용자 전용 접근 제어",
        ],
      },
    ],
    coreWorks: [
      {
        type: "feature",
        layout: "horizontal",
        tag: "기능 구현",
        subLabel: "멀티 에이전트 챗봇",
        title: "LangChain 1.0 기반 페르소나 챗봇 파이프라인 구축",
        description:
          "LangGraph 멀티 에이전트로 질의를 자동 분류·라우팅하고, HyperCLOVA X 기반 팀별 페르소나 챗봇(영업왕·주접메이트) 2종을 SSE 스트리밍·멀티턴 저장과 함께 직접 설계·구현했습니다.",
        image: "/assets/salesking-diagram-iohY3ItPdBMfmAYzFZzJGpiDlQtQu9.png",
        problem:
          "단일 챗봇 안에서 질문 유형, 검색 도구, 팀별 페르소나, DB 질의를 함께 처리해야 했습니다. 긴 멀티턴 대화에서는 발화 주체 혼동과 페르소나 일관성 저하도 함께 관리해야 했습니다.",
        solution:
          "LangGraph 기반 멀티 에이전트 구조로 질문을 자동 분류하고, 선택된 라우트와 팀별 페르소나에 맞춰 동적으로 프롬프트를 구성해 응답 흐름을 제어했습니다.",
        pillars: [
          {
            name: "Query Routing",
            lines: ["5개 처리 경로", "자동 분기"],
          },
          {
            name: "Safety Guardrail",
            lines: ["민감 질문 차단", "PII 마스킹"],
          },
          {
            name: "Dynamic Prompt",
            lines: ["팀별 페르소나", "지시문 동적 결합"],
          },
          {
            name: "Multi-turn Memory",
            lines: ["요약·DB 저장", "상태 유지"],
          },
        ],
      },
      {
        type: "metric",
        tag: "성능 개선",
        subLabel: "RAG 파이프라인",
        title: "RAG 검색 품질 개선",
        description:
          "RAG 파이프라인과 평가 체계를 구축하고, **chunking 전략**·**retrieval 방식**·**stub 제거** 실험을 통해 답변 사실성과 검색 정밀도를 개선했습니다.",
        metrics: [
          { label: "Faithfulness", before: "0.651", after: "0.747", delta: "+14.7%" },
          { label: "Context Precision", before: "0.533", after: "0.664", delta: "+24.7%" },
        ],
        processes: [
          {
            label: "개선 과정",
            steps: [
              {
                title: "평가 기준 수립",
                detail:
                  "RAGAS 기반 Faithfulness · Context Precision으로 검색 품질을 정량 평가 (Baseline Faithfulness 0.1996 대비 향상 폭 측정)",
              },
              {
                title: "검색 구조 개선",
                detail:
                  "chunk_size 300/600/800/1200 × vector/hybrid × similarity/MMR × k=3/5 매트릭스 실험 → 800자 chunk + Hybrid Retriever + MMR + k=5 조합 선정",
              },
              {
                title: "Stub 문서 제거",
                detail:
                  "저신호 chunk(stub) 제거로 불필요한 컨텍스트 유입 감소 — corpus 정합성 향상",
              },
              {
                title: "동일 조건 ablation",
                detail:
                  "hybrid_mmr_k5 고정 후 stub 포함/제거만 변화시킨 controlled comparison — Faithfulness +0.096, Context Precision +0.131 산출 근거",
              },
            ],
          },
        ],
      },
      {
        type: "metric",
        tag: "성능 개선",
        subLabel: "LLM 응답 품질 평가",
        title: "G-Eval 기반 페르소나 응답 평가",
        description:
          "**user case · edge case 평가셋**과 **6개 평가 rubric**을 구성해 프롬프트 v1 / v2의 응답 품질을 항목별로 비교했습니다.",
        wideImage: true,
        metrics: [
          { label: "G-Eval Total", before: "0.71", after: "0.79", delta: "+11.3%" },
        ],
        highlights: {
          label: "6개 평가 항목",
          items: [
            { label: "팬 페르소나", before: "0.67", after: "0.87" },
            { label: "친근함·환영", before: "0.90", after: "0.92" },
            { label: "영업력", before: "0.79", after: "0.87" },
            { label: "입덕 포인트", before: "0.77", after: "0.85" },
            { label: "정보 정확성", before: "0.51", after: "0.52" },
            { label: "대화 유도", before: "0.60", after: "0.72" },
          ],
        },
        images: [
          {
            src: "/assets/chatbot-edgecase-flow.png",
            caption: "User case · Edge case 응답 흐름 — 라우터 → 비개인화/개인화 분기 → 품질 검증",
          },
        ],
        processes: [
          {
            label: "평가 설계",
            steps: [
              {
                title: "Evaluation Set",
                detail: "user case · edge case 구성",
              },
              {
                title: "Rubric Design",
                detail: "페르소나 품질 6개 축 정의",
              },
            ],
          },
          {
            label: "개선 흐름",
            steps: [
              {
                title: "Prompt Iteration",
                detail: "평가 결과 기반 v1 → v2 개선",
              },
              {
                title: "Score Tracking",
                detail: "항목별 점수 변화로 효과 추적",
              },
            ],
          },
        ],
      },
      {
        type: "feature",
        tag: "기능 개선",
        subLabel: "멀티 페르소나 메모리 제어",
        title: "단일 세션 내 발화 주체 혼동 완화",
        description:
          "하나의 채팅방에서 여러 팀 팬 페르소나가 번갈아 발언할 때, 현재 발화자는 **프롬프트로 주입**하고 완료된 응답은 **state에 태깅**해 저장했습니다.",
        pillars: [
          {
            name: "Dynamic Prompt",
            lines: ["team_name 기반으로", "팀별 시스템 프롬프트 생성"],
          },
          {
            name: "Checkpointer Overwrite",
            lines: ["마지막 AIMessage를 동일 id로", "교체해 태그 prefix 저장"],
          },
        ],
        codeBlock: {
          title: "핵심 코드 스냅샷",
          language: "python",
          code: `# 1) Dynamic Prompt — team별 시스템 프롬프트
@dynamic_prompt
def team_persona_prompt(req):
    team = req.context["team_name"]
    return get_persona_prompt(team)

# 2) Checkpointer Overwrite — 동일 id로 교체
state = await agent.aget_state(cfg)
last = state.values["messages"][-1]
tagged = AIMessage(content=f"[{team}] {content}", id=last.id)

await agent.aupdate_state(cfg, {"messages": [tagged]})`,
        },
        processes: [
          {
            label: "구현 흐름",
            steps: [
              {
                title: "Context Read",
                detail: "현재 발화 팀 식별",
              },
              {
                title: "Prompt Build",
                detail: "team_name 기반 시스템 프롬프트 생성",
              },
              {
                title: "Response Generation",
                detail: "팀별 프롬프트로 응답 생성 및 스트리밍",
              },
              {
                title: "State Rewrite",
                detail: "응답 완료 후 마지막 AIMessage를 동일 id로 교체",
              },
              {
                title: "History Control",
                detail: "다음 턴 히스토리에 발화자 정보 반영",
              },
            ],
          },
        ],
      },
    ],
    implementations: [],
    troubleshooting: [
      {
        incidentNumber: "INC-001",
        category: "Env",
        problem: ".env에 사용하지 않는 값이 있어서 생기는 Pydantic Settings ValidationError",
        discoveredDate: "2026.01.27",
        resolvedDate: "2026.01.27",
        assignees: "정*웅",
        symptom: "• uv run python -m app.services.sales.chat 실행 시 pydantic_core.ValidationError 발생\n• Settings 클래스 초기화 단계에서 5개의 validation error 동시 발생\n• Extra inputs are not permitted 메시지와 함께 서버 기동 실패\n• .env 파일에 존재하는 PostgreSQL 관련 환경 변수가 거부됨",
        errorMessage: `pydantic_core._pydantic_core.ValidationError: 5 validation errors for Settings
postgres_server
  Extra inputs are not permitted [type=extra_forbidden, input_value='localhost', input_type=str]
postgres_user
  Extra inputs are not permitted [type=extra_forbidden, input_value='postgres', input_type=str]
postgres_password
  Extra inputs are not permitted [type=extra_forbidden, input_value='postgres', input_type=str]
postgres_db
  Extra inputs are not permitted [type=extra_forbidden, input_value='scout_db', input_type=str]
postgres_port
  Extra inputs are not permitted [type=extra_forbidden, input_value='5432', input_type=str]`,
        cause: "• app/core/config.py의 Settings 클래스에 PostgreSQL 관련 필드(POSTGRES_SERVER, POSTGRES_USER 등)가 정의되어 있지 않음\n• .env 파일에는 해당 환경 변수들이 존재하여 Pydantic이 로딩 시도\n• Pydantic Settings의 기본 설정이 정의되지 않은 추가 입력을 금지(extra = \"forbid\")하고 있어 validation error 발생\n• .env 파일이 모든 서비스의 환경 변수를 하나로 관리하고 있어, 특정 서비스에서 불필요한 변수까지 로딩됨",
        solution: "• app/core/config.py의 Settings 클래스에 누락된 PostgreSQL 관련 설정 필드를 추가\n• ChatClovaX 초기화 시 settings.CLOVASTUDIO_API_KEY를 명시적으로 전달하도록 보완",
        beforeCode: `# app/core/config.py - PostgreSQL 필드 없음
class Settings(BaseSettings):
    CLOVASTUDIO_API_KEY: str
    # ... PostgreSQL 관련 필드 미정의`,
        afterCode: `# app/core/config.py - PostgreSQL 필드 추가
class Settings(BaseSettings):
    CLOVASTUDIO_API_KEY: str
    POSTGRES_SERVER: str = "localhost"
    POSTGRES_USER: str = "postgres"
    POSTGRES_PASSWORD: str = "postgres"
    POSTGRES_DB: str = "scout_db"
    POSTGRES_PORT: str = "5432"
    # ...`,
        result: "Settings 초기화 시 .env의 모든 환경 변수가 정상적으로 로딩되어 ValidationError 해소. 이후 .env 파일을 서비스별로 분리하여 불필요한 변수 로딩을 방지하는 것을 권장.",
      },
      {
        incidentNumber: "INC-002",
        category: "Env",
        problem: "Windows에서 psycopg의 async 모드 오류 (ProactorEventLoop 비호환)",
        discoveredDate: "2026.01.27",
        resolvedDate: "2026.01.27",
        assignees: "정*웅",
        symptom: "• Windows 환경에서 AsyncPostgresSaver.from_conn_string() 호출 시 psycopg.InterfaceError 발생\n• LangGraph의 PostgreSQL 체크포인터를 async 모드로 사용할 수 없음\n• ProactorEventLoop이 호환되지 않는다는 에러 메시지 출력\n• 챗봇 응답 생성(get_bot_response) 단계에서 DB 연결 실패",
        errorMessage: `psycopg.InterfaceError: Psycopg cannot use the 'ProactorEventLoop' to run in async mode.
Please use a compatible event loop, for instance by running
'asyncio.run(..., loop_factory=asyncio.SelectorEventLoop(selectors.SelectSelector()))'`,
        cause: "• Windows의 Python 3.8+ 기본 이벤트 루프가 ProactorEventLoop으로 설정되어 있음\n• psycopg의 async 모드는 내부적으로 libpq의 소켓 기반 비동기 I/O를 사용하며, 이는 select() 기반 이벤트 루프를 요구\n• ProactorEventLoop은 IOCP(I/O Completion Ports) 기반으로 동작하여 libpq의 소켓 폴링 방식과 호환되지 않음\n• Linux/macOS에서는 기본 이벤트 루프가 SelectorEventLoop이므로 해당 문제가 발생하지 않음",
        solution: "• 스크립트 진입점에서 Windows 환경일 경우 이벤트 루프 정책을 WindowsSelectorEventLoopPolicy로 변경",
        beforeCode: `# 별도의 이벤트 루프 설정 없이 실행
import asyncio

async def main():
    async with AsyncPostgresSaver.from_conn_string(conn_string) as saver:
        ...

asyncio.run(main())`,
        afterCode: `# Windows 환경에서 psycopg async 호환을 위한 이벤트 루프 정책 변경
import sys
import asyncio

if sys.platform == "win32":
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

async def main():
    async with AsyncPostgresSaver.from_conn_string(conn_string) as saver:
        ...

asyncio.run(main())`,
        result: "Windows 환경에서 SelectorEventLoop으로 전환되어 psycopg async 모드가 정상 동작. AsyncPostgresSaver를 통한 DB 연결 및 체크포인트 저장이 에러 없이 수행됨.",
      },
      {
        incidentNumber: "INC-003",
        category: "Env",
        problem: "SQLAlchemy가 psycopg2를 요구하여 DB 연결 실패 (postgresql:// 스킴 기본 드라이버 충돌)",
        discoveredDate: "2026.01.30",
        resolvedDate: "2026.01.30",
        assignees: "정*웅",
        symptom: "• uv run uvicorn app.main:app --reload 실행 시 서버 기동 직후 크래시 발생\n• app.core.database 모듈 로딩 단계에서 create_engine() 호출 실패\n• ModuleNotFoundError: No module named 'psycopg2' 에러 출력\n• psycopg-binary(psycopg 3.x)는 설치되어 있으나 psycopg2는 미설치 상태",
        errorMessage: `File "/Users/jwoong/.../sqlalchemy/dialects/postgresql/psycopg2.py", line 696, in import_dbapi
    import psycopg2
ModuleNotFoundError: No module named 'psycopg2'`,
        cause: "• .env의 DB URI가 postgresql:// 스킴으로 설정되어 있었음\n• SQLAlchemy는 postgresql://을 psycopg2 드라이버로 해석하는 것이 기본 동작\n• 프로젝트에는 최신 버전인 psycopg(3.x)만 설치되어 있고, 레거시 psycopg2는 설치하지 않은 상태\n• 동시에 LangGraph의 AsyncPostgresSaver는 자체적으로 psycopg 커넥션을 생성하므로 드라이버 지정 없는 postgresql:// 형태를 기대",
        solution: "• psycopg2를 별도 설치하는 대신, psycopg 3.x를 계속 사용하기 위해 DB URI를 용도별로 분리\n• LangGraph 체크포인터용 URI와 SQLAlchemy 엔진용 URI를 각각 관리",
        beforeCode: `# .env
DB_URI=postgresql://postgres:postgres@localhost:5432/scout_db

# app/core/config.py
class Settings(BaseSettings):
    DB_URI: str

# app/core/database.py
engine = create_engine(settings.DB_URI, echo=True)`,
        afterCode: `# .env - URI를 용도별로 분리
DB_URI=postgresql://postgres:postgres@localhost:5432/scout_db           # LangGraph 체크포인터용
DB_ENGINE_URI=postgresql+psycopg://postgres:postgres@localhost:5432/scout_db  # SQLAlchemy 엔진용

# app/core/config.py
class Settings(BaseSettings):
    DB_URI: str         # LangGraph 체크포인터용 (드라이버 미지정)
    DB_ENGINE_URI: str  # SQLAlchemy 엔진용 (psycopg 3.x 명시)

# app/core/database.py
engine = create_async_engine(settings.DB_ENGINE_URI, echo=True)`,
        result: "SQLAlchemy가 postgresql+psycopg:// 스킴을 통해 psycopg 3.x 드라이버를 정상 로딩하여 DB 연결 성공. LangGraph의 AsyncPostgresSaver는 기존 DB_URI(postgresql://)를 그대로 사용하여 자체 커넥션 생성에 영향 없음. 두 라이브러리가 각자의 드라이버 요구사항에 맞는 URI를 사용하게 되어 충돌 해소.",
      },
      {
        incidentNumber: "INC-004",
        category: "BE",
        problem: "Summarization Middleware 내부 처리 과정이 사용자에게 노출되는 문제",
        discoveredDate: "2026.01.28",
        resolvedDate: "2026.01.28",
        assignees: "정*웅",
        symptom: "• 챗봇 응답 시 사용자 질문과 무관한 요약 메타데이터가 함께 출력됨\n• SESSION INTENT:, SUMMARY:, ARTIFACTS:, NEXT STEPS: 등의 내부 처리 텍스트가 실제 답변 앞에 노출\n• 스트리밍 모드에서 SummarizationMiddleware.before_model 노드의 토큰이 한 글자씩 출력됨\n• 사용자가 보는 최종 응답에 내부 요약 과정과 실제 답변이 뒤섞여 표시",
        errorMessage: `Node: SummarizationMiddleware.before_model, Content:
Node: SummarizationMiddleware.before_model, Content: **
**Node: SummarizationMiddleware.before_model, Content: SESSION
SESSIONNode: SummarizationMiddleware.before_model, Content:  INT
INTNode: SummarizationMiddleware.before_model, Content: ENT
ENTNode: SummarizationMiddleware.before_model, Content: :**
:**Node: SummarizationMiddleware.before_model, Content:  The
The...`,
        cause: "• agent.astream()의 stream_mode=\"messages\" 모드가 모든 노드의 메시지를 스트리밍으로 전달\n• Summarization Middleware가 내부적으로 세션 요약을 생성하는 과정에서 발생하는 중간 토큰까지 스트림에 포함됨\n• 기존 스트리밍 코드에서 노드 종류를 구분하지 않고 모든 msg.content를 그대로 yield하고 있었음",
        solution: "• 스트리밍 시 metadata의 langgraph_node 값을 확인하여 SummarizationMiddleware 노드의 출력을 필터링",
        beforeCode: `# 기존: 모든 노드의 출력을 무조건 전달
async for msg, metadata in agent.astream(
    {"messages": [HumanMessage(content=user_message)]},
    config=config,
    stream_mode="messages",
):
    yield msg.content`,
        afterCode: `# 변경 후: 노드 종류를 확인하여 필터링
async for msg, metadata in agent.astream(
    {"messages": [HumanMessage(content=user_message)]},
    config=config,
    stream_mode="messages",
):
    node_name = metadata.get("langgraph_node", "")

    if "SummarizationMiddleware" not in node_name:
        yield msg.content`,
        result: "Summarization Middleware의 내부 요약 생성 과정이 사용자 응답 스트림에서 제외됨. 사용자에게는 최종 답변 노드의 토큰만 스트리밍되어 깔끔한 응답 출력이 가능해짐.",
      },
      {
        incidentNumber: "INC-005",
        category: "BE",
        problem: "ClovaX Tool Calling 시 'Unsupported function' 에러",
        discoveredDate: "2026.01.30",
        resolvedDate: "2026.02.06",
        assignees: "정*웅",
        symptom: "• LangGraph Agent가 tool calling을 시도할 때 openai.APIError: Unsupported function 에러 발생\n• LangSmith에서 확인 시 LLMResult의 tool call 관련 필드가 전부 null로 표시\n• 에러 발생 후 Agent가 tool 사용을 포기하고 빈 응답 또는 예외 처리 메시지 반환",
        errorMessage: `openai.APIError: Unsupported function

Traceback (most recent call last):
  File ".../langchain_core/language_models/chat_models.py", line 1316, in _agenerate_with_cache
    async for chunk in self._astream(messages, stop=stop, **kwargs):
  File ".../langchain_openai/chat_models/base.py", line 1550, in _astream
    async for chunk in response:
  File ".../openai/_streaming.py", line 148, in __aiter__
    async for item in self._iterator:
  File ".../openai/_streaming.py", line 195, in __stream__
    raise APIError(
openai.APIError: Unsupported function`,
        cause: "• 초기 예상 원인은 3가지였으나, 디버그 코드를 삽입하여 순차적으로 원인을 좁혀감\n• 실제 원인 1: max_tokens 값이 너무 낮아 ClovaX가 tool calling 응답을 생성하기에 토큰 수가 부족하여 function call JSON 구조를 완성하지 못함\n• 실제 원인 2: 시스템 프롬프트에 \"응답을 N토큰 이내로 제한하세요\"와 같은 지시가 포함되어 모델이 tool call 생성 자체를 억제\n• Checkpointer에 이전 턴의 tool_call이 남아 있을 때 다음 턴에서 동일 tool을 bind하지 않으면 재발",
        solution: "• LLM_MAX_TOKENS 값을 충분히 상향하여 tool calling 응답 생성에 필요한 여유 확보\n• 시스템 프롬프트에서 토큰 수 제한 관련 지시문 제거\n• Checkpointer에 이전 턴의 tool_call이 남아 있을 때 다음 턴에서도 동일한 tool을 bind하여 Unsupported function 에러 재발 방지",
        afterCode: `# config: max_tokens 상향
model = ChatClovaX(
    model=settings.LLM_MODEL,
    max_tokens=settings.LLM_MAX_TOKENS,  # 충분한 값으로 설정
    ...
)

# memory tool을 매 턴 동일하게 bind (agent.py:126-129)
# checkpointer에 이전 턴 tool_call이 남아있어도 에러 방지
memory_tools = create_memory_tools(store, user_id, team_id)
agent = create_agent(
    model,
    tools=memory_tools,  # 매 턴 항상 바인딩
    ...
)`,
        result: "max_tokens 상향 및 프롬프트 내 토큰 제한 지시 제거 후 ClovaX가 tool calling JSON을 정상적으로 생성. LangSmith에서 LLMResult의 tool call 필드가 정상 출력됨을 확인. 매 턴 tool을 동일하게 bind하는 패턴 적용으로 멀티턴 대화에서의 Unsupported function 재발도 방지.",
      },
      {
        incidentNumber: "INC-006",
        category: "BE",
        problem: "순환 Import (Circular Import)로 인한 SQLModel Relationship 정의 실패",
        discoveredDate: "2026.02.02",
        resolvedDate: "2026.02.02",
        assignees: "정*웅",
        symptom: "• uv run -m app.main 실행 시 모델 로딩 단계에서 NameError 발생\n• User 클래스 정의 중 Team 클래스를 참조할 수 없음\n• models/__init__.py에서 import 순서에 따라 에러 발생 여부가 달라짐\n• 타입 힌트를 Optional에서 | 문법으로 교체한 이후 문제 발생",
        errorMessage: `# 오류 1: NameError - 런타임에 클래스를 찾을 수 없음
File "/Users/jwoong/.../models/users.py", line 33, in User
    team: Team | None = Relationship(back_populates="users")
          ^^^^
NameError: name 'Team' is not defined

# 오류 2: TypeError - 문자열 forward reference에 | 연산자 사용 불가
class ChatMessages(TimeStampMixIn, table=True):
    chat_session: "ChatSessions" | None = Relationship(...)
                  ~~~~~~~~~~~~~~~^~~~~
TypeError: unsupported operand type(s) for |: 'str' and 'NoneType'`,
        cause: "• models/__init__.py에서 User를 먼저 import하면, User 클래스 정의 시점에 Team이 아직 로드되지 않은 상태\n• TYPE_CHECKING 블록 안에서만 import한 경우, 타입 체커는 인식하지만 런타임에는 해당 이름이 존재하지 않음\n• \"Team\" | None 형태는 Python이 문자열 리터럴에 대해 | 연산자를 지원하지 않으므로 TypeError 발생\n• 표현별 동작: Team | None → NameError, Optional[Team] → NameError, \"Team\" | None → TypeError, Optional[\"Team\"] → 정상 동작",
        solution: "• 순환 참조되는 클래스를 TYPE_CHECKING 블록으로 조건부 import\n• 타입 힌트를 Optional[\"클래스명\"] 문자열 리터럴 형태로 변경하여 런타임 평가 회피",
        beforeCode: `from models.teams import Team  # 순환 import 발생

class User(TimeStampMixIn, table=True):
    team_id: int | None = Field(default=None, foreign_key="teams.id")
    team: Team | None = Relationship(back_populates="users")  # NameError`,
        afterCode: `from typing import TYPE_CHECKING, Optional

if TYPE_CHECKING:
    from models.teams import Team

class User(TimeStampMixIn, table=True):
    team_id: int | None = Field(default=None, foreign_key="teams.id")
    team: Optional["Team"] = Relationship(back_populates="users")  # 정상`,
        result: "TYPE_CHECKING 조건부 import와 Optional[\"Team\"] 문자열 리터럴 조합으로 순환 참조 해소. 런타임에는 실제 클래스를 import하지 않으면서 SQLModel의 Relationship이 문자열 기반으로 정상 해석됨.",
      },
      {
        incidentNumber: "INC-007",
        category: "FE",
        problem: "배포 환경(HTTP)에서 crypto.randomUUID() 사용 불가",
        discoveredDate: "2026.02.09",
        resolvedDate: "2026.02.09",
        assignees: "정*웅",
        symptom: "• 로컬 개발 환경(localhost)에서는 정상 동작하던 영업왕 채팅이 배포 환경에서 세션 생성 실패\n• crypto.randomUUID is not a function 또는 undefined 에러 발생\n• 채팅 세션 ID가 생성되지 않아 대화 자체가 시작되지 않음\n• HTTPS가 아닌 HTTP로 배포된 환경에서만 재현",
        errorMessage: `TypeError: crypto.randomUUID is not a function`,
        cause: "• crypto.randomUUID()는 Secure Context(HTTPS 또는 localhost)에서만 사용 가능한 Web API\n• 로컬 개발 시 localhost는 브라우저가 Secure Context로 취급하므로 정상 동작\n• 배포 서버가 HTTP로 서빙되는 경우 crypto.randomUUID()가 undefined로 노출됨\n• 영업왕 페이지 진입 시 crypto.randomUUID()로 세션 ID를 생성하는 코드에서 즉시 에러 발생",
        solution: "• crypto.randomUUID() 사용 가능 여부를 런타임에 확인하고, 미지원 시 수동 UUID v4 생성 폴백 함수를 적용",
        beforeCode: `// 기존: crypto.randomUUID() 직접 호출
const tempSessionId = crypto.randomUUID();  // HTTP 환경에서 에러`,
        afterCode: `// apiService.ts - UUID 생성 폴리필
export const generateUUID = (): string => {
  // crypto.randomUUID() 사용 가능하면 사용 (Secure Context)
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  // 폴백: 수동으로 UUID v4 생성 (HTTP 환경 대응)
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// SalesKing.tsx - 폴리필 함수 사용
import { generateUUID } from "../services/apiService";
const tempSessionId = generateUUID();`,
        result: "HTTPS가 아닌 HTTP 배포 환경에서도 UUID v4가 정상 생성되어 영업왕 채팅 세션이 문제없이 시작됨. crypto.randomUUID() 지원 브라우저에서는 네이티브 API를 사용하고, 미지원 환경에서만 폴백이 동작하므로 보안성과 호환성을 동시에 확보.",
      },
    ],
    devlogs: [
      {
        title: "페어프로그래밍으로 LangChain Agent 바닥부터 만들기 — 0.3에서 1.0으로, 달라진 것들",
        url: "https://jacejung-dev.github.io/devlog/2026-02-14-FanMate_1/",
      },
      {
        title: "SQLModel로 KBO 데이터베이스 구축하기",
        url: "https://jacejung-dev.github.io/devlog/2026-02-15-FanMate_2/",
      },
      {
        title: "RAG 파이프라인 구축",
        url: "https://jacejung-dev.github.io/devlog/2026-02-21-FanMate_3/",
      },
      {
        title: "멀티 페르소나 구현 — 체크포인터 상태 덮어쓰기로 대화방 만들기",
        url: "https://jacejung-dev.github.io/devlog/2026-02-21-FanMate_4/",
      },
      {
        title: "RAGAS와 DeepEval로 챗봇 품질 측정하기 — RAG 최적화와 프롬프트 최적화",
        url: "https://jacejung-dev.github.io/devlog/2026-02-22-FanMate_5/",
      },
    ],
  },
  {
    id: "csat-solver",
    title: "CSAT-Solver",
    description: "대학수학능력시험 유형 문제 해결 AI 모델 설계",
    image: "/assets/8gi-zoom-bg-nlp-znCX07LvFY0tCRKVQgYtC1HFWw8SwD.png",
    tags: ["Python", "PyTorch", "Transformers", "Hydra-core", "llama.cpp", "Pandas"],
    github: "https://github.com/boostcampaitech8/pro-nlp-generationfornlp-nlp-16",
    type: "AI/ML 프로젝트",
    period: "2025.12.17 - 2026.01.06",
    teamSize: "4명",
    role: "LLM 파이프라인 설계 및 데이터 증강",
    overview: "CSAT-Solver는 네이버 커넥트재단의 컴페티션 형태로 진행된 프로젝트로, 대한민국 대학수학능력시험(CSAT) 유형의 문제를 해결하는 AI 모델을 설계하는 것을 목표로 합니다. 본 프로젝트에서 해결하고자 한 핵심 문제는, GPT·Claude·Gemini와 같은 초대형 모델이 아닌 상대적으로 작은 규모의 언어 모델(Small / Medium LLM)만으로도 CSAT형 문제를 얼마나 효과적으로 풀어낼 수 있는가였습니다. CSAT-Solver는 단순한 모델 성능 비교를 넘어, 수능이라는 시험에 최적화된 AI 모델을 설계할 수 있는가에 대한 실험이자 지속적인 학습의 과정, 그리고 도전입니다.",
    heroImage: "/assets/csat-pipeline.svg",
    heroCaption: "모델 개발 파이프라인 — 데이터 → 학습 → 서빙(llama.cpp) → 개선",
    keyMetrics: [
      { label: "공개 리더보드 정답률 (Macro F1)", value: "+5.4%" },
      { label: "비공개 리더보드 정답률 (Macro F1)", value: "+9.7%" },
    ],
    galleryImages: [],
    features: [
      {
        category: "데이터 엔지니어링",
        items: [
          "GPT-4o-mini API 기반 수능형 객관식 문제 대량 생성 파이프라인 구축",
          "한국사능력검정시험 PDF → 학습 데이터 변환 파이프라인 구축 (pypdfium2 + GPT-4o Vision API)",
          "품질 검수를 위한 상위 모델 기반 데이터 검증 로직 적용",
        ],
      },
      {
        category: "파인튜닝 및 최적화",
        items: [
          "QLoRA(Quantized LoRA) 기반 효율적 파인튜닝 (bitsandbytes 4bit 양자화)",
          "Unsloth 라이브러리 통합으로 모델 로딩·추론 속도 및 메모리 효율 개선",
          "Unsloth 최적화 LoRA 적용 및 SFTTrainer 지원으로 빠른 SFT 학습 구현",
        ],
      },
      {
        category: "프롬프팅 전략",
        items: [
          "Chain-of-Thought(CoT) 프롬프트 적용으로 단계별 분석(reasoning) 생성 학습",
          "Two-stage CoT 추론 구현: Stage1(분석 생성) → Stage2(분석 기반 정답 추출)",
          "GPT 기반 reasoning 자동 생성 스크립트 및 평가/저장 파이프라인 구현",
          "Lost in the Middle 논문 기반 프롬프트 순서 최적화 (질문 → 보기 → 지문 → 선택지)",
        ],
      },
      {
        category: "모델 실험",
        items: [
          "Qwen2.5-7B/32B, Qwen3-32B 모델 실험 및 하이퍼파라미터 튜닝",
          "ko-gemma-2-9b-it, EXAONE-3.5-7.8B-Instruct 모델 비교 실험",
          "Llama-3-Open-Ko-8B, SKT A.X-4.0-Light 모델 실험",
          "모델별 최적 LoRA 파라미터(r, lora_alpha, lora_dropout) 및 템플릿 설정",
        ],
      },
      {
        category: "추론 전략",
        items: [
          "6개 모델 Ensemble: Majority Vote(>=4) + Model Agreement + Fallback 로직",
          "MoA(Mixture of Agents): SKT A.X로 description 생성 → EXAONE 3가지 모드 병렬 추론 → 다수결",
          "DAPT(Domain-Adaptive Pretraining) 데이터 로드·전처리 및 학습 파이프라인 구현",
        ],
      },
    ],
    coreWorks: [
      {
        type: "metric",
        tag: "성능 개선",
        subLabel: "학습 데이터 증강",
        title: "수능 도메인 분포에 맞춘 LLM 기반 학습 데이터 증강",
        description:
          "주어진 데이터에서 **사회 영역·<보기>·순서/부정형 문항 부족**을 확인하고, **LLM 기반 문항 증강과 SFT**로 Macro F1을 개선했습니다.",
        image: "/assets/data_aug_performance.png",
        imagePlacement: "bottom",
        metrics: [
          { label: "Macro F1 (Public)", before: "0.7198", after: "0.7590", delta: "+5.4%" },
          { label: "Macro F1 (Private)", before: "0.6138", after: "0.6734", delta: "+9.7%" },
        ],
        processes: [
          {
            label: "증강 과정",
            steps: [
              {
                title: "데이터 진단",
                detail:
                  "국어 대비 사회가 약 2배 많고, <보기> 활용·순서/부정형 등 수능 특화 유형이 부족함을 확인",
              },
              {
                title: "증강 방식 선정",
                detail:
                  "외부 데이터는 도메인 분포가 어긋나고 사람 작성은 비효율적이라, 가성비 모델 GPT-4o-mini 기반 LLM 증강으로 결정",
              },
              {
                title: "Fine-tuning 시도와 폐기",
                detail:
                  "수능형 QA로 fine-tuning을 시도했으나 <보기> 외형만 학습되고 핵심 주장·추론 지점이 담긴 본문을 만들지 못해 제외",
              },
              {
                title: "Prompt Engineering 채택",
                detail:
                  "지문의 핵심 주장·논리 전개를 문항으로 변환하도록 프롬프트와 few-shot 예시를 설계해 의미 단위 추론이 담긴 증강 데이터 확보",
              },
              {
                title: "SFT 학습 적용",
                detail:
                  "증강 데이터로 sktAX-4.0-light에 SFT를 적용해 Public/Private Macro F1 모두 개선",
              },
            ],
          },
        ],
      },
      {
        type: "feature",
        layout: "horizontal",
        tag: "기능 구현",
        subLabel: "MoA 추론 파이프라인",
        title: "MoA 기반 추론 안정성 개선",
        description:
          "**Provider**가 풀이 힌트를 생성하고, **Aggregator**가 힌트 조합별로 병렬 추론한 뒤, **Vote**로 최종 답안을 선택하는 MoA 추론 구조를 설계했습니다.",
        image: "/assets/moa_pipeline.svg",
        metrics: [
          { label: "Macro F1 (Public)", before: "0.7941", after: "0.8073", delta: "+0.0132" },
          { label: "Macro F1 (Private)", before: "0.7339", after: "0.7370", delta: "+0.0031" },
        ],
        problem:
          "32GB VRAM과 80GB 디스크라는 제한적인 환경에서 모델을 무작정 키우거나 여러 대형 모델을 병렬로 사용하는 방식은 현실적으로 어려웠습니다.\n\n제한된 자원 안에서 수능형 문항의 추론 안정성과 성능을 개선할 구조가 필요했습니다.",
        solution:
          "모델 규모를 키우기보다 힌트 생성과 최종 추론 역할을 분리했습니다.",
        processes: [
          {
            steps: [
              {
                title: "Provider",
                detail: "skt/A.X-4.0-Light\ntemperature 0.3 / 0.7 힌트 생성",
              },
              {
                title: "Aggregator",
                detail: "EXAONE-4.0-32B\n힌트 OFF/ON 조합 3모드 병렬 추론",
              },
              {
                title: "Vote",
                detail: "3개 답안 다수결\n동점 시 MODE 2 우선",
              },
            ],
          },
        ],
      },
      {
        type: "feature",
        tag: "협업",
        subLabel: "실험 관리 시스템",
        title: "ML 실험 재현성을 위한 Git 브랜치 컨벤션 설계",
        description:
          "성공한 실험만 본 코드에 반영되는 구조에서는 실패 실험, 파라미터, 재현 정보가 사라지기 쉬웠습니다. 이를 해결하기 위해 일반 git flow를 유지하되, **experiment/* 트랙을 추가**한 팀 브랜치 컨벤션을 설계했습니다.",
        pillars: [
          {
            name: "Negative Result 보존",
            lines: ["실패 실험도 branch에", "영구 기록"],
          },
          {
            name: "재현 가능성 확보",
            lines: ["코드·파라미터·결과를", "같은 상태로 추적"],
          },
          {
            name: "본 코드 / 실험 분리",
            lines: ["git flow + experiment", "트랙 운영"],
          },
        ],
        codeBlock: {
          title: "Branch Convention",
          language: "bash",
          code: `main
develop
feature/<scope>
  ├─ feature/data_augmenting
  ├─ feature/qlora
  └─ feature/ensemble

experiment/<topic>
  ├─ experiment/model_select_AX
  ├─ experiment/model_select_exaone
  ├─ experiment/exaone_32b
  └─ experiment/MoA`,
        },
        processes: [
          {
            label: "컨벤션 도입 과정",
            steps: [
              {
                title: "문제 정의",
                detail:
                  "성공 실험만 본 코드에 반영되며, 실패 실험과 재현 정보가 사라짐",
              },
              {
                title: "Semantic Versioning 검토",
                detail:
                  "실험 버저닝과 코드베이스 버전 업데이트 개념이 혼용되어 폐기",
              },
              {
                title: "git flow 유지",
                detail:
                  "main / develop / feature 흐름은 일반 기능 개발용으로 유지",
              },
              {
                title: "experiment/* 트랙 도입",
                detail:
                  "실험 결과를 merge 없이 branch에 보존해 후속 실험 기준으로 활용",
              },
            ],
          },
        ],
      },
    ],
    implementations: [],
    troubleshooting: [
      {
        incidentNumber: "INC-001",
        category: "BE",
        problem: "OpenAI Batch API 토큰 제한 초과로 인한 대량 요청 실패 (Token Limit / Rate Limit)",
        discoveredDate: "2025.12.28",
        resolvedDate: "2025.12.28",
        assignees: "정*웅",
        symptom: "• OpenAI Batch API를 통해 2,000개 이상의 문제 생성 요청 시 다수의 요청 실패\n• 배치 작업(batch.status)이 completed로 표시되지만 request_counts.failed가 대량 발생\n• 일부 요청에서 context_length_exceeded 또는 rate_limit_exceeded 에러 발생\n• 전체 파이프라인이 부분 실패 상태로 완료되어 생성된 문제 수가 예상보다 적음",
        errorMessage: `# 1. context_length_exceeded 에러
{
  "id": "batch_req_xxxxx",
  "custom_id": "NIRW2100000050.430927-q1",
  "response": {
    "status_code": 400,
    "body": {
      "error": {
        "message": "This model's maximum context length is 128000 tokens. However, your messages resulted in 131542 tokens.",
        "type": "invalid_request_error",
        "code": "context_length_exceeded"
      }
    }
  }
}

# 2. rate_limit_exceeded 에러
{
  "id": "batch_req_yyyyy",
  "response": {
    "status_code": 429,
    "body": {
      "error": {
        "message": "Rate limit reached for gpt-4o-mini: Limit 200000, Used 198542, Requested 15234.",
        "code": "rate_limit_exceeded"
      }
    }
  }
}`,
        cause: "• 기존 SYSTEM_PROMPT가 약 2,000~3,000 토큰으로 매우 긴 프롬프트 사용\n• Few-shot 예제까지 포함하여 단일 요청당 토큰 수 급증 (~5,500 토큰/요청)\n• 2,000개 이상의 요청을 단일 Batch로 제출하여 TPM 한도 초과\n• 기존 코드에서 batch.error_file_id 확인 로직 없음",
        solution: "• Fine-tuned 모델 전환 및 프롬프트 단순화로 요청당 토큰 수 ~80% 절감\n• batch_size 파라미터를 도입하여 대량 요청을 소규모 배치로 분할 (200개 단위)\n• Batch API 에러 파일 다운로드 및 상세 로깅 추가",
        beforeCode: `# 변경 전: Base 모델 + 복잡한 프롬프트 (~5,500 토큰)
"model": "gpt-4o-mini",
"messages": [
    {"role": "system", "content": SYSTEM_PROMPT},  # 2,500 토큰
    {"role": "user", "content": create_prompt_for_article(article)},  # 3,000 토큰
]`,
        afterCode: `# 변경 후: Fine-tuned 모델 + 간단한 프롬프트 (~1,200 토큰)
"model": "ft:gpt-4o-mini-2024-07-18:ainfo:ksat-qa-finetuned:Cs0hEg5r",
"messages": [
    {"role": "system", "content": "당신은 수능형 객관식 문제를 생성하는 전문가입니다."},  # ~30 토큰
    {"role": "user", "content": f"다음 지문으로 JSON 형식 문제를 생성하세요.\\n\\n{article['content']}"},
]

# 배치 분할 처리 로직
for batch_idx in range(0, total_articles, batch_size):
    batch_articles = articles[batch_idx : batch_idx + batch_size]
    batch_file = f"batch_request_{batch_idx}.jsonl"
    create_batch_request_file(batch_articles, batch_file)
    batch_id = submit_batch(client, batch_file)
    completed_batch = monitor_batch(client, batch_id)
    download_results(client, completed_batch, results_file)`,
        result: "요청당 토큰 수 ~5,500 → ~1,200 (80% 절감), 단일 배치 요청 수 2,000+ → 200, 요청 실패율 ~15-30% → <1%로 개선. 2,000개 이상의 문제 안정적으로 생성 완료.",
      },
      {
        incidentNumber: "INC-002",
        category: "Env",
        problem: "EXAONE-4.0-32B-GPTQ 로딩 실패 (GPTQ 의존성 누락 및 uv 빌드 환경 충돌)",
        discoveredDate: "2025.12.30",
        resolvedDate: "2025.12.30",
        assignees: "정*웅",
        symptom: "• uv run inference.py inference=exaone 실행 시 GPTQ 양자화 모델 로딩 실패\n• optimum 미설치 오류 발생\n• optimum 설치 후 QuantizeConfig 미정의 오류 발생\n• gptqmodel 설치 시도 시 torch 메타데이터 감지 실패로 빌드 오류 발생",
        errorMessage: `# 1. optimum 미설치 오류
ImportError: Loading a GPTQ quantized model requires optimum (\`pip install optimum\`)

# 2. optimum 설치 후 QuantizeConfig 미정의 오류
NameError: name 'QuantizeConfig' is not defined

# 3. gptqmodel 설치 시도 중 오류
× Failed to build \`gptqmodel==4.2.5\`
importlib.metadata.PackageNotFoundError: No package metadata was found for torch
Exception: Unable to detect torch version via uv/pip/conda/importlib.

# 4. torch 추가 설치 시 의존성 해석 실패
× No solution found when resolving dependencies
Because there is no version of requests==2.32.5 on https://download.pytorch.org/whl/cu118`,
        cause: "• GPTQ 모델 로딩 시 필수 의존성(optimum, gptqmodel) 미설치\n• uv의 build isolation 환경에서 gptqmodel이 torch 메타데이터를 감지하지 못함\n• HuggingFace 모델 카드에 의존성 명시 부족",
        solution: "• pyproject.toml에 의존성 명시\n• 설치 순서 준수: setuptools 먼저 설치 후 gptqmodel 설치\n• --no-build-isolation 옵션으로 기존 환경의 torch 감지 가능하게 설정",
        afterCode: `# pyproject.toml 설정
[project]
requires-python = ">=3.10,<3.11"
dependencies = [
    "optimum>=2.1.0",
    "transformers>=4.54.0",
    "requests==2.32.5",
]

# 설치 순서 (중요)
uv pip install setuptools
uv pip install gptqmodel --no-build-isolation`,
        result: "AutoModelForCausalLM.from_pretrained() 경로 유지하면서 EXAONE GPTQ 모델 정상 로딩 및 추론 파이프라인 정상 동작. uv 환경에서 GPTQ 모델 사용 시 build isolation 비활성화가 필수임을 확인했습니다.",
      },
      {
        incidentNumber: "INC-003",
        category: "Env",
        problem: "GPTQ quantization_config 옵션 충돌로 인한 모델 로딩 실패 (act_group_aware / desc_act)",
        discoveredDate: "2025.12.30",
        resolvedDate: "2025.12.30",
        assignees: "정*웅",
        symptom: "• GPTQ 양자화 모델 로딩 이후 내부 설정 충돌로 런타임 오류 발생\n• act_group_aware=True 상태에서 desc_act=True가 동시에 유지됨\n• GPTQ 설정 간 상호 배타 조건 위반으로 모델 로딩 단계에서 실패",
        errorMessage: `Error executing job with overrides: ['inference=exaone']
Traceback (most recent call last):
  File "/workspace/pro-nlp-generationfornlp-nlp-16/inference.py", line 141, in main
    model, tokenizer = load_model_for_inference(
  ...
  File "/workspace/.venv/lib/python3.10/site-packages/gptqmodel/quantization/config.py", line 433, in _resolve_activation_ordering
    raise ValueError(
ValueError: QuantizeConfig:: \`act_group_aware\` == \`True\` requires \`desc_act\` == \`False\` when both are explicitly set.`,
        cause: "• act_group_aware=True인 경우 desc_act=False여야 함 (상호 배타적 관계)\n• HuggingFace AutoConfig는 모델의 config.json에서 quantization_config를 로드할 때 상호 배타 조건을 자동으로 보정하지 않음\n• GPTQConfig의 기본값에서 act_group_aware=True, 모델 config.json에서 desc_act=true만 명시적으로 설정되어 두 옵션이 모두 True가 됨",
        solution: "• 모델 로드 이후 quantization_config를 직접 보정하는 로직 추가\n• GPTQ 설정을 별도 객체로 분리하지 않고 기존 로딩 흐름 유지\n• 기존 모델 config에 대한 수정은 최소한으로 제한",
        afterCode: `# 설정 보정 로직 (기존 config 유지)
qc = model.config.quantization_config

if getattr(qc, "act_group_aware", False):
    qc.desc_act = False
# 또는 반대로:
# if getattr(qc, "desc_act", False):
#     qc.act_group_aware = False`,
        result: "QuantizeConfig 옵션 충돌로 인한 오류 제거. EXAONE GPTQ 모델 정상 로딩 확인 및 GPTQ 기반 추론 정상 수행. 양자화 재수행 없이 기존 가중치 및 양자화 품질 유지.",
      },
    ],
    devlogs: [
      {
        title: "프로젝트 소개와 EDA",
        url: "https://jacejung-dev.github.io/devlog/2026-01-10-CSAT_1/",
      },
      {
        title: "LLM 기반 데이터 증강 — Prompt Engineering과 Fine-tuning",
        url: "https://jacejung-dev.github.io/devlog/2026-01-10-CSAT_2/",
      },
      {
        title: "MoA 파이프라인 설계 — llama.cpp 환경 구축과 다단계 추론",
        url: "https://jacejung-dev.github.io/devlog/2026-01-11-CSAT_3/",
      },
    ],
  },
  {
    id: "odqa",
    title: "ODQA: Open Domain Question Answering",
    description: "사전에 구축되어있는 Knowledge resource에서 질문에 답하는 모델 설계",
    image: "/assets/8gi-zoom-bg-nlp-znCX07LvFY0tCRKVQgYtC1HFWw8SwD.png",
    tags: ["Python", "PyTorch", "Transformers", "Hydra-core", "Pandas"],
    github: "https://github.com/boostcampaitech8/pro-nlp-mrc-nlp-16",
    type: "AI/ML 프로젝트",
    period: "2025.12.03 - 2025.12.11",
    teamSize: "4명",
    role: "Retriever 및 Reader 모델 설계, 데이터 전처리 파이프라인 구축",
    overview: "Open-Domain Question Answering(ODQA)은 별도의 지문 없이 사전 구축된 Knowledge resource에서 질문에 대답할 수 있는 문서를 검색하고 답변을 추출하는 고난이도 QA 과제입니다. 본 프로젝트에서는 질문과 관련된 문서를 찾는 Retriever 단계와 해당 문서에서 정답을 추출하는 Reader 단계로 구성된 Two-stage 파이프라인을 설계했습니다. 두 단계를 효과적으로 통합하여, 다양한 도메인의 질문에 답변할 수 있는 ODQA 시스템을 구축했습니다.",
    heroImage: "/assets/odqa-pipeline.svg",
    heroCaption: "Retriever–Reader Two-stage 파이프라인",
    keyMetrics: [
      { label: "정답 일치율 (EM)", value: "+3.34" },
      { label: "토큰 단위 정답률 (F1)", value: "+4.36" },
    ],
    galleryImages: [],
    features: [
      {
        category: "데이터 분석 및 증강",
        items: [
          "Context 길이, 정답 위치, 질문 유형, Lexical Overlap 기반 EDA 수행",
          "KorQuAD 1.0 외부 데이터 증강 (50% 샘플링, context <= 3000 필터링)",
          "Hard Negative Dataset 구축 및 False Negative(31.7%) 필터링",
        ],
      },
      {
        category: "Retrieval 고도화",
        items: [
          "TF-IDF, BM25, SLADE Sparse Retriever 성능 비교",
          "BM25 Tokenizer 5종(형태소, 서브워드, 음절, 공백, 문자) 비교 실험",
          "BGE-m3-ko 기반 Dense Retriever + Hard Negative Sampling 학습",
          "Hybrid Retrieval (BM25 + Dense) Min-Max 정규화 Weighted Sum 결합",
        ],
      },
      {
        category: "Reader 고도화",
        items: [
          "klue/BERT-base, klue/RoBERTa-base, klue/RoBERTa-large 모델 비교 및 선정",
          "Sliding Window + doc_stride 조합 최적화 (max_seq_length x doc_stride grid search)",
          "Answer-Aware Window(Two-stage Reader) 설계 및 구현",
          "학습-추론 환경 일치(Train-Test Alignment) 실험",
        ],
      },
      {
        category: "성능 최적화",
        items: [
          "BGE-reranker-v2-m3 기반 문서 Reranking (Top-K 재정렬)",
          "Hierarchical Hard Voting 앙상블 (4단계 계층적 필터링)",
          "Sparse, Dense, Hybrid x 1stage, 2stage x Reranker 전체 조합 비교",
        ],
      },
    ],
    coreWorks: [
      {
        type: "metric",
        tag: "성능 개선",
        subLabel: "Reader 입력 처리",
        title: "Long Context 최적화",
        description:
          "학습 데이터의 **58.7%가 BERT 입력 길이 제한을 초과**하는 문제를 확인하고, **문서 분할·stride 전략**을 조정해 긴 문맥 내 정답 손실을 줄였습니다.",
        metrics: [
          { label: "EM", before: "55.00", after: "57.92", delta: "+2.92" },
          { label: "F1", before: "64.69", after: "67.55", delta: "+2.86" },
        ],
        pillars: [
          {
            name: "문제 근거",
            lines: ["58.7% 입력 길이 제한 초과", "정답 위치가 후반부에 분포"],
          },
          {
            name: "최적화 전략",
            lines: ["max_seq_length / stride 조합", "grid search로 최적 조건 탐색"],
          },
        ],
        images: [
          {
            src: "/assets/sliding_window_result.png",
            caption:
              "Stride 전략별 EM/F1 비교 — best: max_seq_length 384 + doc_stride 192",
          },
        ],
      },
      {
        type: "metric",
        tag: "성능 개선",
        subLabel: "Reader 아키텍처",
        title: "Answer-Aware Window 설계",
        description:
          "**Sliding window만으로는** 윈도우 경계에 정답이 걸릴 때 앞뒤 문맥이 비대칭적으로 잘리고, 긴 문서에선 불필요한 문맥 비율이 높아지는 한계가 있었습니다. 정답 후보를 먼저 탐색한 뒤 후보 중심으로 윈도우를 재구성하는 **Two-stage Reader**를 설계했습니다.",
        metrics: [
          { label: "EM", before: "57.08", after: "60.42", delta: "+3.34" },
          { label: "F1", before: "64.60", after: "68.96", delta: "+4.36" },
        ],
        pillars: [
          {
            name: "Stage 1: 후보 탐색",
            lines: ["Sliding window로 전체 문서 스캔", "정답 가능 영역 식별"],
          },
          {
            name: "Stage 2: 정밀 추론",
            lines: ["후보 중심 윈도우 재구성", "정답 주변 문맥 정밀 추론"],
          },
        ],
        images: [
          {
            src: "/assets/two_stage_result.png",
            caption:
              "Retriever × Reader 조합 비교 — BM25 + Reranker + Two-stage에서 EM 60.42 / F1 68.96 최고 성능",
          },
        ],
        notes: [
          {
            label: "Reranker 시너지",
            body: "**Reranker를 적용한 Retriever와 함께 사용할 때 효과가 더 컸습니다.**\nReranker가 정답 포함 문서를 상위로 올리면, Two-stage Reader가 더 좋은 후보 영역을 다시 읽을 수 있었기 때문입니다.",
          },
        ],
      },
      {
        type: "feature",
        tag: "기능 구현",
        subLabel: "Retriever 평가 시스템",
        title: "Retriever 성능 비교 체계 구축",
        description:
          "팀원들이 **BM25, TF-IDF, Dense, Hybrid Retriever**를 각각 구현하면서 최종 검색 전략을 선택하기 위한 **공통 평가 기준**이 필요했습니다. 동일 데이터셋에서 **Recall@K, MRR**을 기준으로 Retriever 성능을 통합 비교하는 평가 시스템을 구축하고, 실험 결과를 바탕으로 팀이 납득할 수 있는 최종 Retriever를 결정했습니다.\n\n또한 한국어는 **조사와 어미가 발달한 교착어**라 공백 단위 분절이 의미 단위와 일치하지 않는 경우가 많았습니다. 이에 tokenizer 6종을 비교해 검색 성능 변화를 분석했고, **서브워드 단위 분절**이 가장 안정적인 검색 품질을 보이는 것을 확인했습니다.",
        metrics: [
          {
            label: "Retriever MRR",
            comparator: "<",
            lineup: [
              "Dense 29.37%",
              "TFIDF 40.79%",
              "BM25 68.00%",
              "Hybrid(BM25+Dense) 69.68%",
            ],
          },
          {
            label: "BM25 토크나이저 MRR",
            comparator: "<",
            lineup: [
              "글자 단위 1.79%",
              "띄어쓰기 단위 12.19%",
              "형태소·내용어 37.18%",
              "형태소 40.25%",
              "형태소·명사 40.80%",
              "서브워드 68.00%",
            ],
          },
        ],
        images: [
          {
            src: "/assets/bm25_tokenizer_comparison.png",
            caption:
              "BM25 토크나이저 6종 비교 — 서브워드(klue_roberta)가 Recall@K · MRR 모두에서 큰 격차로 우위",
          },
          {
            src: "/assets/retriever_comparison.png",
            caption:
              "최종 4개 Retriever 비교 — Hybrid 69.68% / BM25-klue_roberta 68.00% / TFIDF 40.79% / Dense 29.37%",
          },
        ],
      },
    ],
    implementations: [],
    troubleshooting: [
      {
        incidentNumber: "INC-001",
        category: "ML",
        problem: "Answer-Aware Window의 Train-Test Mismatch",
        discoveredDate: "2025.12.11",
        resolvedDate: "2025.12.11",
        assignees: "정*웅",
        symptom: "• 전처리 단계에서 답변 중심 context window를 적용하여 학습 시에는 정상 동작\n• 그러나 추론(inference) 시에는 정답 위치를 알 수 없어 동일한 전처리 적용 불가\n• 학습 때는 답변 주변만 잘라낸 짧은 context를 입력으로 보고, 추론 때는 전체 context를 입력으로 보게 되어 입력 분포 불일치(Train-Test Mismatch) 발생",
        cause: "• preprocessor.py의 _get_optimal_context_window()가 answer_start를 기반으로 context를 자르는 로직\n• 이 값은 학습 데이터에만 존재하며, 추론 시에는 정답 위치를 모르기 때문에 해당 로직 자체를 사용할 수 없음\n• 근본적으로 전처리 단계에서 답변 위치에 의존하는 설계 자체가 추론과 양립 불가능",
        solution: "• 전처리 단계의 answer-aware 로직을 전부 제거\n• 추론 시에도 동작 가능한 Two-stage Reader 아키텍처로 전면 재설계\n  - Stage 1: Sliding window로 전체 문서를 스캔하여 정답 후보 위치를 먼저 탐색\n  - Stage 2: Stage 1이 찾은 후보 위치를 중심으로 token-level window를 재구성하여 정밀 추론",
        beforeCode: `# src/data/preprocessor.py — 학습 시에만 동작, 추론 시 사용 불가
class DataPreprocessor:
    def _get_optimal_context_window(self, context, answer_text, answer_start):
        """answer_start를 알아야만 동작 → 추론 시 사용 불가"""
        available_char = int((self.max_seq_length - 20) * 1.5)
        before_buffer = int(available_char * self.answer_buffer_ratio)
        after_buffer = available_char - before_buffer

        window_start = max(0, answer_start - before_buffer)
        window_end = min(len(context), answer_start + len(answer_text) + after_buffer)

        optimal_context = context[window_start:window_end]
        adjusted_answer_start = answer_start - window_start
        return optimal_context, adjusted_answer_start

    def prepare_train_features(self, examples):
        if self.use_answer_aware_truncation:
            for i in range(len(examples[self.context_column])):
                answer = examples[self.answer_column][i]
                if len(answer["answer_start"]) > 0:
                    optimal_context, adjusted_start = self._get_optimal_context_window(
                        examples[self.context_column][i],
                        answer["text"][0],
                        answer["answer_start"][0],
                    )
                    examples[self.context_column][i] = optimal_context
                    examples[self.answer_column][i]["answer_start"][0] = adjusted_start`,
        afterCode: `# src/models/two_stage_reader.py — 추론 시에도 동작 (730줄 신규)
class TwoStageReader:
    def predict(self, examples, stage1_features, batch_size=16):
        # Stage 1: Sliding window 기반 전체 문서 스캔 → 정답 후보 탐색
        stage1_results = self._stage1_inference(examples, stage1_features, batch_size)
        # Stage 2: Stage 1 후보 중심으로 윈도우 재구성 → 정밀 추론
        stage2_results = self._stage2_inference(examples, stage1_results, batch_size)
        # F1 overlap + confidence 기반 최종 답변 선택
        ...

    def _create_answer_centered_window(self, context, ans_char_start, ans_char_end, question=""):
        """Stage 1이 찾은 후보 위치 기반 → 추론 시에도 동작"""
        # Full context를 한 번에 tokenize하여 정확한 token-level offset 확보
        full_encoded = self.tokenizer(context, return_offsets_mapping=True, add_special_tokens=False)
        full_offsets = full_encoded["offset_mapping"]

        # Answer span에 해당하는 token index 탐색
        for i, (start, end) in enumerate(full_offsets):
            if answer_token_start is None and start <= ans_char_start < end:
                answer_token_start = i
            if start < ans_char_end <= end:
                answer_token_end = i
                break

        # Token index로 window 계산 후 character offset 복원
        remaining_tokens = available_tokens - (answer_token_end - answer_token_start + 1)
        left_tokens = int(remaining_tokens * self.answer_buffer_ratio)
        window_token_start = max(0, answer_token_start - left_tokens)
        window_token_end = min(len(full_offsets), answer_token_end + 1 + (remaining_tokens - left_tokens))

        window_char_start = full_offsets[window_token_start][0]
        window_char_end = full_offsets[window_token_end - 1][1]
        return context[window_char_start:window_char_end], window_char_start`,
        result: "전처리 단계의 _get_optimal_context_window() 등 68줄 제거, TwoStageReader 730줄 신규 구현. 학습-추론 환경 일치 문제 해소. character 기반 근사 윈도우 → token-level 정밀 윈도우로 개선. Reranker 결합 시 EM +4.58%p 개선.",
      },
      {
        incidentNumber: "INC-002",
        category: "ML",
        problem: "Two-stage Reader의 N-best Prediction 누락",
        discoveredDate: "2025.12.11",
        resolvedDate: "2025.12.11",
        assignees: "정*웅",
        symptom: "• nbest_predictions.json에 n개의 후보가 아닌 1개만 저장됨\n• Hierarchical Hard Voting 앙상블에서 다양한 후보를 비교해야 하는데, 후보가 1개뿐이라 앙상블 효과 없음\n• Stage 2를 거친 경우에도 실제 n-best 후보가 아닌 하드코딩된 단일 결과만 출력",
        cause: "• _stage2_inference()가 best prediction 1개만 반환하고, n-best 리스트를 반환하지 않음\n• _postprocess_stage2()의 반환 타입이 Dict 하나로, 정렬된 후보 리스트가 외부로 전달되지 않음\n• 최종 결과 조합 단계에서 Stage 2를 거친 모든 경우에 best 1개를 직접 dict로 만들어 n-best에 저장",
        solution: "• _postprocess_stage2()가 best prediction과 함께 n-best 리스트도 함께 반환하도록 수정\n• _stage2_inference()의 반환 타입을 Dict → Tuple[Dict, Dict[str, List]]로 변경\n• 최종 조합 단계에서 하드코딩 제거, Stage 2의 실제 n-best 사용",
        beforeCode: `# src/models/two_stage_reader.py

# 1. _postprocess_stage2: best 1개만 반환
def _postprocess_stage2(self, ...) -> Dict[str, any]:
    predictions_sorted = sorted(prelim_predictions, key=lambda x: x["score"], reverse=True)
    return predictions_sorted[0]  # ← n-best 후보가 버려짐

# 2. _stage2_inference: best만 전달
stage2_results[example_id] = final_result
return stage2_results

# 3. 최종 조합: 하드코딩된 단일 결과를 n-best로 저장
nbest_predictions[example_id] = [{
    "text": stage2_text,
    "start_logit": stage2_score / 2,
    "end_logit": stage2_score / 2,
    "probability": stage2_confidence,
}]  # ← 항상 1개, 실제 n-best가 아님`,
        afterCode: `# src/models/two_stage_reader.py

# 1. _postprocess_stage2: best + n-best 함께 반환
def _postprocess_stage2(self, ...) -> Tuple[Dict[str, any], List[Dict]]:
    predictions_sorted = sorted(prelim_predictions, key=lambda x: x["score"], reverse=True)
    best_prediction = predictions_sorted[0]
    nbest = [{"text": p["text"], "start_logit": p["score"] / 2,
              "end_logit": p["score"] / 2, "probability": p["confidence"]}
             for p in predictions_sorted[:self.n_best_size]]
    return best_prediction, nbest  # ← n-best 후보 보존

# 2. _stage2_inference: n-best도 함께 전달
stage2_results[example_id] = final_result
stage2_nbest[example_id] = nbest_list
return stage2_results, stage2_nbest

# 3. 최종 조합: 실제 n-best 사용
nbest_predictions[example_id] = stage2_nbest[example_id]  # ← 하드코딩 제거`,
        result: "앙상블(Hierarchical Hard Voting)에서 다양한 후보 간 비교가 가능해져 최종 성능 약 2~3%p 개선. n-best 후보 기반 voting으로 더 robust한 최종 답변 선택 가능.",
      },
    ],
    devlogs: [
      {
        title: "프로젝트 개요 및 EDA 기반 전략 수립",
        url: "https://jacejung-dev.github.io/devlog/2025-12-12-ODQA_1/",
      },
      {
        title: "Reader 고도화 — Sliding Window & doc_stride 최적화",
        url: "https://jacejung-dev.github.io/devlog/2025-12-12-ODQA_2/",
      },
      {
        title: "Answer-Aware Window (Two-stage Reader) 설계와 구현",
        url: "https://jacejung-dev.github.io/devlog/2025-12-13-ODQA_3/",
      },
      {
        title: "BM25 Tokenizer 비교 실험 & Retriever 평가",
        url: "https://jacejung-dev.github.io/devlog/2025-12-13-ODQA_4/",
      },
    ],
  },
  {
    id: "ainfo",
    title: "AINFO",
    description: "개인 맞춤형 공공서비스 추천 AI 챗봇",
    image: "/assets/ainfo_index-5vfOVmyFNWxRiQW7YXFZCzCG8xQQI3.png",
    tags: [
      "Python",
      "Django",
      "DRF",
      "Django Channels",
      "LangChain",
      "CrewAI",
      "Redis",
      "Celery",
      "PostgreSQL",
      "ChromaDB",
    ],
    github: "https://github.com/JaceJung-dev/AInfo-Backend",
    demo: "https://www.youtube.com/watch?v=Y2IPx5YfEuc",
    docs: "https://young-hardware-f96.notion.site/Fourtato-19faf76d38e280cd8ebbc140c6588adf?source=copy_link",
    type: "AI 챗봇 서비스",
    period: "2025.02.27 - 2025.03.30",
    teamSize: "5명",
    role: "백엔드 개발",
    overview:
      "Django REST Framework(DRF)와 LangChain 기반으로 개발된 AI 챗봇 서비스로, 사용자의 상황과 특성에 맞는 정부·지자체 공공서비스를 맞춤 추천합니다. Retrieval-Augmented Generation(RAG) 방식을 적용해 LLM의 생성 능력과 실제 공공 데이터의 신뢰성을 결합하고, CrewAI 기반 멀티 에이전트 구조로 웹 검색과 보고서 생성을 자동화했습니다. WebSocket을 통한 실시간 응답 기능을 더해, 사용자와의 자연스러운 대화 경험을 구현했습니다.",
    heroImage: "/assets/ainfo_architecture-QXth2mU2KLBuGs31L0sMYxweMGYUMs.png",
    heroCaption: "시스템 아키텍처 — RAG · CrewAI 멀티 에이전트 · WebSocket",
    keyMetrics: [
      { label: "평균 응답 지연 (latency)", value: "-30.9%" },
      { label: "사용자 만족도", value: "+10.8%" },
    ],
    galleryImages: [
      "/assets/ainfo_main-5o8RXl90scf7yZGg9Lj8lKbVO4jUr5.gif",
      "/assets/ainfo_pay-dJruB6SB8MakHkGEA0mEoORRxSZC8a.gif",
      "/assets/ainfo_report.gif-PGeCkVjIXUDDOtyGqJuJV2VbK0pZ8Z.jpeg",
      "/assets/ainfo_architecture-QXth2mU2KLBuGs31L0sMYxweMGYUMs.png",
    ],
    features: [
      {
        category: "AI 챗봇 서비스",
        items: [
          "LangChain + Django 기반 RAG(Retrieval-Augmented Generation) 구조",
          "WebSocket 기반 실시간 스트리밍 응답",
          "사용자 질의 분석 후 간편안내 / 상세안내 분기 처리",
          "Redis 캐시 스토어 기반 세션 단위 대화 내역 저장 (멀티턴 구현)",
          "CrewAI 기반 멀티 에이전트: 웹검색 Agent → 실시간 외부 데이터 탐색",
          "CrewAI 기반 멀티 에이전트: 보고서 Agent → 검색 결과 기반 요약 리포트 생성",
        ],
      },
      {
        category: "데이터 관리 및 백엔드 인프라",
        items: [
          "ChromaDB 기반 벡터 임베딩을 통한 의미 기반 검색",
          "Celery 기반 공공서비스 데이터 자동 업데이트 파이프라인 구축",
          "Docker를 이용한 환경 격리 및 배포 자동화",
          "Nginx + Daphne(ASGI) 구성으로 WebSocket 통신 및 정적 파일 서빙",
          "PostgreSQL 데이터베이스와 연동된 안정적 백엔드 인프라 설계",
          "GitHub Actions 기반 CI/CD 파이프라인 구성",
        ],
      },
      {
        category: "사용자 인증 및 계정 관리",
        items: [
          "Django REST Framework(DRF) 기반 인증 시스템",
          "이메일 회원가입 및 로그인",
          "소셜 로그인 연동 (Google, Kakao)",
          "JWT 기반 인증 및 토큰 만료 관리",
          "PostgreSQL 기반 사용자 정보 및 인증 데이터 관리",
        ],
      },
      {
        category: "사용자 알림 및 결제 서비스",
        items: [
          "SMTP 기반 회원가입 인증 및 비밀번호 재설정 메일 발송",
          "Celery 비동기 처리 기반 공지 및 단체 안내 메일 발송",
          "Portone API 연동을 통한 결제·환불 처리",
        ],
      },
      {
        category: "협업 및 개발 프로세스",
        items: [
          "Git/GitHub 중심 협업 및 코드 리뷰",
          "Agile 방식의 2회 스프린트 운영 및 사용자 피드백 기반 기능 개선 사이클 적용",
          "Git Flow 기반 브랜치 전략 (main / develop / feature / hotfix)",
          "Gitmoji + 커밋 메시지 규칙 정립",
          "Black⋅Flake8⋅isort 코드 포맷팅 적용",
          "PR 단위 품질 검사(포맷팅·린트·테스트) 자동 실행(GitHub Actions 연동)",
        ],
      },
    ],
    coreWorks: [
      {
        type: "feature",
        tag: "기능 구현",
        subLabel: "비동기 스트리밍",
        title: "Django Channels + WebSocket 기반 챗봇 스트리밍",
        description:
          "Django Channels로 챗봇 응답을 WebSocket 기반으로 스트리밍하고, handshake 단계에서 JWT를 검증하는 middleware를 직접 구현했습니다. 이를 통해 인증된 사용자 연결을 유지하면서 토큰 단위 응답 전송이 가능하도록 구성했습니다.",
        metrics: [
          {
            label: "평균 응답 지연",
            before: "15.49s",
            after: "10.70s",
            delta: "-30.9%",
          },
          {
            label: "사용자 만족도",
            before: "3.7",
            after: "4.1",
            delta: "+10.8%",
          },
        ],
        processes: [
          {
            label: "응답 방식 개선",
            numbered: false,
            steps: [
              {
                title: "Before: HTTP Response",
                detail: "전체 답변 생성 완료 후 한 번에 반환",
              },
              {
                title: "After: Async WebSocket Streaming",
                detail:
                  "Django Channels Consumer가 연결을 비동기로 유지하고, LLM 생성 토큰을 즉시 클라이언트로 전송",
              },
              {
                title: "효과",
                detail: "첫 출력까지의 체감 대기 시간 감소",
              },
            ],
          },
          {
            label: "JWT 인증 처리 구조",
            steps: [
              {
                title: "Token 전달",
                detail: "query string으로 access token 전달",
              },
              {
                title: "Handshake Middleware",
                detail: "query string에서 token 추출",
              },
              {
                title: "Token 검증",
                detail: "SimpleJWT AccessToken 검증",
              },
              {
                title: "User Resolve",
                detail: "user_id 기반 사용자 조회",
              },
              {
                title: "Scope Injection",
                detail: "scope[\"user\"]에 인증 사용자 주입",
              },
            ],
          },
        ],
      },
      {
        type: "feature",
        tag: "기능 구현",
        subLabel: "질의 분류 정확도",
        title: "LLM Agent + 규칙 기반 하이브리드 의도 분류",
        description:
          "LLM 단독 분류의 흔들림을 잡기 위해 **키워드 가중치 보정**과 **질문 유형 패턴 매칭**을 더해, 같은 질문에는 같은 답변이 나가도록 견고한 의도 분류기를 만들었습니다.",
        pillars: [
          {
            name: "AI 1차 의도 분류",
            lines: ["사용자 질문을", "6가지 의도 후보로 분류"],
          },
          {
            name: "키워드 가중치 보정",
            lines: ["사전에 정의한 키워드의", "등장 빈도로 점수 가중"],
          },
          {
            name: "질문 유형 패턴 매칭",
            lines: ["'어떤 게 있어?' 목록형 vs", "'어떻게 신청해?' 상세형 구분"],
          },
        ],
        image: "/assets/ainfo-classification-pipeline.svg",
        processes: [
          {
            label: "문제 상황",
            numbered: false,
            steps: [
              {
                title: "LLM 단독 분류의 한계",
                detail:
                  "같은 입력에도 분류 결과가 달라지거나,\n한국어의 미묘한 뉘앙스를 잘 잡지 못함\n(예: '주거지원 정책 있어?' → 정책 목록 안내가 적절하지만 상세 안내로 오분류)",
              },
            ],
          },
          {
            label: "분류 흐름",
            steps: [
              {
                title: "AI 1차 의도 추정",
                detail:
                  "사용자가 무엇을 물었는지 AI가 추측 →\n잡담 · 정책 전반 · 정책 상세 · 맞춤 추천 · 보고서 요청 등\n6가지 의도 중 하나로 후보 선택",
              },
              {
                title: "키워드 가중치 보정",
                detail:
                  "사전에 정의한 키워드가 입력에 얼마나 들어있는지 점수로 계산해\nAI가 잘못 짚은 케이스를 보정",
              },
              {
                title: "질문 유형 패턴 매칭",
                detail:
                  "'어떤 게 있어?'(목록형) vs '어떻게 신청해?'(상세형) 같은\n사전 정의 패턴으로 한 번 더 구분",
              },
              {
                title: "최종 의도 확정 후 답변 분기",
                detail:
                  "AI 추측 + 두 보정을 합쳐 의도 확정 →\n안내 · 정책 목록 · 정책 상세 · 맞춤 추천 · 리포트 생성으로 분기",
              },
            ],
          },
        ],
      },
    ],
    implementations: [
      {
        title: "LangChain 기반 대화 시스템",
        description:
          "LangChain을 활용하여 사용자의 질문을 이해하고 적절한 공공서비스를 추천하는 시스템을 구현했습니다.",
        code: `# LangChain 대화 체인 구성
from langchain.chains import ConversationalRetrievalChain
from langchain.memory import ConversationBufferMemory

memory = ConversationBufferMemory(
    memory_key="chat_history",
    return_messages=True
)

chain = ConversationalRetrievalChain.from_llm(
    llm=llm,
    retriever=vectorstore.as_retriever(),
    memory=memory`,
      },
      {
        title: "Django Channels WebSocket 통신",
        description:
          "Django Channels를 사용하여 실시간 채팅 기능을 구현했습니다. 비동기 처리로 여러 사용자의 동시 접속을 효율적으로 처리합니다.",
        code: `# WebSocket Consumer
from channels.generic.websocket import AsyncWebsocketConsumer

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()
    
    async def receive(self, text_data):
        # AI 응답 생성 및 전송
        response = await self.get_ai_response(text_data)
        await self.send(text_data=json.dumps({
            'message': response
        }))
    
    # WebSocket 연결 종료 시 메모리 삭제
    async def disconnect(self, close_code):
        if self.is_authenticated:
            chat_history_manager = ChatHistoryManager(self.user_id, model=None)
            chat_history_manager.clear_history()
        
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)`,
      },
      {
        title: "CrewAI 다중 에이전트 시스템",
        description: "CrewAI를 활용하여 여러 AI 에이전트가 협업하여 더 정확한 서비스 추천을 제공합니다.",
        code: `# CrewAI 에이전트 구성
from crewai import Agent, Task, Crew

analyzer = Agent(
    role='사용자 상황 분석가',
    goal='사용자의 상황과 필요를 정확히 파악'
)

recommender = Agent(
    role='서비스 추천 전문가',
    goal='적합한 공공서비스 추천'
)

crew = Crew(
    agents=[analyzer, recommender],
    tasks=[analyze_task, recommend_task]
)`,
      },
    ],
    troubleshooting: [
      {
        incidentNumber: "INC-018",
        category: "Dep",
        discoveredDate: "2025.05.01",
        resolvedDate: "2025.05.01",
        assignees: ["박*지"],
        problem: "CD 오류: UUID 필드 적용 중 마이그레이션 실패",
        symptom:
          "CD 파이프라인에서 마이그레이션 적용 중 `chatbot_chatroom` 테이블의 `id` 컬럼을 `bigint`에서 `uuid`로 변경하면서 `cannot cast type bigint to uuid` 오류 발생.",
        errorMessage: `Applying chatbot.0001_initial... OK
Traceback (most recent call last):
  File "/home/***/AInfo-Backend/manage.py", line 22, in <module>
    main()
  File "/home/***/AInfo-Backend/manage.py", line 18, in main
    execute_from_command_line(sys.argv)
  File "/home/***/AInfo-Backend/venv/lib/python3.12/site-packages/django/core/management/__init__.py", line 442, in execute_from_command_line
    utility.execute()
  File "/home/***/AInfo-Backend/venv/lib/python3.12/site-packages/django/core/management/__init__.py", line 436, in execute
    self.fetch_command(subcommand).run_from_argv(self.argv)
  File "/home/***/AInfo-Backend/venv/lib/python3.12/site-packages/django/core/management/base.py", line 412, in run_from_argv
    self.execute(*args, **cmd_options)
  File "/home/***/AInfo-Backend/venv/lib/python3.12/site-packages/django/core/management/base.py", line 458, in execute
    output = self.handle(*args, **options)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/***/AInfo-Backend/venv/lib/python3.12/site-packages/django/core/management/base.py", line 106, in wrapper
    res = handle_func(*args, **kwargs)
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/***/AInfo-Backend/venv/lib/python3.12/site-packages/django/core/management/commands/migrate.py", line 356, in handle
    post_migrate_state = executor.migrate(
                         ^^^^^^^^^^^^^^^^^
  File "/home/***/AInfo-Backend/venv/lib/python3.12/site-packages/django/db/migrations/executor.py", line 135, in migrate
    state = self._migrate_all_forwards(
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/***/AInfo-Backend/venv/lib/python3.12/site-packages/django/db/migrations/executor.py", line 167, in _migrate_all_forwards
    state = self.apply_migration(
            ^^^^^^^^^^^^^^^^^^^^^
  File "/home/***/AInfo-Backend/venv/lib/python3.12/site-packages/django/db/migrations/executor.py", line 252, in apply_migration
    state = migration.apply(state, schema_editor)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/***/AInfo-Backend/venv/lib/python3.12/site-packages/django/db/migrations/migration.py", line 132, in apply
    operation.database_forwards(
  File "/home/***/AInfo-Backend/venv/lib/python3.12/site-packages/django/db/migrations/operations/fields.py", line 235, in database_forwards
    schema_editor.alter_field(from_model, from_field, to_field)
  File "/home/***/AInfo-Backend/venv/lib/python3.12/site-packages/django/db/backends/postgresql/schema.py", line 288, in _alter_field
    super()._alter_field(
  File "/home/***/AInfo-Backend/venv/lib/python3.12/site-packages/django/db/backends/base/schema.py", line 1056, in _alter_field
    self.execute(
  File "/home/***/AInfo-Backend/venv/lib/python3.12/site-packages/django/db/backends/postgresql/schema.py", line 48, in execute
    return super().execute(sql, None)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/***/AInfo-Backend/venv/lib/python3.12/site-packages/django/db/backends/base/schema.py", line 201, in execute
    cursor.execute(sql, params)
  File "/home/***/AInfo-Backend/venv/lib/python3.12/site-packages/django/db/backends/utils.py", line 67, in execute
    return self._execute_with_wrappers(
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/***/AInfo-Backend/venv/lib/python3.12/site-packages/django/db/backends/utils.py", line 80, in _execute_with_wrappers
    return executor(sql, params, many, context)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/***/AInfo-Backend/venv/lib/python3.12/site-packages/django/db/backends/utils.py", line 84, in _execute
    with self.db.wrap_database_errors:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/***/AInfo-Backend/venv/lib/python3.12/site-packages/django/db/utils.py", line 91, in __exit__
    raise dj_exc_value.with_traceback(traceback) from exc_value
  File "/home/***/AInfo-Backend/venv/lib/python3.12/site-packages/django/db/backends/utils.py", line 87, in _execute
    return self.cursor.execute(sql)
           ^^^^^^^^^^^^^^^^^^^^^^^^
django.db.utils.ProgrammingError: cannot cast type bigint to uuid
LINE 1: ...atbot_chatroom" ALTER COLUMN "id" TYPE uuid USING "id"::uuid
                                                                 ^
  Applying chatbot.0002_alter_chatroom_id...
2025/05/01 09:01:37 Process exited with status 1
Error: Process completed with exit code 1.`,
        cause:
          "• PostgreSQL에서 `bigint` 타입을 `uuid`로 직접 캐스팅 불가\n• `ALTER TABLE ... ALTER COLUMN ... TYPE uuid USING id::uuid` 자동 캐스팅 시도 시 실패\n• Django 마이그레이션이 자동으로 생성한 SQL이 PostgreSQL의 타입 변환 제약을 고려하지 못함",
        solution:
          "• 기존 마이그레이션 파일 전체 제거 (`migrations/` 폴더 내 `__init__.py` 제외 `.py` 삭제)\n• DB 내 해당 테이블 수동 삭제 (`DROP TABLE chatbot_chatroom;`)\n• 새롭게 마이그레이션 파일 생성 (`python manage.py makemigrations`)\n• 초기 상태에서 `migrate` 수행하여 `uuid`로 테이블 생성",
        afterCode: `# 1. 기존 마이그레이션 파일 제거 (백업 권장)
cd /path/to/your/project
rm -rf chatbot/migrations/*.py
# __init__.py는 유지
touch chatbot/migrations/__init__.py

# 2. DB 내 해당 테이블 수동 삭제
psql -U your_user -d your_database
DROP TABLE chatbot_chatroom CASCADE;
\\q

# 3. 새롭게 마이그레이션 파일 생성
python manage.py makemigrations

# 4. 초기 상태에서 migrate 수행
python manage.py migrate

# 결과: chatbot_chatroom 테이블이 uuid 타입의 id 필드로 생성됨`,
        result:
          "• 마이그레이션이 정상적으로 완료되어 `chatbot_chatroom` 테이블이 `uuid` 타입의 `id` 필드로 생성됨\n• DB 스키마 변경 시 `id` 필드 타입 변경은 초기화된 마이그레이션에서 수행하거나 별도 새 컬럼으로 `uuid` 필드 추가 후 점진적 이전하는 것을 원칙으로 확립\n• CD 환경에서 실 데이터가 없다면 DB 초기화 후 마이그레이션 적용 자동화 스크립트 작성\n• 운영 환경에서는 데이터 손실 방지를 위해 점진적 마이그레이션 전략(새 컬럼 추가 → 데이터 복사 → 기존 컬럼 삭제) 수립 필수",
      },
      {
        incidentNumber: "INC-017",
        category: "BE",
        discoveredDate: "2025.04.24",
        resolvedDate: "2025.04.24",
        assignees: ["박*지"],
        problem: "CrewAI Task 입력값이 전달되지 않는 경우",
        symptom:
          "`crew.kickoff(inputs={'user_input': '청바지 신청하고 싶어요'})` 형태로 입력값을 전달했음에도 불구하고, Agent가 입력을 인식하지 못하고 줄임말이 없다고 판단하거나 일반 예시를 출력함.",
        cause:
          "• `tasks.yaml` 파일의 `description` 또는 `expected_output` 필드에 `{user_input}` 변수 바인딩 포맷 누락\n• 전달된 입력이 LLM 프롬프트에 반영되지 않아 Agent가 맥락을 알 수 없음\n• CrewAI는 YAML 파일에 정의된 `{변수명}` 형식을 자동으로 바인딩하지만, 명시하지 않으면 사용되지 않음",
        solution:
          "• `description` 필드에 `{user_input}`을 포함하여 입력값을 프롬프트에 바인딩\n• 예시: `사용자 질문: '{user_input}' 이 질문에서 공공서비스 줄임말을 식별하고 정책명을 제안하세요.`\n• Task 정의 시 입력 변수를 명시적으로 포함하여 LLM이 맥락을 이해할 수 있도록 개선",
        beforeCode: `# tasks.yaml (잘못된 예시)
description: >
  사용자 질문에서 공공서비스 줄임말을 추론하세요.
  
# 문제: user_input 변수는 전달되지만 아무 곳에도 사용되지 않아 LLM이 맥락을 알 수 없음`,
        afterCode: `# tasks.yaml (올바른 예시)
description: >
  사용자 질문: "{user_input}"
  이 질문에서 공공서비스 줄임말을 식별하고 정책명을 제안하세요.

# 팁:
# - CrewAI에서 YAML에 정의된 문자열 내 {변수명}은 crew.kickoff(inputs={...})로 전달된 값을 자동으로 바인딩
# - tasks.yaml, agents.yaml, flows.yaml 모두 동일한 방식으로 작동`,
        result:
          "• Agent가 사용자 입력을 정확히 인식하고 적절한 응답 생성\n• CrewAI에서 YAML 문자열 내 `{변수명}`은 `crew.kickoff(inputs={...})`로 전달된 값을 자동 바인딩하는 메커니즘 이해\n• `tasks.yaml`, `agents.yaml`, `flows.yaml` 모두 동일한 방식으로 작동하므로 일관된 변수 바인딩 패턴 적용\n• YAML 파일 작성 시 입력 변수를 명시적으로 포함하여 프롬프트에 반영하는 것을 표준 프로세스로 확립",
      },
      {
        incidentNumber: "INC-016",
        category: "BE",
        discoveredDate: "2025.04.09",
        resolvedDate: "2025.04.09",
        assignees: ["양*영"],
        problem: "리트리버 유사도 정렬 실패",
        symptom:
          "`retriever.py`의 `VectorRetriever.search()` 함수에서 유사한 문서를 정렬하려 했지만, `metadata['score']`를 기준으로 정렬해도 의도한 유사도 정렬이 전혀 작동하지 않음.",
        cause:
          "• `similarity_search()`는 score를 반환하지 않음 (반환 타입: `List[Document]`)\n• `.metadata['score']`는 존재하지 않는 값으로 항상 0 또는 None 반환\n• LangChain 공식 문서에 따르면 `similarity_search()`는 Document 객체만 반환하며, score 정보는 포함하지 않음",
        solution:
          "• `similarity_search()` 대신 `similarity_search_with_score()` 사용\n• 결과 타입: `List[Tuple[Document, score]]`로 변경\n• 정렬 기준: 튜플의 3번째 요소(score) 기준 오름차순 정렬 (낮을수록 유사도 높음)\n• Chroma는 벡터 거리 기반 유사도를 반환하며, 거리가 낮을수록 유사도가 높음",
        beforeCode: `# 잘못된 코드
docs = collection.similarity_search(query, k=k)
for doc in docs:
    # 어쩌구저쩌구
    results.append((name, doc))

# 문제: similarity_search()는 score를 반환하지 않음
# 반환 타입: List[Document]
return sorted(results, key=lambda x: x[1].metadata.get("score", 0), reverse=True)

# 문제점:
# 1. similarity_search()는 score를 반환하지 않음
#    → 반환 타입: List[Document]
#    → 참조: https://python.langchain.com/docs/integrations/vectorstores/chroma
# 2. .metadata["score"]는 존재하지 않는 값 → 항상 0 또는 None`,
        afterCode: `# 수정된 코드
docs_with_scores = collection.similarity_search_with_score(query, k=k)
for doc, score in docs_with_scores:
    if self._metadata_match(doc.metadata, filters):
        results.append((name, doc, score))

# 핵심 변경사항:
# - similarity_search() → similarity_search_with_score()
# - 결과 타입: List[Tuple[Document, score]]
# - 정렬 기준: 튜플의 3번째 요소(score)
return sorted(results, key=lambda x: x[2])  # score 기준 오름차순 정렬

# LangChain Docs:
# similarity_search_with_score returns a list of (Document, score) tuples.
# The lower the score, the more relevant the document is.
# 🔗 https://python.langchain.com/docs/integrations/vectorstores/chroma

# Chroma 공식 문서:
# Chroma returns results based on vector distance.
# The lower the distance, the more similar the item.
# 🔗 https://docs.trychroma.com/docs/querying-collections`,
        result:
          "• 유사도 정렬이 정상적으로 작동하여 가장 관련성 높은 문서가 상위에 표시됨\n• LangChain 공식 문서 기준으로 `similarity_search_with_score()` 사용 및 unpacking 구조로 교체\n• Chroma는 벡터 거리 기반 유사도를 반환하며, 거리가 낮을수록 유사도가 높음을 명확히 이해\n• 함수 반환 구조에 대한 정확한 이해를 바탕으로 공식 문서 참조를 필수 프로세스로 확립",
      },
      {
        incidentNumber: "INC-015",
        category: "Dep",
        discoveredDate: "2025.03.28",
        resolvedDate: "2025.05.01",
        assignees: ["정*웅", "박*지", "유*열"],
        problem: "Github Actions CD 중 Celery 종료 시 비정상 종료되는 문제",
        symptom:
          "GitHub Actions CD workflow 실행 중 Celery 종료 단계에서 `sudo pkill -f celery` 명령 실행 시 워크플로 실패 처리. 로그에 `Process exited with status 143 from signal TERM` 및 `Error: Process completed with exit code 1` 메시지 출력.",
        errorMessage: `2025/03/30 17:27:18 Process exited with status 143 from signal TERM
Error: Process completed with exit code 1.`,
        cause:
          "• `pkill -f celery`가 'celery' 문자열 포함 모든 프로세스를 SIGTERM으로 종료\n• GitHub Actions SSH 접속 bash shell 내에서 celery 실행 중일 경우 해당 shell도 종료\n• SSH 연결 종료로 인해 GitHub Actions가 워크플로 실패로 판단\n• 현재 shell 프로세스 또는 상위 프로세스의 명령 줄에도 'celery'가 포함되어 있으면 해당 프로세스도 강제 종료됨",
        solution:
          "• Celery를 systemd 서비스로 등록하여 백그라운드에서 독립적으로 실행\n• `celery.service` (Worker) 및 `celery-beat.service` (Beat) 파일 생성\n• `shutdown_server.sh` 및 `restart_server.sh` 스크립트에서 `systemctl` 명령으로 Celery 제어\n• CD.yml 파일에서 shutdown 및 restart 스크립트 실행하도록 수정",
        beforeCode: `# GitHub Actions CD workflow에서 Celery 종료 시도
script: |
  cd /home/ubuntu/AInfo-Backend
  git pull origin main
  source venv/bin/activate
  pip install -r requirements.txt
  python manage.py migrate
  
  # 문제: pkill -f celery가 현재 shell까지 종료시킴
  sudo pkill -f celery
  
  # 결과: Process exited with status 143 from signal TERM
  # Error: Process completed with exit code 1`,
        afterCode: `# 1. celery.service (Worker)
# 경로: /etc/systemd/system/celery.service
[Unit]
Description=Celery Worker Service
After=network.target

[Service]
Type=simple
User=ubuntu
Group=ubuntu
WorkingDirectory=/home/ubuntu/AInfo-Backend
Environment="DJANGO_SETTINGS_MODULE=config.settings"
ExecStart=/home/ubuntu/AInfo-Backend/venv/bin/celery -A config worker --loglevel=info
Restart=always
RestartSec=10
StandardOutput=file:/var/log/celery/worker.log
StandardError=file:/var/log/celery/worker.err

[Install] WantedBy=multi-user.target

# 2. celery-beat.service (Beat)
# 경로: /etc/systemd/system/celery-beat.service
[Unit]
Description=Celery Beat Scheduler
After=network.target

[Service]
Type=simple
User=ubuntu
Group=ubuntu
WorkingDirectory=/home/ubuntu/AInfo-Backend
Environment="DJANGO_SETTINGS_MODULE=config.settings"
ExecStart=/home/ubuntu/AInfo-Backend/venv/bin/celery -A config beat --loglevel=info
Restart=always
RestartSec=10
StandardOutput=file:/var/log/celery/beat.log
StandardError=file:/var/log/celery/beat.err

[Install] WantedBy=multi-user.target

# 3. shutdown_server.sh
#!/bin/bash
set -e

LOG_DIR="/var/log/deploy_logs"
mkdir -p "$LOG_DIR"
sudo chmod 777 "$LOG_DIR"
LOG_FILE="$LOG_DIR/deploy_$(date '+%Y-%m-%d_%H-%M-%S').log"
exec > >(tee -a "$LOG_FILE") 2>&1

echo "Shutdown Docker-compose..."
sudo docker-compose down
sleep 2

echo "Shutdown Nginx..."
sudo systemctl stop nginx
sleep 2

echo "Shutdown Gunicorn & Daphne..."
sudo systemctl stop gunicorn
sleep 2
sudo systemctl stop daphne
sleep 2

echo "Shutdown Celery..."
sudo systemctl stop celery
sleep 2
sudo systemctl stop celery-beat
sleep 2

echo "Shutdown script done!"

# 4. restart_server.sh
#!/bin/bash
set -e

LOG_DIR="/var/log/deploy_logs"
mkdir -p "$LOG_DIR"
sudo chmod 777 "$LOG_DIR"
LOG_FILE="$LOG_DIR/deploy_$(date '+%Y-%m-%d_%H-%M-%S').log"
exec > >(tee -a "$LOG_FILE") 2>&1

echo "starting Docker-compose..."
sudo docker-compose up -d
sleep 2

echo "Testing Nginx configuration..."
sudo nginx -t

echo "Restarting Nginx..."
sudo systemctl restart nginx
sleep 2

echo "Reloading daemon and restarting Gunicorn & Daphne..."
sudo systemctl daemon-reload
sudo systemctl restart gunicorn
sleep 2
sudo systemctl restart daphne
sleep 2

echo "Restarting celery worker and beat..."
sudo systemctl restart celery
sleep 2
sudo systemctl restart celery-beat
sleep 2

echo "Deployment script done!"

# 5. CD.yml
name: Deploy to EC2 - AInfo Backend
on:
  push:
    branches:
      - main

permissions:
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to Server
        uses: appleboy/ssh-action@v1.2.2
        with:
          host: \${{ secrets.SERVER_HOST }}
          username: \${{ secrets.SERVER_USER }}
          key: \${{ secrets.SSH_PRIVATE_KEY }}
          command_timeout: 5m
          script: |
            set -ex
            cd /home/ubuntu/AInfo-Backend
            git pull origin main || { echo "Git pull failed"; exit 1; }
            source venv/bin/activate
            pip install -r requirements.txt
            python manage.py migrate
            
            echo "shutdown 스크립트 실행"
            sudo ./shutdown_server.sh
            sleep 2
            
            echo "restart 스크립트 실행"
            sudo ./restart_server.sh || {
              echo "Restart server script failed with error code $?";
              exit 1;
            }
            sleep 2`,
        result:
          "• systemd 서비스 등록으로 Celery가 백그라운드에서 독립적으로 실행되어 GitHub Actions CD workflow가 안정적으로 완료됨\n• `exit code 143`은 SIGTERM(15) 신호로 프로세스가 종료되었음을 의미하며, 이를 통해 문제 원인 파악\n• `appleboy/ssh-action`의 script 블록은 단일 shell 환경으로 동작하므로 무분별한 `pkill -f` 사용을 지양하고 systemctl 명령 사용\n• systemd 서비스 등록으로 자동 재시작 기능 확보 및 로그 관리 개선 (`/var/log/celery/`)",
      },
      {
        incidentNumber: "INC-014",
        category: "BE",
        discoveredDate: "2025.03.24",
        resolvedDate: "2025.03.25",
        assignees: ["정*웅"],
        problem: "사용자의 입력 분류가 정확하지 않고, 반복했을 때 재현성이 떨어짐",
        symptom:
          "사용자 입력을 전반적인 정책 소개 요구와 특정 정책 상세 내용 요구로 분류하는 작업에서 LLM이 정확히 분류하지 못하고, 동일 입력에도 분류 결과가 불일치. 예: '나 집을 사고 싶은데, 30대 1인 남성이 받을 수 있는 주거지원 정책이 있어?' → `detail_policy`로 분류되지만, 문맥상 정책 리스트 제공이 적절한 상황.",
        cause:
          "• 프롬프트 작성 오류: `detail_policy`를 `policy_detail`로 잘못 작성\n• 프롬프트 수정 후에도 LLM이 사용자 입력의 상세 정도만으로 `detail_policy`로 분류하는 경향\n• 문맥 이해 부족으로 정책 리스트 요구와 특정 정책 상세 요구 구분 실패",
        solution:
          "• 프롬프트 오류 수정 및 카테고리 정의 명확화\n• 하이브리드 분류 방식 도입: LLM 1차 분류 후 키워드 기반 가중치 점수로 재조정\n• 키워드 맵(`KEYWORD_CATEGORY_MAP`)과 패턴 매칭(`POLICY_PATTERNS`, `DETAIL_PATTERNS`)을 통한 분류 정확도 향상",
        beforeCode: `"""
**Classify** the user's input into one of the following categories:
    - "off_topic": General casual conversation or input unrelated to any policy, support, or government services.
    - "gov_policy": Asking about general government or local government policies, programs, or support types.
    - "policy_detail": Asking about specific conditions, eligibility, application process, or requirements for a particular policy or support.  // 잘못된 카테고리명
    - "support_related": Indirect or figurative expressions that imply a desire or need for financial aid, housing, employment, or social support.
    - "trend_ask": Asking about recent news, policy changes, or trends relevant to youth, employment, housing, etc.
    - "report_request": Explicitly requesting a written summary, report, or analysis based on search results, chatbot conversation, or retrieved policy data.
"""`,
        afterCode: `from enum import Enum

class Category(Enum):
    OFF_TOPIC = "off_topic"
    GOV_POLICY = "gov_policy"
    DETAIL_POLICY = "detail_policy"
    REPORT_REQUEST = "report_request"
    SUPPORT_RELATED = "support_related"

KEYWORD_CATEGORY_MAP = {
    Category.GOV_POLICY.value: [
        "정책", "지원", "프로그램", "혜택", "주거지원","청년지원",
        "복지", "정부지원", "대상자", "제도", "정부정책", "복지정책",
        "지원정책", "지원제도", "청년정책", "창업지원", "금융지원", "취업지원",
        "일자리", "공공지원", "청년주택", "임대주택", "국가정책", "지원방안",
        "제도안내"],
    Category.DETAIL_POLICY.value: [
        "대상", "선정기준", "신청방법", "신청사이트", "신청기한", "조건",
        "자격", "신청", "기간", "필요서류", "서류", "싱세", "자세히",
        "디테일", "절차", "증명서", "신청양식", "자세한내용", "서류제출",
        "제출서류", "신청조건", "신청절차", "신청링크", "접수기간", "자격요건",
        "자격조건", "신청가능일", "진행절차", "양식", "신청비용", "인터넷신청",
        "방문신청", "신청주소", "증빙자료", "첨부파일"],
}

POLICY_PATTERNS = [
    "있어?", "있나요?", "알려줘", "뭐가 있어", "어떤 것이 있", "있는지",
    "받을 수 있", "지원받을 수", "혜택 받", "무슨 정책", "정책 알려줘",
    "지원해주는 게", "무슨 혜택", "혜택 종류", "받을 수 있는 정책", "관련된 정책",
    "지원 가능한 게", "추천해줘",
]

DETAIL_PATTERNS = [
    "어떻게 신청", "어디서 신청", "신청 마감", "제출해야 하는", "필수 서류",
    "구체적", "상세 내용", "자세히", "어디서 확인", "언제까지 신청", "어떤 서류",
    "자격 요건", "자세한 정보", "신청하는 법", "신청 절차", "신청 주소", "신청 링크",
    "필요한 서류"]

KEYWORD_SCORE = 1
PATTERN_SCORE = 1.5

def keyword_base_classification(user_message: str) -> str | None:
    """키워드 기반 분류 함수"""
    scores = {Category.GOV_POLICY.value: 0, Category.DETAIL_POLICY.value: 0}

    # 키워드 매칭
    for category, keywords in KEYWORD_CATEGORY_MAP.items():
        for keyword in keywords:
            if keyword in user_message:
                scores[category] += KEYWORD_SCORE

    # 패턴 매칭
    for pattern in POLICY_PATTERNS:
        if pattern in user_message:
            scores[Category.GOV_POLICY.value] += PATTERN_SCORE

    for pattern in DETAIL_PATTERNS:
        if pattern in user_message:
            scores[Category.DETAIL_POLICY.value] += PATTERN_SCORE

    max_score = max(scores.values())

    # 점수가 모두 0이거나 동점이면 None 반환 (LLM 분류 결과 사용)
    if max_score == 0 or len(set(scores.values())) == 1:
        return None

    # 최고 점수를 받은 카테고리 반환
    for category, score in scores.items():
        if score == max_score:
            return category`,
        result:
          "• LLM 단독 분류의 한계를 키워드 기반 규칙으로 보완하여 분류 정확도 및 재현성 향상\n• 정책 리스트 요구(`gov_policy`)와 특정 정책 상세 요구(`detail_policy`) 구분 명확화\n• 키워드 맵과 패턴 리스트를 지속적으로 업데이트하여 분류 성능 개선\n• 하이브리드 방식으로 LLM의 유연성과 규칙 기반의 일관성을 동시에 확보",
      },
      {
        incidentNumber: "INC-013",
        category: "BE",
        discoveredDate: "2025.03.20",
        resolvedDate: "2025.03.20",
        assignees: ["박*지"],
        problem: "Tool이 설정되어 있음에도 Agent가 사용하지 않는 문제",
        symptom:
          "Agent가 RAG 검색 Tool 존재에도 불구하고 검색 미실행 및 직접 답변 생성. 콘솔 출력에 Tool 호출 로그가 없고, 답변이 매우 추상적이거나 LLM의 사전 지식 기반으로 생성됨. 검색 결과가 반드시 필요한 질문('서울시 청년 지원 정책 알려줘')에도 불구하고 LLM이 자체적으로 정보를 만들어내서 대답.",
        cause:
          "• `crewai.Task` 객체에서 `used_tools=True` 미명시 시 Tool 미사용\n• CrewAI 내부적으로 툴 사용 여부를 자동 판단하거나 프롬프트에 따라 무시\n• Tool이 등록만 되어 있고 실행은 안 되는 문제 발생",
        solution:
          "• Task 정의 시 `used_tools=True` 명시적 설정으로 Agent의 Tool 사용 강제\n• 이를 통해 Agent는 LLM 기반 판단이 아닌, 등록된 Tool을 통해 실제 RAG 검색을 수행하게 됨\n• 검색 결과가 응답에 자연스럽게 반영되며, '검색된 문서가 없습니다'와 같은 문장도 정상 출력됨",
        beforeCode: `Task(
    ...,
    tools=[RagSearchTool()],  // tool은 있지만 used_tools가 없음
)`,
        afterCode: `Task(
    ...,
    used_tools=True,
    tools=[RagSearchTool()],
    ...
)`,
        result:
          "• 모든 Tool 기반 Task 정의 시 `used_tools=True`를 기본값으로 포함\n• 테스트 단계에서 Agent의 Tool 실제 사용 여부 확인을 위한 로그/결과 검증 필요\n• 답변이 추상적일 경우 툴 호출 여부 점검을 위한 디버그 툴/로그 작성 고려\n• Tool 기반 Task의 prompt 또는 system_prompt에 '툴을 사용하라'는 명시적 지침 포함",
      },
      {
        incidentNumber: "INC-012",
        category: "BE",
        discoveredDate: "2025.03.20",
        resolvedDate: "2025.03.20",
        assignees: ["박*지"],
        problem: "OpenAI의 분당 호출 제한",
        symptom:
          "`RateLimitError` 발생. 에러 발생 위치는 일정하지 않고, 후속 Task (`CompareCrew`, `ReportCrew`, `StrategyCrew`)에서 주로 발생.",
        errorMessage: `openai.RateLimitError: You exceeded your current quota, please check your plan and billing details.`,
        cause:
          "• 모든 Agent 호출 시 `max_rpm`(분당 요청 제한) 미설정\n• 4~5개의 Agent가 동일 시간 내 거의 동시에 실행되어 OpenAI 분당 호출 제한 초과\n• 각 Agent는 별도의 제한 없이 GPT 모델을 호출하며, 결과적으로 OpenAI의 분당 호출 제한을 초과하면서 오류 발생",
        solution:
          "• 모든 Agent에 `max_rpm=3` 명시적 설정으로 요청 속도 제한\n• `litellm`에서 내부적으로 호출 간 지연 삽입하여 초과 방지\n• 예외 핸들링 로직 없이도 안정적인 실행 가능",
        beforeCode: `llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.1, max_tokens=1024)`,
        afterCode: `llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.1, max_tokens=1024, max_rpm=3)

# 해당 설정은 각 Agent 정의부 (*_agent.py)에 일괄 반영`,
        result:
          "• LLM 호출 시 기본 파라미터로 `max_rpm` 포함하여 템플릿화\n• Agent 설정 일관성을 위해 공통 옵션을 wrapper 또는 config로 관리\n• OpenAI Usage Dashboard 또는 자체 로그로 분당 요청 수 모니터링\n• 대규모 Agent 구성 시 `Flow` 또는 `Crew` 레벨에서 concurrency 조정 고려",
      },
      {
        incidentNumber: "INC-011",
        category: "BE",
        discoveredDate: "2025.03.19",
        resolvedDate: "2025.03.19",
        assignees: ["정*웅", "채*경"],
        problem: "ChatRoom을 삭제하면 관련된 ChatLog는 삭제되지만 LangChain 메모리는 남는 문제",
        symptom:
          "사용자가 채팅방 삭제 후 새 채팅방에서 대화 시 과거 대화 내용이 응답에 영향을 줌. 특히 같은 유저가 여러 채팅방을 오가며 대화하는 경우, 문맥이 섞이거나 이전의 질문-답변 흐름이 유지되어 챗봇이 엉뚱하게 응답함.",
        cause:
          "• `ChatRoom` 모델의 `on_delete=models.CASCADE`로 DB의 `ChatLog`는 자동 삭제되지만 `LangChain` 메모리는 별도 관리\n• 메모리는 사용자 ID만 기준으로 관리되며 채팅방 구분 없음\n• 채팅방 삭제 시 DB 데이터는 삭제되지만 `Redis` 캐시에 저장된 대화 히스토리는 유지됨",
        solution:
          "• `WebSocket` 연결 종료 시점(`disconnect()`)에서 `ChatHistoryManager.clear_history()` 실행\n• HTTP DELETE 요청으로 채팅방 삭제 시 `perform_destroy()`에서 메모리도 함께 삭제\n• 채팅방 삭제와 메모리 삭제를 묶어서 처리하도록 view 로직 개선",
        afterCode: `# WebSocket 연결 종료 시점
async def disconnect(self, close_code):
    if self.is_authenticated:
        chat_history_manager = ChatHistoryManager(self.user_id, model=None)
        chat_history_manager.clear_history()
    await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

# HTTP DELETE 요청으로 채팅방 삭제 시
def perform_destroy(self, instance):
    ChatHistoryManager(self.request.user.id, None).clear_history()
    instance.delete()`,
        result:
          "• 채팅방 삭제 시 DB 데이터와 `LangChain` 메모리가 동시에 삭제되어 데이터 일관성 확보\n• 사용자가 새 채팅방에서 대화 시 과거 대화 내용이 응답에 영향을 주지 않음\n• 향후 `ChatHistoryManager`가 `chatroom_id`도 고려하여 채팅방 단위 문맥 관리 구조 개편 필요\n• 메모리 관리 로직을 signal이나 manager 메서드로 추상화하여 재사용성 향상 고려",
      },
      {
        incidentNumber: "INC-010",
        category: "DB",
        discoveredDate: "2025.03.19",
        resolvedDate: "2025.03.19",
        assignees: ["양*영"],
        problem: "PDF 정책 추출 4개 실패",
        symptom:
          "PDF 목차에서 4개 정책의 페이지 번호가 잘못 추출되어 저장 실패. '초격차 스타트업 1000+ 프로젝트'는 실제 21페이지인데 1000페이지로, '컴업(COMEUP) 2025'는 실제 86페이지인데 2025페이지로 추출됨.",
        cause:
          "• 정규식 `(\\d+)` 패턴이 임의 길이 숫자를 페이지 번호로 추출하여 정책명 내 숫자(1000, 2025)를 페이지 번호로 오인\n• 텍스트 구조 변형(`' '.join`, `re.sub(r'\\s+', ' ')`)으로 정책명과 페이지 번호 구분 불명확\n• 페이지 번호 유효성 검사 부재로 PDF 총 페이지(483) 초과 값도 그대로 사용",
        solution:
          "• 페이지 번호 자릿수를 1~3자리로 제한: `(\\d{1,3})(?:\\D|$)`\n• 텍스트 구조 보존: `'\\n'.join`으로 줄바꿈 유지하여 원래 서식 유지\n• 페이지 번호 유효성 검사: `if page_num > 483: continue`로 PDF 총 페이지 수 초과 값 필터링\n• 목차에 정책 앞 숫자 태그를 모두 더해서 총 정책이 436개인 것을 인지하고 432개가 출력되어 건너뛰어지는 것을 확인하여 4개의 문제 정책 발견",
        beforeCode: `def parse_toc(pages_text):
    toc_text = " ".join(pages_text[2:15])  // 2~15페이지 목차
    toc_text_clean = re.sub(r'\\s+', ' ', toc_text)

    // 문제: 페이지 번호 자릿수 제한 없음
    pattern = re.compile(r'(\\d{3})\\s*▶▶\\s*(.+?)\\s+(\\d+)')
    toc_items = pattern.findall(toc_text_clean)
    
    // 문제: 페이지 번호 유효성 검사 없음
    return toc_items`,
        afterCode: `def parse_toc_improved(pages_text):
    """
    목차 페이지에서 정책 정보(코드, 제목, 페이지번호) 추출
    """
    // 줄바꿈 유지하여 텍스트 구조 보존
    toc_text = "\\n".join(pages_text[1:15])

    // 페이지 번호를 1~3자리로 제한하고, 이후 비숫자 문자나 문자열 끝이 오도록 지정
    pattern = re.compile(r"(\\d{3})\\s*\\u25b6\\u25b6\\s*(.+?)\\s+(\\d{1,3})(?:\\D|$)")
    toc_items = pattern.findall(toc_text)

    policies = []
    for match in toc_items:
        code, title, page = match
        page_num = int(page)
        
        // 페이지 번호 유효성 검사: PDF 총 페이지 수(483) 초과 값 필터링
        if page_num > 483:
            continue
            
        policies.append({
            "code": code,
            "title": title.strip(),
            "page_num": page_num
        })

    return policies`,
        result:
          "• 정규식 패턴 개선으로 정책명 내 숫자와 실제 페이지 번호 구분 명확화 (432개 → 436개 정책 정상 추출)\n• 페이지 번호 유효성 검사로 비정상 값 필터링하여 데이터 정확도 향상\n• 비정형 데이터 처리 시 실행 과정에서 발견된 이슈에 대해 유연하게 대응하는 접근 방식 확립\n• 데이터 수집 시 예상 건수와 실제 건수를 비교하여 누락 데이터를 조기에 발견하는 검증 프로세스 도입",
      },
      {
        incidentNumber: "INC-009",
        category: "DB",
        discoveredDate: "2025.03.19",
        resolvedDate: "2025.03.19",
        assignees: ["양*영"],
        problem: "PDF 정규식 패턴 매칭 실패",
        symptom:
          "PDF 파일의 목차 페이지에서 항목 코드, 제목, 페이지 번호를 추출하는 작업 중 텍스트 형식 차이로 인한 정규식 패턴 매칭 문제 발생.",
        cause:
          "• PDF 뷰어에서 드래그 복사 시 텍스트 구조가 실제 추출 결과와 상이\n• 줄바꿈이 공백으로 대체되고 '▶' 기호가 불규칙하게 삽입됨\n• 공백 문자 처리가 일관되지 않음",
        solution:
          "• `PyMuPDF`(`fitz`) 라이브러리를 사용하여 PDF 텍스트를 프로그래밍 방식으로 직접 추출\n• 추출된 텍스트 형식에 맞게 정규식 패턴 개선: `(\\d{3})\\s*▶▶\\s*(.+?)\\s+(\\d{1,3})(?:\\D|$)`\n• 페이지 번호 이후 비숫자 문자나 문자열 끝을 명시하여 매칭 정확도 향상",
        beforeCode: `// 원래 정규식 패턴 (부정확)
pattern = re.compile(r'(\\d{3})\\s*▶▶\\s*(.+?)\\s+(\\d+)')

// 문제점:
// - 페이지 번호(\\d+) 이후 패턴을 명확히 지정하지 않아 매칭이 부정확
// - 공백 처리가 불일치하는 상황에 대응하지 못함
// - PDF 뷰어에서 복사한 텍스트와 실제 추출 텍스트의 차이를 고려하지 않음`,
        afterCode: `import fitz  // PyMuPDF

def extract_toc_text(pdf_path, page_number):
    """목차 페이지의 텍스트를 추출하는 함수"""
    doc = fitz.open(pdf_path)
    page = doc[page_number]  // 목차 페이지 (0-based 인덱스)
    text = page.get_text()
    doc.close()
    return text

// 개선된 정규식 패턴
pattern = re.compile(r'(\\d{3})\\s*▶▶\\s*(.+?)\\s+(\\d{1,3})(?:\\D|$)')

// 개선 포인트:
// - (\\d{1,3}): 페이지 번호가 1~3자리 숫자임을 명시
// - (?:\\D|$): 페이지 번호 이후에 비숫자 문자나 문자열의 끝이 오도록 지정
// - PyMuPDF로 추출한 텍스트는 일관된 형식을 유지하여 정확한 매칭 가능

// 사용 예시
pdf_path = "your_document.pdf"
toc_page_number = 1  // 2페이지 (0-based 인덱스)
toc_text = extract_toc_text(pdf_path, toc_page_number)

// 정규식으로 항목 추출
matches = pattern.findall(toc_text)
for code, title, page in matches:
    print(f"{code} - {title.strip()} (페이지 {page})")`,
        result:
          "• `PyMuPDF`로 직접 추출한 텍스트를 기준으로 분석 수행하여 일관된 형식 확보\n• 정규식 패턴에서 페이지 번호 이후 비숫자 문자나 문자열 끝을 명시하여 매칭 정확도 향상\n• PDF 텍스트 추출 시 프로그래밍 방식을 사용하여 수동 복사/붙여넣기로 인한 오류 방지\n• 향후 PDF 데이터 처리 시 `PyMuPDF`를 표준 라이브러리로 사용하도록 가이드라인 수립",
      },
      {
        incidentNumber: "INC-008",
        category: "DB",
        discoveredDate: "2025.03.19",
        resolvedDate: "2025.03.19",
        assignees: ["양*영"],
        problem: "고용24 API 경로 + 파싱 문제",
        symptom:
          "고용24 API 응답 XML에 `<total>50</total>` 존재하나 로더 코드에서 `총 프로그램 수: 0`으로 인식되어 수집 건수가 0건으로 출력됨.",
        cause:
          "• XML 트리 파싱 로직 오류로 인한 데이터 파싱 실패\n• `root.find('.//total')` 경로 오류로 루트 바로 하위에 있는 `<total>` 태그를 제대로 탐색하지 못함\n• 잘못된 항목 태그(`item`) 사용으로 프로그램 목록 파싱 실패 (실제 응답에는 `<empPgmSchdInvite>` 태그 사용)",
        solution:
          "• 루트 직속 `<total>` 태그 탐색 경로 수정: `root.find('./total')`\n• 프로그램 항목 태그를 실제 응답 구조에 맞게 수정: `root.findall('.//empPgmSchdInvite')`\n• API 응답을 직접 확인하여 실제 XML 구조 파악",
        beforeCode: `import xml.etree.ElementTree as ET

// 잘못된 XML 파싱 코드
// 문제 1: total 파싱 경로 오류
total_element = root.find(".//total") or root.find(".//totalCount")
// .//total: 루트 이하 모든 트리에서 total을 찾으려 했지만,
// 잘못된 트리 구조로 인해 값 미탐색

// 문제 2: 프로그램 항목 태그 불일치
items = root.findall(".//item")
// API 명세와 다르게 실제 XML 응답에 item 태그가 존재하지 않음

// 결과: 총 프로그램 수: 0, 수집 건수: 0건`,
        afterCode: `// 수정된 XML 파싱 코드
import xml.etree.ElementTree as ET

// 해결 1: 루트 기준으로 정확히 <total>을 찾아 정상적으로 프로그램 수를 가져옴
total_element = root.find("./total")
// 루트 기준으로 정확히 <total>을 찾아 정상적으로 프로그램 수를 가져옴

// 해결 2: 실제 응답 구조에 맞는 태그 사용
items = root.findall(".//empPgmSchdInvite")
// 실제 응답에서 반복되는 프로그램 항목 태그 <empPgmSchdInvite>를 기준으로 파싱

// 결과: 총 프로그램 수: 50, 수집 건수: 50건`,
        result:
          "• XML 파싱 경로를 수정하여 고용24 API 응답 데이터를 정상적으로 수집 (0건 → 50건)\n• XML 파싱 시 `.//` (전체 서브 트리 탐색) vs `./` (루트 직속 탐색) 경로 차이를 명확히 인지\n• API 명세와 실제 XML 응답 구조가 다를 수 있으므로 API 응답을 직접 확인하는 것을 필수 프로세스로 확립\n• XML 태그명은 실제 응답 구조 기반으로 작성하도록 데이터 수집 가이드라인 수립",
      },
      {
        incidentNumber: "INC-007",
        category: "BE",
        discoveredDate: "2025.03.18",
        resolvedDate: "2025.03.18",
        assignees: ["채*경"],
        problem: "데이터베이스 연결 문제 (Async-DB sync)",
        symptom:
          "`WebSocket` 연결 중 특정 채팅방 접근 시 서버에서 예외 발생하며 `WebSocket` 연결이 비정상적으로 종료됨. 서버 로그에 `DoesNotExist` 예외나 내부 서버 오류(500) 출력.",
        cause:
          "• `@database_sync_to_async`로 래핑된 메서드 내부에서 `.get()` 사용 시 객체가 존재하지 않으면 `DoesNotExist` 예외 발생\n• 이 예외를 `try/except`로 처리하지 않으면 비동기 컨텍스트에서 예외가 전파되어 consumer 전체가 crash됨\n• Django의 일반 view에서는 잘 처리되는 예외지만, async 환경에서는 명시적으로 처리 필요",
        solution:
          "• 모든 `@database_sync_to_async` 함수 내부에서 `.get()` 사용 시 `try/except`로 `DoesNotExist`를 명시적으로 처리\n• `connect()`, `receive()` 등 핵심 로직에서 반환값이 `None`일 경우 명확하게 `await self.close()` 등의 처리 추가\n• 존재하지 않는 데이터 접근 시 로그를 남기고 안전하게 종료하도록 개선",
        afterCode: `@database_sync_to_async
def get_chatroom(self, room_id):
    try:
        return ChatRoom.objects.get(id=room_id, user_id=self.user_id)
    except ChatRoom.DoesNotExist:
        return None`,
        result:
          "• `@database_sync_to_async` 함수에서 `DoesNotExist` 예외를 명시적으로 처리하여 `WebSocket` 연결이 안정적으로 유지됨\n• 비동기 컨텍스트에서 ORM 접근 시 `.get()` 메서드는 반드시 `try/except`로 예외 처리하는 것을 코딩 컨벤션으로 확립\n• `@database_sync_to_async` 함수 테스트 시 존재하지 않는 데이터 접근 케이스를 포함하도록 테스트 가이드라인 수립\n• consumer 주요 메서드에서 `None` 체크 및 로그 기록 후 안전하게 종료하는 공통 처리 로직 도입",
      },
      {
        incidentNumber: "INC-006",
        category: "BE",
        discoveredDate: "2025.03.18",
        resolvedDate: "2025.03.19",
        assignees: ["유*열"],
        problem: "celery 사용시 브로커 연결 문제",
        symptom:
          "`Redis` 및 `Celery` 워커 실행 후 비동기 처리 요청 시 브로커 서버 접근 불가 에러 발생 (`WinError 10061`).",
        errorMessage: `kombu.exceptions.OperationalError: [WinError 10061] 대상 컴퓨터에서 연결을 거부했으므로 연결하지 못했습니다

File "C:\\Users\\82102\\Desktop\\AInfo-Backend\\venv\\Lib\\site-packages\\kombu\\messaging.py", line 224, in _get_channel
    channel = self._channel = channel()
File "C:\\Users\\82102\\Desktop\\AInfo-Backend\\venv\\Lib\\site-packages\\kombu\\utils\\functional.py", line 34, in __call__
    value = self.__value__ = self.__contract__()
File "C:\\Users\\82102\\Desktop\\AInfo-Backend\\venv\\Lib\\site-packages\\kombu\\messaging.py", line 240, in <lambda>
    channel = ChannelPromise(lambda: connection.default_channel)
File "C:\\Users\\82102\\Desktop\\AInfo-Backend\\venv\\Lib\\site-packages\\kombu\\connection.py", line 957, in default_channel
    self._ensure_connection(**conn_opts)
File "C:\\Users\\82102\\Desktop\\AInfo-Backend\\venv\\Lib\\site-packages\\kombu\\connection.py", line 458, in _ensure_connection
    with ctx():
File "C:\\Users\\82102\\scoop\\apps\\python\\current\\Lib\\contextlib.py", line 158, in __exit__
    self.gen.throw(value)
File "C:\\Users\\82102\\Desktop\\AInfo-Backend\\venv\\Lib\\site-packages\\kombu\\connection.py", line 476, in _reraise_as_library_errors
    raise ConnectionError(str(exc)) from exc
kombu.exceptions.OperationalError: [WinError 10061] 대상 컴퓨터에서 연결을 거부했으므로 연결하지 못했습니다`,
        cause:
          "• `Celery`의 기본 멀티프로세싱 방식이 `Windows` 환경에서 호환성 문제 발생\n• `Windows`의 프로세스 생성 방식(`spawn`)이 `Unix`/`Linux`의 방식(`fork`)과 달라 자식 프로세스 생성 시 브로커 연결 실패\n• 멀티프로세스 환경에서 각 워커 프로세스가 `Redis` 브로커에 독립적으로 연결을 시도하는 과정에서 연결 거부 발생",
        solution:
          "• `--pool=solo` 옵션을 사용하여 단일 프로세스로 작업을 강제하여 `Windows` 환경의 멀티프로세싱 문제 회피\n• 명령어: `celery -A config worker --loglevel=info --pool=solo`\n• 로컬 개발 환경(`Windows`)에서는 `--pool=solo` 옵션 사용\n• 배포 환경(`Linux`)에서는 기본 멀티프로세싱 방식으로 정상 작동 예상",
        beforeCode: `// Windows 환경에서 오류 발생
celery -A config worker --loglevel=info

// 실행 결과
// kombu.exceptions.OperationalError: [WinError 10061] 
// 대상 컴퓨터에서 연결을 거부했으므로 연결하지 못했습니다`,
        afterCode: `// Windows 환경에서 단일 프로세스로 실행 (정상 작동)
celery -A config worker --loglevel=info --pool=solo

// 실행 결과
// celery@DESKTOP-IHH9BD7 v5.4.0 (opalescent)
// Windows-10-10.0.19045-SP0 2025-03-18 21:43:24
// [config]
// .> app:           config:0x21b2c40ff50
// .> transport:     redis://127.0.0.1:6379/0
// .> results:       disabled://
// .> concurrency:   4 (solo)
// [tasks]
//   . accounts.tasks.send_verify_email
//   . config.celery.debug_task
// [2025-03-18 21:43:24,241: INFO/MainProcess] Connected to redis://127.0.0.1:6379/0

// Linux 환경에서는 기본 멀티프로세싱 사용 (정상 작동)
celery -A config worker --loglevel=info`,
        result:
          "• `--pool=solo` 옵션을 사용하여 `Windows` 환경에서 `Celery` 워커가 정상적으로 실행되고 `Redis` 브로커에 안정적으로 연결됨\n• OS 환경에 따른 멀티프로세스 처리 방식 차이를 인지하고, `Windows` 개발 환경에서는 `--pool=solo` 옵션 사용을 표준화\n• OS 관련 이슈 발생 시 운영체제별 호환성 문제 가능성을 우선적으로 고려하는 디버깅 프로세스 확립\n• 배포 환경(`Linux`)에서는 기본 멀티프로세싱 방식으로 정상 작동하여 성능 저하 없이 운영 가능",
      },
      {
        incidentNumber: "INC-005",
        category: "BE",
        discoveredDate: "2025.03.18",
        resolvedDate: "2025.03.19",
        assignees: ["유*열"],
        problem: "메일발송 요청시 처리시간이 너무 김",
        symptom: "회원가입 시 이메일 본인인증 기능 구현 후 요청 처리 시간이 과도하게 지연됨 (약 4.7초).",
        cause:
          "• `SMTP` 서버 통신 시 네트워크 대기 시간 및 서버 응답 지연 발생\n• 메일 전송 대기 큐에서 순차 처리로 인한 전송 속도 지연\n• 복잡한 `HTML` 템플릿 또는 첨부파일 처리 시 시간 지연 발생",
        solution:
          "• `Celery`를 도입하여 메일 발송 작업을 비동기로 처리\n• 백그라운드 워커가 메일 발송 작업을 처리하여 사용자 요청은 즉시 응답하도록 개선\n• 메일 발송 작업을 `accounts.tasks.send_verify_email` 태스크로 분리하여 비동기 실행",
        afterCode: `from celery import shared_task
from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode

from .tokens import token_for_verify_mail

User = get_user_model()


@shared_task
def send_verify_email(user_id, email, domain):
    """
    Description: 메일을 보내는 함수

    - @shared_task 데코레이터를 통해 Celery 를 통한 비동기 처리
    - config/celery.py 에 app.autodiscover_tasks() 설정을 해둬서 다른앱에있는 비동기작업을 자동으로 찾아서 쓰게함
    """
    user = User.objects.get(id=user_id)

    // 이메일 인증을 위한 토큰 생성
    token = token_for_verify_mail.make_token(user)
    uid = urlsafe_base64_encode(force_bytes(user.pk))

    // 인증 URL 생성
    mail_subject = "이메일 인증을 완료해주세요."
    message = render_to_string(
        "account/activate_email.html",
        {
            "user": user,
            "domain": domain,
            "uid": uid,
            "token": token,
        },
    )

    send_mail(mail_subject, message, "ainfo.ai.kr@gmail.com", [email])


@shared_task
def send_reset_pw_email(user_id, email, domain):
    user = User.objects.get(id=user_id)

    // 이메일 인증을 위한 토큰 생성
    token = token_for_verify_mail.make_token(user)
    uid = urlsafe_base64_encode(force_bytes(user.pk))

    // 인증 URL 생성
    mail_subject = "이메일 인증을 완료해주세요."
    message = render_to_string(
        "account/password_reset_email.html",
        {
            "user": user,
            "domain": domain,
            "uid": uid,
            "token": token,
        },
    )

    send_mail(mail_subject, message, "ainfo.ai.kr@gmail.com", [email])`,
        result:
          "• 비동기 처리를 통해 사용자 요청 응답 시간이 4.7초에서 685ms로 단축됨 (약 85% 개선)\n• 백그라운드 워커가 메일 발송 작업을 처리하여 사용자 경험 개선\n• `Celery` 워커 설정 최적화(`--concurrency` 옵션)를 통한 병렬 처리 성능 향상 가능\n• 향후 로드밸런싱을 통해 여러 서버에 워커를 분산 배치하여 작업 처리 속도 추가 향상 가능",
      },
      {
        incidentNumber: "INC-004",
        category: "Dep",
        discoveredDate: "2025.03.12",
        resolvedDate: "2025.03.12",
        assignees: ["정*웅", "박*지", "유*열", "양*영", "채*경"],
        problem: "우분투 서버에서 dgunicorn 서버 서비스 설정 후 서비스 실행이 안되는 문제",
        symptom:
          "`daphne`, `gunicorn` 서버의 서비스 설정 후 실행했는데, `status`로 확인하면 정상적으로 실행되지 않았음.",
        errorMessage: `sudo systemctl start gunicorn && sudo systemctl start daphne

daphne.service - Daphne ASGI Server for Django Channels
     Loaded: loaded (/etc/systemd/system/daphne.service; disabled; vendor preset: enabled)
     Active: failed (Result: exit-code) since Wed 2025-03-12 05:56:29 UTC; 2min 17s ago
    Process: 7647 ExecStart=/home/ubuntu/AInfo-Backend/venv/bin/daphne -b 127.0.0.1 -p 9000 config.asgi:application (code=exited, status=1/FAILURE)
   Main PID: 7647 (code=exited, status=1/FAILURE)
        CPU: 593ms

Mar 12 05:56:28 ip-172-31-38-254 systemd[1]: daphne.service: Failed with result 'exit-code'.
Mar 12 05:56:29 ip-172-31-38-254 systemd[1]: daphne.service: Scheduled restart job, restart counter is at 5.
Mar 12 05:56:29 ip-172-31-38-254 systemd[1]: Stopped Daphne ASGI Server for Django Channels.
Mar 12 05:56:29 ip-172-31-38-254 systemd[1]: daphne.service: Start request repeated too quickly.
Mar 12 05:56:29 ip-172-31-38-254 systemd[1]: daphne.service: Failed with result 'exit-code'.
Mar 12 05:56:29 ip-172-31-38-254 systemd[1]: Failed to start Daphne ASGI Server for Django Channels.`,
        cause:
          "• 우분투의 `systemd`는 서비스 유닛 파일들을 `/etc/systemd/system/` 경로에서 읽어들이며, 이를 메모리에 캐싱해둠\n• 새로운 `.service` 파일을 추가하거나 기존 파일을 수정한 후, `sudo systemctl daemon-reload` 명령을 실행하지 않으면, 캐싱되어있는 메모리에는 변화가 없어서 새로 설정한 서비스가 반영되지 않음",
        solution:
          "• 서비스 파일 작성 후, `sudo systemctl daemon-reload` 명령어를 실행하여 `systemd`에 변경 사항을 반영\n• 이후에 정상적으로 서비스 실행: `sudo systemctl start gunicorn && sudo systemctl start daphne`\n• 서비스 파일 수정 시 항상 `daemon-reload`를 실행하는 것을 배포 체크리스트에 추가하여 재발 방지\n• 서비스 설정 및 실행 순서를 문서화하여 팀원들과 공유",
        afterCode: `// 올바른 서비스 설정 및 실행 순서
// 1. 서비스 파일 작성 또는 수정
sudo nano /etc/systemd/system/daphne.service
sudo nano /etc/systemd/system/gunicorn.service

// 2. systemd에 변경사항 반영 (필수!)
sudo systemctl daemon-reload

// 3. 서비스 실행
sudo systemctl start gunicorn
sudo systemctl start daphne

// 4. 서비스 상태 확인
sudo systemctl status gunicorn
sudo systemctl status daphne

// 5. 부팅 시 자동 시작 설정
sudo systemctl enable gunicorn
sudo systemctl enable daphne`,
        result:
          "• `sudo systemctl daemon-reload` 명령어를 실행하여 서비스 설정이 정상적으로 반영되고, `daphne`와 `gunicorn` 서비스가 안정적으로 실행됨\n• 서비스 파일 수정 시 항상 `daemon-reload`를 실행하는 것을 배포 체크리스트에 추가하여 재발 방지\n• 서비스 설정 및 실행 순서를 문서화하여 팀원들과 공유",
      },
      {
        incidentNumber: "INC-003",
        category: "BE",
        discoveredDate: "2025.03.12",
        resolvedDate: "2025.03.12",
        assignees: ["정*웅"],
        problem: "서비스로 실행한 Daphne가 끊기는 문제",
        symptom:
          "Nginx의 reverse proxy를 구현해 HTTP 요청과 WebSocket 연결을 각각 gunicorn과 Daphne로 연결하려고 했는데, Daphne 서버가 계속해서 끊기는 현상이 나타남.",
        cause:
          "• Django가 실행되기 전에 `asgi.py`의 `get_asgi_application()`를 불러오려고 하면서 오류가 생기고 `daphne`가 꺼지는 현상이 나타남\n• Django 환경이 초기화되지 않은 상태에서 ASGI 애플리케이션을 로드하려고 시도하여 모듈 import 오류가 발생",
        solution:
          "• Django의 `get_asgi_application()`를 불러오기 전 `django.setup()`을 통해서, Django 환경을 설정하고 초기화를 먼저 하도록 작성\n• `os.environ.setdefault()`로 Django 설정 모듈을 지정한 후, `django.setup()`을 호출하여 Django를 완전히 초기화한 다음 `channels`와 `middleware`를 import하도록 순서를 변경",
        beforeCode: `import os

from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application

from chatbot.middleware import JWTAuthMiddleware
from chatbot.routing import websocket_urlpatterns

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

application = ProtocolTypeRouter(
    {
        "http": get_asgi_application(),
        "websocket": JWTAuthMiddleware(URLRouter(websocket_urlpatterns)),
    }
)`,
        afterCode: `import os

import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")
django.setup()  // Django 환경 초기화

from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application

from chatbot.middleware import JWTAuthMiddleware
from chatbot.routing import websocket_urlpatterns

application = ProtocolTypeRouter(
    {
        "http": get_asgi_application(),
        "websocket": JWTAuthMiddleware(URLRouter(websocket_urlpatterns)),
    }
)`,
        result:
          "• `Daphne` 서버가 안정적으로 실행되며, `systemd` 서비스로 등록 후에도 정상적으로 동작\n• `WebSocket` 연결이 끊기지 않고 지속적으로 유지됨\n• ASGI 애플리케이션 초기화 순서를 명확히 문서화하여 유사한 문제 재발 방지\n• 향후 더 깔끔한 ASGI 설정 방법을 찾아볼 예정",
      },
      {
        incidentNumber: "INC-002",
        category: "FE",
        discoveredDate: "2025.03.05",
        resolvedDate: "2025.03.05",
        assignees: ["박*지"],
        problem: "프로필 수정 후 페이지 이동 오류",
        symptom: "프로필 수정 후 '저장' 버튼을 눌러도 profile.html로 이동하지 않고, 현재 페이지에 머무름.",
        cause:
          '• `profile_edit.js`에서 `window.location.href = "profile.html";` 코드가 실행되지 않음\n• AJAX 요청이 성공적으로 처리되었으나, 응답을 받은 후 `setTimeout()` 또는 이벤트 리스너 문제로 페이지 이동이 동작하지 않을 가능성\n• 브라우저 캐싱 또는 JavaScript 오류 가능성',
        solution:
          "• `profile_edit.js` 내 `messageContainer`가 정의되지 않아 `showMessage()` 호출 시 내부 오류 발생 → 이후 코드가 실행되지 않음\n• `messageContainer` 변수를 `showMessage()` 내부에서 새로 정의하여 오류 해결\n• `showMessage()` 대신 `alert()`으로 변경하여 사용자에게 즉시 메시지를 보여주고, 이후 `window.location.href`가 정상 동작하는지 테스트\n• `setTimeout()` 지연 시간도 1500ms → 500ms로 조정하여 UX 개선 시도\n• `console.log()` 및 `try-catch`를 통해 흐름을 추적하면서 정확한 원인을 확인",
        result:
          "• `messageContainer` 변수 초기화 문제를 해결하고 `alert()`으로 변경하여 페이지 이동이 정상적으로 작동\n• DOM 요소를 사용하는 함수에서는 항상 요소의 존재 여부를 확인하고, `try-catch` 구문을 통해 오류 발생 시에도 전체 흐름이 중단되지 않도록 개선\n• 주요 동작(페이지 이동 등) 이후에 로그(`console.log`)를 삽입하여 디버깅 시 흐름 확인을 용이하게 함\n• QA 테스트 시 버튼 클릭 후 기대 동작이 수행되는지까지 포함한 플로우 테스트를 반드시 수행하도록 프로세스 개선",
      },
      {
        incidentNumber: "INC-001",
        category: "DB",
        discoveredDate: "2025.03.06",
        resolvedDate: "2025.03.06",
        assignees: ["양*영"],
        problem: "load_data.py 실행 오류",
        symptom: "python vector_store/load_data.py 실행명령어가 실행되지 않음",
        cause:
          "python vector_store/load_data.py 명령어를 사용하면 vector_store/load_data.py를 독립적인 스크립트로 실행하기 때문에, vector_store는 단순한 폴더로 인식됩니다. 현재 디렉토리(.)가 sys.path에 추가되지만, vector_store가 패키지로 인식되지 않습니다. 만약 load_data.py에서 import config를 시도하면 Python은 config.py가 sys.path에 있는지 확인하지만, 패키지 경로가 올바르게 설정되지 않아서 찾지 못합니다. 따라서 'ModuleNotFoundError: No module named config' 같은 오류가 발생합니다.",
        solution:
          "python -m vector_store.load_data 명령어를 사용합니다. -m 옵션을 사용하면 Python은 vector_store를 패키지로 인식하고 실행합니다. 실행 전, Python은 vector_store가 속한 최상위 디렉토리(즉, vector_store의 부모 디렉토리)를 sys.path에 추가합니다. 이로 인해 vector_store 내의 다른 모듈(config, utils 등)을 올바르게 찾을 수 있습니다.",
        solutionCode: `// 올바른 실행 방법
// 기존 방식 (오류 발생)
// python vector_store/load_data.py

// 개선된 방식 (정상 작동)
python -m vector_store.load_data

// 또는 PYTHONPATH 설정
import sys
sys.path.append(".")
python vector_store/load_data.py`,
        result:
          "python -m vector_store.load_data 명령어로 실행하여 모듈 import 오류가 해결되었으며, 재발 방지를 위해 README에 올바른 실행 방법을 문서화했습니다.",
      },
    ],
    devlogs: [
      {
        title: "Django Channels를 활용한 비동기 실시간 통신 설계와 구현 (WebSocket)",
        url: "https://jacejung-dev.github.io/devlog/2025-03-28-AINFO_1/",
      },
      {
        title: "WebSocket JWT 인증 구현",
        url: "https://jacejung-dev.github.io/devlog/2025-03-28-AINFO_2/",
      },
      {
        title: "실시간성을 위한 챗봇 로직 비동기 처리 및 Streaming 추가",
        url: "https://jacejung-dev.github.io/devlog/2025-03-29-AINFO_3/",
      },
      {
        title: "LangChain Memory와 Redis를 활용한 멀티턴 대화 구현",
        url: "https://jacejung-dev.github.io/devlog/2025-03-30-AINFO_4/",
      },
      {
        title: "챗봇 카테고리 분류 시스템과 보고서 생성 로직 구현",
        url: "https://jacejung-dev.github.io/devlog/2025-04-01-AINFO_5/",
      },
    ],
  },
  {
    id: "bookgroo",
    title: "Bookgroo",
    description: "사용자의 성향・감정・취향을 반영한 맞춤형 도서 추천 챗봇 서비스",
    image: "/assets/Bookgroo_index-YNx9OVG7UZLR2sOdKxQ2O4OYiFNlFQ.png",
    tags: ["Python", "Django", "DRF", "LangChain", "ChromaDB", "OpenAI", "JWT", "SQLite"],
    github: "https://github.com/JaceJung-dev/bookgroo_pjt",
    type: "AI 추천 서비스",
    period: "2025.02.10 - 2025.02.26",
    teamSize: "4명",
    role: "백엔드 개발",
    overview:
      "사용자의 독서 성향, 현재 감정 상태, 취향을 분석하여 최적의 도서를 추천하는 AI 챗봇 서비스입니다. LangChain과 ChromaDB를 활용하여 의미 기반 검색과 개인화된 추천을 제공합니다.",
    heroImage: "/assets/bookgroo_architecture-ve1zwHQMDkrhPeRE5epGSfVJrUC1ZF.png",
    heroCaption: "시스템 아키텍처 — 3-Model 분리 추천 · RAG",
    galleryImages: [
      "/assets/Bookgroo_chat-20xOLmMSn1SxGSPsZrBjj8AXcdyM38.gif",
      "/assets/Bookgroo_signup-wf5z6QJBPiFPKLVHDudpq8ylRKHTdt.png",
      "/assets/Bookgroo_signin-WXA4deT5Ga9TzUSY8drWe2OyskDYbT.png",
      "/assets/bookgroo_architecture-ve1zwHQMDkrhPeRE5epGSfVJrUC1ZF.png",
    ],
    features: [
      {
        category: "AI 챗봇 서비스",
        items: ["자연어 기반 도서 검색", "프로필 정보와 대화를 통한 취향 파악", "추천 이유 설명"],
      },
      {
        category: "데이터 관리",
        items: ["벡터 DB 기반 의미 검색", "BeautifulSoup을 통한 최신 정보 크롤링"],
      },
      {
        category: "사용자 인증 및 계정 관리",
        items: ["회원가입 및 로그인", "JWT 기반 인증", "SMTP 기반 회원가입 인증", "선호 장르 설정"],
      },
      {
        category: "협업 및 개발 프로세스",
        items: ["Git/GitHub 중심 협업 및 코드 리뷰", "Git Flow 기반 브랜치 전략"],
      },
    ],
    coreWorks: [
      {
        type: "feature",
        tag: "기능 구현",
        subLabel: "할루시네이션 감소",
        title: "3-Model 분리로 RAG·LLM 출처 정확도 개선",
        description:
          "단일 모델이 RAG·LLM 출처를 혼동하던 문제를 RAG 추천(Model A) · LLM 추천(Model B) · 결과 취합(Model C)으로 책임을 분리해 구조를 재설계했습니다.",
        image: "/assets/bookgroo_chatbot_logic-uWgjycqDhvf3ZoMj77iqdcTo0mHUwL.webp",
        capabilities: [
          "Model A: RAG 기반 추천",
          "Model B: LLM 기반 추천",
          "Model C: 결과 취합 + 중복 제거",
          "출처 정보 명확 표시",
          "프롬프트 복잡도 감소 + 유지보수성 향상",
        ],
      },
      {
        type: "feature",
        tag: "기능 구현",
        subLabel: "데이터 파이프라인 / 배포",
        title: "신간 도서 RAG 데이터 구축 및 환경 호환성 확보",
        description:
          "YES24 신간 도서 크롤러로 RAG 데이터를 직접 수집하고, 상대경로 기반 VectorDB가 Local/Server 환경에서 다르게 해석되던 문제를 절대 경로 기반으로 정리했습니다.",
        codeCompare: {
          title: "VectorDB 경로: 상대경로 → 절대경로",
          language: "python",
          before: `# 상대경로 — 실행 위치에 따라 경로 해석이 달라짐
book_DB = Chroma(
    persist_directory="../book_DB",
    embedding_function=embeddings,
)`,
          after: `# 절대경로 — Local / Server 동일 결과 보장
import os

root_dir = os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))
)
book_DB_dir = os.path.join(root_dir, "book_DB")
book_DB = Chroma(
    persist_directory=book_DB_dir,
    embedding_function=embeddings,
)`,
        },
        capabilities: [
          "BeautifulSoup 기반 YES24 신간 크롤러",
          "ChromaDB 벡터 임베딩 구축",
          "os.path 기반 절대 경로 VectorDB",
          "Local / Server 환경 동일 결과 보장",
        ],
      },
    ],
    troubleshooting: [
      {
        incidentNumber: "INC-002",
        category: "BE",
        discoveredDate: "2025.02.22",
        resolvedDate: "2025.02.23",
        problem: "Local과 Server 환경에서 상이한 결과",
        symptom:
          "Local과 Server 환경에서 실행 시 RAG 데이터 조회 결과가 상이하거나 조회 실패. 특히 RAG 데이터를 제대로 못 가져오는 현상 발생.",
        cause:
          "• vectorDB 경로를 상대경로로 설정하여 실행 환경에 따라 경로 불일치 발생\n• 작업 디렉토리(working directory) 차이로 인한 상대경로 해석 오류\n• 처음 작업 당시 vectorDB를 상대경로(`./book_DB`)로 사용하여 환경에 따라 다른 경로로 해석됨",
        solution:
          "• 절대 경로 기반으로 상대 위치를 계산하는 방식으로 vectorDB 경로 설정\n• `os.path.abspath(__file__)`로 현재 파일의 절대 경로 획득 후 `book_DB` 디렉토리 경로 계산\n• `os.path.dirname()`과 `os.path.join()`을 사용하여 플랫폼 독립적인 경로 생성",
        beforeCode: `# 잘못된 코드 (상대경로 사용)
book_DB = Chroma(
    persist_directory="./book_DB",  # 상대경로 사용
    embedding_function=embeddings,
)

# 문제점:
# - 실행 위치에 따라 "./book_DB"가 다른 경로로 해석됨
# - Local 환경과 Server 환경의 작업 디렉토리가 다를 경우 경로 불일치 발생
# - 배포 환경에서 vectorDB를 찾지 못하는 문제 발생`,
        afterCode: `import os

# 수정된 코드 (절대 경로 기반)
root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
book_DB_dir = os.path.join(root_dir, "book_DB")
book_DB = Chroma(
    persist_directory=book_DB_dir,
    embedding_function=embeddings,
)

# 개선 포인트:
# - os.path.abspath(__file__): 현재 파일의 절대 경로 획득
# - os.path.dirname(): 상위 디렉토리 경로 획득
# - os.path.join(): 플랫폼 독립적인 경로 결합
# - 실행 환경에 관계없이 일관된 경로 사용`,
        result:
          "• 실행 환경에 관계없이 vectorDB 경로가 일관되게 해석되어 RAG 데이터 정상 조회\n• 절대 경로 기반 경로 설정으로 배포 환경에서의 안정성 향상\n• Local과 Server 환경 모두에서 동일한 결과 출력\n• 향후 경로 관련 문제 발생 시 절대 경로 기반 설정을 표준으로 사용하도록 가이드라인 수립",
      },
      {
        incidentNumber: "INC-001",
        category: "BE",
        discoveredDate: "2025.02.20",
        resolvedDate: "2025.02.22",
        problem: "Hallucination(할루시네이션) 및 정확성 문제",
        symptom:
          "LLM 자체 데이터를 RAG 출처로 표시하거나 RAG 데이터를 LLM 데이터로 표시하는 hallucination 발생. 크롤링해서 정리한 RAG 데이터가 아닌 LLM 자체 데이터로 출력했음에도 출처를 RAG라고 하거나, RAG 데이터 없는 책 정보를 RAG라고 하는 등의 문제 발생.",
        cause:
          "• 하나의 모델에 과도한 작업(카테고리 분류, RAG 검색, LLM 추천, 결과 통합) 부여\n• 복잡한 프롬프트로 인한 모델의 혼란 및 출처 구분 실패\n• 단일 모델이 여러 역할을 동시에 수행하면서 정보 출처를 정확히 추적하지 못함",
        solution:
          "• 3개의 모델로 작업 분리: Model A(RAG 기반 추천), Model B(LLM 기반 추천), Model C(결과 취합)\n• 각 모델에 단일 작업만 부여하여 책임 명확화\n• Model C에서 중복 제거 및 최종 결과 통합하여 출처 정보 명확히 표시",
        beforeCode: `prompt = ChatPromptTemplate.from_messages([
    SystemMessagePromptTemplate.from_template(
        """
        당신은 도서 추천 시스템입니다. 다음과 같은 규칙을 따라 주세요.

        1. 사용자의 입력을 분석해 세 가지 카테고리로 분류.
           - off_topic: 도서 추천과 관련 없는 질문
           - no_keyword: 사용자가 기본이나 원하는 것에 대한 구체적 키워드 없이 책을 추천해달라는 경우
           - yes_keyword: 사용자의 입력에 의미 있는 키워드가 포함되어 있고 이에 따른 책을 추천해달라는 경우

        2. 각 카테고리에 따른 답변 방식:
           - off_topic: 도서 추천과 관련된 질문을 해달라고 답변.
           - no_keyword: 임의로 책을 추천.
           - yes_keyword: 키워드를 기반으로 추천.

        3. yes_keyword: 사용자의 입력 안에서 유의미한 키워드를 추출해 이름을 바탕으로 추천.
           - LLM 모델이 가진 정보뿐만 아니라, chromaDB에서 retrieve 1건해서 총 2건을 추천.
           - 각각 LLM 모델 데이터인지, RAG데이터 출처인지도 알려줘.

        4. 각 책에 반드시 포함해야 할 정보
           - 책 제목
           - 저자
           - 출판사
           - 출판일
           - 추천 이유 (키워드 또는 장르와의 연결성 등 구체적인 설명을 넣어줘)
        """
    ),
    HumanMessagePromptTemplate.from_template(
        """
        Question: {question}
        Context: {context}
        Answer: """
    ),
])

# 문제점:
# - 하나의 모델이 분류, 검색, 추천, 출처 표시를 모두 처리
# - 복잡한 프롬프트로 인한 혼란
# - 출처 정보가 부정확하게 표시됨`,
        afterCode: `# prompt 정의
prompt_A = ChatPromptTemplate.from_template(
    """
    Question: {user_question}
    Context: {context}
    Answer:
    """
)

prompt_B = ChatPromptTemplate.from_template(
    """
    Question: {user_question}
    Answer:
    """
)

prompt_C = ChatPromptTemplate.from_template(
    """
    result_RAG : {result_RAG}
    result_LLM : {result_LLM}
    Answer:

    1. 당신은 추천 결과들을 취합하는 텍스트 편집 봇입니다.
    2. 중복된 내용이 있는 경우, 중복된 내용을 제거해주세요.
    3. 다른 부가적인 설명 없이 취합된 결과만을 제공합니다.
    4. 2개의 답변을 하나의 답변으로 만들어주세요.
    5. 책에 대한 내용은 누락 없이 모두 취합해주세요.
    """
)

#### RAG
retrieved_docs = retriever.invoke(user_question)
context = "\\n".join([doc.page_content for doc in retrieved_docs])

### chain
chain_A = prompt_A | llm
res_A = chain_A.invoke({"context": context, "user_question": user_question})
result_RAG = res_A.content

chain_B = prompt_B | llm
res_B = chain_B.invoke({"user_question": user_question})
result_LLM = res_B.content

chain_C = prompt_C | llm
res_C = chain_C.invoke({"result_RAG": result_RAG, "result_LLM": result_LLM})
result_03 = res_C.content

return final_result

# 개선 포인트:
# - Model A: RAG 기반 추천만 담당
# - Model B: LLM 기반 추천만 담당
# - Model C: 결과 취합 및 중복 제거만 담당
# - 각 모델의 역할이 명확하여 출처 정보 정확도 향상`,
        result:
          "• Hallucination 감소 및 데이터 출처(LLM vs RAG) 정확도 향상\n• 각 모델의 역할 분리로 프롬프트 복잡도 감소 및 유지보수성 향상\n• 출처 정보가 명확하게 표시되어 사용자 신뢰도 증가\n• 모델별 책임 분리로 향후 기능 확장 및 개선이 용이해짐",
      },
    ],
    devlog: {
      title: "코드보다 먼저, 문서로 시작한 Bookgroo 프로젝트",
      sections: [
        {
          heading: "💡 다른 팀들과는 다른 출발점",
          content:
            "Bookgroo 프로젝트는 부트캠프에서 2주 동안 진행한 중간 프로젝트로, Django REST Framework와 LangChain을 기반하는 서비스를 만들어보는 것으로 저희는 맞춤형 도서 추천 챗봇 개발하기로 했습니다.\n\n저희 팀이 다른 팀들보다 뛰어나거나 엄청 뛰어난 결과를 낸 것은 아니였지만, 다른 팀들과의 차별점은 명확했습니다. 다른 팀들은 프로젝트 시작 후 회의 문서작업에 쓰는 시간이 많이 않았지만, 저희 팀은 2주간 프로젝트의 기간에서 1주의 시간을 오롯이 문서 작업 및 회의에 쏟았습니다.\n\n당시에는 '너무 느린 거 아닐까?' 하는 불안감도 있었지만, 프로젝트를 마친 뒤 돌이켜보니 결과물을 정리하기도 훨씬 수월했고, 다른 팀들과 비교해도 프로젝트의 완성도가 떨어지지 않았기 때문에 결과적으로 좋은 선택이었다고 생각합니다.",
        },
        {
          heading: "🧭 코딩보다 먼저, 설계와 정의부터",
          content:
            "저희가 처음 한 일은 코딩이 아니라 설계와 정의였습니다. 어떤 주제를 선택할지, 서비스의 흐름은 어떻게 구성할지, 사용 기술과 그 선택의 이유를 논의하며, 데이터베이스 구조와 챗봇의 대화 로직은 어떻게 연결하지까지 세밀하게 정리했습니다. 이 내용을 **문서와 다이어그램으로 시각화**하면서 팀원 모두가 동일한 그림을 공유할 수 있었고, 그 덕분에 이후의 개발 기간에는 추가적읜 회의 없이 개발에만 집중할 수 있었습니다.",
        },
        {
          heading: "⚙️ 문제 - 챗봇 로직 설계의 어려움",
          content:
            "프로젝트의 결과물을 내는 것도 중요하지만, 지금 가장 해봐야하는 것이며 집중해야하는 것은 '챗봇 로직 다이어그램'을 제대로 그리는 것이라고 생각했습니다. 저는 이 다이어그램에 정말 많은 시간과 노력을 들였습니다. 가뜩이나 프로세스 플로우라는 것도 처음 만들어보는데, 내 생각이 제대로 담기고 그것이 다른 개발자들한테도 받아들여질 수 있을까에 대한 고민이 가장 많았던 것 같습니다.\n\n가장 처음 만들었던 프로세스 플로우는 아래 이미지와 같았습니다. 나름 잘 만들었다고 생각했지만, 이 다이어그램을 가지고 '저희의 챗봇은 이러한 로직으로 동작합니다.'라고 설명했는데, 튜터님들께서는 '로직이 잘 이해되지 않는다'. '병렬처리가 뭘 의미하는지 전혀 모르겠다'고 하셨습니다.",
          image:
            "/assets/bookgroo_chatbot_prev_logic-zgtyFKikhmWQFjKMEbmd1S6IASzckg.png",
          imageAlt: "이전 버전의 챗봇 로직 플로우차트",
        },
        {
          heading: "🔁 해결 - 분기와 병렬의 구분",
          content:
            "왜 그렇게 느끼셨을까 곰곰이 생각해보니. 문제의 원인은 '분기 처리'와 '병렬 처리'를 구분하지 않았기 때문이었습니다. 두 개념은 한꺼번에 '병렬 처리'로 뭉뚱그려 표현하면서 의미가 모호해졌던 것이었습니다. 그래서 저는 해당 부분을 다시 설계하였습니다.\n\n아래 이미지처럼\n\n- 사용자가 책과 무관한 아예 뜬금없는 내용을 물어보는 경우,\n- 상황이나 추천에 필요한 정보를 정확히 주면서 물어보는 경우,\n- 맥락은 전혀 없지만 책을 추천해달라는 경우\n\n이 세 가지를 명확히 '분기 처리'로 나누고, 책 추천 단계에서는 LLM이 기존 데이터에서 추천을, RAG로 신간 데이터를 가져오는 것을 동시에 '병렬적으로' 수행하도록 표현했습니다. 튜터님께서도 '이제야 무슨 말을 하는지 알겠다'라고 하셨을 때, 제가 생각한 로직이 명확하게 전달되었다는 점이 정말 기뻤습니다.",
          image:
            "/assets/bookgroo_chatbot_logic-uWgjycqDhvf3ZoMj77iqdcTo0mHUwL.webp",
          imageAlt: "개선된 챗봇 로직 플로우차트",
        },
        {
          heading: "🧩 마무리 – 문서의 힘을 실감하다",
          content:
            "이번 프로젝트에서는 Django, Django REST framework(DRF), LangChain을 잘 이용하며 구현하는 것도 중요했지만, 문서 작업 및 사전 작업에 굉장히 중요하고 많은 비중을 가져도 된다라는 것을 배울 수 있었습니다.",
        },
      ],
      additionalImages: [
        {
          title: "프로젝트 일정",
          url: "/assets/bookgroo_schedule-hFbhqnRhbXrzCKihlrM02Wxb7QjVau.png",
          alt: "Bookgroo 프로젝트 일정표 (2025.02.10 - 2025.02.26)",
        },
        {
          title: "데이터베이스 ERD",
          url: "/assets/bookgroo_ERD-6cnfdj0OwzB4dwzlfFh2LergIRUUG2.png",
          alt: "Bookgroo 데이터베이스 ERD (User, Chatroom, Message, Genre)",
        },
      ],
    },
    devlogs: [
      {
        title: "코드보다 먼저, 문서로 시작한 Bookgroo 프로젝트",
        url: "https://jacejung-dev.github.io/devlog/2025-02-26-bookgroo_1/",
      },
      {
        title: "RAG 데이터 구축을 위한 YES24 신간도서 크롤러 구현하기",
        url: "https://jacejung-dev.github.io/devlog/2025-02-27-bookgroo_2/",
      },
    ],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <Card className="overflow-hidden group hover:shadow-lg transition-all cursor-pointer h-full">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[18px]">{project.title}</CardTitle>
                  <CardDescription className="text-[16px]">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-[14px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
