import ScrollReveal from "@/components/ScrollReveal";

const SkillsSection = () => {
  const skills = [
    { name: "Splunk", category: "SIEM" },
    { name: "ELK Stack", category: "SIEM" },
    { name: "Wireshark", category: "Network" },
    { name: "Kali Linux", category: "OS" },
    { name: "Nmap", category: "Scanning" },
    { name: "OWASP", category: "Web Security" },
    { name: "Python", category: "Scripting" },
    { name: "Bash", category: "Scripting" },
    { name: "Linux", category: "OS" },
    { name: "MITRE ATT&CK", category: "Framework" },
    { name: "Incident Response", category: "Blue Team" },
    { name: "Log Analysis", category: "Blue Team" },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm text-primary font-medium mb-3">Skills</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tools & Technologies
              </h2>
              <p className="text-muted-foreground">
                Building my toolkit through hands-on practice and continuous learning.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group px-4 py-2 rounded-full border border-border bg-background hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-center text-sm text-muted-foreground mt-10">
              Currently focused on building strong fundamentals before advancing.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
