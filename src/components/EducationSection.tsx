import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  const certifications = [
    { name: "Certified Network Security Practitioner (CNSP)", issuer: "The SecOps Group" },
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services" },
    { name: "Google Cloud Digital Leader", issuer: "Google Cloud" },
    { name: "Python Certificate", issuer: "HackerRank" },
    { name: "Linux Fundamentals", issuer: "DigitalOcean" },
    { name: "Information Technology Support Fundamentals", issuer: "IBM" },
  ];

  const articles = [
    { title: "Setting Up Simple SIEM with ELK Stack and Go Fiber — Part 1", url: "#" },
    { title: "Setting Up Simple SIEM with ELK Stack and Go Fiber — Part 2", url: "#" },
    { title: "ELK Stack vs Splunk Stack", url: "#" },
    { title: "Deploying to AWS With GitHub Actions (CI/CD)", url: "#" },
    { title: "Implementing New Relic for Go Backend API", url: "#" },
  ];

  return (
    <section id="education" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm mb-4 block">// CREDENTIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education & <span className="text-primary text-glow">Certifications</span>
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
                <Award className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert.name}
                    className="p-4 rounded-lg bg-secondary/30 border border-border hover:border-primary/30 transition-colors"
                  >
                    <p className="text-sm font-medium text-foreground">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Articles */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Technical Articles</h3>
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
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </p>
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