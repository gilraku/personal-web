import ScrollReveal from "@/components/ScrollReveal";

const EducationSection = () => {
  const training = [
    {
      title: "Pijak in Collaboration with IBM SkillsBuild - Flash Class",
      meta: "Pijak Flash Class Batch 2 · 2026",
      detail: "AI fundamentals, Python, beginner machine learning, fundamental deep learning, and machine learning system building.",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      meta: "Amazon Web Services · 2025",
    },
    {
      title: "Google Associate Cloud Engineer",
      meta: "Google Cloud · 2023",
    },
    {
      title: "Google Cloud Digital Leader",
      meta: "Google Cloud · 2024",
    },
    {
      title: "AWS re/Start Program",
      meta: "Amazon Web Services · 2024",
    },
    {
      title: "Cloud Computing Cohort",
      meta: "Bangkit Academy · 2023",
    },
    {
      title: "TryHackMe - SOC Level 1",
      meta: "TryHackMe · 2026",
    },
    {
      title: "LetsDefend - SOC Analyst Learning Path",
      meta: "LetsDefend · 2026",
    },
  ];

  return (
    <section id="education" className="py-28 border-t border-border">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">
            Background
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="font-display text-display-sm md:text-display-md font-normal text-foreground mb-10">
            Education & training
          </h2>
        </ScrollReveal>

        <div className="border-y border-border/70">
          <ScrollReveal delay={150}>
            <div className="grid grid-cols-12 gap-4 md:gap-8 py-7 border-b border-border/70">
              <div className="col-span-12 md:col-span-3">
                <p className="font-mono text-sm text-muted-foreground tracking-widest uppercase">
                  University
                </p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="font-display text-xl text-foreground">
                  Institut Teknologi Sapta Mandiri
                </p>
                <p className="text-base text-muted-foreground mt-2">
                  Bachelor of Information Technology · 2019 - 2024 (GPA: 3.20)
                </p>
                <p className="text-base text-muted-foreground mt-3 leading-relaxed">
                  <span className="font-medium text-foreground">Thesis:</span> Web-Based Personal Protective Equipment (PPE) Detection System Using YOLOv8 and TensorFlow.js
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="grid grid-cols-12 gap-4 md:gap-8 py-7">
              <div className="col-span-12 md:col-span-3">
                <p className="font-mono text-sm text-muted-foreground tracking-widest uppercase">
                  Certifications & training
                </p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  {training.map((item) => (
                    <li key={item.title} className="py-4 border-b border-border/70">
                      <span className="font-display text-lg text-foreground">
                        {item.title}
                      </span>
                      <span className="block text-base text-muted-foreground mt-1">
                        {item.meta}
                      </span>
                      {item.detail ? (
                        <span className="block text-base text-muted-foreground mt-2 leading-relaxed">
                          {item.detail}
                        </span>
                      ) : null}
                    </li>
                  ))}
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
