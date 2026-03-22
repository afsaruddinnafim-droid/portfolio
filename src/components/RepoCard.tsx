import { Star, GitFork, ExternalLink, Globe } from "lucide-react";
import { languageColors } from "@/data/config";
import type { Repo } from "@/lib/github";
import { cn } from "@/lib/utils";

interface RepoCardProps {
  repo: Repo;
  className?: string;
}

export function RepoCard({ repo, className }: RepoCardProps) {
  const langColor = repo.language ? (languageColors[repo.language] ?? "#8896b3") : "#8896b3";
  const updatedDate = new Date(repo.updatedAt).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className={cn(
        "group relative glass glass-hover rounded-2xl p-6 flex flex-col gap-4 h-full",
        className
      )}
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(0,229,255,0.1) 0%, transparent 60%)" }} />

      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display font-semibold text-text-primary group-hover:text-accent-cyan transition-colors duration-200 leading-tight">
          {repo.name}
        </h3>
        <div className="flex gap-2 shrink-0">
          {repo.demoUrl && (
            <a
              href={repo.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="p-1.5 rounded-md text-text-muted hover:text-accent-emerald transition-colors"
            >
              <Globe size={14} />
            </a>
          )}
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
            className="p-1.5 rounded-md text-text-muted hover:text-accent-cyan transition-colors"
          >
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed flex-1 line-clamp-3">
        {repo.description ?? "No description provided."}
      </p>

      {/* Topics */}
      {repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {repo.topics.slice(0, 4).map((topic) => (
            <span key={topic} className="tag">
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Footer stats */}
      <div className="flex items-center justify-between pt-3 border-t border-border-subtle">
        <div className="flex items-center gap-4">
          {repo.language && (
            <div className="flex items-center gap-1.5">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: langColor }}
              />
              <span className="font-mono text-xs text-text-secondary">{repo.language}</span>
            </div>
          )}
          <div className="flex items-center gap-1 text-text-muted">
            <Star size={12} />
            <span className="font-mono text-xs">{repo.stars}</span>
          </div>
          <div className="flex items-center gap-1 text-text-muted">
            <GitFork size={12} />
            <span className="font-mono text-xs">{repo.forks}</span>
          </div>
        </div>
        <span className="font-mono text-xs text-text-muted">{updatedDate}</span>
      </div>
    </div>
  );
}
