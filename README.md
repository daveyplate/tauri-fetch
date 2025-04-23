# @daveyplate/tauri-fetch

A lightweight utility that automatically uses Tauri's HTTP plugin for network requests when running in a Tauri app environment.

## Features

- 🔄 Seamlessly replaces the global `fetch` API with Tauri's HTTP plugin
- 🌱 No changes needed to your existing fetch calls
- 🔒 Only intercepts requests to HTTP/HTTPS URLs
- ⚛️ Includes a React hook for easy integration
- 🧩 Works with any framework (React, Svelte, Vue, etc.)

## Installation

```bash
# pnpm
pnpm add @daveyplate/tauri-fetch

# npm
npm install @daveyplate/tauri-fetch

# yarn
yarn add @daveyplate/tauri-fetch
```

## Usage

### React

For React applications, use the provided hook:

```jsx
import { useTauriFetch } from "@daveyplate/tauri-fetch/react";

function App() {
  // Hook will automatically setup Tauri fetch on component mount
  useTauriFetch();
  
  return <div>My Tauri App</div>;
}
```

### Svelte

For Svelte applications, use the core function in your `onMount` lifecycle:

```svelte
<script>
  import { onMount } from 'svelte';
  import { setupTauriFetch } from '@daveyplate/tauri-fetch';
  
  onMount(() => {
    setupTauriFetch();
  });
</script>

<div>My Tauri App</div>
```

### Other Frameworks or Vanilla JS

Simply import and call the setup function:

```js
import { setupTauriFetch } from '@daveyplate/tauri-fetch';

// Call this early in your application lifecycle
setupTauriFetch();
```

## How it works

This package checks if your app is running in a Tauri environment. If it is, it intercepts all `fetch` calls to HTTP/HTTPS URLs and redirects them through Tauri's HTTP plugin. Local requests, like navigation, will still use the original `fetch` implementation.

## License

MIT