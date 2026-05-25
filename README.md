# PromptHub

A community-driven collection of AI prompts, built with [VitePress](https://vitepress.dev).

## Features

- **Organized by Category** — Writing, Coding, Analysis, Creative, and more
- **One-Click Copy** — Copy any prompt to clipboard instantly
- **Syntax Highlighting** — Prompts are displayed with full code highlighting
- **Dark Mode** — Automatic light/dark theme switching
- **Community Driven** — Open source, accepting contributions via PR

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
prompt-hub/
├── docs/
│   ├── .vitepress/       # VitePress configuration & theme
│   ├── prompts/          # Prompt files organized by category
│   │   ├── writing/
│   │   ├── coding/
│   │   ├── analysis/
│   │   └── creative/
│   ├── index.md          # Home page
│   └── contributing.md   # Contribution guide
├── .github/workflows/    # CI/CD
└── package.json
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for how to submit new prompts.

## License

MIT