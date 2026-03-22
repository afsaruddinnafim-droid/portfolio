import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  GraduationCap,
  Briefcase,
  Code2,
  Share2,
} from "lucide-react";
import { siteConfig, socialLinks, education, experiences, projects } from "@/data/config";
import { SocialLinks } from "@/components/SocialLinks";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "MD Afsaruddin Nafim — Portfolio",
  description: siteConfig.shortBio,
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* ── Animated grid background ─────────────────────────── */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.025) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          animation: "gridScroll 25s linear infinite",
        }}
      />

      {/* ── Radial hero glow ─────────────────────────────────── */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0,229,255,0.12) 0%, rgba(0,255,163,0.06) 40%, transparent 70%)",
        }}
      />

      {/* ── Scan line effect ─────────────────────────────────── */}
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute left-0 right-0 h-[2px] opacity-[0.03]"
          style={{
            background: "linear-gradient(90deg, transparent, #00e5ff, transparent)",
            animation: "scanLine 8s linear infinite",
          }}
        />
      </div>

      {/* ════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════ */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center pt-16 px-6">
        <div className="max-w-6xl mx-auto w-full">
          {/* Terminal label */}
          <AnimatedSection delay={0}>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="font-mono text-xs text-text-muted border border-border-subtle rounded px-3 py-1 bg-bg-surface/50">
                ~/nafim <span className="text-accent-cyan">❯</span>{" "}
                <span className="text-accent-emerald">whoami</span>
              </span>
            </div>
          </AnimatedSection>

          {/* Name */}
          <AnimatedSection delay={100}>
            <div className="mb-4">
              <span className="section-label mb-3 block">Hello, world. I&apos;m</span>
              <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight">
                <span className="text-text-primary">MD Afsaruddin</span>
                <br />
                <span className="gradient-text">Nafim</span>
              </h1>
            </div>
          </AnimatedSection>

          {/* Tagline */}
          <AnimatedSection delay={200}>
            <p className="font-mono text-lg md:text-xl text-text-secondary mb-4 flex items-center gap-2">
              <span className="text-accent-cyan">▸</span>
              {/* TODO: Replace with your real tagline */}
              <span>{siteConfig.tagline}</span>
            </p>
          </AnimatedSection>

          {/* Short bio */}
          <AnimatedSection delay={300}>
            <p className="text-text-secondary text-base md:text-lg max-w-xl leading-relaxed mb-10">
              {/* TODO: Replace with your real short bio */}
              {siteConfig.shortBio}
            </p>
          </AnimatedSection>

          {/* CTAs */}
          <AnimatedSection delay={400}>
            <div className="flex flex-wrap gap-4 mb-14">
              <Link
                href="/projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl btn-solid text-sm font-display font-bold tracking-wide"
              >
                View Projects
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl btn-glow text-sm font-display font-semibold"
              >
                Contact Me
              </Link>
              <a
                href={siteConfig.resumeUrl}
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-subtle/80 transition-all text-sm font-mono"
              >
                <Download size={14} />
                Resume
              </a>
            </div>
          </AnimatedSection>

          {/* Socials */}
          <AnimatedSection delay={500}>
            <SocialLinks links={socialLinks.slice(0, 5)} />
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-mono text-xs text-text-muted tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-accent-cyan/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          OVERVIEW GRID
      ════════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Divider */}
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border-subtle" />
              <span className="section-label">Quick Overview</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border-subtle" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Study card */}
            <AnimatedSection delay={0} className="lg:col-span-1">
              <OverviewCard
                icon={<GraduationCap size={20} className="text-accent-cyan" />}
                label="Education"
                href="/about"
              >
                <div className="space-y-3">
                  {education.map((edu, i) => (
                    <div key={i}>
                      <p className="font-display font-semibold text-text-primary text-sm leading-tight">
                        {edu.degree}
                      </p>
                      <p className="font-mono text-xs text-accent-cyan mt-1">{edu.institution}</p>
                      <p className="font-mono text-xs text-text-muted">{edu.duration}</p>
                    </div>
                  ))}
                </div>
              </OverviewCard>
            </AnimatedSection>

            {/* Experience card */}
            <AnimatedSection delay={100} className="lg:col-span-1">
              <OverviewCard
                icon={<Briefcase size={20} className="text-accent-emerald" />}
                label="Experience"
                href="/experience"
              >
                <div className="space-y-3">
                  {experiences.slice(0, 2).map((exp) => (
                    <div key={exp.id}>
                      <p className="font-display font-semibold text-text-primary text-sm leading-tight">
                        {exp.title}
                      </p>
                      <p className="font-mono text-xs text-accent-emerald mt-1">{exp.company}</p>
                      <p className="font-mono text-xs text-text-muted">{exp.duration}</p>
                    </div>
                  ))}
                </div>
              </OverviewCard>
            </AnimatedSection>

            {/* Top Projects card */}
            <AnimatedSection delay={200} className="lg:col-span-1">
              <OverviewCard
                icon={<Code2 size={20} className="text-accent-blue" />}
                label="Top Projects"
                href="/projects"
              >
                <div className="space-y-2.5">
                  {projects.slice(0, 3).map((proj) => (
                    <div
                      key={proj.id}
                      className="flex items-center justify-between gap-2"
                    >
                      <p className="font-display text-sm text-text-primary truncate">
                        {proj.name}
                      </p>
                      <span className="font-mono text-xs text-text-muted shrink-0">
                        ★ {proj.stars}
                      </span>
                    </div>
                  ))}
                </div>
              </OverviewCard>
            </AnimatedSection>

            {/* Socials card */}
            <AnimatedSection delay={300} className="lg:col-span-1">
              <OverviewCard
                icon={<Share2 size={20} className="text-accent-purple" />}
                label="Connect"
                href="/contact"
              >
                <div className="space-y-2">
                  {socialLinks.slice(0, 4).map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-accent-cyan transition-colors group"
                    >
                      <span className="text-accent-cyan/40 group-hover:text-accent-cyan transition-colors">▸</span>
                      {link.label}
                    </a>
                  ))}
                </div>
              </OverviewCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Overview Card sub-component ───────────────────────────
function OverviewCard({
  icon,
  label,
  href,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="block h-full group">
      <div className="glass glass-hover rounded-2xl p-5 h-full flex flex-col gap-4 cursor-pointer">
        {/* Card header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-bg-elevated">{icon}</div>
            <span className="section-label">{label}</span>
          </div>
          <ArrowRight
            size={14}
            className="text-text-muted group-hover:text-accent-cyan group-hover:translate-x-1 transition-all duration-200"
          />
        </div>

        {/* Content */}
        <div className="flex-1">{children}</div>
      </div>
    </Link>
  );
}
