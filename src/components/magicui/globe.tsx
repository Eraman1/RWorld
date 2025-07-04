"use client"

import type React from "react"

import createGlobe, { type COBEOptions } from "cobe"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => { },
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 2,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1.3],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const globeRef = useRef<any>(null)
  const phiRef = useRef(0)
  const isPointerDown = useRef(false)
  const pointerStart = useRef(0)
  const phiStart = useRef(0)

  useEffect(() => {
    if (!canvasRef.current) return

    let width = canvasRef.current.offsetWidth

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener("resize", onResize)

    // Create globe with simplified, smooth rotation
    globeRef.current = createGlobe(canvasRef.current, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        // Simple, consistent rotation when not interacting
        if (!isPointerDown.current) {
          phiRef.current += 0.01 // Consistent increment for smooth rotation
        }

        state.phi = phiRef.current
        state.width = width * 2
        state.height = width * 2
      },
    })

    // Smooth fade in
    const timer = setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1"
      }
    }, 0)

    return () => {
      if (globeRef.current) {
        globeRef.current.destroy()
      }
      window.removeEventListener("resize", onResize)
      clearTimeout(timer)
    }
  }, [config])

  const handlePointerDown = (e: React.PointerEvent) => {
    isPointerDown.current = true
    pointerStart.current = e.clientX
    phiStart.current = phiRef.current

    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grabbing"
    }
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDown.current) return

    const delta = e.clientX - pointerStart.current
    phiRef.current = phiStart.current + delta * 0.01
  }

  const handlePointerUp = () => {
    isPointerDown.current = false

    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grab"
    }
  }

  return (
    <div className={cn("absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]", className)}>
      <canvas
        ref={canvasRef}
        className="size-full opacity-0 transition-opacity duration-500 cursor-grab [contain:layout_paint_size]"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        style={{ touchAction: "none" }}
      />
    </div>
  )
}
