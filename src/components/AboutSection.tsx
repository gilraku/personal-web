import { Shield, Crosshair, FileCheck, Search, BookOpen, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const learningAreas = [
    {
      icon: Shield,
      title: "Blue Team Basics",
      description: "Learning threat detection, log analysis, and security monitoring fundamentals",
      color: "blue"
    },
    {
      icon: Crosshair,
      title: "Red Team Concepts",
      description: "Understanding attack methods to better defend against them",
      color: "red"
    },
    {
      icon: FileCheck,
      title: "GRC Foundations",
      description: "Studying security frameworks, compliance basics, and risk concepts",
      color: "neutral"
    },
    {
      icon: Search,
      title: "Log Analysis",
      description: "Practicing with SIEM tools and learning to identify suspicious activities",
      color: "blue"
    },
    {
      icon: Target,
      title: "CTF Challenges",
      description: "Solving beginner CTF challenges to build practical skills",
      color: "red"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Taking online courses, reading blogs, and building home labs",
      color: "neutral"
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'blue':
        return {
          icon: 'text-blue-team',
          bg: 'bg-blue-team/10 border-blue-team/30 group-hover:bg-blue-team/20',
          hover: 'hover:border-blue-team/50'
        };
      case 'red':
        return {
          icon: 'text-red-team',
          bg: 'bg-red-team/10 border-red-team/30 group-hover:bg-red-team/20',
          hover: 'hover:border-red-team/50'
        };
      default:
        return {
          icon: 'text-primary',
          bg: 'bg-primary/10 border-primary/30 group-hover:bg-primary/20',
          hover: 'hover:border-primary/50'
        };
    }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-blue-team" />
            <span className="font-mono text-blue-team text-sm">ABOUT ME</span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-blue-team" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            My <span className="text-blue-team text-glow-blue">Learning Journey</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-center mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an IT graduate at the beginning of my cybersecurity journey. I'm fascinated by both 
              <span className="text-blue-team font-medium"> Blue Team</span> (defensive security) and 
              <span className="text-red-team font-medium"> Red Team</span> (offensive security) concepts.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently building my foundation through online courses, home labs, and hands-on practice. 
              I believe in learning by doing and documenting my progress along the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningAreas.map((area, index) => {
              const colors = getColorClasses(area.color);
              return (
                <Card 
                  key={area.title}
                  className={`bg-card/50 border-border ${colors.hover} transition-all duration-300 group`}
                >
                  <CardContent className="p-5">
                    <div className={`w-12 h-12 rounded-lg ${colors.bg} border flex items-center justify-center mb-4 transition-colors`}>
                      <area.icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">{area.title}</h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;