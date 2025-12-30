import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const ProjectsSection = () => {
  const projects = [
    {
      title: "TryHackMe Labs",
      description: "Completed 84 rooms covering penetration testing, Linux fundamentals, and web exploitation. Currently ranked in Top 8% globally.",
      tags: ["Linux", "Web Security", "Networking"],
      stat: "84 Rooms",
      link: "https://tryhackme.com/p/GSec"
    },
    {
      title: "LetsDefend SOC",
      description: "Blue team training with 100% success rate. Investigated various alert types including Malware, Ransomware, and Web Attacks.",
      tags: ["SIEM", "Incident Response", "MITRE ATT&CK"],
      stat: "1433 Points",
      link: "https://app.letsdefend.io/user/gilang"
    },
    {
      title: "Network Traffic Analysis",
      description: "Practicing network forensics by analyzing pcap files. Learning to identify malicious traffic patterns and protocol anomalies.",
      tags: ["Wireshark", "tcpdump", "Packet Analysis"],
      stat: "Learning"
    },
    {
      title: "Home SIEM Lab",
      description: "Building a home lab environment for practicing log collection, parsing, and threat detection using open-source tools.",
      tags: ["ELK Stack", "VirtualBox", "Ubuntu"],
      stat: "In Progress"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm text-primary font-medium mb-3">Projects</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Hands-on Experience
              </h2>
              <p className="text-muted-foreground">
                Active learning through CTF platforms and security labs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={100 + index * 100}>
                <div className="group p-6 rounded-xl border border-border bg-card hover-lift h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                      {project.stat}
                    </span>
                    {project.link && (
                      <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2 -mt-1" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                      </Button>
                    )}
                  </div>
                  
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs text-muted-foreground bg-secondary rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
