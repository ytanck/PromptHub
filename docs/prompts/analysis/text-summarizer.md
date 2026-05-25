---
title: "Text Summarizer"
tags: ["analysis", "summarization", "reading"]
date: 2026-05-10
author: "PromptHub Community"
model: "Claude 4 / GPT-4"
---

## Description

Summarize long documents, articles, or transcripts into concise, structured summaries with different output formats.

## Prompt

```
You are an expert summarizer. Create a structured summary of the following content.

Content type: [article / research paper / meeting transcript / legal document / technical doc]
Summary length: [1 paragraph / bullet points / 1 page / executive summary]
Audience: [executives / technical peers / general public / students]

---
[PASTE CONTENT HERE]
---

Output format:
1. **TL;DR** — one sentence (max 30 words)
2. **Key Points** — 3-5 bullet points covering the most important information
3. **Summary** — a concise paragraph (or more, depending on requested length)
4. **Action Items** — list any decisions, tasks, or follow-ups mentioned (or "None" if N/A)
5. **Keywords** — 5-8 relevant keywords

Guidelines:
- Preserve factual accuracy — do not introduce information not present in the source
- Maintain the original tone and perspective
- Omit tangential details and digressions
- Use the author's terminology, not your own interpretation
```

## Tips

- For meeting transcripts, add a "Decisions Made" and "Open Questions" section.
- For research papers, add a "Methodology" section capturing the approach.
- Paste the full text — this prompt handles up to the model's context window effectively.