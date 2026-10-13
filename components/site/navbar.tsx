"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Code2, Menu, Sparkles, X } from "lucide-react";

import { NAV_ITEMS, PROFILE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const ids = useMemo(() => NAV_ITEMS.map((item) => item.href.replace("#", "")), []);
  const [activeSection, setActiveSection] = useState(ids[0]);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -40% 0px",
        threshold: 0.1,
      },
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [ids]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <nav className="section-shell pt-4 sm:pt-5">
        <div
          className={cn(
            "glass flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300",
            scrolled ? "shadow-xl shadow-cyan-950/20 border-cyan-400/20 bg-slate-950/80" : "bg-slate-950/60",
          )}
        >
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-lg bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 group-hover:bg-cyan-400/20 transition-colors">
              <Code2 size={18} />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-sm sm:text-base font-bold text-white tracking-tight">
                {PROFILE.name}
              </span>
              <span className="text-[10px] text-cyan-300/80 font-medium">
                {PROFILE.shortRole}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "rounded-xl px-3 py-1.5 text-xs font-medium transition-all",
                      isActive
                        ? "bg-cyan-400/15 text-cyan-300 font-semibold border border-cyan-400/25"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-400 text-slate-950 text-xs font-semibold hover:bg-cyan-300 transition-colors shadow-sm shadow-cyan-400/20"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={14} />
            </a>

            <button
              onClick={() => setOpen((prev) => !prev)}
              className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800/60 lg:hidden border border-slate-800"
              aria-label="Toggle navigation"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="glass mt-2.5 rounded-2xl p-4 lg:hidden border border-slate-800 bg-slate-950/90 shadow-2xl">
            <ul className="grid gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-cyan-400/15 text-cyan-300 font-semibold"
                          : "text-slate-300 hover:bg-slate-800/60 hover:text-white",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full p-2.5 rounded-xl bg-cyan-400 text-slate-950 font-semibold text-xs text-center"
                >
                  Contact Me <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
