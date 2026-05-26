# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- `npm run dev` — start VitePress dev server
- `npm run build` — production build to `docs/.vitepress/dist/`
- `npm run preview` — preview production build locally

## Project Structure
```
prompt-hub/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts          — VitePress config, imports sidebar
│   │   ├── sidebar.ts         — auto-generates sidebar from prompts/ directories
│   │   ├── mapping.ts         — English→Chinese category & title mappings
│   │   ├── theme/
│   │   │   ├── index.ts       — theme entry (extends default)
│   │   │   ├── Layout.vue     — custom layout wrapper
│   │   │   ├── style.css      — custom styles
│   │   │   └── components/CopyPrompt.vue — copy-to-clipboard button
│   ├── prompts/               — prompt .md files, organized by subdirectory
│   │   ├── recent.data.ts     — content loader for home page "recent prompts"
│   │   └── **/*.md
│   ├── public/                — static assets (favicon, grid.svg)
│   ├── index.md               — home page
│   └── contributing.md        — contribution guide
├── .github/workflows/deploy.yml — CI/CD: build on PR, deploy to Pages on push to main
├── CONTRIBUTING.md            — GitHub-recognized contribution guide
└── README.md
```

## Architecture

### Sidebar auto-generation
- `sidebar.ts` scans all subdirectories under `docs/prompts/`
- Each subdirectory becomes a sidebar group with Chinese name from `mapping.ts`
- Each `.md` file becomes a sidebar item; title is read from frontmatter `title` field
- `mapping.ts` provides `categoryMap` (directory name → Chinese label) and optional `promptTitleMap` (file name → display title override)
- Add a new category: create subdirectory + add entry in `categoryMap`
- Add a new prompt: create `.md` in existing category directory, it auto-appears

### Home page "recent prompts"
- `recent.data.ts` uses `createContentLoader` to load all `prompts/**/*.md`
- Sorted by `date` frontmatter, latest 10 displayed on home page
- The home page `index.md` imports this data and renders prompt cards

### Copy to clipboard
- `CopyPrompt.vue` is registered as a global component but currently commented out in `Layout.vue`
- Reads the first `<pre>` block on prompt pages and copies to clipboard
- Has "Copy All" button when multiple code blocks are detected

### Theme customization
- `style.css` adds: prompt cards, tags, category grid, copy button, dark mode background (`grid.svg`)
- Dark mode background image: `.dark .VPContent` section applies `grid.svg` from `public/`

### GitHub Actions
- Trigger on PR to main (build check only) and push to main (build + deploy to Pages)
- Builds with `npm ci` → `npm run build`, deploys via `actions/deploy-pages`
- Requires `base` config to match repo name for Pages deployment

## Prompt File Format
Every prompt `.md` requires frontmatter:
```yaml
---
title: "中文标题"
tags: ["标签1", "标签2"]
date: 2026-05-26
author: "作者名"
model: "Claude 4"
---
```
The `title` field is used in the sidebar layer and the home page "recent" list.