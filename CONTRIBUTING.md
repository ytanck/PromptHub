# Contributing to PromptHub

Thanks for contributing! PromptHub is a community-driven collection of AI prompts.

## Quick Start

1. **Fork** the repository
2. Create your prompt file in `docs/prompts/<category>/your-prompt.md`
3. Use the template below
4. **Submit a PR** against `main`

## Prompt Template

```markdown
---
title: "Your Prompt Title"
tags: ["tag1", "tag2"]
date: YYYY-MM-DD
author: "Your Name"
model: "Claude 4 / GPT-4"
---

## Description

Explain what this prompt does and when to use it.

## Prompt

\`\`\`
Your actual prompt content goes here...
\`\`\`

## Tips

- Any additional usage tips
- Expected output format
```

## Categories

| Category | Directory | Examples |
|----------|-----------|----------|
| Writing | `prompts/writing/` | Blog posts, emails, essays |
| Coding | `prompts/coding/` | Code generation, review, debugging |
| Analysis | `prompts/analysis/` | Data analysis, summarization, research |
| Creative | `prompts/creative/` | Stories, characters, dialogue |

## Guidelines

- Prompts should be **original or properly attributed**
- **Test your prompt** before submitting — make sure it works
- **Be specific** — include context, constraints, and expected output format
- **No harmful content** — prompts for malicious purposes will be rejected
- Use **descriptive tags** to help others discover your prompt

## Review Process

1. PR triggers an automated build check (VitePress build)
2. A maintainer reviews your submission
3. Once approved and merged, your prompt goes live on the site

Full contribution guide available on the [website](https://YOUR_USERNAME.github.io/prompt-hub/contributing).