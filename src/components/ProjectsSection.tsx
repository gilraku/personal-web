import { ExternalLink, Rocket, Shield, Crosshair, Lightbulb, Flame, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "TryHackMe Labs",
      type: "red",
      tech: ["Linux", "Networking", "Web Security"],
      description: "Completed 84 rooms covering penetration testing, Linux fundamentals, and web exploitation. Currently at 0x8 [HACKER] level with Top 8% global ranking.",
      status: "84 Rooms",
      link: "https://tryhackme.com/p/GSec"
    },
    {
      title: "LetsDefend SOC",
      type: "blue",
      tech: ["SIEM", "Incident Response", "MITRE ATT&CK"],
      description: "Blue team training with 100% success rate. Investigated various alert types including Malware, Ransomware, C2, and Web Attacks.",
      status: "1433 Points",
      link: "https://app.letsdefend.io/user/gilang"
    },
    {
      title: "Network Traffic Analysis",
      type: "blue",
      tech: ["Wireshark", "tcpdump", "Packet Analysis"],
      description: "Practicing network forensics by analyzing pcap files. Learning to identify malicious traffic patterns and protocol anomalies.",
      status: "Learning"
    },
    {
      title: "Home SIEM Lab",
      type: "learning",
      tech: ["ELK Stack", "VirtualBox", "Ubuntu"],
      description: "Building a home lab environment for practicing log collection, parsing, and threat detection using open-source tools.",
      status: "In Progress"
    }
  ];

  const getTypeStyles = (type: string) => {
    switch(type) {
      case 'blue':
        return {
          icon: Shield,
          color: 'text-blue-team',
          bg: 'bg-blue-team/10 border-blue-team/30',
          badge: 'bg-blue-team/10 text-blue-team border-blue-team/20',
          hover: 'hover:border-blue-team/50 hover:shadow-[0_0_30px_-10px_hsl(217,91%,60%,0.3)]'
        };
      case 'red':
        return {
          icon: Crosshair,
          color: 'text-red-team',
          bg: 'bg-red-team/10 border-red-team/30',
          badge: 'bg-red-team/10 text-red-team border-red-team/20',
          hover: 'hover:border-red-team/50 hover:shadow-[0_0_30px_-10px_hsl(0,72%,51%,0.3)]'
        };
      default:
        return {
          icon: Lightbulb,
          color: 'text-primary',
          bg: 'bg-primary/10 border-primary/30',
          badge: 'bg-primary/10 text-primary border-primary/20',
          hover: 'hover:border-primary/50'
        };
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
            <span className="font-mono text-primary text-sm">PRACTICE</span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hands-on <span className="text-blue-team">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Active learning through CTF platforms and security labs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project) => {
            const styles = getTypeStyles(project.type);
            const Icon = styles.icon;
            
            return (
              <Card 
                key={project.title}
                className={`bg-card/50 border-border overflow-hidden group transition-all duration-300 ${styles.hover}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${styles.bg} border`}>
                      <Icon className={`w-5 h-5 ${styles.color}`} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-mono px-2 py-1 rounded border ${styles.badge}`}>
                        {project.status}
                      </span>
                      {project.link && (
                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-muted-foreground hover:text-primary" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <h3 className={`text-lg font-semibold mb-3 text-foreground group-hover:${styles.color} transition-colors`}>
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span 
                        key={t}
                        className="px-2 py-1 text-xs font-mono bg-secondary/50 border border-border rounded text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;