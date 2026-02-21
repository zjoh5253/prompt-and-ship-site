import Image from "next/image";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#case-study", label: "Case Study" },
  { href: "#booking", label: "Book a Call" },
];

const socialLinks = [
  { href: "https://linkedin.com/in/zachjohnson", label: "LinkedIn" },
  { href: "https://x.com/promptandship", label: "X" },
  { href: "https://github.com/promptandship", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-5">
            <Image
              src="/logo.svg"
              alt="Prompt & Ship"
              width={120}
              height={34}
              className="h-7 w-auto opacity-70"
            />
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-zinc-800/30 text-center">
          <p className="font-mono text-xs text-zinc-600 tracking-wider">
            &copy; 2026 Prompt &amp; Ship. From prompt to production.
          </p>
        </div>
      </div>
    </footer>
  );
}
