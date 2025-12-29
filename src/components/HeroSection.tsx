import { Shield, Terminal, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-anya.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-cyber">
      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline pointer-events-none" />
      
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-float" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-transparent blur-2xl" />
              
              {/* Border ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/50 box-glow" />
              
              {/* Image container */}
              <div className="absolute inset-2 rounded-full overflow-hidden border border-primary/30">
                <img
                  src={profileImage}
                  alt="Gilang Swandaru"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-primary" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-primary" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-primary" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-primary" />
            </div>
            
            {/* Status badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-primary/50 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-sm font-mono text-primary">Open to Work</span>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <Terminal className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">~/gilang-swandaru $</span>
              <span className="font-mono text-sm text-primary animate-pulse-glow">_</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-foreground">Hello, I'm</span>
              <br />
              <span className="text-glow text-primary">Gilang Swandaru</span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-xl md:text-2xl font-semibold text-foreground/90">
                Aspiring Cybersecurity Analyst
              </h2>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {["Blue Team", "GRC", "Security Operations"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 text-sm font-mono border border-primary/40 rounded-full text-primary/80 bg-primary/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-muted-foreground text-lg mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              Currently transitioning into cybersecurity with a focus on Blue Team operations, 
              GRC, and Security Monitoring. Leveraging my background in regulation & compliance 
              to build a career in IT security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 box-glow font-semibold"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <span className="text-sm font-mono text-muted-foreground">Scroll Down</span>
          <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;