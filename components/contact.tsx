import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"
import { ContactForm } from "./contact-form"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Contact</h2>

        <div className="space-y-6">
          <Card>
            <CardContent className="flex flex-col gap-6">
              <div className="flex items-center gap-3 text-base md:text-[21.5px] break-all">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <a
                  href="mailto:jacejung.dev@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  jacejung.dev@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Send a message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        <footer className="mt-20 pt-8 border-t text-center text-muted-foreground">
          <p>© 2025 JaceJung-dev.</p>
          <p>All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}
