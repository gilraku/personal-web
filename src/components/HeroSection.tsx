import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-anya.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="relative w-28 h-28 mx-auto">
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-subtle-float" />
              <img
                src={profileImage}
                alt="Gilang Swandaru"
                className="relative w-full h-full object-cover rounded-full border-2 border-background shadow-lg"
              />
            </div>
          </div>

          {/* Name & Role */}
          <div className="space-y-4 mb-8">
            <p className="text-sm text-muted-foreground tracking-wide animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Hello, I'm
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Gilang Swandaru
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Cybersecurity Enthusiast
            </p>
          </div>

          {/* Tagline */}
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
            IT graduate exploring the world of cybersecurity. Learning defensive 
            and offensive security through hands-on practice and continuous study.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs tracking-wide">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
