import { GraduationCap, Award, BookOpen, Target, ExternalLink, Trophy, Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EducationSection = () => {
  const platformStats = [
    {
      platform: "TryHackMe",
      username: "GSec",
      link: "https://tryhackme.com/p/GSec",
      stats: [
        { label: "Rank", value: "Top 8%" },
        { label: "Rooms", value: "84" },
        { label: "Badges", value: "11" },
        { label: "Streak", value: "28 days" },
      ],
      level: "0x8 [HACKER]",
      color: "red-team"
    },
    {
      platform: "LetsDefend",
      username: "gilang",
      link: "https://app.letsdefend.io/user/gilang",
      stats: [
        { label: "Points", value: "1,433" },
        { label: "SLA", value: "100%" },
        { label: "Success", value: "100%" },
        { label: "Status", value: "VIP+" },
      ],
      badges: ["Windows User", "Network Engineer", "Incident Handler"],
      color: "blue-team"
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

        {/* Platform Stats Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {platformStats.map((platform) => (
            <Card 
              key={platform.platform}
              className={`bg-card/50 border-border hover:border-${platform.color}/50 transition-all duration-300`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    {platform.platform === "TryHackMe" ? (
                      <div className="w-12 h-12 rounded-lg bg-red-team/10 border border-red-team/30 flex items-center justify-center">
                        <Flame className="w-6 h-6 text-red-team" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-blue-team/10 border border-blue-team/30 flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-blue-team" />
                      </div>
                    )}
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
                    <div key={stat.label} className="text-center p-3 rounded-lg bg-secondary/30 border border-border">
                      <p className={`text-xl font-bold ${platform.color === 'red-team' ? 'text-red-team' : 'text-blue-team'}`}>
                        {stat.value}
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
          ))}
        </div>

        {/* Skills from LetsDefend */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-blue-team" />
                <h3 className="text-lg font-semibold text-foreground">Know How</h3>
              </div>
              <div className="space-y-2">
                {knowHow.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 p-2 rounded bg-secondary/30">
                    <span className="w-2 h-2 rounded-full bg-blue-team" />
                    <span className="text-sm text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-5 h-5 text-red-team" />
                <h3 className="text-lg font-semibold text-foreground">Investigated Alert Types</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {alertTypes.map((alert) => (
                  <span key={alert} className="px-2 py-1 text-xs font-mono bg-red-team/10 text-red-team rounded border border-red-team/20">
                    {alert}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Formal Education */}
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
      </div>
    </section>
  );
};

export default EducationSection;