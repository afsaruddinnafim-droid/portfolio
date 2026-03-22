import { MapPin, Calendar, ExternalLink } from "lucide-react";

interface Experience {
  id: number;
  title: string;
  company: string;
  companyUrl: string;
  duration: string;
  location: string;
  type: string;
  highlights: string[];
  stack: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  isLast?: boolean;
}

export function ExperienceCard({ experience, isLast }: ExperienceCardProps) {
  return (
    <div className="relative flex gap-6 md:gap-8">
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center shrink-0">
        <div className="timeline-dot mt-1" />
        {!isLast && (
          <div className="w-px flex-1 mt-3 bg-gradient-to-b from-accent-cyan/40 to-transparent min-h-[80px]" />
        )}
      </div>

      {/* Card */}
      <div className="glass glass-hover rounded-2xl p-6 mb-8 flex-1 group">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="font-display font-bold text-text-primary text-lg leading-tight">
              {experience.title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-accent-cyan hover:text-accent-emerald transition-colors flex items-center gap-1"
              >
                {experience.company}
                <ExternalLink size={11} />
              </a>
              <span className="px-2 py-0.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 font-mono text-xs text-accent-cyan">
                {experience.type}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1 text-right shrink-0">
            <div className="flex items-center gap-1.5 text-text-muted font-mono text-xs justify-end">
              <Calendar size={11} />
              {experience.duration}
            </div>
            <div className="flex items-center gap-1.5 text-text-muted font-mono text-xs justify-end">
              <MapPin size={11} />
              {experience.location}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-2 mb-4">
          {experience.highlights.map((point, i) => (
            <li key={i} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
              <span className="text-accent-cyan mt-1.5 shrink-0">▸</span>
              {point}
            </li>
          ))}
        </ul>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border-subtle">
          {experience.stack.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
