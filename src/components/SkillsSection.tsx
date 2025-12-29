import { Shield, Crosshair, BookOpen } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const SkillsSection = () => {
  const blueTeamSkills = [
    { name: "Splunk", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/splunk/splunk-original-wordmark.svg", level: "Learning" },
    { name: "ELK Stack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg", level: "Learning" },
    { name: "Wireshark", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg", level: "Beginner" },
  ];

  const redTeamSkills = [
    { name: "Kali Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", level: "Exploring" },
    { name: "Nmap", icon: "https://nmap.org/images/nmap-logo-64.png", level: "Learning" },
    { name: "OWASP", icon: "https://owasp.org/assets/images/logo.png", level: "Studying" },
  ];

  const coreSkills = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: "Beginner" },
    { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg", level: "Learning" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", level: "Beginner" },
  ];

  const SkillCard = ({ skill, hoverColor, delay }: { skill: typeof blueTeamSkills[0], hoverColor: string, delay: number }) => (
    <ScrollReveal delay={delay}>
      <div className={`group flex flex-col items-center p-4 rounded-lg bg-secondary/30 border border-border ${hoverColor} transition-all duration-300`}>
        <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
        </div>
        <span className="text-sm font-medium text-foreground text-center mb-1">{skill.name}</span>
        <span className="text-xs font-mono text-muted-foreground">{skill.level}</span>
      </div>
    </ScrollReveal>
  );

  return (
    <section id="skills" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
              <span className="font-mono text-primary text-sm">LEARNING</span>
              <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tools I'm <span className="text-blue-team">Studying</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building my toolkit one step at a time. These are the tools I'm currently learning and practicing with.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Blue Team Skills */}
          <div>
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-team/10 border border-blue-team/30 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-team" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Blue Team Tools</h3>
                  <p className="text-sm text-muted-foreground">SIEM & Log Analysis</p>
                </div>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-3 gap-4">
              {blueTeamSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} hoverColor="hover:border-blue-team/50 hover:bg-blue-team/5" delay={100 + index * 100} />
              ))}
            </div>
          </div>

          {/* Red Team Skills */}
          <div>
            <ScrollReveal direction="right">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-team/10 border border-red-team/30 flex items-center justify-center">
                  <Crosshair className="w-5 h-5 text-red-team" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Red Team Tools</h3>
                  <p className="text-sm text-muted-foreground">Penetration Testing Basics</p>
                </div>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-3 gap-4">
              {redTeamSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} hoverColor="hover:border-red-team/50 hover:bg-red-team/5" delay={100 + index * 100} />
              ))}
            </div>
          </div>

          {/* Core Skills */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Core Skills</h3>
                  <p className="text-sm text-muted-foreground">Scripting & OS Fundamentals</p>
                </div>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-3 gap-4">
              {coreSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} hoverColor="hover:border-primary/50 hover:bg-primary/5" delay={100 + index * 100} />
              ))}
            </div>
          </div>
        </div>

        <ScrollReveal delay={400}>
          <p className="text-center text-sm text-muted-foreground mt-12 font-mono max-w-xl mx-auto">
            "Every expert was once a beginner." Currently focusing on building strong fundamentals before advancing.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;