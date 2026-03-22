// ============================================================
// GitHub API helper
// To use real data: set GITHUB_USERNAME in your .env.local
// GITHUB_USERNAME=your-username
// Optionally add GITHUB_TOKEN for higher rate limits:
// GITHUB_TOKEN=ghp_xxxxx
// ============================================================

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  url: string;
  demoUrl?: string | null;
  updatedAt: string;
}

export async function fetchGitHubRepos(): Promise<Repo[]> {
  // TODO: Set GITHUB_USERNAME in .env.local to enable live data
  const username = process.env.GITHUB_USERNAME;

  if (!username) {
    // Fall back to mock data if env var not set
    const { projects } = await import("@/data/config");
    return projects as Repo[];
  }

  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
    };

    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=30&type=public`,
      {
        headers,
        next: { revalidate: 3600 }, // Cache for 1 hour (Next.js ISR)
      }
    );

    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

    const data = await res.json();

    return data
      .filter((r: { fork: boolean }) => !r.fork) // Skip forks
      .map(
        (r: {
          id: number;
          name: string;
          description: string | null;
          language: string | null;
          stargazers_count: number;
          forks_count: number;
          topics: string[];
          html_url: string;
          homepage: string | null;
          updated_at: string;
        }) => ({
          id: r.id,
          name: r.name,
          description: r.description,
          language: r.language,
          stars: r.stargazers_count,
          forks: r.forks_count,
          topics: r.topics || [],
          url: r.html_url,
          demoUrl: r.homepage || null,
          updatedAt: r.updated_at,
        })
      );
  } catch (err) {
    console.error("Failed to fetch GitHub repos, using mock data:", err);
    const { projects } = await import("@/data/config");
    return projects as Repo[];
  }
}
