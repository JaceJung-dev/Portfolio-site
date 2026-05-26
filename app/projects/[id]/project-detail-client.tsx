"use client"

import { notFound, useRouter } from "next/navigation"
import { projects } from "@/components/projects"
import { Header } from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ArrowLeft, Github, Play, FileText, Check, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

function renderTextWithInlineCode(text: string) {
  const parts = text.split(/(`[^`]+`)/g)
  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      const code = part.slice(1, -1)
      return (
        <code key={index} className="px-1.5 py-0.5 bg-gray-200 dark:bg-muted rounded text-sm font-mono text-gray-800 dark:text-primary">
          {code}
        </code>
      )
    }
    return part
  })
}

function CodeBlock({
  code,
  language,
  showLineNumbers = false,
  isError = false,
}: {
  code: string
  language?: string
  showLineNumbers?: boolean
  isError?: boolean
}) {
  const lines = code.split("\n")

  const detectLanguage = (code: string): string => {
    if (language) return language

    // YAML 감지
    if (code.includes("[Unit]") || code.includes("[Service]") || code.includes("[Install]")) return "yaml"
    if (code.includes("Description=") && code.includes("ExecStart=")) return "yaml"
    if (code.match(/^[a-z_]+:\s*$/m) && code.includes("  ")) return "yaml"
    if (code.includes("description:") && (code.includes("expected_output:") || code.includes("used_tools:")))
      return "yaml"

    // XML 감지
    if (code.includes("<?xml") || code.includes("<total>") || code.includes("<empPgmSchdInvite>")) return "xml"
    if (code.match(/^[<][a-zA-Z]+>.*[<][/][a-zA-Z]+>[>]/)) return "xml"

    // Python 감지
    if (code.includes("def ") || code.includes("import ") || code.includes("from ")) return "python"
    if (code.includes("@database_sync_to_async") || code.includes("@shared_task")) return "python"
    if (code.includes("async def ") || code.includes("await ")) return "python"
    if (code.includes("class ") && code.includes(":")) return "python"

    // JavaScript 감지
    if (code.includes("function ") || code.includes("const ") || code.includes("let ") || code.includes("var "))
      return "javascript"
    if (code.includes("=>") || code.includes("window.location")) return "javascript"
    if (code.includes("document.") || code.includes("console.log")) return "javascript"

    // Bash 감지
    if (code.includes("sudo ") || code.includes("systemctl") || code.includes("celery ")) return "bash"
    if (code.includes("#!/bin/bash") || code.includes("chmod ") || code.includes("mkdir ")) return "bash"
    if (code.includes("python manage.py") || code.includes("pip install")) return "bash"

    return "text"
  }

  const detectedLang = detectLanguage(code)

  type Token = {
    type:
      | "keyword"
      | "string"
      | "comment"
      | "number"
      | "function"
      | "decorator"
      | "operator"
      | "tag"
      | "attribute"
      | "text"
    value: string
  }

  const tokenize = (line: string, lang: string): Token[] => {
    const tokens: Token[] = []

    if (line.trim() === "") {
      return [{ type: "text", value: line }]
    }

    if (lang === "python") {
      const patterns = [
        { type: "comment" as const, regex: /#.*$/ },
        { type: "decorator" as const, regex: /@[\w_.]+/ },
        { type: "string" as const, regex: /"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/ },
        {
          type: "keyword" as const,
          regex:
            /\b(def|class|import|from|return|if|else|elif|for|while|try|except|with|as|async|await|raise|None|True|False|and|or|not|in|is|lambda|yield|break|continue|pass|finally)\b/,
        },
        { type: "number" as const, regex: /\b\d+\.?\d*\b/ },
        { type: "operator" as const, regex: /[+\-*/%=<>!&|^~]+|[:,()[\]{}]/ },
      ]

      let remaining = line
      let position = 0

      while (position < line.length) {
        let matched = false

        for (const pattern of patterns) {
          const match = remaining.match(pattern.regex)
          if (match && match.index === 0) {
            tokens.push({ type: pattern.type, value: match[0] })
            position += match[0].length
            remaining = line.substring(position)
            matched = true
            break
          }
        }

        if (!matched) {
          const identMatch = remaining.match(/^[a-zA-Z_]\w*/)
          if (identMatch) {
            tokens.push({ type: "text", value: identMatch[0] })
            position += identMatch[0].length
            remaining = line.substring(position)
          } else {
            tokens.push({ type: "text", value: remaining[0] })
            position += 1
            remaining = line.substring(position)
          }
        }
      }

      return tokens
    } else if (lang === "javascript") {
      const patterns = [
        { type: "comment" as const, regex: /\/\/.*$|\/\*[\s\S]*?\*\// },
        { type: "string" as const, regex: /`(?:[^`\\]|\\.)*`|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/ },
        {
          type: "keyword" as const,
          regex:
            /\b(function|const|let|var|return|if|else|for|while|try|catch|async|await|new|this|class|extends|import|export|default|from|null|undefined|true|false)\b/,
        },
        { type: "number" as const, regex: /\b\d+\.?\d*\b/ },
        { type: "operator" as const, regex: /[+\-*/%=<>!&|^~]+|[:,()[\]{}]|=>/ },
      ]

      let remaining = line
      let position = 0

      while (position < line.length) {
        let matched = false

        for (const pattern of patterns) {
          const match = remaining.match(pattern.regex)
          if (match && match.index === 0) {
            tokens.push({ type: pattern.type, value: match[0] })
            position += match[0].length
            remaining = line.substring(position)
            matched = true
            break
          }
        }

        if (!matched) {
          const identMatch = remaining.match(/^[a-zA-Z_$]\w*/)
          if (identMatch) {
            tokens.push({ type: "text", value: identMatch[0] })
            position += identMatch[0].length
            remaining = line.substring(position)
          } else {
            tokens.push({ type: "text", value: remaining[0] })
            position += 1
            remaining = line.substring(position)
          }
        }
      }

      return tokens
    } else if (lang === "bash") {
      const patterns = [
        { type: "comment" as const, regex: /#.*$/ },
        { type: "string" as const, regex: /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/ },
        {
          type: "keyword" as const,
          regex:
            /\b(sudo|systemctl|celery|redis-server|start|stop|restart|status|daemon-reload|python|pip|chmod|mkdir|cd|ls|cat|echo|export|source|bash|sh|rm|mv|cp|find|grep|psql|DROP|TABLE)\b/,
        },
        { type: "operator" as const, regex: /--?[\w-]+/ },
      ]

      let remaining = line
      let position = 0

      while (position < line.length) {
        let matched = false

        for (const pattern of patterns) {
          const match = remaining.match(pattern.regex)
          if (match && match.index === 0) {
            tokens.push({ type: pattern.type, value: match[0] })
            position += match[0].length
            remaining = line.substring(position)
            matched = true
            break
          }
        }

        if (!matched) {
          tokens.push({ type: "text", value: remaining[0] })
          position += 1
          remaining = line.substring(position)
        }
      }

      return tokens
    } else if (lang === "yaml") {
      const patterns = [
        { type: "comment" as const, regex: /#.*$/ },
        { type: "string" as const, regex: /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/ },
        { type: "keyword" as const, regex: /^[A-Za-z_][\w-]*(?=:)/ },
        { type: "operator" as const, regex: /:/ },
      ]

      let remaining = line
      let position = 0

      while (position < line.length) {
        let matched = false

        for (const pattern of patterns) {
          const match = remaining.match(pattern.regex)
          if (match && match.index === 0) {
            tokens.push({ type: pattern.type, value: match[0] })
            position += match[0].length
            remaining = line.substring(position)
            matched = true
            break
          }
        }

        if (!matched) {
          tokens.push({ type: "text", value: remaining[0] })
          position += 1
          remaining = line.substring(position)
        }
      }

      return tokens
    } else if (lang === "xml") {
      const patterns = [
        { type: "comment" as const, regex: /<!--[\s\S]*?-->/ },
        { type: "tag" as const, regex: /<\/?[\w:]+/ },
        { type: "attribute" as const, regex: /\s[\w:]+(?==)/ },
        { type: "operator" as const, regex: /=|\/?>/ },
        { type: "string" as const, regex: /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/ },
      ]

      let remaining = line
      let position = 0

      while (position < line.length) {
        let matched = false

        for (const pattern of patterns) {
          const match = remaining.match(pattern.regex)
          if (match && match.index === 0) {
            tokens.push({ type: pattern.type, value: match[0] })
            position += match[0].length
            remaining = line.substring(position)
            matched = true
            break
          }
        }

        if (!matched) {
          tokens.push({ type: "text", value: remaining[0] })
          position += 1
          remaining = line.substring(position)
        }
      }

      return tokens
    }

    return [{ type: "text", value: line }]
  }

  const getTokenColor = (type: Token["type"]): string => {
    switch (type) {
      case "keyword":
        return "text-purple-600 dark:text-purple-400"
      case "string":
        return "text-green-700 dark:text-green-400"
      case "comment":
        return "text-gray-500 dark:text-gray-500"
      case "number":
        return "text-orange-600 dark:text-orange-400"
      case "function":
        return "text-blue-600 dark:text-blue-400"
      case "decorator":
        return "text-yellow-600 dark:text-yellow-400"
      case "operator":
        return "text-cyan-700 dark:text-cyan-400"
      case "tag":
        return "text-blue-600 dark:text-blue-400"
      case "attribute":
        return "text-yellow-600 dark:text-yellow-400"
      default:
        return "text-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div
      className={`rounded-lg overflow-hidden ${isError ? "border border-red-500/30 bg-red-100 dark:bg-red-950/20" : "bg-gray-100 dark:bg-[#1e1e1e]"}`}
    >
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm font-mono">
          {lines.map((line, lineIndex) => {
            const tokens = tokenize(line, detectedLang)
            return (
              <div key={lineIndex} className="flex">
                {showLineNumbers && (
                  <span className="text-gray-400 dark:text-gray-600 select-none mr-4 text-right" style={{ minWidth: "2rem" }}>
                    {lineIndex + 1}
                  </span>
                )}
                <code className="flex-1">
                  {tokens.map((token, tokenIndex) => (
                    <span key={tokenIndex} className={getTokenColor(token.type)}>
                      {token.value}
                    </span>
                  ))}
                </code>
              </div>
            )
          })}
        </pre>
      </div>
    </div>
  )
}

export default function ProjectDetailClient({ id }: { id: string }) {
  const project = projects.find((p) => p.id === id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return

      if (e.key === "Escape") {
        setIsLightboxOpen(false)
      } else if (e.key === "ArrowLeft") {
        handlePrevImage()
      } else if (e.key === "ArrowRight") {
        handleNextImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isLightboxOpen, lightboxIndex])

  if (!project) {
    notFound()
  }

  const handleBackToProjects = () => {
    router.push("/#projects")
    setTimeout(() => {
      const projectsSection = document.getElementById("projects")
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setIsLightboxOpen(true)
  }

  const handlePrevImage = () => {
    if (!project.galleryImages) return
    setLightboxIndex((prev) => (prev === 0 ? project.galleryImages!.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    if (!project.galleryImages) return
    setLightboxIndex((prev) => (prev === project.galleryImages!.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Button variant="ghost" className="mb-8" onClick={handleBackToProjects}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            프로젝트 목록으로
          </Button>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <Card className="overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full aspect-video object-cover"
                />
              </Card>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3">{project.title}</h1>
                <p className="text-lg text-muted-foreground">{project.description}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-muted-foreground w-20">프로젝트 유형</span>
                  <span className="text-sm">{project.type}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-muted-foreground w-20">기간</span>
                  <span className="text-sm">{project.period}</span>
                </div>
                {project.teamSize && (
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-muted-foreground w-20">인원</span>
                    <span className="text-sm">{project.teamSize}</span>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-muted-foreground w-20">역할</span>
                  <span className="text-sm">{project.role}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3 pt-4">
                {project.demo && (
                  <Button asChild className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Play className="w-4 h-4 mr-2" />
                      시연 영상
                    </a>
                  </Button>
                )}
                <Button variant="outline" asChild className="flex-1 bg-transparent">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                {project.docs && (
                  <Button variant="outline" asChild className="flex-1 bg-transparent">
                    <a href={project.docs} target="_blank" rel="noopener noreferrer">
                      <FileText className="w-4 h-4 mr-2" />
                      프로젝트 문서
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">개요</TabsTrigger>
              <TabsTrigger value="implementation">개발일지</TabsTrigger>
              <TabsTrigger value="troubleshooting">트러블슈팅</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8 mt-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">프로젝트 개요</h3>
                <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
              </div>

              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">{project.id === "csat-solver" ? "시도 전략" : "주요 기능"}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <Card key={index} className="p-6">
                        <h4 className="font-semibold mb-3 text-lg">{feature.category}</h4>
                        <ul className="space-y-2">
                          {feature.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {project.galleryImages && project.galleryImages.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">갤러리</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.galleryImages.map((image, index) => {
                      const isVideo = image.endsWith(".mp4") || image.endsWith(".webm") || image.endsWith(".mov")
                      return (
                        <Card
                          key={index}
                          className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                          onClick={() => openLightbox(index)}
                        >
                          {isVideo ? (
                            <video
                              src={image}
                              className="w-full aspect-video object-cover"
                              muted
                              autoPlay
                              loop
                              playsInline
                            />
                          ) : (
                            <img
                              src={image || "/placeholder.svg"}
                              alt={`${project.title} 스크린샷 ${index + 1}`}
                              className="w-full aspect-video object-cover"
                            />
                          )}
                        </Card>
                      )
                    })}
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="implementation" className="space-y-4 mt-6">
              {project.devlogs && project.devlogs.length > 0 ? (
                <div className="space-y-4">
                  {project.devlogs.map((devlog, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold">{devlog.title}</h3>
                        <Button variant="outline" asChild>
                          <a href={devlog.url} target="_blank" rel="noopener noreferrer">
                            블로그 글 보기
                          </a>
                        </Button>
                      </div>
                      <p className="text-muted-foreground">
                        자세한 개발 과정과 회고는 블로그 글을 참고해주세요.
                      </p>
                    </Card>
                  ))}
                </div>
              ) : project.implementations && project.implementations.length > 0 ? (
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {project.implementations.map((impl, index) => (
                    <AccordionItem key={index} value={`impl-${index}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">{impl.category}</Badge>
                          <span className="text-left">{impl.title}</span>
                        </div>
                      </AccordionTrigger>
<AccordionContent className="space-y-4 pt-4 pb-4">
                        <div>
                          <h4 className="font-semibold mb-2">배경</h4>
                          <p className="text-muted-foreground whitespace-pre-line">{impl.background}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">구현 내용</h4>
                          <p className="text-muted-foreground whitespace-pre-line">{impl.implementation}</p>
                        </div>
                        {impl.codeExample && (
                          <div>
                            <h4 className="font-semibold mb-2">코드 예시</h4>
                            <CodeBlock code={impl.codeExample} showLineNumbers />
                          </div>
                        )}
                        <div>
                          <h4 className="font-semibold mb-2">결과</h4>
                          <p className="text-muted-foreground whitespace-pre-line">{impl.result}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <Card className="p-6">
                  <p className="text-muted-foreground">등록된 개발일지가 없습니다.</p>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="troubleshooting" className="mt-6 pb-8">
              <Accordion type="single" collapsible className="w-full space-y-4 pb-4">
                {project.troubleshooting?.slice().sort((a, b) => {
                  const numA = parseInt(a.incidentNumber?.replace("INC-", "") || "0");
                  const numB = parseInt(b.incidentNumber?.replace("INC-", "") || "0");
                  return numA - numB;
                }).map((item, index) => (
                  <AccordionItem key={index} value={`trouble-${index}`} className="border rounded-lg px-4 last:border-b">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <span className="text-primary font-mono text-sm">{item.incidentNumber}</span>
                        <span className="text-muted-foreground">|</span>
                        <Badge variant="outline">{item.category}</Badge>
                        <span className="text-muted-foreground">|</span>
                        <span className="text-left">{item.problem}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <div className="text-sm text-muted-foreground">
                        발견: {item.discoveredDate}
                        {item.resolvedDate && ` | 해결: ${item.resolvedDate}`}
                        {item.assignees && (
                          <>
                            {" | "}담당: {Array.isArray(item.assignees) ? item.assignees.join(", ") : item.assignees}
                          </>
                        )}
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">증상</h4>
                        <div className="text-muted-foreground whitespace-pre-line">
                          {item.symptom?.split("\n").map((line, i) => (
                            <p key={i} className="mb-1">
                              {renderTextWithInlineCode(line)}
                            </p>
                          ))}
                        </div>
                      </div>

                      {item.errorMessage && (
                        <div>
                          <h4 className="font-semibold mb-2">오류 메시지</h4>
                          <CodeBlock code={item.errorMessage} isError />
                        </div>
                      )}

                      <div>
                        <h4 className="font-semibold mb-2">원인</h4>
                        <div className="text-muted-foreground whitespace-pre-line">
                          {item.cause?.split("\n").map((line, i) => (
                            <p key={i} className="mb-1">
                              {renderTextWithInlineCode(line)}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">해결 방안</h4>
                        <div className="text-muted-foreground whitespace-pre-line">
                          {item.solution?.split("\n").map((line, i) => (
                            <p key={i} className="mb-1">
                              {renderTextWithInlineCode(line)}
                            </p>
                          ))}
                        </div>
                      </div>

                      {item.beforeCode && (
                        <div>
                          <h4 className="font-semibold mb-2">변경 전</h4>
                          <CodeBlock code={item.beforeCode} showLineNumbers />
                        </div>
                      )}

                      {item.afterCode && (
                        <div>
                          <h4 className="font-semibold mb-2">변경 후</h4>
                          <CodeBlock code={item.afterCode} showLineNumbers />
                        </div>
                      )}

                      <div>
                        <h4 className="font-semibold mb-2">결과</h4>
                        <p className="text-muted-foreground whitespace-pre-line">{item.result}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* 트러블슈팅 섹션을 스크롤하여 볼 수 있도록 하단 여백 추가 */}
      <div className="h-[50vh]" />

      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-black/95 border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={handlePrevImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            {project.galleryImages && project.galleryImages[lightboxIndex] && (() => {
              const currentMedia = project.galleryImages[lightboxIndex]
              const isVideo = currentMedia.endsWith(".mp4") || currentMedia.endsWith(".webm") || currentMedia.endsWith(".mov")
              return isVideo ? (
                <video
                  key={lightboxIndex}
                  src={currentMedia}
                  className="max-w-full max-h-[85vh] object-contain"
                  controls
                  autoPlay
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={currentMedia || "/placeholder.svg"}
                  alt={`${project.title} 스크린샷 ${lightboxIndex + 1}`}
                  className="max-w-full max-h-[85vh] object-contain"
                />
              )
            })()}

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={handleNextImage}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {lightboxIndex + 1} / {project.galleryImages?.length || 0}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
