import { ExternalLink, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Simple Messaging App",
      tech: ["Go", "MySQL", "MongoDB", "AWS", "GitHub Actions", "ELK Stack"],
      description: "A lightweight real-time application using Go (Fiber), WebSockets, deployed on AWS. Includes CI/CD with GitHub Actions and observability via ELK Stack.",
      image: "https://www.gilangswandaru.my.id/assets/diagram%20messaging%20app.png",
      github: "https://github.com/glng-swndru/messaging-app"
    },
    {
      title: "Music Catalog API",
      tech: ["Go", "Go Fiber", "PostgreSQL", "Spotify API", "Docker"],
      description: "Backend API for managing music preferences, login, song search, and recommendations with Spotify integration. PostgreSQL managed with Docker.",
      image: "https://www.gilangswandaru.my.id/assets/diagram%20spotify%20api.png",
      github: "https://github.com/glng-swndru/music-catalog"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm mb-4 block">// MY PROJECTS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-primary text-glow">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcase of my personal projects demonstrating cloud architecture and DevOps practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-card/50 border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:box-glow"
            >
              <div className="relative h-48 overflow-hidden bg-secondary/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="px-2 py-1 text-xs font-mono bg-primary/10 border border-primary/30 rounded text-primary/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/50 text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-5xl mx-auto mt-8">
          <Card className="bg-card/30 border-border border-dashed">
            <CardContent className="p-8 text-center">
              <Rocket className="w-12 h-12 text-primary/50 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground/70 mb-2">More Projects Coming Soon</h3>
              <p className="text-sm text-muted-foreground">
                I'm constantly working on new projects. Check back soon for updates!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;