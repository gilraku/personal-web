import ScrollReveal from "@/components/ScrollReveal";

const SkillsSection = () => {
  const skillGroups = [
    {
      category: "Compliance & GRC",
      skills: ["Regulatory Evaluation", "Environmental Compliance", "Audit Administration"]
    },
    {
      category: "Cloud & Infrastructure",
      skills: ["Google Cloud Platform", "AWS Basics", "Linux", "Windows"]
    },
    {
      category: "Security & Monitoring",
      skills: ["Splunk", "Log Analysis", "Incident Response Basics", "Network Analysis"]
    },
    {
      category: "Digital & Data",
      skills: ["Spreadsheet Processing", "Cloud Documentation", "Process Optimization", "Microsoft 365"]
    }
  ];

  return (
    <section id="skills" className="py-36 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <ScrollReveal>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-8">
              Skills
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-display text-display-sm md:text-display-md font-normal text-foreground mb-16">
              Tools & technologies
            </h2>
          </ScrollReveal>

          <div className="space-y-12">
            {skillGroups.map((group, index) => (
              <ScrollReveal key={group.category} delay={150 + index * 50}>
                <div className="grid grid-cols-12 gap-4">
                  <p className="col-span-12 md:col-span-4 text-sm text-muted-foreground">
                    {group.category}
                  </p>
                  <p className="col-span-12 md:col-span-8 font-mono text-sm text-foreground">
                    {group.skills.join(", ")}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <p className="mt-16 text-sm text-muted-foreground italic">
              Building strong fundamentals through continuous practice.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;