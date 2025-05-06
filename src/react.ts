import { useEffect } from "react"
import { setupTauriFetch } from "./setup-tauri-fetch"

type TauriFetchOptions = Parameters<typeof setupTauriFetch>[0]

export function useTauriFetch(options?: TauriFetchOptions) {
    useEffect(() => {
        setupTauriFetch(options || {})
    }, [options])
}
