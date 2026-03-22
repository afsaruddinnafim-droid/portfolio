"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import { siteConfig } from "@/data/config";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-bg-base/80 backdrop-blur-xl border-b border-border-subtle shadow-[0_1px_0_rgba(0,229,255,0.05)]"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-emerald flex items-center justify-center text-bg-base font-mono font-bold text-xs group-hover:shadow-glow-cyan transition-all duration-300">
              {siteConfig.initials}
            </div>
            <span className="font-display font-700 text-sm text-text-primary hidden sm:block tracking-wide">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-link",
                  pathname === link.href && "active"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.resumeUrl}
              download
              className="flex items-center gap-2 px-4 py-2 rounded-lg btn-glow text-xs font-mono font-medium"
            >
              <Download size={13} />
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-accent-cyan transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile slide-over */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-bg-base/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-72 bg-bg-surface border-l border-border-subtle transition-transform duration-300 ease-out flex flex-col",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-border-subtle">
            <span className="font-mono text-xs text-accent-cyan opacity-70">
              navigation
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1.5 rounded text-text-secondary hover:text-accent-cyan transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col p-6 gap-1 flex-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-sm transition-all duration-200",
                  pathname === link.href
                    ? "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
                )}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="text-accent-cyan/40 text-xs w-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="p-6 border-t border-border-subtle">
            <a
              href={siteConfig.resumeUrl}
              download
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg btn-glow text-sm font-mono font-medium"
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
