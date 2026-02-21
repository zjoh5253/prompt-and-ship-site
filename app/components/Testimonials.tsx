"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Zach helped our team go from barely using Cursor to shipping features 3x faster. The onboarding was worth every penny.",
    name: "Coming Soon",
    role: "Placeholder testimonial",
  },
  {
    quote:
      "One session with Zach saved me an entire weekend of debugging. He diagnosed the issue in 10 minutes and taught me how to prevent it.",
    name: "Coming Soon",
    role: "Placeholder testimonial",
  },
  {
    quote:
      "The retainer plan has been a massive unlock for our team. Having async access to an AI coding expert is like having a superpower on call.",
    name: "Coming Soon",
    role: "Placeholder testimonial",
  },
];

export default function Testimonials() {
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
      <div ref={ref} className="max-w-6xl mx-auto">
        <p
          className={`font-mono text-sm text-blue-400/60 text-center mb-4 tracking-wider uppercase transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Testimonials
        </p>
        <h2
          className={`font-heading text-3xl md:text-5xl font-extrabold text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          What People Are Saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`group bg-zinc-900/50 border border-zinc-800/60 rounded-2xl p-8 card-lift relative overflow-hidden transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <span className="font-heading text-6xl text-blue-500/10 leading-none block mb-2 select-none">
                &ldquo;
              </span>
              <p className="text-zinc-300 leading-relaxed mb-8 font-light">
                {testimonial.quote}
              </p>
              <div className="mt-auto">
                <p className="font-medium text-zinc-300 text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-zinc-600 font-mono">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
