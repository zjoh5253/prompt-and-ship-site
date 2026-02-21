# Prompt & Ship — Landing Page

## Project
- **Stack:** Next.js 16 + TypeScript + Tailwind CSS v4 (App Router)
- **Deploy:** Render static site (`output: 'export'` → `./out/`)
- **Domain:** promptandship.com

## Brand
- **Vibe:** Developer terminal meets clean SaaS. Think Linear, Vercel, Anthropic. Minimal, confident, developer-native.
- **Colors:** Dark background (#0a0a0a), electric blue accent (#3b82f6), zinc grays for text hierarchy.
- **Logo:** `/public/logo.jpeg` — wordmark with rocket motif, blue on dark.
- **Voice:** Professional but not corporate. Technical but approachable. "Smart friend who happens to be an expert." See `../prompt-and-ship/docs/writing-style-guide.md`.

## Frontend Aesthetics Guidelines

Source: https://platform.claude.com/cookbook/coding-prompting-for-frontend-aesthetics

<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs. In frontend design, this creates what users call the "AI slop" aesthetic. Avoid this: make creative, distinctive frontends that surprise and delight. Focus on:

**Typography:** Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics. Use extremes: 100/200 weight vs 800/900, not 400 vs 600. Size jumps of 3x+, not 1.5x. High-contrast pairings = interesting (display + monospace, serif + geometric sans).

Good choices for this project's developer-native aesthetic:
- Headings: Clash Display, Satoshi, Cabinet Grotesk, or Space Grotesk
- Body/UI: IBM Plex Sans, Source Sans 3, or Bricolage Grotesque
- Code/accents: JetBrains Mono, Fira Code

**Color & Theme:** Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. Draw from IDE themes for inspiration. Avoid purple gradients on white.

**Motion:** Use animations for effects and micro-interactions. Prioritize CSS-only solutions. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions.

**Backgrounds:** Create atmosphere and depth rather than defaulting to solid colors. Layer CSS gradients, use geometric patterns, or add contextual effects that match the overall aesthetic.

**Avoid generic AI-generated aesthetics:**
- Overused font families (Inter, Roboto, Arial, system fonts)
- Cliched color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character

Interpret creatively and make unexpected choices that feel genuinely designed for the context.
</frontend_aesthetics>
