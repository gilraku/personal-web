import { Shield, Crosshair } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-blue-team" />
              <span className="text-xs text-muted-foreground">/</span>
              <Crosshair className="w-4 h-4 text-red-team" />
            </div>
            <span className="font-semibold text-foreground">Gilang Swandaru</span>
          </div>
          
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} • Defending & Understanding Threats
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;