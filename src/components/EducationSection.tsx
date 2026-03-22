import ScrollReveal from "@/components/ScrollReveal";

const EducationSection = () => {
  return (
    <section id="education" className="py-36 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <ScrollReveal>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-8">
              Background
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-display text-display-sm md:text-display-md font-normal text-foreground mb-16">
              Education
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="grid grid-cols-12 gap-4 md:gap-8 mb-12">
              <div className="col-span-12 md:col-span-3">
                <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mt-1">
                  University
                </p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="font-display text-xl text-foreground">
                  Institut Teknologi Sapta Mandiri
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Bachelor of Information Technology · 2019 — 2024 (GPA: 3.20)
                </p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  <span className="font-medium text-foreground">Thesis:</span> Web-Based Personal Protective Equipment (PPE) Detection System Using YOLOv8 and TensorFlow.js
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="grid grid-cols-12 gap-4 md:gap-8 pt-12 border-t border-border/50">
              <div className="col-span-12 md:col-span-3">
                <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mt-1">
                  Certifications &<br />Training
                </p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <span className="font-display text-lg text-foreground">AWS Certified Cloud Practitioner</span>
                    <span className="text-sm text-muted-foreground">Amazon Web Services · 2025</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-display text-lg text-foreground">Google Associate Cloud Engineer</span>
                    <span className="text-sm text-muted-foreground">Google Cloud · 2023</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-display text-lg text-foreground">Google Cloud Digital Leader</span>
                    <span className="text-sm text-muted-foreground">Google Cloud · 2024</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-display text-lg text-foreground">AWS re/Start Program</span>
                    <span className="text-sm text-muted-foreground">Amazon Web Services · 2024</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-display text-lg text-foreground">Cloud Computing Cohort</span>
                    <span className="text-sm text-muted-foreground">Bangkit Academy · 2023</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-display text-lg text-foreground">TryHackMe – SOC Level 1</span>
                    <span className="text-sm text-muted-foreground">TryHackMe · 2026</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-display text-lg text-foreground">LetsDefend – SOC Analyst Learning Path</span>
                    <span className="text-sm text-muted-foreground">LetsDefend · 2026</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;