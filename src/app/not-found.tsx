import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="font-mono text-8xl font-bold gradient-text mb-4">404</div>
      <div className="font-mono text-sm text-accent-cyan mb-2">Page not found</div>
      <p className="text-text-secondary text-sm max-w-xs mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl btn-glow font-mono text-sm"
      >
        <ArrowLeft size={14} />
        Back to Home
      </Link>
    </div>
  );
}
