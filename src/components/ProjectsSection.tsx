import { ExternalLink, Rocket, Shield, Crosshair, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Home SIEM Lab Setup",
      type: "blue",
      tech: ["ELK Stack", "VirtualBox", "Ubuntu"],
      description: "Setting up a basic SIEM environment at home to practice log collection and analysis. Learning to configure Elasticsearch, Logstash, and Kibana.",
      status: "In Progress"
    },
    {
      title: "TryHackMe Journey",
      type: "red",
      tech: ["TryHackMe", "Linux", "Networking"],
      description: "Working through beginner rooms on TryHackMe to understand basic penetration testing concepts and Linux fundamentals.",
      status: "Ongoing"
    },
    {
      title: "Network Traffic Practice",
      type: "blue",
      tech: ["Wireshark", "tcpdump"],
      description: "Learning to capture and analyze network packets. Practicing with sample pcap files to identify different protocols and anomalies.",
      status: "Learning"
    },
    {
      title: "Python for Security",
      type: "learning",
      tech: ["Python", "Automation"],
      description: "Building small Python scripts for security tasks. Starting with basic automation and working towards security-focused tools.",
      status: "Beginner"
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
            Learning <span className="text-blue-team">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hands-on practice projects to build real skills. Learning by doing, one lab at a time.
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
                    <span className={`text-xs font-mono px-2 py-1 rounded border ${styles.badge}`}>
                      {project.status}
                    </span>
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

        {/* Goals Card */}
        <div className="max-w-4xl mx-auto mt-8">
          <Card className="bg-gradient-to-r from-blue-team/5 to-red-team/5 border-border">
            <CardContent className="p-8 text-center">
              <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Learning Goals</h3>
              <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                Working towards Security+ certification, completing more CTF challenges, 
                and building a comprehensive home security lab.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;