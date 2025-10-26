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

## General Rules
- Wait for explicit user instructions before implementing features
- Ask clarifying questions if requirements are unclear
- Only perform the specific tasks requested by the user
