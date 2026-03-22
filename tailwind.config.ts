import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-syne)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      colors: {
        bg: {
          base: "#050810",
          surface: "#0a0f1e",
          elevated: "#0f1628",
          card: "#111827",
        },
        accent: {
          cyan: "#00e5ff",
          emerald: "#00ffa3",
          blue: "#3b82f6",
          purple: "#a855f7",
        },
        border: {
          subtle: "#1e2a40",
          glow: "#00e5ff33",
        },
        text: {
          primary: "#f0f4ff",
          secondary: "#8896b3",
          muted: "#4a5568",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,229,255,0.15), transparent)",
        "card-gradient":
          "linear-gradient(135deg, rgba(0,229,255,0.05) 0%, rgba(0,255,163,0.03) 100%)",
        "border-gradient":
          "linear-gradient(135deg, #00e5ff, #00ffa3, #3b82f6)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(0,229,255,0.3), 0 0 60px rgba(0,229,255,0.1)",
        "glow-emerald": "0 0 20px rgba(0,255,163,0.3), 0 0 60px rgba(0,255,163,0.1)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,229,255,0.2)",
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "grid-scroll": "gridScroll 20s linear infinite",
        "scan-line": "scanLine 4s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "border-spin": "borderSpin 4s linear infinite",
        "typing": "typing 3s steps(30,end) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,229,255,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(0,229,255,0.5), 0 0 80px rgba(0,229,255,0.2)" },
        },
        gridScroll: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "40px 40px" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        borderSpin: {
          "0%": { "--angle": "0deg" },
          "100%": { "--angle": "360deg" },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
