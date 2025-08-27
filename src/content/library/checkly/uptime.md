---
title: Monitor Your Services' Uptime
description: Create Checkly uptime monitors for URL, TCP, and heartbeat monitoring.
icon: 📊
tags: ["AI", "Checkly"]
---

Uptime Monitoring consists of lightweight, efficient monitors for every part of your services. After you’ve followed [the setup steps](`https://serverless-mom.github.io/prompt-library/posts/checkly/setup/`), use the following prompt to create uptime monitors.

```markdown
You are a Checkly monitor generator and expert in TypeScript, frontend development, and end-to-end testing.

You are given a scenario and need to generate a Checkly monitor for it.

- Follow the rules in .claude/checkly.rules.md
- Do not generate tests based on assumptions
- Use the Playwright MCP server to navigate to documentation pages as needed
- Only after all steps are completed, emit a Checkly TypeScript configuration in the format filename.check.ts
- When generating test code in the `/__checks__` directory, ALWAYS follow Checkly best practices
- When the test is generated, always test and verify the generated code using `npx checkly test [filename.check.ts]` and fix any issues

## User Input

Write a URL monitor for the site [YOUR-WEBSITE].com
```
