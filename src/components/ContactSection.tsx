import { Mail, Linkedin, Github, Instagram, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const socials = [
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/gilang-swandaru/",
      color: "hover:text-[#0A66C2]"
    },
    { 
      icon: Github, 
      label: "GitHub", 
      href: "https://github.com/glng-swndru",
      color: "hover:text-foreground"
    },
    { 
      icon: Instagram, 
      label: "Instagram", 
      href: "https://instagram.com/gilangswandaru",
      color: "hover:text-[#E4405F]"
    },
    { 
      icon: Mail, 
      label: "Email", 
      href: "mailto:gilangswandaru@gmail.com",
      color: "hover:text-primary"
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-mono text-primary text-sm mb-4 block">// GET IN TOUCH</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's <span className="text-primary text-glow">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            I'm always open to discussing new opportunities, security challenges, 
            or just connecting with fellow tech enthusiasts.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {socials.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="lg"
                className={`border-border bg-card/50 text-muted-foreground ${social.color} hover:border-primary/50 transition-all`}
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="w-5 h-5 mr-2" />
                  {social.label}
                </a>
              </Button>
            ))}
          </div>

          {/* Terminal-style message */}
          <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
              <span className="w-3 h-3 rounded-full bg-destructive/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-primary/80" />
              <span className="ml-2 text-muted-foreground text-xs">terminal</span>
            </div>
            <div className="text-left space-y-2">
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> echo "Thanks for visiting!"
              </p>
              <p className="text-foreground">Thanks for visiting!</p>
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> cat status.txt
              </p>
              <p className="text-primary animate-pulse-glow">Open to new opportunities...</p>
              <p className="text-muted-foreground flex items-center">
                <span className="text-primary">$</span>
                <span className="ml-1 w-2 h-4 bg-primary animate-pulse" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;