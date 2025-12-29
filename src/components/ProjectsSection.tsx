import { ExternalLink, Rocket, Shield, Crosshair } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "SIEM Lab with ELK Stack",
      type: "blue",
      tech: ["Elasticsearch", "Logstash", "Kibana", "Filebeat"],
      description: "Built a home SIEM lab for log aggregation, threat detection, and security monitoring. Configured custom detection rules and dashboards for real-time alerting.",
      github: "https://github.com/glng-swndru"
    },
    {
      title: "Network Traffic Analysis",
      type: "blue",
      tech: ["Wireshark", "Zeek", "Python", "Suricata"],
      description: "Developed packet capture and analysis workflows for identifying malicious traffic patterns, C2 communication, and data exfiltration attempts.",
      github: "https://github.com/glng-swndru"
    },
    {
      title: "Vulnerability Scanner",
      type: "red",
      tech: ["Python", "Nmap", "OWASP ZAP", "Bash"],
      description: "Created automated vulnerability scanning scripts for web applications and network infrastructure with detailed reporting capabilities.",
      github: "https://github.com/glng-swndru"
    },
    {
      title: "Incident Response Playbooks",
      type: "blue",
      tech: ["NIST", "MITRE ATT&CK", "Documentation"],
      description: "Developed comprehensive IR playbooks for common attack scenarios including ransomware, phishing, and data breaches following industry frameworks.",
      github: "https://github.com/glng-swndru"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
            <span className="font-mono text-primary text-sm">PROJECTS</span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Security <span className="text-blue-team">Labs</span> & <span className="text-red-team">Research</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hands-on security projects demonstrating both defensive and offensive capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`bg-card/50 border-border overflow-hidden group transition-all duration-300 ${
                project.type === 'blue' 
                  ? 'hover:border-blue-team/50 hover:shadow-[0_0_30px_-10px_hsl(217,91%,60%,0.3)]' 
                  : 'hover:border-red-team/50 hover:shadow-[0_0_30px_-10px_hsl(0,72%,51%,0.3)]'
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    project.type === 'blue' 
                      ? 'bg-blue-team/10 border border-blue-team/30' 
                      : 'bg-red-team/10 border border-red-team/30'
                  }`}>
                    {project.type === 'blue' 
                      ? <Shield className="w-5 h-5 text-blue-team" />
                      : <Crosshair className="w-5 h-5 text-red-team" />
                    }
                  </div>
                  <span className={`text-xs font-mono px-2 py-1 rounded ${
                    project.type === 'blue'
                      ? 'bg-blue-team/10 text-blue-team border border-blue-team/20'
                      : 'bg-red-team/10 text-red-team border border-red-team/20'
                  }`}>
                    {project.type === 'blue' ? 'Blue Team' : 'Red Team'}
                  </span>
                </div>
                
                <h3 className={`text-xl font-semibold mb-3 transition-colors ${
                  project.type === 'blue' 
                    ? 'text-foreground group-hover:text-blue-team' 
                    : 'text-foreground group-hover:text-red-team'
                }`}>
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
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className={`border-border ${
                    project.type === 'blue'
                      ? 'hover:border-blue-team/50 hover:text-blue-team'
                      : 'hover:border-red-team/50 hover:text-red-team'
                  }`}
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-5xl mx-auto mt-6">
          <Card className="bg-card/30 border-border border-dashed">
            <CardContent className="p-8 text-center">
              <Rocket className="w-12 h-12 text-primary/50 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground/70 mb-2">More Projects Coming</h3>
              <p className="text-sm text-muted-foreground">
                Currently working on CTF writeups, malware analysis labs, and cloud security projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;