import ScrollReveal from "@/components/ScrollReveal";

const ContactSection = () => {
  const socials = [
    {
      label: "Email",
      href: "mailto:gilangswandaru27@gmail.com",
      display: "gilangswandaru27@gmail.com"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gilang-swandaru/",
      display: "gilang-swandaru"
    },
    {
      label: "GitHub",
      href: "https://github.com/gilraku",
      display: "gilraku"
    },
  ];

  return (
    <section id="contact" className="py-36 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <ScrollReveal>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-8">
              Contact
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-display text-display-sm md:text-display-md font-normal text-foreground mb-10">
              Let's connect
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-lg">
              Interested in cybersecurity or just want to say hello?
              I'm always open to connecting with fellow learners and professionals.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="space-y-4">
              {socials.map((social) => (
                <div key={social.label} className="grid grid-cols-12 gap-4">
                  <p className="col-span-4 md:col-span-2 text-sm text-muted-foreground">
                    {social.label}
                  </p>
                  <a
                    href={social.href}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="col-span-8 md:col-span-10 text-sm text-foreground hover:text-primary transition-colors duration-500"
                  >
                    {social.display}
                  </a>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mt-16">
              <a
                href="mailto:gilangswandaru27@gmail.com"
                className="group inline-flex items-center gap-2 text-foreground"
              >
                <span className="link-underline font-display text-lg">Send me an email</span>
                <span className="text-muted-foreground group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;