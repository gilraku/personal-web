const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gilang Swandaru
          </p>
          <p className="font-mono text-xs text-muted-foreground/60">
            Built with curiosity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;