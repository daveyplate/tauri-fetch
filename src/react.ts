import { useEffect } from "react"
import { setupTauriFetch } from "./setup-tauri-fetch"

export function useTauriFetch() {
    useEffect(() => {
        setupTauriFetch()
    }, [])
}
