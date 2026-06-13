import { ArrowUpRight, Lock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ProjectsSection = () => {
  const featuredProjects = [
    {
      title: "EKP Digital",
      description: "Internal compliance management platform that digitizes manual spreadsheet workflows into a reviewable, department-based process for K3 and environmental regulations. Features an AI-assisted regulation parsing capability to extract structured context and compliance requirements from PDF documents.",
      stat: "GRC & AI",
      statLabel: "Internal Project / Private Repo",
      tags: ["Go", "PostgreSQL", "React", "Document AI", "Regulation Parsing", "Cloud Run"],
      featured: true,
      isPrivate: true,
    },
    {
      title: "Splunk SIEM Home Lab",
      description: "Built a Splunk SIEM on Linux to detect SSH brute force, privilege escalation, and persistence. Mapped to MITRE ATT&CK. Includes SPL queries, SOC dashboard, and triage report.",
      stat: "SIEM",
      statLabel: "Documented",
      link: "https://github.com/gilraku/Splunk-SIEM-Linux-Detection",
      tags: ["Splunk", "Linux", "MITRE ATT&CK", "Detection"],
      featured: true,
    },
    {
      title: "Malware Analysis: AZORult / Loki / FormBook",
      description: "Static and dynamic analysis of a MSIL banking stealer. Tools: PEStudio, Procmon, Wireshark, Regshot, ANY.RUN. Mapped to 20 MITRE ATT&CK techniques.",
      stat: "MAL",
      statLabel: "Documented",
      link: "https://github.com/gilraku/malware-analysis-azorult",
      tags: ["Malware Analysis", "Wireshark", "Procmon", "MITRE ATT&CK"],
      featured: true,
    },
  ];

  const learningProfiles = [
    {
      title: "TryHackMe Profile",
      description: "Blue team labs covering SOC Level 1, incident response, and threat detection.",
      link: "https://tryhackme.com/p/GSec",
    },
    {
      title: "LetsDefend Profile",
      description: "Blue team training and incident response practice across malware, ransomware, and web attack scenarios.",
      link: "https://app.letsdefend.io/user/gilang",
    },
  ];

  return (
    <section id="projects" className="py-28 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <ScrollReveal>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-8">
              Projects
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-display text-display-sm md:text-display-md font-normal text-foreground mb-6">
              Featured work
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={125}>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-14">
              Selected work that connects my current compliance role with software,
              AI-assisted document workflows, and cybersecurity practice.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {featuredProjects.map((project, index) => {
              const CardContent = (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div>
                      <span className="font-mono text-xs font-semibold text-primary tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-sm">
                        {project.stat}
                      </span>
                      <p className="text-xs text-muted-foreground mt-2 font-mono uppercase tracking-wide">
                        {project.statLabel}
                      </p>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm p-3 rounded-sm border border-border/50 group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors duration-300">
                      {project.isPrivate ? (
                        <Lock className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      ) : (
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </div>
                  </div>

                  <div className="relative z-10 flex-grow mt-auto pt-8">
                    <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[0.7rem] text-muted-foreground border border-border/70 px-2 py-1 rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              );

              const cardClass = `group flex flex-col h-full bg-card/50 hover:bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 p-8 rounded-md relative overflow-hidden block ${project.featured ? '' : 'opacity-70'}`;

              return (
                <ScrollReveal key={project.title} delay={150 + index * 75}>
                  {project.isPrivate ? (
                    <div className={cardClass}>
                      {CardContent}
                    </div>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClass}
                    >
                      {CardContent}
                    </a>
                  )}
                </ScrollReveal>
              );
            })}
          </div>

          <div className="mt-20">
            <ScrollReveal delay={450}>
              <h3 className="font-display text-2xl text-foreground mb-8">
                Learning labs
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {learningProfiles.map((profile, index) => (
                <ScrollReveal key={profile.title} delay={500 + index * 75}>
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-[1fr_auto] gap-4 border-t border-border/70 pt-6"
                  >
                    <div>
                      <h4 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                        {profile.title}
                      </h4>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {profile.description}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
