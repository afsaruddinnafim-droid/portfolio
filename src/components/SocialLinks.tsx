import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  mail: Mail,
  phone: Phone,
  external: ExternalLink,
};

interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  size?: number;
  showLabel?: boolean;
  className?: string;
}

export function SocialLinks({
  links,
  size = 18,
  showLabel = false,
  className,
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map((link) => {
        const Icon = iconMap[link.icon] || ExternalLink;
        return (
          <a
            key={link.id}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={link.label}
            className={cn(
              "flex items-center gap-2 p-2.5 rounded-lg glass border border-border-subtle",
              "text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/40",
              "transition-all duration-200 hover:shadow-[0_0_12px_rgba(0,229,255,0.2)]",
              showLabel && "px-4"
            )}
          >
            <Icon size={size} />
            {showLabel && (
              <span className="font-mono text-xs">{link.label}</span>
            )}
          </a>
        );
      })}
    </div>
  );
}
