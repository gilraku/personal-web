import { ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile-anya.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Image - Asymmetric left side */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div 
              className="relative animate-fade-in"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              <img
                src={profileImage}
                alt="Gilang Swandaru"
                className="w-full max-w-sm lg:max-w-none aspect-[4/5] object-cover grayscale-[20%] contrast-[1.05]"
                style={{ 
                  clipPath: 'polygon(0 0, 100% 0, 100% 95%, 0 100%)'
                }}
              />
              {/* Subtle accent line */}
              <div className="absolute -bottom-4 left-0 w-24 h-px bg-primary/40" />
            </div>
          </div>

          {/* Content - Right side */}
          <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-8">
            <div className="max-w-lg">
              <h1 
                className="font-display text-display-lg md:text-[5rem] lg:text-[6rem] font-normal text-foreground mb-6 animate-fade-in"
                style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
              >
                Gilang<br />
                <span className="italic text-muted-foreground">Swandaru</span>
              </h1>
              
              <p 
                className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed animate-fade-in"
                style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
              >
                Exploring cybersecurity through hands-on practice. 
                Learning defensive and offensive techniques daily.
              </p>

              <div 
                className="flex flex-col sm:flex-row gap-6 text-sm animate-fade-in"
                style={{ animationDelay: '0.7s', animationFillMode: 'both' }}
              >
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center gap-2 text-foreground hover-subtle"
                >
                  <span className="link-underline">View my journey</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                
                <span className="hidden sm:block text-muted-foreground/30">|</span>
                
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-500"
                >
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;