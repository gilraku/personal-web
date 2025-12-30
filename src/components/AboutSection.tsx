import { Shield, Target, FileCheck, BookOpen } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const AboutSection = () => {
  const expertise = [
    {
      icon: Shield,
      title: "Blue Team",
      description: "Learning threat detection, SIEM tools, and incident response fundamentals"
    },
    {
      icon: Target,
      title: "Red Team",
      description: "Understanding offensive techniques to build stronger defenses"
    },
    {
      icon: FileCheck,
      title: "GRC",
      description: "Studying governance, risk management, and compliance frameworks"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Active on TryHackMe and LetsDefend, building skills daily"
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm text-primary font-medium mb-3">About</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Passionate about Security
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an IT graduate at the beginning of my cybersecurity journey. 
                I believe in learning by doing—building home labs, solving CTF challenges, 
                and constantly expanding my knowledge of both defensive and offensive security.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <ScrollReveal key={item.title} delay={100 + index * 100}>
                <div className="p-6 rounded-xl border border-border bg-card hover-lift group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
