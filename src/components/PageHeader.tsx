interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <div className="relative mb-16">
      {/* Decorative top line */}
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent-cyan/20" />
        <span className="section-label">{label}</span>
        <div className="h-px w-12 bg-accent-cyan/40" />
      </div>

      <h1 className="font-display font-bold text-4xl md:text-5xl text-text-primary mb-4 leading-tight">
        {title}
      </h1>

      {description && (
        <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}

      {/* Bottom accent */}
      <div className="mt-8 divider-glow" />
    </div>
  );
}
