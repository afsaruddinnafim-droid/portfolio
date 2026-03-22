"use client";

import { useState } from "react";
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { siteConfig, socialLinks } from "@/data/config";

// Full contact card data with richer descriptions
// TODO: Replace all href values in /src/data/config.ts
const contactMethods = [
  {
    id: "email",
    label: "Email",
    value: "TODO: your@email.com",
    href: "mailto:TODO@example.com",
    icon: Mail,
    color: "#00e5ff",
    desc: "Best way to reach me",
  },
  {
    id: "phone",
    label: "Phone",
    value: "TODO: +XX XXX XXX XXXX",
    href: "tel:+TODO",
    icon: Phone,
    color: "#00ffa3",
    desc: "Available weekdays",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "TODO: /in/your-profile",
    href: "https://linkedin.com/in/TODO",
    icon: Linkedin,
    color: "#3b82f6",
    desc: "Professional network",
  },
  {
    id: "github",
    label: "GitHub",
    value: "TODO: @your-username",
    href: "https://github.com/TODO",
    icon: Github,
    color: "#8896b3",
    desc: "Open source & projects",
  },
  {
    id: "facebook",
    label: "Facebook",
    value: "TODO: /your-profile",
    href: "https://facebook.com/TODO",
    icon: Facebook,
    color: "#60a5fa",
    desc: "Social updates",
  },
  {
    id: "instagram",
    label: "Instagram",
    value: "TODO: @your-handle",
    href: "https://instagram.com/TODO",
    icon: Instagram,
    color: "#f472b6",
    desc: "Photos & stories",
  },
];

type FormState = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // TODO: Connect to your API / email service (e.g., Resend, Formspree, EmailJS)
    // Example with Formspree:
    // const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });
    // if (res.ok) setStatus("sent"); else setStatus("error");

    // For now: simulate delay
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  return (
    <div className="relative min-h-screen pt-28 pb-24 px-6 z-10">
      {/* Background glow */}
      <div
        className="fixed bottom-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle at 90% 90%, rgba(168,85,247,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <PageHeader
            label="04 / Contact"
            title="Get In Touch"
            description="TODO: Replace with your message (e.g., 'Open to opportunities, collaborations, or just a chat. My inbox is always open.')."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* ── Left: Contact methods ── */}
          <AnimatedSection delay={100} className="lg:col-span-2">
            <div className="space-y-4">
              {/* Location */}
              <div className="glass rounded-2xl p-5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-bg-elevated">
                  <MapPin size={16} className="text-accent-cyan" />
                </div>
                <div>
                  <p className="font-mono text-xs text-text-muted">Location</p>
                  {/* TODO: Update location */}
                  <p className="font-display font-semibold text-text-primary text-sm">
                    TODO: Your City, Country
                  </p>
                </div>
              </div>

              {/* Contact cards */}
              {contactMethods.map((method, i) => {
                const Icon = method.icon;
                return (
                  <AnimatedSection key={method.id} delay={i * 60 + 150}>
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="glass glass-hover rounded-xl p-4 flex items-center gap-4 group block"
                    >
                      <div
                        className="p-2.5 rounded-lg shrink-0 transition-all duration-200"
                        style={{
                          background: `${method.color}15`,
                          border: `1px solid ${method.color}25`,
                        }}
                      >
                        <Icon size={16} style={{ color: method.color }} />
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-xs text-text-muted">{method.label}</p>
                        <p className="font-display font-medium text-text-primary text-sm truncate group-hover:text-accent-cyan transition-colors">
                          {method.value}
                        </p>
                        <p className="font-mono text-xs text-text-muted">{method.desc}</p>
                      </div>
                    </a>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>

          {/* ── Right: Contact form ── */}
          <AnimatedSection delay={200} className="lg:col-span-3">
            <div className="glass rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                <h2 className="font-display font-bold text-text-primary text-xl">
                  Send a Message
                </h2>
              </div>

              {status === "sent" ? (
                /* Success state */
                <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                  <div className="p-4 rounded-full bg-accent-emerald/10 border border-accent-emerald/20">
                    <CheckCircle2 size={32} className="text-accent-emerald" />
                  </div>
                  <h3 className="font-display font-bold text-text-primary text-xl">
                    Message Sent!
                  </h3>
                  <p className="font-mono text-sm text-text-secondary max-w-xs">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-2 font-mono text-xs text-accent-cyan hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="font-mono text-xs text-text-muted" htmlFor="name">
                        Your Name <span className="text-accent-cyan">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl input-dark text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-xs text-text-muted" htmlFor="email">
                        Email Address <span className="text-accent-cyan">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl input-dark text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs text-text-muted" htmlFor="subject">
                      Subject <span className="text-accent-cyan">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="What's this about?"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl input-dark text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs text-text-muted" htmlFor="message">
                      Message <span className="text-accent-cyan">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell me about your project, opportunity, or just say hello…"
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl input-dark text-sm resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="font-mono text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
                      Something went wrong. Please try again or contact me directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl btn-solid text-sm font-display font-bold disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-bg-base/30 border-t-bg-base rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="font-mono text-xs text-text-muted text-center">
                    {/* TODO: Update once you connect a real form handler */}
                    Form UI only — connect an API in handleSubmit() to send real emails.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
