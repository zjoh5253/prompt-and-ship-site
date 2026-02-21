"use client";

import { useEffect, useRef, useState } from "react";

const tools = [
  "Claude Code",
  "Cursor",
  "Lovable",
  "Base44",
  "OpenClaw",
  "Replit Agent",
  "GitHub Copilot",
  "v0 by Vercel",
  "Bolt.new",
];

export default function Tools() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="font-mono text-sm text-blue-400/60 text-center mb-4 tracking-wider uppercase">
          Toolkit
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-center mb-4">
          Tools I Teach
        </h2>
        <p className="text-zinc-400 text-center mb-14 max-w-xl mx-auto font-light">
          Hands-on expertise across the AI coding landscape.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool, i) => (
            <span
              key={tool}
              className={`font-mono text-sm bg-zinc-900/80 border border-zinc-800/80 rounded-xl px-5 py-3 text-zinc-400 hover:border-blue-500/40 hover:text-blue-300 hover:bg-blue-500/5 transition-all cursor-default ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${200 + i * 60}ms`,
                transitionDuration: "500ms",
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
