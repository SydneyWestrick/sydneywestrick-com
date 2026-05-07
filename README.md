# sydneywestrick.com

Editorial reference site for Sydney Westrick — independent practitioner voice
on securities-backed lending (SBL) and digital asset-backed lending (DAL).

## Stack
- Astro 4 (static-first)
- Vanilla CSS with CSS variables
- Vercel deployment
- Content Collections for pillars (Markdown)

## Local dev
```
npm install
npm run dev
```
Visit http://localhost:4321

## Build
```
npm run build
npm run preview
```

## Add a new pillar
1. Create src/content/pillars/[slug].md
2. Fill in frontmatter (see existing pillars)
3. Write article body
4. Commit and push — Vercel auto-deploys

## Schema validation
After deploy: https://validator.schema.org and https://search.google.com/test/rich-results

## Required asset replacements
- public/headshot.jpg
- public/logo.png
- public/og-default.jpg (1200x630)
