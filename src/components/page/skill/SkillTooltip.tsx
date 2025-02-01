"use client"

import type * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

interface SkillTooltipProps {
  skill: {
    name: string
    image: string
    description: string
  }
  children: React.ReactNode
}

export function SkillTooltip({ skill, children }: SkillTooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            sideOffset={5}
            className="z-9999 overflow-hidden rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-950 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"
          >
            <div className="flex items-center gap-3 mb-2">
              <img
                src={skill.image || "/placeholder.svg?height=40&width=40"}
                alt={skill.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <h3 className="font-semibold text-slate-900 dark:text-slate-50">{skill.name}</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">{skill.description}</p>
            <TooltipPrimitive.Arrow className="fill-current text-slate-200 dark:text-slate-800" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

