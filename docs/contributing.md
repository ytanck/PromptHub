# Contributing to PromptHub

Thank you for your interest in contributing! PromptHub is a community-driven collection of AI prompts, and we welcome contributions from everyone.

## How to Submit a Prompt

### 1. Fork the Repository

Fork the [PromptHub repository](https://github.com/YOUR_USERNAME/prompt-hub) to your GitHub account.

### 2. Create a New Prompt File

Create a `.md` file in the appropriate category under `docs/prompts/`:

```
docs/prompts/
  writing/      ← Blog posts, emails, essays, etc.
  coding/       ← Code generation, review, debugging
  analysis/     ← Data analysis, summarization, research
  creative/     ← Stories, characters, dialogue, ideas
```

If your prompt doesn't fit any existing category, you can propose a new one.

### 3. Write the Prompt with Frontmatter

Every prompt file must include YAML frontmatter at the top:

```markdown
---
title: "Your Prompt Title"
tags: ["tag1", "tag2"]
date: 2026-05-25
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
- Parameter explanations
```

### 4. Submit a Pull Request

1. Commit your changes with a descriptive message: `Add prompt: Your Prompt Title`
2. Push to your fork
3. Open a Pull Request against the `main` branch
4. Wait for the automated build check to pass (PRs trigger a VitePress build automatically)

### 5. Review Process

- A maintainer will review your submission
- Prompts should be original or properly attributed
- No harmful, illegal, or explicitly malicious prompts
- Prompts should be reasonably well-tested (you've tried them yourself)

## Prompt Guidelines

- **Be specific** — vague prompts produce vague results. Include context, constraints, and expected output format.
- **Include examples** — show sample input/output if helpful.
- **Tag appropriately** — tags help others discover your prompt.
- **Test before submitting** — make sure your prompt actually works with the model(s) you list.

## License

By contributing, you agree that your prompt will be shared under the MIT License.