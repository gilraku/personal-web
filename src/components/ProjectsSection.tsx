import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ProjectsSection = () => {
  const projects = [
    {
      title: "TryHackMe Profile",
      description: "Blue team labs covering SOC Level 1, incident response, and threat detection.",
      stat: "THM",
      statLabel: "Active Learning",
      link: "https://tryhackme.com/p/GSec",
      featured: true
    },
    {
      title: "LetsDefend Profile",
      description: "Blue team training and incident response. Investigating malware, ransomware, and web attacks.",
      stat: "SOC",
      statLabel: "Active Learning",
      link: "https://app.letsdefend.io/user/gilang",
      featured: true
    },

    {
      title: "Splunk SIEM Home Lab",
      description: "Built a Splunk SIEM on Linux to detect SSH brute force, privilege escalation, and persistence. Mapped to MITRE ATT&CK. Includes SPL queries, SOC dashboard, and triage report.",
      stat: "SIEM",
      statLabel: "Documented",
      link: "https://github.com/gilraku/Splunk-SIEM-Linux-Detection",
      featured: true
    },
    {
      title: "Malware Analysis: AZORult / Loki / FormBook",
      description: "Static and dynamic analysis of a MSIL banking stealer. Tools: PEStudio, Procmon, Wireshark, Regshot, ANY.RUN. Mapped to 20 MITRE ATT&CK techniques.",
      stat: "MAL",
      statLabel: "Documented",
      link: "https://github.com/gilraku/malware-analysis-azorult",
      featured: true
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

          {/* Card Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={150 + index * 75}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col h-full bg-card/50 hover:bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 p-8 rounded-2xl relative overflow-hidden block ${project.featured ? '' : 'opacity-70'
                    }`}
                >
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Top Header: Stat/Category & Icon */}
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div>
                      <span className="font-mono text-xs font-semibold text-primary tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
                        {project.stat}
                      </span>
                      <p className="text-xs text-muted-foreground mt-2 font-mono uppercase tracking-wide">
                        {project.statLabel}
                      </p>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm p-3 rounded-full border border-border/50 group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors duration-300">
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-grow mt-auto pt-8">
                    <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;