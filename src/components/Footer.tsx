const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Gilang Swandaru</p>
          <p>Crafted with curiosity</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
