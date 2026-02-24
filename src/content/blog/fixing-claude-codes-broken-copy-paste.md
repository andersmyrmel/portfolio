---
title: "Fixing Claude Code's Broken Copy-Paste"
description: "Auto-clean clipboard artifacts from Claude Code's terminal UI"
pubDate: "Feb 24 2026"
---

Copying in Claude Code is broken. The clipboard picks up box-drawing characters, leading margins, trailing spaces, and hard line breaks from terminal wrapping.

<br />

Copy this from Claude Code:

<br />

```
  │ A pen-sized fishing rod that extends to a full meter, aluminum alloy,
  │ with a reel included. Under a dollar to source. $21 profit per sale.
```

<br />

Paste it and you get:

<br />

```
A pen-sized fishing rod that extends to a full meter, aluminum alloy,

with a reel included. Under a dollar to source. $21 profit per sale.
```

<br />

So I built [claude-copy](https://github.com/andersmyrmel/claude-copy). Same copy now gives you:

<br />

```
A pen-sized fishing rod that extends to a full meter, aluminum alloy, with a reel included. Under a dollar to source. $21 profit per sale.
```

<br />

It's a [Hammerspoon](https://www.hammerspoon.org/) script for macOS that intercepts `Cmd+C` in terminal apps, detects Claude TUI artifacts in the clipboard, and cleans them before you paste.

<br />

Detection is confidence-based. It scores margin coverage, pipe characters, and wrapped-line shape to decide how aggressively to clean. Low-confidence text is left untouched.

<br />

```bash
git clone https://github.com/andersmyrmel/claude-copy.git
cd claude-copy
./install.sh
```

<br />

macOS only. Works with Ghostty, iTerm2, Terminal.app, and most other terminal emulators.

<br />

[GitHub](https://github.com/andersmyrmel/claude-copy) · MIT licensed
