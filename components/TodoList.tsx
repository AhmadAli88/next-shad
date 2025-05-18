"use client"

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button"
import { Calendar1Icon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "./ui/calendar"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function TodoList() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [open, setOpen] = React.useState(false)
  return (
    <div className="mt-5">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full justify-start">
            <Calendar1Icon />
            {date ? format(date, "PPP") : "Select a date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
            className="rounded-md border"
          />
        </PopoverContent>
      </Popover>

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

    </div>

  )
}
