import Link from "next/link";
import { siteConfig, socialLinks } from "@/data/config";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border-subtle mt-20">
      {/* Glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <Link href="/" className="font-display font-bold text-text-primary hover:text-accent-cyan transition-colors">
              {siteConfig.name}
            </Link>
            <span className="font-mono text-xs text-text-muted">{siteConfig.tagline}</span>
          </div>

          {/* Socials */}
          <SocialLinks links={socialLinks.slice(0, 5)} size={18} />

          {/* Copyright */}
          <p className="font-mono text-xs text-text-muted text-center md:text-right">
            © {year} {siteConfig.name}
            <br />
            <span className="text-accent-cyan/40">Built with Next.js + Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
