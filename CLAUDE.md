# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monitoring prompts library website built with Astro. It serves as a curated collection of AI prompts for web monitoring, testing, and observability using Checkly and Playwright. The site displays prompt cards with filtering capabilities and uses a terminal-inspired theme.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production (static site)
npm run build

# Preview production build
npm run preview
```

## Architecture

### Content Management
- Uses Astro's content collections with markdown files in `src/content/library/`
- Two main categories: `checkly/` and `playwright/` prompts
- Content schema defined in `src/content.config.ts` with frontmatter fields:
  - `title`, `description`, `icon`, `tags`, `author`, `externalLink`, `draft`

### Site Structure
- **Homepage** (`src/pages/index.astro`): Grid of prompt cards with JavaScript filtering by tags (All/Checkly/Playwright)
- **Individual prompts** (`src/pages/posts/[...slug].astro`): Dynamic routes for each markdown file with navigation
- **Layouts**: `BaseLayout.astro` and `PostLayout.astro` provide consistent structure
- **Static generation**: All content is pre-built for GitHub Pages deployment

### Deployment
- Configured for GitHub Pages at `https://serverless-mom.github.io/prompt-library/`
- Static output with base path handling for production vs development
- Includes sitemap integration

### Content Creation
When adding new prompts, create markdown files in appropriate subdirectories with required frontmatter. The filtering system automatically picks up tags for categorization.