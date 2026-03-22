import type { Metadata } from "next";
import { readFile } from "fs/promises";
import path from "path";
import ReactMarkdown from "react-markdown";
import { PageHeader } from "@/components/PageHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { siteConfig, education } from "@/data/config";
import { GraduationCap, MapPin, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name} — background, skills, and interests.`,
};

async function getProfileMarkdown(): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), "public", "profile.md");
    return await readFile(filePath, "utf-8");
  } catch {
    return "# About Me\n\nTODO: Add your profile.md to /public/profile.md";
  }
}

export default async function AboutPage() {
  const markdown = await getProfileMarkdown();

  return (
    <div className="relative min-h-screen pt-28 pb-24 px-6 z-10">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <PageHeader
            label="01 / About"
            title="About Me"
            description={`TODO: Replace with your short bio intro sentence. Who are you and what drives you?`}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ── Left sidebar ── */}
          <AnimatedSection delay={100} className="lg:col-span-1">
            <div className="space-y-5 sticky top-28">
              {/* Avatar placeholder */}
              <div className="glass rounded-2xl p-6 flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-emerald/10 border border-accent-cyan/20 flex items-center justify-center font-display font-bold text-3xl text-accent-cyan">
                  {/* TODO: Replace with <Image> using your real photo */}
                  MN
                </div>
                <div className="text-center">
                  <p className="font-display font-bold text-text-primary">{siteConfig.name}</p>
                  <p className="font-mono text-xs text-accent-cyan mt-1">{siteConfig.tagline}</p>
                </div>
                {/* TODO: Update location */}
                <div className="flex items-center gap-1.5 font-mono text-xs text-text-muted">
                  <MapPin size={12} />
                  <span>TODO: Your Location</span>
                </div>
                <a
                  href={siteConfig.resumeUrl}
                  download
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl btn-glow text-xs font-mono font-medium"
                >
                  <Download size={13} />
                  Download Resume
                </a>
              </div>

              {/* Education */}
              <div className="glass rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap size={16} className="text-accent-cyan" />
                  <span className="section-label">Education</span>
                </div>
                <div className="space-y-4">
                  {education.map((edu, i) => (
                    <div key={i} className="border-l-2 border-accent-cyan/30 pl-3">
                      <p className="font-display font-semibold text-text-primary text-sm leading-tight">
                        {edu.degree}
                      </p>
                      <p className="font-mono text-xs text-accent-cyan mt-1">{edu.institution}</p>
                      <p className="font-mono text-xs text-text-muted mt-0.5">{edu.duration}</p>
                      {edu.gpa && (
                        <p className="font-mono text-xs text-text-muted">GPA: {edu.gpa}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Markdown content ── */}
          <AnimatedSection delay={200} className="lg:col-span-2">
            <div className="glass rounded-2xl p-8">
              <article className="prose-custom">
                <ReactMarkdown>{markdown}</ReactMarkdown>
              </article>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Prose styles via style tag */}
      <style jsx global>{`
        .prose-custom h1 {
          font-family: var(--font-syne);
          font-size: 1.75rem;
          font-weight: 800;
          color: #f0f4ff;
          margin-bottom: 1rem;
          margin-top: 2rem;
          line-height: 1.2;
        }
        .prose-custom h1:first-child { margin-top: 0; }
        .prose-custom h2 {
          font-family: var(--font-syne);
          font-size: 1.2rem;
          font-weight: 700;
          color: #00e5ff;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          letter-spacing: 0.02em;
        }
        .prose-custom h3 {
          font-family: var(--font-syne);
          font-size: 1rem;
          font-weight: 600;
          color: #f0f4ff;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .prose-custom p {
          color: #8896b3;
          line-height: 1.8;
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }
        .prose-custom strong {
          color: #f0f4ff;
          font-weight: 600;
        }
        .prose-custom em { color: #00ffa3; }
        .prose-custom a {
          color: #00e5ff;
          text-decoration: none;
          border-bottom: 1px solid rgba(0,229,255,0.3);
          transition: border-color 0.2s;
        }
        .prose-custom a:hover { border-color: #00e5ff; }
        .prose-custom ul {
          list-style: none;
          padding: 0;
          margin-bottom: 1rem;
        }
        .prose-custom ul li {
          color: #8896b3;
          font-size: 0.9rem;
          padding: 0.25rem 0 0.25rem 1.25rem;
          position: relative;
          line-height: 1.7;
        }
        .prose-custom ul li::before {
          content: "▸";
          color: #00e5ff;
          position: absolute;
          left: 0;
          font-size: 0.75rem;
          top: 0.4rem;
        }
        .prose-custom hr {
          border: none;
          border-top: 1px solid rgba(0,229,255,0.15);
          margin: 2rem 0;
        }
        .prose-custom code {
          font-family: var(--font-jetbrains);
          font-size: 0.8rem;
          background: rgba(0,229,255,0.08);
          border: 1px solid rgba(0,229,255,0.15);
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
          color: #00e5ff;
        }
        .prose-custom blockquote {
          border-left: 2px solid rgba(0,229,255,0.4);
          padding-left: 1rem;
          margin: 1.5rem 0;
        }
        .prose-custom blockquote p { color: #4a5568; font-style: italic; }
      `}</style>
    </div>
  );
}
