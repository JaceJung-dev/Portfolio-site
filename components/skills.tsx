import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    category: "Programming & Frameworks",
    skills: ["Python", "Django", "FastAPI", "PyTorch", "LangChain", "R"],
  },
  {
    category: "Infrastructure & Cloud",
    skills: ["AWS", "Nginx", "Docker"],
  },
  {
    category: "Development Tools & Collaboration",
    skills: ["Git", "GitHub", "VSCode", "Neovim", "Linux"],
  },
  {
    category: "Languages",
    skills: ["English: Business-level communication"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4 text-muted-foreground">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="outline" className="text-base py-2 px-4">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
