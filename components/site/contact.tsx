"use client";

import { FormEvent, useState } from "react";
import {
  Check,
  Clock,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PROFILE } from "@/lib/constants";

export function ContactSection() {
  const [copiedType, setCopiedType] = useState<"email" | "phone" | null>(null);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = (await response.json()) as { success: boolean; error?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.error ?? "Failed to send message.");
      }

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
      });
      event.currentTarget.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please feel free to email directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell section-spacing">
      <SectionHeading
        eyebrow="Get in Touch"
        title="Let's Connect and Build Together"
        description="Open for software engineering opportunities, multitenant SaaS consulting, mobile development, or DevOps automation."
      />

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Contact Info Card */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <Card className="glass-card border-slate-800/80 rounded-2xl h-full flex flex-col justify-between">
            <CardContent className="p-6 sm:p-8 space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs font-semibold">
                  <Sparkles size={13} /> Direct Contact Channels
                </span>
                <h3 className="font-heading text-xl font-bold text-white mt-3">
                  Reach Out Anytime
                </h3>
                <p className="text-xs sm:text-sm text-slate-300/80 mt-1">
                  I typically respond within 24 hours. Feel free to copy info or click to connect directly.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-3">
                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-cyan-400/30 transition-colors">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="flex items-center gap-3 text-xs sm:text-sm text-slate-200 hover:text-cyan-300 truncate"
                  >
                    <div className="p-2 rounded-lg bg-cyan-400/10 text-cyan-300">
                      <Mail size={16} />
                    </div>
                    <span className="truncate">{PROFILE.email}</span>
                  </a>
                  <button
                    onClick={() => copyToClipboard(PROFILE.email, "email")}
                    className="p-2 text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedType === "email" ? (
                      <Check size={16} className="text-emerald-400" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-cyan-400/30 transition-colors">
                  <a
                    href={`tel:${PROFILE.phoneRaw}`}
                    className="flex items-center gap-3 text-xs sm:text-sm text-slate-200 hover:text-cyan-300"
                  >
                    <div className="p-2 rounded-lg bg-cyan-400/10 text-cyan-300">
                      <Phone size={16} />
                    </div>
                    <span>{PROFILE.phone}</span>
                  </a>
                  <button
                    onClick={() => copyToClipboard(PROFILE.phone, "phone")}
                    className="p-2 text-slate-400 hover:text-white transition-colors"
                    title="Copy Phone Number"
                    aria-label="Copy Phone Number"
                  >
                    {copiedType === "phone" ? (
                      <Check size={16} className="text-emerald-400" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 text-xs sm:text-sm text-slate-200">
                  <div className="p-2 rounded-lg bg-cyan-400/10 text-cyan-300">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="font-semibold">{PROFILE.location}</div>
                    <div className="text-[11px] text-slate-400">Available for remote & hybrid roles</div>
                  </div>
                </div>
              </div>

              {/* Social profile shortcuts */}
              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-cyan-300 hover:border-cyan-400/30 transition-colors"
                >
                  <LinkedInIcon size={15} />
                  <span>LinkedIn Profile</span>
                  <ExternalLink size={12} className="opacity-60" />
                </a>

                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-cyan-300 hover:border-cyan-400/30 transition-colors"
                >
                  <GitHubIcon size={15} />
                  <span>GitHub Profile</span>
                  <ExternalLink size={12} className="opacity-60" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7">
          <Card className="glass-card border-slate-800/80 rounded-2xl">
            <CardContent className="p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                <MessageSquare size={16} className="text-cyan-400" /> Send a Direct Message
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Your Name</label>
                    <Input
                      name="name"
                      placeholder="e.g. John Doe"
                      required
                      className="bg-slate-950/60 border-slate-800 focus:border-cyan-400 rounded-xl"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Your Email</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="e.g. john@example.com"
                      required
                      className="bg-slate-950/60 border-slate-800 focus:border-cyan-400 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Your Message</label>
                  <Textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project, team, or role..."
                    required
                    className="bg-slate-950/60 border-slate-800 focus:border-cyan-400 rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-semibold gap-2 shadow-lg shadow-cyan-400/15"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending Message..."
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </Button>
              </form>

              {status.type !== "idle" && (
                <div
                  className={`p-3.5 rounded-xl text-xs font-medium border ${
                    status.type === "success"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                      : "bg-rose-500/10 border-rose-500/30 text-rose-300"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
