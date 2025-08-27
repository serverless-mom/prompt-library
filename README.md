# Monitoring Prompts Library

A curated collection of AI prompts for web monitoring, testing, and observability using Checkly and Playwright. This library provides ready-to-use prompts that help you create comprehensive monitoring solutions for your applications.

## 🎯 Purpose

This site serves as a prompt library specifically designed for developers and DevOps engineers who want to implement monitoring solutions using AI-powered tools. Each prompt is crafted to work with Claude and other AI assistants to generate monitoring code, tests, and observability solutions.

## 🔧 What's Inside

### Checkly Monitoring Prompts
- **API Testing** - Generate API monitors with assertions and validation
- **Browser Testing** - Create end-to-end user flow monitors  
- **Performance Testing** - Build performance-focused monitoring
- **Multistep API Testing** - Design complex sequential API workflows
- **Uptime Monitoring** - Set up URL, TCP, and heartbeat monitors
- **Network Analysis** - Analyze API dependencies and network behavior
- **Setup & Configuration** - Get started with Checkly projects

### Playwright Testing Prompts
- **Single Page Testing** - Generate tests for specific page interfaces
- **Form Testing** - Create comprehensive form interaction tests
- **Site Crawling** - Build tests by analyzing entire websites
- **Debugging & Analysis** - Interpret and resolve test failures

## 🎨 Features

- **Filterable Interface** - Browse prompts by tool (Checkly/Playwright) or view all
- **Icon-coded Cards** - Visual identification with specific icons for each prompt type
- **Copy-Paste Ready** - All prompts are formatted for immediate use with AI assistants
- **Tag System** - Organized with searchable tags (AI, Checkly, Playwright)
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Terminal Aesthetic** - Clean, developer-friendly interface

## 🏗️ Built With

This site is constructed using modern web technologies:

- **[Astro](https://astro.build/)** - Static site generator for blazing-fast performance
- **[astro-theme-terminal](https://github.com/dennisklappe/astro-theme-terminal)** - Terminal-inspired theme

### Theme Credits

The visual design is based on the [Hugo Terminal Theme](https://github.com/panr/hugo-theme-terminal) by [panr](https://github.com/panr), ported to Astro by [Dennis Klappe](https://github.com/dennisklappe). We've customized it specifically for this monitoring prompts library.

## 🚀 Quick Start

```bash
# Clone the repository
git clone [repository-url]
cd monitoring-prompts-library

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📝 Content Structure

Each prompt is stored as a Markdown file with frontmatter:

```markdown
---
title: "Prompt Title"
description: "Brief description of what this prompt does"
icon: "🔗"  # Emoji icon for visual identification
tags: ["AI", "Checkly"]  # Categorization tags
---

```markdown
Your AI prompt content here...
```

## 🤝 Contributing

We welcome contributions! Whether you want to:
- Add new monitoring prompts
- Improve existing prompts  
- Fix bugs or enhance the site
- Suggest new features

Please feel free to open issues or submit pull requests.


**A Checkly Project** - Empowering developers to build better monitoring solutions by shifting left with AI assistance.