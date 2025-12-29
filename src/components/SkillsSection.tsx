import { Shield, Crosshair } from "lucide-react";

const SkillsSection = () => {
  const blueTeamSkills = [
    { name: "Splunk", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/splunk/splunk-original-wordmark.svg" },
    { name: "Elasticsearch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
    { name: "Kibana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kibana/kibana-original.svg" },
    { name: "Logstash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/logstash/logstash-original.svg" },
    { name: "Wireshark", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg" },
  ];

  const redTeamSkills = [
    { name: "Kali Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Burp Suite", icon: "https://img.icons8.com/color/48/burp-suite.png" },
    { name: "Metasploit", icon: "https://cdn.simpleicons.org/metasploit/2596CD" },
    { name: "Nmap", icon: "https://nmap.org/images/nmap-logo-64.png" },
    { name: "OWASP", icon: "https://owasp.org/assets/images/logo.png" },
  ];

  const coreSkills = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "PowerShell", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg" },
  ];

  return (
    <section id="skills" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
            <span className="font-mono text-primary text-sm">ARSENAL</span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Security <span className="text-blue-team">Tools</span> & <span className="text-red-team">Techniques</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proficient in both defensive and offensive security tools for comprehensive security operations
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Blue Team Skills */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-team/10 border border-blue-team/30 flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-team" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Blue Team Tools</h3>
                <p className="text-sm text-muted-foreground">SIEM, Log Analysis & Detection</p>
              </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {blueTeamSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group flex flex-col items-center p-4 rounded-lg bg-secondary/30 border border-border hover:border-blue-team/50 hover:bg-blue-team/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground group-hover:text-blue-team text-center transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Red Team Skills */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-team/10 border border-red-team/30 flex items-center justify-center">
                <Crosshair className="w-5 h-5 text-red-team" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Red Team Tools</h3>
                <p className="text-sm text-muted-foreground">Penetration Testing & Exploitation</p>
              </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {redTeamSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group flex flex-col items-center p-4 rounded-lg bg-secondary/30 border border-border hover:border-red-team/50 hover:bg-red-team/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground group-hover:text-red-team text-center transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skills */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="text-primary font-mono text-sm">&gt;_</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Core Skills</h3>
                <p className="text-sm text-muted-foreground">Scripting & Automation</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {coreSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group flex flex-col items-center p-4 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground group-hover:text-primary text-center transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;