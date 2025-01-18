"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export function Logo() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-[120px] h-[40px] bg-muted animate-pulse rounded-md" />
    )
  }

  return (
    <div className="relative h-12 w-48">
      <Image
        src={theme === "dark" ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prava%20Logo%20Dark%20Mode-GDGeCXJASKhfzZ2RnCuLSBEt87YzAS.png" : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prava%20Logo%20Light%20Mode-SxTbfoclS07Ojt6NuFd03DygfiA1SX.png"}
        alt="Prava Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}

