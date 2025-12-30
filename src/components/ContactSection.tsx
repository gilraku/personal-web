import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const ContactSection = () => {
  const socials = [
    { 
      icon: Mail, 
      label: "Email", 
      href: "mailto:gilangswandaru@gmail.com",
      username: "gilangswandaru@gmail.com"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/gilang-swandaru/",
      username: "gilang-swandaru"
    },
    { 
      icon: Github, 
      label: "GitHub", 
      href: "https://github.com/glng-swndru",
      username: "glng-swndru"
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-sm text-primary font-medium mb-3">Contact</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <p className="text-muted-foreground mb-10">
              Interested in cybersecurity or just want to say hello? 
              I'm always open to connecting with fellow learners and professionals.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-all group hover-lift"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">{social.label}</p>
                    <p className="text-xs text-muted-foreground">{social.username}</p>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-12 pt-12 border-t border-border">
              <Button size="lg" asChild>
                <a href="mailto:gilangswandaru@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Me an Email
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
