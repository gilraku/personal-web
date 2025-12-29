import { Mail, Linkedin, Github, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { TryHackMeIcon, LetsDefendIcon } from "@/components/icons/PlatformIcons";

const ContactSection = () => {
  const socials = [
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/gilang-swandaru/",
      isLucide: true,
    },
    { 
      icon: Github, 
      label: "GitHub", 
      href: "https://github.com/glng-swndru",
      isLucide: true,
    },
    { 
      icon: Mail, 
      label: "Email", 
      href: "mailto:gilangswandaru@gmail.com",
      isLucide: true,
    },
  ];

  const platforms = [
    { 
      Icon: TryHackMeIcon, 
      label: "TryHackMe", 
      href: "https://tryhackme.com/p/GSec",
      color: "#88cc14",
    },
    { 
      Icon: LetsDefendIcon, 
      label: "LetsDefend", 
      href: "https://app.letsdefend.io/user/gilang",
      color: "#3b82f6",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
              <span className="font-mono text-primary text-sm">CONNECT</span>
              <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's <span className="text-blue-team">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Fellow learner? Experienced professional? Let's connect and grow together in the security community!
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {socials.map((social, index) => (
                <ScrollReveal key={social.label} delay={150 + index * 50}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="w-5 h-5 mr-2" />
                      {social.label}
                    </a>
                  </Button>
                </ScrollReveal>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {platforms.map((platform, index) => (
                <ScrollReveal key={platform.label} delay={300 + index * 50}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    asChild
                  >
                    <a href={platform.href} target="_blank" rel="noopener noreferrer">
                      <platform.Icon className="w-5 h-5 mr-2" style={{ color: platform.color }} />
                      {platform.label}
                    </a>
                  </Button>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Terminal */}
          <ScrollReveal delay={400}>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                <span className="w-3 h-3 rounded-full bg-red-team/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-blue-team/80" />
                <span className="ml-2 text-muted-foreground text-xs font-mono">gsec@security:~$</span>
              </div>
              <div className="p-6 font-mono text-sm text-left space-y-3">
                <div className="flex items-center gap-2">
                  <TryHackMeIcon className="w-4 h-4" style={{ color: "#88cc14" }} />
                  <span className="text-muted-foreground">TryHackMe:</span>
                  <span className="text-red-team">Top 8% | 84 Rooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <LetsDefendIcon className="w-4 h-4" style={{ color: "#3b82f6" }} />
                  <span className="text-muted-foreground">LetsDefend:</span>
                  <span className="text-blue-team">1433 Points | 100% Success</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Status:</span>
                  <span className="text-primary animate-pulse">Always learning...</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <span>$</span>
                  <span className="ml-1 w-2 h-4 bg-primary animate-pulse" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;