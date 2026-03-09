"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Power Sessions",
    subtitle: "One-off expert help",
    tiers: [
      {
        name: "Quick Hit",
        price: "$150",
        duration: "30 min",
        description:
          "Bug triage, deployment fixes, tool setup, quick architecture questions.",
        href: "https://calendly.com/zach-zachjohnson/quick-hit-session",
      },
      {
        name: "Deep Dive",
        price: "$275",
        duration: "60 min",
        description:
          "Pair-programming with AI tools, complex debugging, migration planning, architecture reviews.",
        href: "https://calendly.com/zach-zachjohnson/deep-dive-session",
      },
    ],
    cta: "Book a Session",
    href: "https://calendly.com/zach-zachjohnson/free-discovery-call",
  },
  {
    title: "Team Onboarding",
    subtitle: "Get your team up to speed",
    tiers: [
      {
        name: "Starter",
        price: "$2,500",
        duration: "1 week \u00b7 up to 5",
        description:
          "Tool setup, workflow design, 2 live training sessions, async Slack support.",
      },
      {
        name: "Full Rollout",
        price: "$6,000",
        duration: "3 weeks \u00b7 up to 15",
        description:
          "4 live sessions, 1:1 office hours, custom docs, 2 weeks Slack support.",
      },
    ],
    cta: "Learn More",
    href: "https://calendly.com/zach-zachjohnson/free-discovery-call",
  },
  {
    title: "Monthly Retainer",
    subtitle: "Ongoing async access",
    tiers: [
      {
        name: "Solo Builder",
        price: "$500",
        duration: "/mo",
        description:
          "Slack channel access, up to 10 async questions/week, 1 included 30-min session/month.",
      },
      {
        name: "Team",
        price: "$2,000",
        duration: "/mo \u00b7 up to 5",
        description:
          "Slack for up to 5 people, unlimited async questions, 2 included 60-min sessions/month.",
      },
    ],
    cta: "Get Started",
    href: "https://calendly.com/zach-zachjohnson/free-discovery-call",
  },
];

export default function Services() {
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
    <section id="services" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <p
          className={`font-mono text-sm text-blue-400/60 text-center mb-4 tracking-wider uppercase transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Services
        </p>
        <h2
          className={`font-heading text-3xl md:text-5xl font-extrabold text-center mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          How I Can Help
        </h2>
        <p
          className={`text-zinc-400 text-center mb-14 max-w-2xl mx-auto font-light transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Whether you need a quick fix, a team transformation, or ongoing
          support &mdash; there&apos;s a plan for that.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group bg-zinc-900/80 border border-zinc-800/80 rounded-2xl p-8 flex flex-col card-lift relative overflow-hidden transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {/* Gradient accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

              <h3 className="font-heading text-xl font-bold mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-500 mb-8">{service.subtitle}</p>

              <div className="space-y-6 flex-1">
                {service.tiers.map((tier, j) => (
                  <div
                    key={j}
                    className="pb-6 border-b border-zinc-800/50 last:border-0 last:pb-0"
                  >
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-mono text-2xl font-bold text-blue-400">
                        {tier.price}
                      </span>
                      <span className="font-mono text-xs text-zinc-600">
                        {tier.duration}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-zinc-300 mb-1">
                      {tier.name}
                    </p>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {tier.description}
                    </p>
                    {"href" in tier && tier.href && (
                      <a
                        href={tier.href as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Book {tier.name} &rarr;
                      </a>
                    )}
                  </div>
                ))}
              </div>

              <a
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block text-center bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 font-medium rounded-xl px-6 py-3.5 transition-all border border-blue-500/20 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
              >
                {service.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
