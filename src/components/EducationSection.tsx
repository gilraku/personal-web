import { GraduationCap, Award, BookOpen, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  const currentLearning = [
    { name: "TryHackMe - Pre Security Path", platform: "TryHackMe", status: "In Progress" },
    { name: "Google Cybersecurity Certificate", platform: "Coursera", status: "Completed" },
    { name: "CompTIA Security+ Study", platform: "Self-Study", status: "Studying" },
    { name: "Linux Fundamentals", platform: "DigitalOcean", status: "Completed" },
  ];

  const learningResources = [
    { title: "Professor Messer - Security+", type: "Video Course" },
    { title: "HackTheBox Academy", type: "Hands-on Labs" },
    { title: "OWASP Web Security Guide", type: "Documentation" },
    { title: "CyberDefenders Blue Team Labs", type: "Practice Labs" },
  ];

  return (
    <section id="education" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary" />
            <span className="font-mono text-primary text-sm">EDUCATION</span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education & <span className="text-primary">Learning Path</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education & Current Learning */}
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

            {/* Current Learning */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-5 h-5 text-blue-team" />
                <h3 className="text-lg font-semibold text-foreground">Courses & Certifications</h3>
              </div>
              <div className="space-y-3">
                {currentLearning.map((course) => (
                  <div 
                    key={course.name}
                    className="p-4 rounded-lg bg-secondary/30 border border-border hover:border-blue-team/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium text-foreground">{course.name}</p>
                        <p className="text-xs text-muted-foreground">{course.platform}</p>
                      </div>
                      <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                        course.status === 'Completed' 
                          ? 'bg-blue-team/10 text-blue-team' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        {course.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Learning Resources */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-5 h-5 text-red-team" />
              <h3 className="text-lg font-semibold text-foreground">Learning Resources</h3>
            </div>
            <div className="space-y-3 mb-8">
              {learningResources.map((resource) => (
                <div
                  key={resource.title}
                  className="p-4 rounded-lg bg-secondary/30 border border-border hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm font-medium text-foreground">
                      {resource.title}
                    </p>
                    <span className="text-xs font-mono px-2 py-0.5 bg-secondary rounded text-muted-foreground flex-shrink-0">
                      {resource.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Goals */}
            <Card className="bg-gradient-to-br from-blue-team/5 to-red-team/5 border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Next Goals</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-team" />
                    Pass CompTIA Security+ exam
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-team" />
                    Complete TryHackMe Jr Pentester path
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Build a complete home security lab
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;