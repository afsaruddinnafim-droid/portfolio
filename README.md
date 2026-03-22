# MD Afsaruddin Nafim — Portfolio

A modern, futuristic personal portfolio built with **Next.js 14 (App Router)** and **Tailwind CSS**.

## ✨ Features

- **5 pages** with real routing: Home, About, Experience, Projects, Contact
- Dark theme with cyan/emerald glow accents, glassmorphism cards
- Animated hero with scan-line, grid background, and fade-up reveals
- Markdown-rendered About page (edit `public/profile.md`)
- Project cards with live GitHub API support (or mock data)
- Search + language/topic filtering on Projects page
- Responsive mobile menu with smooth slide-over animation
- SEO: title tags, meta descriptions, Open Graph placeholders
- Respects `prefers-reduced-motion`

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env file
cp .env.local.example .env.local

# 3. Start dev server
npm run dev
```

Alternatively View the live site at https://portfolio-csf7.vercel.app

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                   # Next.js App Router pages
│   ├── layout.tsx         # Root layout (Navbar, Footer, fonts)
│   ├── page.tsx           # Home /
│   ├── about/page.tsx     # About /about
│   ├── experience/page.tsx # Experience /experience
│   ├── projects/page.tsx  # Projects /projects (client)
│   ├── contact/page.tsx   # Contact /contact (client)
│   └── not-found.tsx      # 404 page
├── components/            # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── SocialLinks.tsx
│   ├── RepoCard.tsx
│   ├── ExperienceCard.tsx
│   ├── AnimatedSection.tsx
│   └── PageHeader.tsx
├── data/
│   └── config.ts          # ⭐ All your content lives here
├── lib/
│   ├── github.ts          # GitHub API helper
│   └── utils.ts           # cn() utility
└── styles/
    └── globals.css        # Design tokens, custom components
public/
└── profile.md             # Your About page markdown
```

## 🔧 Customising Your Content

All placeholder content is in **one file**: `src/data/config.ts`

Search for `TODO:` across the codebase to find every placeholder:
```bash
grep -r "TODO:" src/ public/
```

### Key things to update:
1. **`src/data/config.ts`** — name, tagline, bio, social links, education, experience, projects
2. **`public/profile.md`** — your full About page markdown
3. **`public/resume.pdf`** — add your real resume PDF
4. **`src/app/layout.tsx`** — SEO metadata (title, description, OG image URL)

## 🐙 Live GitHub Repos

To pull real repos on the Projects page:

1. Add to `.env.local`:
   ```
   GITHUB_USERNAME=your-username
   GITHUB_TOKEN=ghp_xxx   # optional, for higher rate limits
   ```
2. In `src/app/projects/page.tsx`, convert to a Server Component and call:
   ```ts
   import { fetchGitHubRepos } from "@/lib/github";
   const repos = await fetchGitHubRepos();
   ```

## 📧 Contact Form

The form UI is complete. To wire it up:

1. Sign up at [Formspree](https://formspree.io), [Resend](https://resend.com), or [EmailJS](https://emailjs.com)
2. In `src/app/contact/page.tsx`, uncomment and update the `handleSubmit` fetch call

## 🌐 Deploying to Vercel

```bash
npm run build   # Verify build passes
```

Then push to GitHub and import at [vercel.com/new](https://vercel.com/new).

Add your env vars in the Vercel dashboard under **Settings → Environment Variables**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 🛠 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on :3000 |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 📝 License

MIT — use freely, attribution appreciated.
