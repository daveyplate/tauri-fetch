import { isTauri } from "@tauri-apps/api/core"
import { fetch as tauriFetch } from "@tauri-apps/plugin-http"

declare global {
    interface Window {
        originalFetch: typeof window.fetch
    }
}

/**
 * Checks if a url matches a wildcard pattern
 * Pattern can include * wildcards that match any number of characters
 */
function matchesPattern(url: string, pattern: string): boolean {
    // Convert wildcard pattern to regex
    const regexPattern = pattern
        .split("*")
        .map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join(".*")

    const regex = new RegExp(`^${regexPattern}$`)
    return regex.test(url)
}

export interface SetupTauriFetchParams {
    matcher?: string | null
}

export function setupTauriFetch(params?: SetupTauriFetchParams) {
    if (!isTauri()) return

    if (!window.originalFetch) {
        window.originalFetch = window.fetch
    }

    window.fetch = (input, init) => {
        const url = input?.toString()

        if (url?.startsWith("http") && (!params?.matcher || matchesPattern(url, params.matcher))) {
            return tauriFetch(input, init)
        }

        return window.originalFetch(input, init)
    }
}
