import { GraduationCap, Award, BookOpen, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  const certifications = [
    { name: "Certified Network Security Practitioner (CNSP)", issuer: "The SecOps Group", type: "security" },
    { name: "CompTIA Security+", issuer: "CompTIA", type: "security" },
    { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", type: "security" },
    { name: "Splunk Core Certified User", issuer: "Splunk", type: "blue" },
    { name: "Google Cybersecurity Certificate", issuer: "Google", type: "security" },
    { name: "Linux Fundamentals", issuer: "DigitalOcean", type: "core" },
  ];

  const articles = [
    { title: "Setting Up Simple SIEM with ELK Stack — Part 1", tag: "Blue Team" },
    { title: "Setting Up Simple SIEM with ELK Stack — Part 2", tag: "Blue Team" },
    { title: "Introduction to MITRE ATT&CK Framework", tag: "Threat Intel" },
    { title: "Building a Home Security Lab for Beginners", tag: "Lab Setup" },
    { title: "Understanding Common Attack Vectors", tag: "Red Team" },
  ];

  return (
    <section id="education" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
            <span className="font-mono text-primary text-sm">CREDENTIALS</span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education & <span className="text-primary">Certifications</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education & Certs */}
          <div>
            {/* Formal Education */}
            <Card className="bg-card/50 border-border mb-6 hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Formal Education</h3>
                    <p className="text-primary font-medium">Institut Teknologi Sapta Mandiri</p>
                    <p className="text-sm text-muted-foreground">Bachelor of Information Technology</p>
                    <p className="text-xs text-muted-foreground mt-1">2019 - 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-5 h-5 text-blue-team" />
                <h3 className="text-lg font-semibold text-foreground">Security Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert.name}
                    className="p-4 rounded-lg bg-secondary/30 border border-border hover:border-blue-team/30 transition-colors flex items-start gap-3"
                  >
                    <Shield className="w-4 h-4 text-blue-team mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{cert.name}</p>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Articles */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-5 h-5 text-red-team" />
              <h3 className="text-lg font-semibold text-foreground">Security Articles</h3>
            </div>
            <div className="space-y-3">
              {articles.map((article, index) => (
                <a
                  key={article.title}
                  href="https://medium.com/@gilangswandaru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {article.title}
                    </p>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded flex-shrink-0 ${
                      article.tag === 'Blue Team' 
                        ? 'bg-blue-team/10 text-blue-team' 
                        : article.tag === 'Red Team'
                        ? 'bg-red-team/10 text-red-team'
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {article.tag}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Medium</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;