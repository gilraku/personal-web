import ScrollReveal from "@/components/ScrollReveal";

const SkillsSection = () => {
  const skillGroups = [
    {
      category: "Compliance & GRC",
      skills: ["Regulatory Evaluation", "Environmental Compliance", "K3 & LH Workflows", "Control Review", "Audit Documentation"]
    },
    {
      category: "Software & Product",
      skills: ["Go", "React", "TypeScript", "PostgreSQL", "REST APIs", "Design Systems", "shadcn/ui"]
    },
    {
      category: "AI & Data",
      skills: ["Document Extraction", "Regulation Parsing", "Spreadsheet Processing", "Machine Learning Fundamentals", "Process Automation"]
    },
    {
      category: "Security & Cloud",
      skills: ["Splunk", "Wireshark", "MITRE ATT&CK", "Malware Analysis", "Log Analysis", "AWS", "Google Cloud Platform", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-28 border-t border-border">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-8">
            Skills
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="font-display text-display-sm md:text-display-md font-normal text-foreground mb-16">
            Domain & technical stack
          </h2>
        </ScrollReveal>

        <div className="border-y border-border/70">
          {skillGroups.map((group, index) => (
            <ScrollReveal key={group.category} delay={150 + index * 50}>
              <div className="grid grid-cols-12 gap-4 py-6 border-b last:border-b-0 border-border/70">
                <p className="col-span-12 md:col-span-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {group.category}
                </p>
                <p className="col-span-12 md:col-span-9 text-sm text-foreground leading-relaxed">
                  {group.skills.join(", ")}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <p className="mt-10 text-sm text-muted-foreground italic max-w-2xl">
            I use software, AI, and security fundamentals to make compliance workflows more structured, measurable, and audit-ready.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
