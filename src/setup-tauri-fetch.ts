import { isTauri } from "@tauri-apps/api/core"
import { fetch as tauriFetch } from "@tauri-apps/plugin-http"

declare global {
    interface Window {
        originalFetch: typeof window.fetch
    }
}

export function setupTauriFetch() {
    if (!isTauri()) return

    if (!window.originalFetch) {
        window.originalFetch = window.fetch
    }

    window.fetch = (input, init) => {
        if (input?.toString().startsWith("http")) {
            return tauriFetch(input, init)
        }

        return window.originalFetch(input, init)
    }
}
