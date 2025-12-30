import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import { useInView } from "@/hooks/useInView";

const EducationSection = () => {
  const [statsRef, statsInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  const platforms = [
    {
      name: "TryHackMe",
      username: "@GSec",
      link: "https://tryhackme.com/p/GSec",
      stats: [
        { label: "Rank", value: "Top 8%", isNumber: false },
        { label: "Rooms", value: 84, isNumber: true },
        { label: "Badges", value: 11, isNumber: true },
      ]
    },
    {
      name: "LetsDefend",
      username: "@gilang",
      link: "https://app.letsdefend.io/user/gilang",
      stats: [
        { label: "Points", value: 1433, isNumber: true },
        { label: "Success", value: 100, isNumber: true, suffix: "%" },
        { label: "Status", value: "VIP+", isNumber: false },
      ]
    }
  ];

  return (
    <section id="education" className="py-36 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <ScrollReveal>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-8">
              Progress
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-display text-display-sm md:text-display-md font-normal text-foreground mb-16">
              Learning journey
            </h2>
          </ScrollReveal>

          {/* Platform stats - Timeline style */}
          <div ref={statsRef} className="space-y-16 mb-24">
            {platforms.map((platform, index) => (
              <ScrollReveal key={platform.name} delay={150 + index * 100}>
                <div className="grid grid-cols-12 gap-4 md:gap-8">
                  {/* Platform name */}
                  <div className="col-span-12 md:col-span-3">
                    <a 
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <p className="font-display text-lg text-foreground group-hover:text-primary transition-colors duration-500">
                        {platform.name}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground">
                        {platform.username}
                      </p>
                    </a>
                  </div>

                  {/* Stats - Large numbers */}
                  <div className="col-span-12 md:col-span-9 grid grid-cols-3 gap-8">
                    {platform.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="font-display text-3xl md:text-4xl text-foreground">
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
                        <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Education */}
          <ScrollReveal delay={300}>
            <div className="border-t border-border pt-12">
              <div className="grid grid-cols-12 gap-4 md:gap-8">
                <div className="col-span-12 md:col-span-3">
                  <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                    Education
                  </p>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <p className="font-display text-lg text-foreground">
                    Institut Teknologi Sapta Mandiri
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Bachelor of Information Technology · 2019 — 2023
                  </p>
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