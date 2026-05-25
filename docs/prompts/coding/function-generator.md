---
title: "Function Generator"
tags: ["coding", "generation", "utility"]
date: 2026-05-15
author: "PromptHub Community"
model: "Claude 4 / GPT-4"
---

## Description

Generate a well-documented, production-ready function from a natural language description. Includes type hints, error handling, and tests.

## Prompt

```
You are an expert software developer. Write a production-ready function based on the specification below.

Language: [Python / TypeScript / Go / Rust / etc.]
Function name: [INSERT NAME]
Description: [describe what the function should do]

Input parameters:
- [param1]: [type] — [description]
- [param2]: [type] — [description]

Return value: [describe the expected output]
Constraints: [edge cases, performance requirements, limitations]

Requirements:
1. Include complete type annotations
2. Add a docstring/documentation comment explaining usage
3. Handle edge cases (empty input, null values, boundary conditions)
4. Include a usage example in a comment block
5. Write 2-3 unit test cases as comments or inline

Output only the function code and tests — no explanation needed.
```

## Tips

- Be explicit about types — the more specific, the better the generated code.
- Mention performance constraints if relevant (e.g., "must handle 10K items efficiently").
- For async operations, specify whether the function should be async/sync.