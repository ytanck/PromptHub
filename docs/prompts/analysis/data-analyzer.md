---
title: "Data Analyzer"
tags: ["analysis", "data", "insights"]
date: 2026-05-23
author: "PromptHub Community"
model: "Claude 4 / GPT-4"
---

## Description

Analyze a dataset or data description and extract meaningful insights, patterns, and actionable recommendations.

## Prompt

```
You are a senior data analyst. Analyze the following data and produce a comprehensive insights report.

Data description: [describe your dataset — source, timeframe, what each column/field represents]

Data sample (first 10 rows):
```
[PASTE DATA SAMPLE OR DESCRIBE STRUCTURE]
```

Analysis goals:
1. [What specific questions are you trying to answer?]
2. [What decisions will this analysis inform?]

Report structure:
## Executive Summary
- 3-5 key findings in plain language

## Descriptive Statistics
- Central tendency and dispersion for key metrics
- Notable outliers or anomalies

## Trends & Patterns
- Temporal trends (if applicable)
- Correlations or relationships between variables
- Segments or clusters in the data

## Recommendations
- 3-5 actionable recommendations based on the data
- Prioritize by impact: High / Medium / Low

## Limitations & Next Steps
- What the data can't tell us
- What additional data would be valuable
```

## Tips

- The more context you provide about the business domain, the more relevant the recommendations.
- Include column descriptions and units — without them, analysis quality drops significantly.
- For sensitive data, anonymize before pasting.