import { Shield, FileCheck, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const specializations = [
    {
      icon: Shield,
      title: "Blue Team Security",
      description: "Learning threat detection, incident response, and security monitoring"
    },
    {
      icon: FileCheck,
      title: "GRC & Compliance",
      description: "Applying regulation and compliance experience to IT security frameworks"
    },
    {
      icon: Search,
      title: "Security Analysis",
      description: "Developing skills in log analysis, SIEM, and threat hunting"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm mb-4 block">// ABOUT ME</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Who I <span className="text-primary text-glow">Am</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-center mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am an Information Technology graduate currently transitioning into Cybersecurity 
              with a focus on Blue Team operations and GRC (Governance, Risk, and Compliance).
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I currently work in regulation and compliance in the mining industry. While not 
              directly in IT, this experience has given me a strong foundation in compliance 
              frameworks, risk assessment, and regulatory requirements — skills that are highly 
              transferable to IT security and GRC roles.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm actively building my technical skills in security monitoring, SIEM tools, 
              and incident response through personal projects and continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <Card 
                key={spec.title}
                className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:box-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <spec.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{spec.title}</h3>
                  <p className="text-sm text-muted-foreground">{spec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;