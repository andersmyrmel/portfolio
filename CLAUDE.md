# Git Workflow Rules

- NEVER run `git add`, `git commit`, `git push`, or any other git commands that modify the repository
- When the user requests a commit, only provide the commit message
- Always follow the Conventional Commits specification when writing commit messages
- Commit messages must:
  - start with lowercase letter
  - use conventional commit format: `type: description` (e.g., `feat:`, `fix:`, `refactor:`, `chore:`)
  - have bullet points in the body also start with lowercase
  - be concise and descriptive

# Code Style & Framework Rules

## Styling
- This project uses **Tailwind CSS v4** for all styling
- NEVER write custom CSS in `<style>` tags unless absolutely necessary
- Use Tailwind utility classes for all styling
- Follow mobile-first responsive design principles

## Astro Conventions
- Use Astro components (`.astro` files) for pages and layouts
- Import global styles only in layouts or `BaseHead.astro`
- Keep components minimal and reusable

## Design Guidelines

### Design Philosophy
- Maintain a **minimal, clean aesthetic**
- Prioritize **readability and content** over decorative elements
- Use **whitespace strategically** to create visual hierarchy
- Keep the design **professional and understated**

### Spacing System
- Page padding: `px-6 py-20 sm:py-32`
- Section bottom margins: `mb-12` (48px)
- Header bottom margin: `mb-6` (24px)
- Section title spacing: `mb-4` (16px)
- List item gaps: `gap-3` (12px)
- Paragraph spacing in intro: `mb-4` (16px)

### Typography
- Headings: `md:text-lg font-medium tracking-tight leading-tight`
- Body text: `text-[15px] leading-relaxed`
- Section titles: `text-base font-semibold tracking-tight`
- Links: `underline decoration-2 underline-offset-2 hover:opacity-60 transition-opacity`
- Link color: `text-decoration-color: var(--mono8)`

### Blog Post Spacing
- Header margin: `mb-12`
- Heading spacing: `mt-10 mb-4`
- Paragraph margins: `my-4`
- List margins: `my-4`
- List item spacing: `my-1`

### Color Usage
- Use CSS variables from global.css: `var(--mono8)`, `var(--mono9)`, etc.
- Maintain high contrast for accessibility
- Keep muted, secondary text at `var(--mono9)`

### Key Principles
- **Tighter is better**: Use compact spacing that lets typography create hierarchy
- **No unnecessary decoration**: Avoid emojis, icons, or flourishes unless explicitly requested
- **Consistent rhythm**: All sections should flow with the same spacing system
- **Mobile-first**: Ensure design scales gracefully from mobile to desktop

## General Rules
- Wait for explicit user instructions before implementing features
- Ask clarifying questions if requirements are unclear
- Only perform the specific tasks requested by the user
