import { useEffect } from "react"
import {
    type SetupTauriFetchParams,
    setupTauriFetch
} from "./setup-tauri-fetch"

type TauriFetchOptions = SetupTauriFetchParams

export function useTauriFetch(options?: TauriFetchOptions) {
    useEffect(() => {
        setupTauriFetch(options || {})
    }, [options])
}
