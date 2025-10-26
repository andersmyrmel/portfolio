---
title: "Building a Simple Task Queue"
description: "A lightweight approach to handling async operations"
pubDate: "Oct 26 2025"
---

When building web applications, you often need to process multiple async operations in a controlled manner. A simple task queue can help manage these operations without overwhelming your system.

<br />

Here's a basic implementation using `Promise.all` for concurrent processing:

<br />

```javascript
class TaskQueue {
  constructor(concurrency = 3) {
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }

  async add(task) {
    if (this.running >= this.concurrency) {
      await new Promise(resolve => this.queue.push(resolve));
    }

    this.running++;
    try {
      return await task();
    } finally {
      this.running--;
      const next = this.queue.shift();
      if (next) next();
    }
  }
}
```

<br />

This approach is particularly useful when you need to limit the number of simultaneous API calls or file operations in your application.
