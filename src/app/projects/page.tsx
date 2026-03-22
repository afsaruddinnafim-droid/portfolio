"use client";

import { useState, useMemo } from "react";
import { Search, X, Github } from "lucide-react";
import { RepoCard } from "@/components/RepoCard";
import { PageHeader } from "@/components/PageHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { projects, languageColors } from "@/data/config";
import { cn } from "@/lib/utils";

// NOTE: This is a client component using mock data.
// To use live GitHub data, convert to a Server Component and call fetchGitHubRepos()
// from @/lib/github — see comments in that file.

const allLanguages = Array.from(
  new Set(projects.map((p) => p.language).filter(Boolean))
) as string[];

const allTopics = Array.from(
  new Set(projects.flatMap((p) => p.topics))
).slice(0, 10);

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [activeLanguage, setActiveLanguage] = useState<string | null>(null);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        (p.description ?? "").toLowerCase().includes(search.toLowerCase());
      const matchLang = !activeLanguage || p.language === activeLanguage;
      const matchTopic = !activeTopic || p.topics.includes(activeTopic);
      return matchSearch && matchLang && matchTopic;
    });
  }, [search, activeLanguage, activeTopic]);

  const clearFilters = () => {
    setSearch("");
    setActiveLanguage(null);
    setActiveTopic(null);
  };

  const hasFilters = search || activeLanguage || activeTopic;

  return (
    <div className="relative min-h-screen pt-28 pb-24 px-6 z-10">
      {/* Background glow */}
      <div
        className="fixed top-1/3 left-0 w-[500px] h-[500px] pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle at 10% 50%, rgba(59,130,246,0.15) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <PageHeader
            label="03 / Projects"
            title="Projects"
            description="TODO: Replace with a line about your projects (e.g., 'A selection of open-source work, side projects, and experiments.')."
          />
        </AnimatedSection>

        {/* ── Search + Filters ── */}
        <AnimatedSection delay={100}>
          <div className="space-y-4 mb-10">
            {/* Search box */}
            <div className="relative max-w-md">
              <Search
                size={15}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-10 py-3 rounded-xl input-dark text-sm"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Language filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-text-muted mr-1">Language:</span>
              {allLanguages.map((lang) => {
                const color = languageColors[lang] ?? "#8896b3";
                const active = activeLanguage === lang;
                return (
                  <button
                    key={lang}
                    onClick={() => setActiveLanguage(active ? null : lang)}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs border transition-all duration-200",
                      active
                        ? "border-accent-cyan/60 bg-accent-cyan/10 text-accent-cyan"
                        : "border-border-subtle text-text-secondary hover:border-border-subtle/80 hover:text-text-primary"
                    )}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    {lang}
                  </button>
                );
              })}
            </div>

            {/* Topic filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-text-muted mr-1">Topic:</span>
              {allTopics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setActiveTopic(activeTopic === topic ? null : topic)}
                  className={cn(
                    "tag cursor-pointer transition-all duration-200",
                    activeTopic === topic && "bg-accent-cyan/15 border-accent-cyan/50 text-accent-cyan"
                  )}
                >
                  {topic}
                </button>
              ))}
            </div>

            {/* Clear filters */}
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-accent-cyan transition-colors"
              >
                <X size={12} />
                Clear all filters
              </button>
            )}
          </div>
        </AnimatedSection>

        {/* ── Results count ── */}
        <AnimatedSection delay={150}>
          <div className="flex items-center justify-between mb-6">
            <p className="font-mono text-xs text-text-muted">
              Showing{" "}
              <span className="text-accent-cyan">{filtered.length}</span> /{" "}
              {projects.length} repositories
            </p>
            {/* TODO: Replace href with your real GitHub profile */}
            <a
              href="https://github.com/TODO-your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-text-secondary hover:text-accent-cyan transition-colors"
            >
              <Github size={13} />
              View all on GitHub
            </a>
          </div>
        </AnimatedSection>

        {/* ── Cards grid ── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((repo, i) => (
              <AnimatedSection key={repo.id} delay={i * 60}>
                <RepoCard repo={repo} className="h-full" />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="text-4xl opacity-20">{"{ }"}</div>
            <p className="font-mono text-sm text-text-muted">No projects match your filters.</p>
            <button
              onClick={clearFilters}
              className="font-mono text-xs text-accent-cyan hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
