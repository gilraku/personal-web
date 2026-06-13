import ScrollReveal from "@/components/ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="py-28 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <ScrollReveal>
              <h2 className="font-display text-display-md font-normal text-foreground mb-4">
                About
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-muted-foreground font-display italic leading-relaxed">
                From <span className="not-italic text-foreground">Regulatory Compliance</span> to <span className="not-italic text-foreground">Compliance Technology</span>.
              </p>
            </ScrollReveal>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <ScrollReveal delay={200}>
              <div className="border-accent-left flex flex-col gap-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  I work in Environmental Sustainability compliance at PT Adaro Indonesia,
                  where I help manage Evaluasi Kepatuhan Peraturan (EKP) workflows for
                  K3 and environmental regulations. My day-to-day work sits close to
                  regulation mapping, evidence documentation, review cycles, and audit readiness.
                </p>
                <p>
                  That operational background led me to build digital tools for processes
                  that were previously handled through spreadsheets and manual coordination.
                  I am learning software engineering, design systems, and AI by applying
                  them to real compliance problems rather than isolated demos.
                </p>
                <p>
                  My cybersecurity direction is GRC-heavy and security-aware: access control,
                  secure internal systems, logging, evidence trails, SIEM practice, malware
                  analysis, and MITRE ATT&CK documentation. I believe effective security
                  starts with clear controls, reliable processes, and systems people can use.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="col-span-12">
            <ScrollReveal delay={300}>
              <div className="grid grid-cols-2 md:grid-cols-4">
                {[
                  { label: "Compliance Ops", desc: "Regulation mapping & EKP" },
                  { label: "GRC", desc: "Controls & audit readiness" },
                  { label: "AI Workflow", desc: "Document extraction" },
                  { label: "Security Tech", desc: "SIEM & secure systems" },
                ].map((item) => (
                  <div key={item.label} className="py-6 px-4 md:px-6 md:first:pl-0 md:last:pr-0">
                    <p className="font-display text-lg text-foreground mb-1">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
