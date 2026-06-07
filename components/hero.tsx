import { Github, BookOpen } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              안녕하세요,
              <br />
              <span className="text-muted-foreground">AI 엔지니어</span> 정지웅입니다
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-pretty">
              데이터 분석과 인공지능 기술로 실제 문제를 해결하며, 의미 있는 가치를 만들어갑니다.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/JaceJung-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-8 h-8" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://jacejung-dev.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <BookOpen className="w-8 h-8" />
              <span className="sr-only">Blog</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
