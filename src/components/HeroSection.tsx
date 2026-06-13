import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile-anya.png";
import anyaSticker from "@/assets/anya-sticker.jpeg";

const HeroSection = () => {
  const [transparentSrc, setTransparentSrc] = useState<string | null>(null);
  const urlRef = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const img = new Image();
    img.src = profileImage;

    img.onload = () => {
      if (cancelled) return;

      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Detect checkerboard background colors from top-left patch
      const counts = new Map<string, { r: number; g: number; b: number; count: number }>();
      const sampleW = Math.min(80, canvas.width);
      const sampleH = Math.min(80, canvas.height);
      const step = 4;

      const quant = (v: number) => Math.round(v / 16) * 16;

      for (let y = 0; y < sampleH; y += step) {
        for (let x = 0; x < sampleW; x += step) {
          const i = (y * canvas.width + x) * 4;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];
          if (a < 250) continue;

          const qr = quant(r);
          const qg = quant(g);
          const qb = quant(b);
          const key = `${qr}-${qg}-${qb}`;
          const prev = counts.get(key);
          if (prev) prev.count += 1;
          else counts.set(key, { r: qr, g: qg, b: qb, count: 1 });
        }
      }

      const bgColors = Array.from(counts.values())
        .sort((a, b) => b.count - a.count)
        .slice(0, 2);

      const dist = (r1: number, g1: number, b1: number, r2: number, g2: number, b2: number) => {
        const dr = r1 - r2;
        const dg = g1 - g2;
        const db = b1 - b2;
        return Math.sqrt(dr * dr + dg * dg + db * db);
      };

      // Remove background pixels close to detected checker colors
      const hard = 22;
      const soft = 40;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];
        if (a < 250) continue;

        const d0 = bgColors[0] ? dist(r, g, b, bgColors[0].r, bgColors[0].g, bgColors[0].b) : 999;
        const d1 = bgColors[1] ? dist(r, g, b, bgColors[1].r, bgColors[1].g, bgColors[1].b) : 999;
        const d = Math.min(d0, d1);

        if (d <= hard) {
          data[i + 3] = 0;
        } else if (d < soft) {
          // feather edge
          const t = (d - hard) / (soft - hard);
          data[i + 3] = Math.round(255 * t);
        }
      }

      ctx.putImageData(imageData, 0, 0);

      canvas.toBlob((blob) => {
        if (!blob || cancelled) return;
        const url = URL.createObjectURL(blob);

        if (urlRef.current) URL.revokeObjectURL(urlRef.current);
        urlRef.current = url;
        setTransparentSrc(url);
      }, "image/png");
    };

    return () => {
      cancelled = true;
      if (urlRef.current) {
        URL.revokeObjectURL(urlRef.current);
        urlRef.current = null;
      }
    };
  }, []);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center pt-16">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Image - Asymmetric left side (hidden on mobile) */}
          <div className="lg:col-span-4 order-2 lg:order-1 hidden lg:block">
            <div className="relative animate-float">
              <img
                src={transparentSrc ?? profileImage}
                alt="Gilang Swandaru"
                className="w-full max-w-xs lg:max-w-sm object-contain"
                style={{
                  opacity: transparentSrc ? 1 : 0,
                  transition: "opacity 300ms ease",
                  filter: "drop-shadow(0 8px 24px hsl(30 10% 18% / 0.12)) drop-shadow(0 2px 6px hsl(30 10% 18% / 0.08))"
                }}
              />
              {/* Subtle accent line */}
              <div className="absolute -bottom-4 left-0 w-24 h-px bg-primary/40" />
            </div>
          </div>

          {/* Content - Right side */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="max-w-3xl">
              <p
                className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-6 animate-fade-in"
                style={{ animationDelay: "0.2s", animationFillMode: "both" }}
              >
                Compliance technology / GRC automation / AI workflows
              </p>

              <div className="flex items-start gap-4 mb-6">
                <h1
                  className="font-display text-display-lg md:text-[5rem] lg:text-[5.75rem] leading-[0.95] font-normal text-foreground animate-fade-in"
                  style={{ animationDelay: "0.3s", animationFillMode: "both" }}
                >
                  Gilang<br />
                  <span className="italic text-muted-foreground">Swandaru</span>
                </h1>

                {/* Anya sticker - mobile only */}
                <img
                  src={anyaSticker}
                  alt="Anya"
                  className="lg:hidden w-16 h-16 sm:w-20 sm:h-20 object-contain animate-float rounded-lg mt-2"
                />
              </div>

              <p
                className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed animate-fade-in"
                style={{ animationDelay: "0.5s", animationFillMode: "both" }}
              >
                Building compliance technology at the intersection of regulation, AI,
                and cybersecurity. I digitize audit-ready workflows and expand them
                with security-aware engineering.
              </p>

              <div
                className="grid grid-cols-1 md:grid-cols-3 border-y border-border/70 mb-8 animate-fade-in"
                style={{ animationDelay: "0.6s", animationFillMode: "both" }}
              >
                {[
                  { label: "Current role", value: "Environmental Sustainability Compliance" },
                  { label: "Building", value: "EKP Digital & AI document extraction" },
                  { label: "Direction", value: "GRC automation and security-aware systems" },
                ].map((item) => (
                  <div key={item.label} className="py-5 md:py-6 md:px-6 md:first:pl-0 md:last:pr-0 md:border-r md:last:border-r-0 border-border/70">
                    <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm text-foreground leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="flex flex-col sm:flex-row gap-6 text-sm animate-fade-in"
                style={{ animationDelay: "0.7s", animationFillMode: "both" }}
              >
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="group inline-flex items-center gap-2 text-foreground hover-subtle"
                >
                  <span className="link-underline">View featured work</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <span className="hidden sm:block text-muted-foreground/30">|</span>

                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
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
