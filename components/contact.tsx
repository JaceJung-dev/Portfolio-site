import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Contact</h2>
        <Card>
          
          <CardContent className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-lg">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <a href="mailto:jacejung.dev@gmail.com" className="hover:text-primary transition-colors">
                jacejung.dev@gmail.com
              </a>
            </div>
          </CardContent>
        </Card>

        <footer className="mt-20 pt-8 border-t text-center text-muted-foreground">
          <p>© 2025 JaceJung-dev.</p>
          <p>All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}
