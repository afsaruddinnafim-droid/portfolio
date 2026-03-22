import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ExperienceCard } from "@/components/ExperienceCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { siteConfig, experiences } from "@/data/config";

export const metadata: Metadata = {
  title: "Experience",
  description: `Work experience and professional background of ${siteConfig.name}.`,
};

export default function ExperiencePage() {
  return (
    <div className="relative min-h-screen pt-28 pb-24 px-6 z-10">
      {/* Background accent */}
      <div
        className="fixed top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(0,255,163,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <PageHeader
            label="02 / Experience"
            title="Work Experience"
            description="TODO: A short line about your professional journey (e.g., 'From internships to full-time roles — here's what I've built and learned.')."
          />
        </AnimatedSection>

        {/* Stats bar */}
        <AnimatedSection delay={100}>
          <div className="grid grid-cols-3 gap-4 mb-16">
            {[
              { label: "Roles", value: experiences.length },
              // TODO: Update these with real numbers
              { label: "Years Exp.", value: "TODO" },
              { label: "Companies", value: experiences.length },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-xl p-4 text-center"
              >
                <div className="font-display font-extrabold text-2xl gradient-text">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div>
          {experiences.map((exp, i) => (
            <AnimatedSection key={exp.id} delay={i * 100}>
              <ExperienceCard
                experience={exp}
                isLast={i === experiences.length - 1}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={experiences.length * 100}>
          <div className="mt-4 glass rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-display font-semibold text-text-primary">Want the full picture?</p>
              <p className="font-mono text-xs text-text-muted mt-1">
                Download my resume for a complete overview.
              </p>
            </div>
            <a
              href={siteConfig.resumeUrl}
              download
              className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl btn-solid text-sm font-display font-bold"
            >
              Download Resume
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
