import { GraduationCap, Award, BookOpen, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import { useInView } from "@/hooks/useInView";
import { TryHackMeIcon, LetsDefendIcon } from "@/components/icons/PlatformIcons";

const EducationSection = () => {
  const [statsRef, statsInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  const platformStats = [
    {
      platform: "TryHackMe",
      username: "GSec",
      link: "https://tryhackme.com/p/GSec",
      stats: [
        { label: "Rank", value: "Top 8%", isNumber: false },
        { label: "Rooms", value: 84, isNumber: true },
        { label: "Badges", value: 11, isNumber: true },
        { label: "Streak", value: 28, isNumber: true, suffix: " days" },
      ],
      level: "0x8 [HACKER]",
      color: "red-team",
      iconColor: "#88cc14"
    },
    {
      platform: "LetsDefend",
      username: "gilang",
      link: "https://app.letsdefend.io/user/gilang",
      stats: [
        { label: "Points", value: 1433, isNumber: true },
        { label: "SLA", value: 100, isNumber: true, suffix: "%" },
        { label: "Success", value: 100, isNumber: true, suffix: "%" },
        { label: "Status", value: "VIP+", isNumber: false },
      ],
      badges: ["Windows User", "Network Engineer", "Incident Handler"],
      color: "blue-team",
      iconColor: "#3b82f6"
    }
  ];

  const knowHow = [
    "Windows OS Fundamentals",
    "Network Fundamentals", 
    "Malware Analysis Fundamentals",
    "MITRE ATT&CK Framework"
  ];

  const alertTypes = [
    "Exchange Proxy", "Malware", "Ransomware", "Brute Force",
    "Web Attack", "C2", "Privilege Escalation", "Persistence"
  ];

  return (
    <section id="education" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
              <span className="font-mono text-primary text-sm">LEARNING PLATFORMS</span>
              <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My <span className="text-primary">Progress</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Platform Stats Cards */}
        <div ref={statsRef} className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {platformStats.map((platform, platformIndex) => (
            <ScrollReveal key={platform.platform} delay={platformIndex * 150} direction={platformIndex === 0 ? 'left' : 'right'}>
              <Card className={`bg-card/50 border-border hover:border-${platform.color}/50 transition-all duration-300`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg bg-${platform.color}/10 border border-${platform.color}/30 flex items-center justify-center`}>
                        {platform.platform === "TryHackMe" ? (
                          <TryHackMeIcon className="w-7 h-7" style={{ color: platform.iconColor }} />
                        ) : (
                          <LetsDefendIcon className="w-7 h-7" style={{ color: platform.iconColor }} />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{platform.platform}</h3>
                        <p className="text-sm text-muted-foreground">@{platform.username}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" asChild>
                      <a href={platform.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  {platform.level && (
                    <div className="mb-4 px-3 py-1.5 rounded bg-red-team/10 border border-red-team/30 inline-block">
                      <span className="font-mono text-sm text-red-team">{platform.level}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {platform.stats.map((stat) => (
                      <div key={stat.label} className="text-center p-3 rounded-lg bg-secondary/50 border border-border">
                        <p className={`text-xl font-bold ${platform.color === 'red-team' ? 'text-red-team' : 'text-blue-team'}`}>
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

                  {platform.badges && (
                    <div className="flex flex-wrap gap-2">
                      {platform.badges.map((badge) => (
                        <span key={badge} className="px-2 py-1 text-xs font-mono bg-blue-team/10 text-blue-team rounded border border-blue-team/20">
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Skills from LetsDefend */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ScrollReveal delay={100}>
            <Card className="bg-card/50 border-border h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-5 h-5 text-blue-team" />
                  <h3 className="text-lg font-semibold text-foreground">Know How</h3>
                </div>
                <div className="space-y-2">
                  {knowHow.map((skill, index) => (
                    <ScrollReveal key={skill} delay={150 + index * 50}>
                      <div className="flex items-center gap-2 p-2 rounded bg-secondary/50">
                        <span className="w-2 h-2 rounded-full bg-blue-team" />
                        <span className="text-sm text-muted-foreground">{skill}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Card className="bg-card/50 border-border h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-5 h-5 text-red-team" />
                  <h3 className="text-lg font-semibold text-foreground">Investigated Alert Types</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {alertTypes.map((alert, index) => (
                    <ScrollReveal key={alert} delay={200 + index * 30}>
                      <span className="px-2 py-1 text-xs font-mono bg-red-team/10 text-red-team rounded border border-red-team/20">
                        {alert}
                      </span>
                    </ScrollReveal>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        {/* Formal Education */}
        <ScrollReveal delay={300}>
          <div className="max-w-5xl mx-auto mt-12">
            <Card className="bg-card/50 border-border hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Formal Education</h3>
                    <p className="text-primary font-medium">Institut Teknologi Sapta Mandiri</p>
                    <p className="text-sm text-muted-foreground">Bachelor of Information Technology</p>
                    <p className="text-xs text-muted-foreground mt-1">2019 - 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EducationSection;