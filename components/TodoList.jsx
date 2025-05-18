"use client"

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function TodoList() {
  return (
    <ScrollArea className="h-72 w-64 rounded-md border mt-4 px-4">
      <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
      <div className="space-y-3">
        {tags.map((tag) => (
          <div key={tag}>
            <div className="flex items-center space-x-2 pt-3">
              <Checkbox id={tag} />
              <label
                htmlFor={tag}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {tag}
              </label>
            </div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
