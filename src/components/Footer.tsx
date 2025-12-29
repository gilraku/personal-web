import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">Gilang Swandaru</span>
          </div>
          
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} • Built with passion for security
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;