import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ProjectsSection = () => {
  const projects = [
    {
      title: "TryHackMe Labs",
      description: "Penetration testing, Linux fundamentals, and web exploitation through hands-on rooms.",
      stat: "84",
      statLabel: "Rooms",
      link: "https://tryhackme.com/p/GSec",
      featured: true
    },
    {
      title: "LetsDefend SOC",
      description: "Blue team training with 100% success rate. Investigating malware, ransomware, and web attacks.",
      stat: "1433",
      statLabel: "Points",
      link: "https://app.letsdefend.io/user/gilang",
      featured: true
    },
    {
      title: "Network Traffic Analysis",
      description: "Practicing network forensics by analyzing pcap files and identifying malicious patterns.",
      stat: "—",
      statLabel: "Learning",
      featured: false
    },
    {
      title: "Home SIEM Lab",
      description: "Building a home lab for log collection, parsing, and threat detection using open-source tools.",
      stat: "—",
      statLabel: "In Progress",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-36 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <ScrollReveal>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-8">
              Projects
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-display text-display-sm md:text-display-md font-normal text-foreground mb-16">
              Hands-on experience
            </h2>
          </ScrollReveal>

          {/* Staggered layout */}
          <div className="space-y-0">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={150 + index * 75}>
                <div 
                  className={`group grid grid-cols-12 gap-4 py-8 border-b border-border/50 ${
                    project.featured ? '' : 'opacity-70'
                  }`}
                >
                  {/* Stat - Large typography */}
                  <div className="col-span-3 md:col-span-2">
                    <span className="font-display text-3xl md:text-4xl text-foreground">
                      {project.stat}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">{project.statLabel}</p>
                  </div>

                  {/* Content */}
                  <div className="col-span-9 md:col-span-8">
                    <h3 className="font-display text-xl text-foreground mb-2 flex items-center gap-2">
                      {project.title}
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                        </a>
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Link for mobile */}
                  {project.link && (
                    <div className="col-span-12 md:col-span-2 flex md:justify-end items-start">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors md:hidden"
                      >
                        View →
                      </a>
                    </div>
                  )}
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