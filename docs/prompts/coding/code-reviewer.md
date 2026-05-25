---
title: "Code Reviewer"
tags: ["coding", "review", "quality"]
date: 2026-05-22
author: "PromptHub Community"
model: "Claude 4 / GPT-4"
---

## Description

Perform a thorough code review covering bugs, performance, security, readability, and best practices.

## Prompt

```
You are a senior software engineer conducting a code review. Review the following code and provide actionable feedback.

Language/Framework: [INSERT LANGUAGE]
Code context: [briefly describe what this code is supposed to do]

```[LANGUAGE]
[PASTE CODE HERE]
```

Review for:
1. **Bugs & Edge Cases** — logic errors, null/undefined handling, off-by-one, race conditions
2. **Performance** — unnecessary allocations, N+1 queries, inefficient algorithms
3. **Security** — injection risks, exposed secrets, improper validation
4. **Readability** — unclear variable names, missing comments on non-obvious logic, overly complex functions
5. **Best Practices** — idiom violations, missing error handling, architectural concerns

For each finding:
- Mark severity: 🔴 Critical / 🟡 Warning / 🔵 Suggestion
- Point to the exact line or block
- Explain WHY it's a problem
- Provide a concrete fix or alternative

End with a summary: overall quality score (1-10) and the top 3 things to fix first.
```

## Tips

- Provide as much context as possible about what the code does — it helps catch logic errors.
- For large files, focus the review on specific functions or sections.
- This prompt works best when you specify the language so the model applies the right idioms.