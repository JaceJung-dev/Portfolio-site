export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[26px] md:text-[37px] font-bold mb-8">About</h2>
        <div className="space-y-6 text-base md:text-[20.5px] text-muted-foreground leading-relaxed">
          <p>
            <span className="text-foreground font-medium">바이오인포매틱스 연구</span>를 시작으로{" "}
            <span className="text-foreground font-medium">데이터 분석부터 AI 서비스 구현까지 end-to-end</span>로 경험을 쌓아온 엔지니어입니다.
          </p>
          <p>
            <span className="text-foreground font-medium">Python·R 기반 데이터 분석과 머신러닝 모델링</span>,{" "}
            <span className="text-foreground font-medium">Django·FastAPI·LangChain 기반 AI 백엔드 개발</span>을 수행했으며,
            실제 프로젝트에서{" "}
            <span className="text-foreground font-medium">RAG Faithfulness 0.651→0.747, Context Precision 0.533→0.664</span>로 품질을 개선하고,{" "}
            <span className="text-foreground font-medium">WebSocket 기반 비동기 스트리밍 구조</span>를 구현해{" "}
            <span className="text-foreground font-medium">응답 지연을 15,494ms→10,702ms로 30.9% 단축</span>했습니다.
          </p>
          <p>
            또한, 사용자 시나리오와 edge case를 구조화해 평가 체계를 고도화하고,
            사용자 피드백과 정량 평가를 함께 반영해{" "}
            <span className="text-foreground font-medium">만족도를 3.7→4.1로 개선</span>하는 등
            기술 성능과 사용자 경험을 함께 개선하는 방식으로 문제를 해결해왔습니다.
          </p>
          <p>
            <span className="text-foreground font-medium">복잡한 기술을 사용자가 실제로 체감할 수 있는 가치로 바꾸는 엔지니어</span>를 지향합니다.
          </p>
        </div>
      </div>
    </section>
  )
}
