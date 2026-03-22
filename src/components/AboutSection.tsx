import ScrollReveal from "@/components/ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="py-36">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <ScrollReveal>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-8">
              About
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-display text-display-sm md:text-display-md font-normal text-foreground mb-10">
              From <span className="italic">Regulatory Compliance</span> to <span className="italic">Cyber Defense</span>.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="border-accent-left space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I am a career switcher with a solid foundation in operations, logistics, and regulatory compliance.
                Currently working in Environmental Sustainability compliance, I specialize in extracting, mapping, and summarizing regulations—a skill that directly translates to <strong>Governance, Risk, and Compliance (GRC)</strong>.
              </p>
              <p>
                My administrative and documentation background ensures precision and audit-readiness. I approach cybersecurity from two angles — the technical and the regulatory.
              </p>
              <p>
                On the technical side, I build SIEM home labs, conduct malware analysis, and document findings mapped to MITRE ATT&CK. On the compliance side, I work daily with environmental regulations, audit documentation, and control evaluation at a mining operation. I believe effective security requires both.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Security Ops', desc: 'Threat detection & SIEM' },
                { label: 'GRC', desc: 'Compliance & audit readiness' },
                { label: 'Cloud Tech', desc: 'AWS & GCP fundamentals' },
                { label: 'Documentation', desc: 'Technical & process writing' },
              ].map((item) => (
                <div key={item.label} className="group">
                  <p className="font-display text-lg text-foreground mb-1">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;