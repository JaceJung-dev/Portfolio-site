export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[26px] md:text-[37px] font-bold mb-8">About</h2>
        <div className="space-y-6 text-base md:text-[20.5px] text-muted-foreground leading-relaxed">
          <p>
            생명과학 연구와 바이오인포매틱스를 거쳐, 데이터 분석에서 AI 서비스 구현까지 경험을 확장해 온{" "}
            <span className="text-foreground font-medium">AI·백엔드 엔지니어</span>입니다.
          </p>
          <p>
            <span className="text-foreground font-medium">Python·R 기반 데이터 분석과 머신러닝 모델링</span>에서 출발해,
            현재는{" "}
            <span className="text-foreground font-medium">Django·FastAPI 기반 백엔드와 LangChain 기반 LLM/RAG·Agent 서비스</span>를 구현하고 있습니다.
            검색 품질·멀티턴 상태 관리·평가 파이프라인처럼{" "}
            <span className="text-foreground font-medium">실제 서비스 품질과 직결되는 문제</span>를 중심으로 프로젝트를 진행해왔습니다.
          </p>
          <p>
            RAG 평가와 사용자 피드백을 바탕으로{" "}
            <span className="text-foreground font-medium">답변 품질을 14.7% 개선</span>하고,{" "}
            <span className="text-foreground font-medium">WebSocket 기반 스트리밍 구조</span>로{" "}
            <span className="text-foreground font-medium">응답 지연을 30.9% 단축</span>했습니다.
          </p>
          <p>
            낯선 문제에도 빠르게 뛰어들고, 깊이 파고들어 검증하며,{" "}
            <span className="text-foreground font-medium">팀과 함께 더 나은 결과를 만드는 개발자</span>를 지향합니다.
          </p>
        </div>
      </div>
    </section>
  )
}
