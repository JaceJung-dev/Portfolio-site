"use client"

import { notFound, useRouter } from "next/navigation"
import { projects } from "@/components/projects"
import { Header } from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ArrowLeft, Github, Play, FileText, Check, ChevronLeft, ChevronRight, Users } from "lucide-react"
import { useState, useEffect } from "react"

function renderTextWithInlineCode(text: string) {
  const parts = text.split(/(`[^`]+`)/g)
  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      const code = part.slice(1, -1)
      return (
        <code key={index} className="px-1.5 py-0.5 bg-gray-200 dark:bg-muted rounded text-body-sm font-mono text-gray-800 dark:text-primary">
          {code}
        </code>
      )
    }
    return part
  })
}

function renderEmphasized(text: string) {
  const parts = text.split(/(\*\*.+?\*\*)/g)
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <span key={index} className="text-foreground font-medium">
          {part.slice(2, -2)}
        </span>
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
      return [{ type: "text", value: " " }]
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
        <pre className="p-4 text-sm font-mono leading-7">
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

type CoreWork = {
  type: "metric" | "feature"
  layout?: "vertical" | "horizontal"
  tag: string
  subLabel: string
  title: string
  description: string
  image?: string
  images?: { src: string; caption?: string; size?: "sm" | "md" | "lg" | "xl" | "2xl" }[]
  imageTodo?: string
  imagePlacement?: "auto" | "bottom"
  metrics?: {
    label: string
    before?: string
    after?: string
    delta?: string
    comparator?: string
    lineup?: string[]
  }[]
  highlights?: {
    label: string
    items: { label: string; before: string; after: string }[]
  }
  capabilities?: string[]
  problem?: string
  solution?: string
  pillars?: { name: string; lines: string[] }[]
  processes?: {
    label?: string
    numbered?: boolean
    steps: { title: string; detail: string }[]
  }[]
  codeBlock?: {
    title?: string
    language?: string
    code: string
  }
  flow?: { label?: string; steps: string[] }
  notes?: { label?: string; body: string }[]
}

function CoreWorkCard({
  work,
  onImageClick,
}: {
  work: CoreWork
  onImageClick?: (images: string[], index: number) => void
}) {
  const isHorizontal = work.layout === "horizontal"

  const headerTop = (
    <>
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <Badge
          variant={work.type === "metric" ? "default" : "secondary"}
          className={`text-sm px-3 py-1 ${
            work.type === "feature"
              ? work.tag === "협업"
                ? "bg-teal-600 text-white hover:bg-teal-600/90 border-transparent"
                : "bg-violet-600 text-white hover:bg-violet-600/90 border-transparent"
              : ""
          }`}
        >
          {work.tag}
        </Badge>
        <span className="text-sm text-muted-foreground">{work.subLabel}</span>
      </div>
      <h4 className="text-2xl font-semibold leading-snug">{work.title}</h4>
    </>
  )

  const descriptionEl = (
    <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
      {renderEmphasized(work.description)}
    </p>
  )

  const imageBlock = work.image ? (
    <div
      className={`w-full h-full bg-muted rounded-lg overflow-hidden ${
        onImageClick ? "cursor-zoom-in hover:opacity-90 transition-opacity" : ""
      }`}
      onClick={onImageClick && work.image ? () => onImageClick([work.image!], 0) : undefined}
    >
      <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
    </div>
  ) : (
    <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center text-xs text-muted-foreground p-4 text-center">
      <span className="font-mono leading-relaxed">
        {`// TODO: ${work.imageTodo ?? "작업 전용 이미지 추가 필요"}`}
      </span>
    </div>
  )

  const metricBoxes =
    work.metrics && work.metrics.length > 0
      ? work.metrics.map((m, i) => (
          <div key={`metric-${i}`} className="bg-muted/60 rounded-lg px-5 py-4">
            <p className="text-lg font-semibold text-foreground mb-2.5">{m.label}</p>
            {m.lineup && m.lineup.length > 0 ? (
              <div className="flex items-baseline gap-x-2.5 gap-y-1.5 flex-wrap">
                {m.lineup.map((val, idx) => (
                  <span key={idx} className="flex items-baseline gap-2">
                    {idx > 0 && (
                      <span className="text-muted-foreground text-base">
                        {m.comparator ?? "→"}
                      </span>
                    )}
                    <span
                      className={
                        idx === m.lineup!.length - 1
                          ? "text-2xl font-semibold text-emerald-600 dark:text-emerald-400"
                          : "text-lg text-muted-foreground"
                      }
                    >
                      {val}
                    </span>
                  </span>
                ))}
              </div>
            ) : (
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-xl text-muted-foreground">{m.before}</span>
                <span className="text-muted-foreground text-lg">{m.comparator ?? "→"}</span>
                <span className="text-3xl font-semibold text-emerald-600 dark:text-emerald-400">
                  {m.after}
                </span>
              </div>
            )}
            {m.delta && (
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-1.5">
                {m.delta}
              </p>
            )}
          </div>
        ))
      : []

  const highlightsBox = work.highlights ? (
    <div key="highlights" className="bg-muted/60 rounded-lg px-5 py-4">
      <p className="text-lg font-semibold text-foreground mb-3">{work.highlights.label}</p>
      <ul
        className={`grid gap-x-8 gap-y-2.5 ${
          work.highlights.items.length >= 4
            ? "grid-cols-1 sm:grid-cols-2 sm:grid-flow-col sm:grid-rows-3"
            : "grid-cols-1"
        }`}
      >
        {work.highlights.items.map((it, i) => (
          <li key={i} className="flex items-baseline justify-between gap-3 max-w-[260px]">
            <span className="text-base text-foreground">{it.label}</span>
            <span className="flex items-baseline gap-2 shrink-0">
              <span className="text-base text-muted-foreground">{it.before}</span>
              <span className="text-muted-foreground text-sm">→</span>
              <span className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                {it.after}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  ) : null

  const evidenceCells = [...metricBoxes, highlightsBox].filter(Boolean)
  const hasLineupMetric = work.metrics?.some((m) => m.lineup && m.lineup.length > 0)

  const evidenceGrid =
    evidenceCells.length > 0 ? (
      <div className={`grid gap-3 ${hasLineupMetric ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
        {evidenceCells}
      </div>
    ) : null

  const pillarCount = work.pillars?.length ?? 0
  const pillarColsClass =
    pillarCount <= 2
      ? "sm:grid-cols-2"
      : pillarCount === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-4"

  const pillarsGrid =
    work.pillars && work.pillars.length > 0 ? (
      <div className={`grid grid-cols-1 ${pillarColsClass} gap-3`}>
        {work.pillars.map((p, i) => (
          <div key={i} className="border border-border rounded-lg p-5 bg-muted/30">
            <p className="text-base font-semibold mb-2">{p.name}</p>
            <div className="space-y-1">
              {p.lines.map((l, j) => (
                <p key={j} className="text-base text-muted-foreground leading-relaxed">
                  {l}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    ) : null

  const codeBlockEl = work.codeBlock ? (
    <div className="border border-border rounded-lg p-6 bg-muted/30">
      {work.codeBlock.title && (
        <p className="text-xl font-semibold mb-5 text-emerald-600 dark:text-emerald-400">
          {work.codeBlock.title}
        </p>
      )}
      <div className="dark">
        <CodeBlock code={work.codeBlock.code} language={work.codeBlock.language} />
      </div>
    </div>
  ) : null

  const flowStrip =
    work.flow && work.flow.steps.length > 0 ? (
      <div className="border border-border rounded-lg p-5 bg-muted/30">
        <p className="text-lg font-semibold mb-3 text-emerald-600 dark:text-emerald-400">
          {work.flow.label ?? "구현 흐름"}
        </p>
        <div className="flex items-baseline gap-x-3 gap-y-2 flex-wrap">
          {work.flow.steps.flatMap((step, i) => {
            const stepEl = (
              <div key={`step-${i}`} className="flex items-baseline gap-2">
                <span className="font-mono text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span className="text-base text-foreground">{step}</span>
              </div>
            )
            return i === 0
              ? [stepEl]
              : [
                  <span key={`arrow-${i}`} className="text-muted-foreground text-base">
                    →
                  </span>,
                  stepEl,
                ]
          })}
        </div>
      </div>
    ) : null

  const processList = work.processes?.filter((p) => p.steps.length > 0) ?? []
  let runningStepCount = 0
  const processBoxes = processList.map((proc, boxIdx) => {
    const numbered = proc.numbered !== false
    const startIndex = runningStepCount
    if (numbered) runningStepCount += proc.steps.length
    return (
      <div key={boxIdx} className="border border-border rounded-lg p-6 bg-muted/30 flex flex-col h-full">
        <p className="text-xl font-semibold mb-5 text-emerald-600 dark:text-emerald-400">
          {proc.label ?? "개선 과정"}
        </p>
        <ol
          className={
            numbered
              ? "space-y-5"
              : "flex-1 flex flex-col justify-around gap-y-5"
          }
        >
          {proc.steps.map((s, i) => (
            <li key={i} className="flex gap-4">
              {numbered && (
                <span className="font-mono text-base font-semibold text-emerald-600 dark:text-emerald-400 pt-1 shrink-0 w-9">
                  {String(startIndex + i + 1).padStart(2, "0")}.
                </span>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-lg font-semibold text-foreground mb-1.5">{s.title}</p>
                <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                  {s.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    )
  })

  const processEvidence =
    processBoxes.length > 0 ? <div className="space-y-3">{processBoxes}</div> : null

  const capabilitiesChips =
    work.type === "feature" && work.capabilities && work.capabilities.length > 0 ? (
      <div>
        <p className="text-xs text-muted-foreground mb-2">구현 범위</p>
        <div className="flex flex-wrap gap-1.5">
          {work.capabilities.map((c, i) => (
            <span
              key={i}
              className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    ) : null

  const capabilitiesBullets =
    work.type === "feature" && work.capabilities && work.capabilities.length > 0 ? (
      <div>
        <p className="text-sm text-muted-foreground mb-3">구현 범위</p>
        <ul className="space-y-2">
          {work.capabilities.map((c, i) => (
            <li key={i} className="flex items-start gap-2.5 text-base text-muted-foreground leading-relaxed">
              <Check className="w-[18px] h-[18px] text-primary mt-1 flex-shrink-0" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    ) : null

  const isNarrative =
    isHorizontal &&
    (!!work.problem ||
      !!work.solution ||
      (!!work.pillars && work.pillars.length > 0))

  const narrativeProcessSteps = processList[0]?.steps ?? []

  const narrativeColumn = isNarrative ? (
    <div className="flex flex-col gap-3 md:h-full">
      {work.problem && (
        <div className="border border-border rounded-lg p-5 bg-muted/30 md:flex-1 flex flex-col justify-center">
          <p className="text-lg font-semibold mb-2.5 text-emerald-600 dark:text-emerald-400">문제 정의</p>
          <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">{work.problem}</p>
        </div>
      )}
      {work.solution && (
        <div className="border border-border rounded-lg p-5 bg-muted/30 md:flex-1 flex flex-col gap-4">
          <div>
            <p className="text-lg font-semibold mb-2.5 text-emerald-600 dark:text-emerald-400">해결 구조</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{work.solution}</p>
          </div>
          {narrativeProcessSteps.length > 0 && (
            <ol className="space-y-3">
              {narrativeProcessSteps.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-mono text-sm font-semibold text-emerald-600 dark:text-emerald-400 pt-0.5 shrink-0 w-7">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-semibold text-foreground mb-0.5">{s.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                      {s.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}
      {work.pillars && work.pillars.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 shrink-0">
          {work.pillars.map((p, i) => (
            <div key={i} className="border border-border rounded-lg p-5 bg-muted/30">
              <p className="text-base font-semibold mb-2">{p.name}</p>
              <div className="space-y-1">
                {p.lines.map((l, j) => (
                  <p key={j} className="text-base text-muted-foreground leading-relaxed">
                    {l}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  ) : null

  if (isHorizontal) {
    const narrativeImageBlock = work.image ? (
      <div
        className={`w-full h-full bg-muted rounded-lg overflow-hidden flex items-center justify-center ${
          onImageClick ? "cursor-zoom-in hover:opacity-90 transition-opacity" : ""
        }`}
        onClick={onImageClick && work.image ? () => onImageClick([work.image!], 0) : undefined}
      >
        <img src={work.image} alt={work.title} className="w-full h-full object-contain" />
      </div>
    ) : (
      imageBlock
    )

    return (
      <Card className="p-6">
        <div className="mb-5">{headerTop}</div>
        {isNarrative && work.description && <div className="mb-5">{descriptionEl}</div>}
        {isNarrative && evidenceGrid && <div className="mb-5">{evidenceGrid}</div>}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
            isNarrative ? "md:items-stretch items-start" : "items-start"
          }`}
        >
          <div className={isNarrative ? "aspect-square md:aspect-auto md:h-full md:min-h-[420px]" : "aspect-square"}>
            {isNarrative ? narrativeImageBlock : imageBlock}
          </div>
          {isNarrative ? (
            narrativeColumn
          ) : (
            <div className="space-y-4">
              {descriptionEl}
              {evidenceGrid}
              {capabilitiesBullets}
            </div>
          )}
        </div>
      </Card>
    )
  }

  const naturalImageList: { src: string; caption?: string; size?: string }[] = work.images?.length
    ? work.images
    : work.image
      ? [{ src: work.image }]
      : []

  const IMAGE_MAX_WIDTH: Record<string, string> = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
  }

  const allImageSrcs = naturalImageList.map((img) => img.src)

  const imagesBlock =
    naturalImageList.length > 0 ? (
      <div className="space-y-5">
        {naturalImageList.map((img, i) => (
          <figure
            key={i}
            className={img.size ? `${IMAGE_MAX_WIDTH[img.size]} mx-auto` : ""}
          >
            <div
              className={`bg-muted rounded-lg overflow-hidden ${
                onImageClick ? "cursor-zoom-in hover:opacity-90 transition-opacity" : ""
              }`}
              onClick={onImageClick ? () => onImageClick(allImageSrcs, i) : undefined}
            >
              <img
                src={img.src}
                alt={img.caption ?? `${work.title} ${i + 1}`}
                className="w-full h-auto block"
              />
            </div>
            {img.caption && (
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    ) : work.imageTodo ? (
      <div className="h-48 bg-muted rounded-lg flex items-center justify-center text-xs text-muted-foreground p-4 text-center">
        <span className="font-mono leading-relaxed">{`// TODO: ${work.imageTodo}`}</span>
      </div>
    ) : null

  const notesBlock =
    work.notes && work.notes.length > 0 ? (
      <div className="space-y-3">
        {work.notes.map((n, i) => (
          <div key={i} className="border border-border rounded-lg p-5 bg-muted/30">
            {n.label && (
              <p className="text-base font-semibold mb-2 text-red-600 dark:text-red-400">
                {n.label}
              </p>
            )}
            <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
              {renderEmphasized(n.body)}
            </p>
          </div>
        ))}
      </div>
    ) : null

  const imageAtBottom = work.imagePlacement === "bottom"
  const pairCodeAndProcess = !!codeBlockEl && !!processEvidence && (!imagesBlock || imageAtBottom)
  const pairCodeAndImage = !!codeBlockEl && !!imagesBlock && !imageAtBottom
  const pairImageAndProcess = !!imagesBlock && !!processEvidence && !codeBlockEl && !imageAtBottom
  const pairProcesses =
    !codeBlockEl && (!imagesBlock || imageAtBottom) && processBoxes.length === 2

  return (
    <Card className="p-6">
      <div className="mb-3">{headerTop}</div>
      <div>{descriptionEl}</div>
      {evidenceGrid && <div className="mt-5">{evidenceGrid}</div>}
      {pillarsGrid && <div className="mt-5">{pillarsGrid}</div>}
      {notesBlock && <div className="mt-5">{notesBlock}</div>}
      {pairCodeAndProcess ? (
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
          <div>{codeBlockEl}</div>
          <div>{processEvidence}</div>
        </div>
      ) : pairCodeAndImage ? (
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
          <div>{codeBlockEl}</div>
          <div>{imagesBlock}</div>
        </div>
      ) : pairImageAndProcess ? (
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
          <div>{imagesBlock}</div>
          <div>{processEvidence}</div>
        </div>
      ) : pairProcesses ? (
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
          <div className="h-full [&>div]:h-full">{processBoxes[0]}</div>
          <div className="h-full [&>div]:h-full">{processBoxes[1]}</div>
          {imageAtBottom && imagesBlock && (
            <div className="col-span-full mt-5">{imagesBlock}</div>
          )}
        </div>
      ) : (
        <>
          {codeBlockEl && <div className="mt-5">{codeBlockEl}</div>}
          {processEvidence && <div className="mt-5">{processEvidence}</div>}
          {imagesBlock && <div className="mt-5">{imagesBlock}</div>}
        </>
      )}
      {flowStrip && <div className="mt-5">{flowStrip}</div>}
      {capabilitiesChips && <div className="mt-5">{capabilitiesChips}</div>}
    </Card>
  )
}

export default function ProjectDetailClient({ id }: { id: string }) {
  const project = projects.find((p) => p.id === id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxImages, setLightboxImages] = useState<string[]>([])
  const [activeCoreWorkIndex, setActiveCoreWorkIndex] = useState(0)
  const [activeTab, setActiveTab] = useState("overview")
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (activeTab !== "core-works") return
    if (!project?.coreWorks || project.coreWorks.length === 0) return

    const visibleIndices = new Set<number>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = parseInt(entry.target.id.replace("core-work-", ""), 10)
          if (Number.isNaN(idx)) return
          if (entry.isIntersecting) {
            visibleIndices.add(idx)
          } else {
            visibleIndices.delete(idx)
          }
        })
        if (visibleIndices.size > 0) {
          setActiveCoreWorkIndex(Math.min(...visibleIndices))
        }
      },
      { rootMargin: "-100px 0px -50% 0px", threshold: 0 }
    )

    // Defer observation to next tick so the tab content is fully painted
    const timer = setTimeout(() => {
      project.coreWorks!.forEach((_, idx) => {
        const el = document.getElementById(`core-work-${idx}`)
        if (el) observer.observe(el)
      })
    }, 0)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [activeTab, project])

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

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images)
    setLightboxIndex(index)
    setIsLightboxOpen(true)
  }

  const handlePrevImage = () => {
    if (lightboxImages.length === 0) return
    setLightboxIndex((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    if (lightboxImages.length === 0) return
    setLightboxIndex((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Button variant="ghost" className="mb-8 text-[15.5px]" onClick={handleBackToProjects}>
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
                <p className="text-[20.5px] text-muted-foreground">{project.description}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[16.5px] font-semibold text-muted-foreground w-28">프로젝트 유형</span>
                  <span className="text-[16.5px]">{project.type}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[16.5px] font-semibold text-muted-foreground w-28">기간</span>
                  <span className="text-[16.5px]">{project.period}</span>
                </div>
                {project.teamSize && (
                  <div className="flex items-center gap-3">
                    <span className="text-[16.5px] font-semibold text-muted-foreground w-28">인원</span>
                    <span className="text-[16.5px]">{project.teamSize}</span>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <span className="text-[16.5px] font-semibold text-muted-foreground w-28">역할</span>
                  <span className="text-[16.5px]">{project.role}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-[13px]">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3 pt-4">
                {project.demo && (
                  <Button asChild className="flex-1 text-[15px]">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Play className="w-4 h-4 mr-2" />
                      시연 영상
                    </a>
                  </Button>
                )}
                <Button variant="outline" asChild className="flex-1 bg-transparent text-[15px]">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                {project.docs && (
                  <Button variant="outline" asChild className="flex-1 bg-transparent text-[15px]">
                    <a href={project.docs} target="_blank" rel="noopener noreferrer">
                      <FileText className="w-4 h-4 mr-2" />
                      프로젝트 문서
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 !h-auto p-1">
              <TabsTrigger
                value="overview"
                className="!h-auto py-2.5 text-base md:text-lg data-[state=active]:font-semibold dark:data-[state=active]:!bg-background dark:data-[state=active]:!text-primary dark:data-[state=active]:!border-primary/40 dark:data-[state=active]:shadow-md"
              >
                개요
              </TabsTrigger>
              <TabsTrigger
                value="core-works"
                className="!h-auto py-2.5 text-base md:text-lg data-[state=active]:font-semibold dark:data-[state=active]:!bg-background dark:data-[state=active]:!text-primary dark:data-[state=active]:!border-primary/40 dark:data-[state=active]:shadow-md"
              >
                핵심 작업
              </TabsTrigger>
              <TabsTrigger
                value="implementation"
                className="!h-auto py-2.5 text-base md:text-lg data-[state=active]:font-semibold dark:data-[state=active]:!bg-background dark:data-[state=active]:!text-primary dark:data-[state=active]:!border-primary/40 dark:data-[state=active]:shadow-md"
              >
                개발일지
              </TabsTrigger>
              <TabsTrigger
                value="troubleshooting"
                className="!h-auto py-2.5 text-base md:text-lg data-[state=active]:font-semibold dark:data-[state=active]:!bg-background dark:data-[state=active]:!text-primary dark:data-[state=active]:!border-primary/40 dark:data-[state=active]:shadow-md"
              >
                트러블슈팅
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8 mt-6">
              <div>
                <h3 className="text-[21px] font-semibold mb-4">프로젝트 개요</h3>
                <p className="text-[19px] text-muted-foreground leading-relaxed">{project.overview}</p>
              </div>

              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="text-[21px] font-semibold mb-4">{project.id === "csat-solver" ? "시도 전략" : "전체 기능"}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <Card key={index} className="p-6">
                        <h4 className="font-semibold mb-3 text-[19px]">{feature.category}</h4>
                        <ul className="space-y-2">
                          {feature.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-[18.5px] text-muted-foreground">{item}</span>
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
                  <h3 className="text-[21px] font-semibold mb-4">갤러리</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.galleryImages.map((image, index) => {
                      const isVideo = image.endsWith(".mp4") || image.endsWith(".webm") || image.endsWith(".mov")
                      return (
                        <Card
                          key={index}
                          className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                          onClick={() => openLightbox(project.galleryImages!, index)}
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

            <TabsContent value="core-works" className="mt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Users className="w-4 h-4" />
                <span>팀 프로젝트 중 제가 직접 맡아 진행한 작업만 모았습니다.</span>
              </div>
              {project.coreWorks && project.coreWorks.length > 0 ? (
                <div className="flex gap-6">
                  <div className="flex flex-col gap-4 flex-1 min-w-0">
                    {(project.coreWorks as CoreWork[]).map((work, index) => (
                      <div key={index} id={`core-work-${index}`} className="scroll-mt-24">
                        <CoreWorkCard work={work} onImageClick={openLightbox} />
                      </div>
                    ))}
                  </div>
                  <aside className="hidden lg:block w-56 shrink-0">
                    <div className="sticky top-24">
                      <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                        On this page
                      </p>
                      <ul className="space-y-0.5 border-l border-border">
                        {(project.coreWorks as CoreWork[]).map((work, index) => (
                          <li key={index}>
                            <button
                              type="button"
                              onClick={() => {
                                document
                                  .getElementById(`core-work-${index}`)
                                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
                              }}
                              className={`block w-full text-left text-sm leading-snug py-1.5 pl-3 -ml-px border-l transition-colors ${
                                activeCoreWorkIndex === index
                                  ? "border-foreground text-foreground font-medium"
                                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/40"
                              }`}
                            >
                              {work.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </aside>
                </div>
              ) : (
                <Card className="p-6">
                  <p className="text-sm text-muted-foreground">
                    표시할 핵심 작업이 아직 정리되지 않았습니다.
                  </p>
                </Card>
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
                      <p className="text-body-base text-muted-foreground">
                        자세한 개발 과정과 회고는 블로그 글을 참고해주세요.
                      </p>
                    </Card>
                  ))}
                </div>
              ) : project.implementations && project.implementations.length > 0 ? (
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {project.implementations.map((impl: any, index) => (
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
                          <p className="text-body-base text-muted-foreground whitespace-pre-line">{impl.background}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">구현 내용</h4>
                          <p className="text-body-base text-muted-foreground whitespace-pre-line">{impl.implementation}</p>
                        </div>
                        {impl.codeExample && (
                          <div>
                            <h4 className="font-semibold mb-2">코드 예시</h4>
                            <CodeBlock code={impl.codeExample} showLineNumbers />
                          </div>
                        )}
                        <div>
                          <h4 className="font-semibold mb-2">결과</h4>
                          <p className="text-body-base text-muted-foreground whitespace-pre-line">{impl.result}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <Card className="p-6">
                  <p className="text-body-base text-muted-foreground">등록된 개발일지가 없습니다.</p>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="troubleshooting" className="mt-6 pb-8">
              <Accordion type="single" collapsible className="w-full space-y-4 pb-4">
                {project.troubleshooting?.slice().sort((a, b) => {
                  const numA = parseInt(a.incidentNumber?.replace("INC-", "") || "0");
                  const numB = parseInt(b.incidentNumber?.replace("INC-", "") || "0");
                  return numA - numB;
                }).map((item: any, index) => (
                  <AccordionItem key={index} value={`trouble-${index}`} className="border rounded-lg px-4 last:border-b">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <span className="text-primary font-mono text-body-sm">{item.incidentNumber}</span>
                        <span className="text-muted-foreground">|</span>
                        <Badge variant="outline">{item.category}</Badge>
                        <span className="text-muted-foreground">|</span>
                        <span className="text-left">{item.problem}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <div className="text-body-sm text-muted-foreground">
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
                        <div className="text-body-base text-muted-foreground whitespace-pre-line">
                          {item.symptom?.split("\n").map((line: string, i: number) => (
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
                        <div className="text-body-base text-muted-foreground whitespace-pre-line">
                          {item.cause?.split("\n").map((line: string, i: number) => (
                            <p key={i} className="mb-1">
                              {renderTextWithInlineCode(line)}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">해결 방안</h4>
                        <div className="text-body-base text-muted-foreground whitespace-pre-line">
                          {item.solution?.split("\n").map((line: string, i: number) => (
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
                        <p className="text-body-base text-muted-foreground whitespace-pre-line">{item.result}</p>
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
        <DialogContent
          className="!max-w-[98vw] w-[98vw] !max-h-[98vh] h-[98vh] p-0 bg-black/95 border-none sm:rounded-none"
        >
          <DialogTitle className="sr-only">이미지 확대 보기</DialogTitle>
          <div className="relative w-full h-full flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={handlePrevImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            {lightboxImages.length > 0 && lightboxImages[lightboxIndex] && (() => {
              const currentMedia = lightboxImages[lightboxIndex]
              const isVideo = currentMedia.endsWith(".mp4") || currentMedia.endsWith(".webm") || currentMedia.endsWith(".mov")
              return isVideo ? (
                <video
                  key={lightboxIndex}
                  src={currentMedia}
                  className="max-w-[96vw] max-h-[94vh] object-contain"
                  controls
                  autoPlay
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={currentMedia || "/placeholder.svg"}
                  alt={`${project.title} 스크린샷 ${lightboxIndex + 1}`}
                  className="max-w-[96vw] max-h-[94vh] object-contain"
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

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-body-sm">
              {lightboxIndex + 1} / {lightboxImages.length || 0}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
