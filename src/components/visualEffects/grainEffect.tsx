"use client";
import { cn } from '@/lib/utils'

function grainEffect() {
  return (
    <div className={cn(
      "fixed inset-0 pointer-events-none",
      "before-content-none before:fixed before:-top-40 before:-left-40",
      "before:w-[calc(100%+20rem)] before:h-[calc(100%+20rem)]",
      "before:bg-grain before:bg-repeat before:opacity-15",
      "before:animate-noisy-bg"
    )}>
    </div>
  )
}

export default grainEffect