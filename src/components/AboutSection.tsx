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
              Passionate about understanding <span className="italic">how systems break</span>—and how to defend them.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="border-accent-left space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm an IT graduate at the beginning of my cybersecurity journey. 
                My approach is simple: learn by doing. Building home labs, solving CTF challenges, 
                and expanding my knowledge of both defensive and offensive security.
              </p>
              <p>
                Currently focused on Blue Team operations, GRC frameworks, and continuous learning 
                through platforms like TryHackMe and LetsDefend.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Blue Team', desc: 'Threat detection & response' },
                { label: 'Red Team', desc: 'Offensive techniques' },
                { label: 'GRC', desc: 'Governance & compliance' },
                { label: 'Learning', desc: 'Daily practice' },
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