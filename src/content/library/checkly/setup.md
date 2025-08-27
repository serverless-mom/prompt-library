---
title: Checkly Setup
description: Step-by-step guide to setting up Checkly monitoring with Playwright MCP.
icon: ⚙️
sticker: "Start here!"
tags: ["AI", "Checkly"]
---

To effectively write monitoring code with Checkly, follow these three steps:

## 1. Create a Checkly Project

Create a new project with

```bash
npm create checkly@latest
```

You'll get a few interactive questions from the `create` command. It's recommended to start with an advanced TypeScript project.

## 2. Add the Playwright MCP

Our AI agent will need to load and manipulate pages in a browser. The easiest way to add these abilities is with a Playwright Model Context Protocol (MCP) server.

In general, adding the following to your AI agent's configuration JSON is enough to enable your tool to use the Playwright MCP:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    }
  }
}

```

But specific agents will have their own commands:

Refer to the [Playwright MCP install](https://github.com/microsoft/playwright-mcp) commands for specific setup instructions. 

## 3. Add AI Guidelines for Checkly

Checkly provides an AI ‘rules’ document that you should add to your project. AI rules help your IDE understand how to generate correct Checkly code and follow project conventions.

Go into the root of your IDE’s workspace and download the rules file in a place where your AI Agent can read it for context.

Refer to the [Checkly guide to installing AI guidelines](https://www.checklyhq.com/docs/ai/use-checkly-with-ai-ide/#custom-rules) with install commands for your specific IDE.

Once you’re all set, get started with writing AI-prompted monitors for your sites and services, check out the other guides in this prompt library.