import { Shield, Crosshair, FileCheck, Search, Bug, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const specializations = [
    {
      icon: Shield,
      title: "Blue Team Defense",
      description: "Threat detection, incident response, SIEM monitoring, and security operations",
      color: "blue"
    },
    {
      icon: Crosshair,
      title: "Red Team Awareness",
      description: "Understanding attack vectors, penetration testing concepts, and vulnerability assessment",
      color: "red"
    },
    {
      icon: FileCheck,
      title: "GRC & Compliance",
      description: "Security frameworks, risk assessment, and regulatory compliance",
      color: "neutral"
    },
    {
      icon: Search,
      title: "Threat Hunting",
      description: "Log analysis, IOC investigation, and proactive threat detection",
      color: "blue"
    },
    {
      icon: Bug,
      title: "Malware Analysis",
      description: "Understanding malicious software behavior and indicators",
      color: "red"
    },
    {
      icon: Lock,
      title: "Security Hardening",
      description: "System configuration, access controls, and defense in depth",
      color: "neutral"
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'blue':
        return {
          icon: 'text-blue-team',
          bg: 'bg-blue-team/10 border-blue-team/30 group-hover:bg-blue-team/20',
          hover: 'hover:border-blue-team/50'
        };
      case 'red':
        return {
          icon: 'text-red-team',
          bg: 'bg-red-team/10 border-red-team/30 group-hover:bg-red-team/20',
          hover: 'hover:border-red-team/50'
        };
      default:
        return {
          icon: 'text-primary',
          bg: 'bg-primary/10 border-primary/30 group-hover:bg-primary/20',
          hover: 'hover:border-primary/50'
        };
    }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-blue-team" />
            <span className="font-mono text-blue-team text-sm">ABOUT ME</span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-blue-team" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Security <span className="text-blue-team text-glow-blue">Professional</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-center mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am an Information Technology graduate transitioning into Cybersecurity with deep interest 
              in both <span className="text-blue-team font-medium">Blue Team</span> (defensive) and 
              <span className="text-red-team font-medium"> Red Team</span> (offensive) security operations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My experience in regulation and compliance has given me a strong foundation in security 
              frameworks, risk assessment, and understanding the attacker mindset — essential for 
              building robust defenses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializations.map((spec, index) => {
              const colors = getColorClasses(spec.color);
              return (
                <Card 
                  key={spec.title}
                  className={`bg-card/50 border-border ${colors.hover} transition-all duration-300 group`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-5">
                    <div className={`w-12 h-12 rounded-lg ${colors.bg} border flex items-center justify-center mb-4 transition-colors`}>
                      <spec.icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">{spec.title}</h3>
                    <p className="text-sm text-muted-foreground">{spec.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;