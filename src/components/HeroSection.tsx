import { Shield, Crosshair, ChevronDown, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-anya.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline pointer-events-none" />
      <div className="absolute inset-0 hex-pattern pointer-events-none" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-team/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-team/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-float" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Dual glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-team/30 via-transparent to-red-team/30 blur-xl" />
              
              {/* Border with gradient */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-br from-blue-team to-red-team p-[2px]">
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              
              {/* Image container */}
              <div className="absolute inset-3 rounded-full overflow-hidden border border-border">
                <img
                  src={profileImage}
                  alt="Gilang Swandaru"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Status badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-blue-team/50 px-4 py-2 rounded-full">
              <BookOpen className="w-4 h-4 text-blue-team" />
              <span className="text-sm font-mono text-blue-team">Learning Journey</span>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <Shield className="w-5 h-5 text-blue-team" />
              <span className="text-sm text-muted-foreground">Aspiring Blue Team</span>
              <span className="text-muted-foreground/50">|</span>
              <Crosshair className="w-5 h-5 text-red-team" />
              <span className="text-sm text-muted-foreground">Red Team Curious</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-foreground">Hello, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-blue-team to-red-team bg-clip-text text-transparent">Gilang Swandaru</span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground/90">
                Cybersecurity Enthusiast
              </h2>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <span className="px-4 py-1.5 text-sm font-mono border border-blue-team/40 rounded-full text-blue-team bg-blue-team/5">
                Learning Blue Team
              </span>
              <span className="px-4 py-1.5 text-sm font-mono border border-red-team/40 rounded-full text-red-team bg-red-team/5">
                Exploring Red Team
              </span>
              <span className="px-4 py-1.5 text-sm font-mono border border-border rounded-full text-muted-foreground bg-secondary/50">
                GRC Basics
              </span>
            </div>

            <p className="text-muted-foreground text-lg mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              IT graduate passionate about cybersecurity. Currently learning the fundamentals 
              of both defensive (Blue Team) and offensive (Red Team) security through 
              self-study, labs, and hands-on practice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="bg-blue-team text-white hover:bg-blue-team/90 box-glow-blue font-semibold"
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                What I'm Learning
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-red-team/50 text-red-team hover:bg-red-team/10 hover:border-red-team"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Crosshair className="w-4 h-4 mr-2" />
                Connect With Me
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <span className="text-sm font-mono text-muted-foreground">Scroll Down</span>
          <ChevronDown className="w-6 h-6 text-blue-team animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;