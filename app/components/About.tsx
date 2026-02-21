"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
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
    <section id="about" className="py-24 md:py-32 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            {/* Photo placeholder with subtle ring */}
            <div className="relative flex-shrink-0">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center">
                <span className="text-zinc-600 text-sm font-mono">Photo</span>
              </div>
              <div className="absolute -inset-1 rounded-full border border-blue-500/10 pointer-events-none" />
            </div>

            <div>
              <p className="font-mono text-sm text-blue-400/60 mb-3 tracking-wider uppercase">
                About
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-5">
                Hey, I&apos;m Zach.
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-4 font-light text-lg">
                I&apos;m a product leader who codes. I&apos;ve spent 8 years
                building software and the last 2 years pioneering AI-powered
                development workflows that let small teams ship like big ones.
              </p>
              <p className="text-zinc-400 leading-relaxed font-light text-lg">
                As VP of Product at Impact Suite, my 2-person dev team built a
                full K-12 safety platform in 5 months using Claude Code &mdash;
                almost every line of it. Now I help other teams and builders
                unlock the same kind of speed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
