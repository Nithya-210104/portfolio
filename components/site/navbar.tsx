"use client";

import { useEffect, useMemo, useState } from "react";

import { Menu, X } from "lucide-react";

import { NAV_ITEMS, PROFILE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const ids = useMemo(() => NAV_ITEMS.map((item) => item.href.replace("#", "")), []);
  const [activeSection, setActiveSection] = useState(ids[0]);
  const [open, setOpen] = useState(false);

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
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.01,
      },
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [ids]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="section-shell pt-5">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-3">
          <a href="#home" className="font-heading text-sm font-semibold text-slate-100">
            {PROFILE.name}
          </a>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-lg p-2 text-slate-100 md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          <ul className="hidden items-center gap-2 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "rounded-lg px-3 py-2 text-sm transition-colors",
                      isActive ? "bg-cyan-300/15 text-cyan-200" : "text-slate-300 hover:text-white",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {open ? (
          <div className="glass mt-3 rounded-2xl p-4 md:hidden">
            <ul className="grid gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
