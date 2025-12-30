import { GraduationCap, ExternalLink, Trophy, Flame } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import { useInView } from "@/hooks/useInView";

const EducationSection = () => {
  const [statsRef, statsInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  const platforms = [
    {
      name: "TryHackMe",
      username: "GSec",
      link: "https://tryhackme.com/p/GSec",
      icon: Flame,
      stats: [
        { label: "Rank", value: "Top 8%" },
        { label: "Rooms", value: 84, isNumber: true },
        { label: "Badges", value: 11, isNumber: true },
      ]
    },
    {
      name: "LetsDefend",
      username: "gilang",
      link: "https://app.letsdefend.io/user/gilang",
      icon: Trophy,
      stats: [
        { label: "Points", value: 1433, isNumber: true },
        { label: "Success", value: 100, isNumber: true, suffix: "%" },
        { label: "Status", value: "VIP+" },
      ]
    }
  ];

  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm text-primary font-medium mb-3">Progress</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Learning Platforms
              </h2>
            </div>
          </ScrollReveal>

          <div ref={statsRef} className="grid md:grid-cols-2 gap-6 mb-12">
            {platforms.map((platform, index) => (
              <ScrollReveal key={platform.name} delay={100 + index * 100}>
                <div className="p-6 rounded-xl border border-border bg-card hover-lift">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <platform.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground">{platform.name}</h3>
                        <p className="text-xs text-muted-foreground">@{platform.username}</p>
                      </div>
                    </div>
                    <a 
                      href={platform.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {platform.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="font-display font-bold text-lg text-foreground">
                          {stat.isNumber ? (
                            <AnimatedCounter 
                              end={stat.value as number} 
                              suffix={stat.suffix || ''} 
                              inView={statsInView}
                              duration={1500}
                            />
                          ) : (
                            stat.value
                          )}
                        </p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="p-6 rounded-xl border border-border bg-card hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">Education</h3>
                  <p className="text-foreground">Institut Teknologi Sapta Mandiri</p>
                  <p className="text-sm text-muted-foreground">Bachelor of Information Technology • 2019 - 2023</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
