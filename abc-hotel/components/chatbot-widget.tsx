"use client"

import { useEffect } from "react"

export function ChatbotWidget() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/10/14/23/20251014235629-RJVY1ZHY.json"
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return null
}
