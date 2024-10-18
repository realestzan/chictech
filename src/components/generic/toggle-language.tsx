"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LanguagesIcon } from "lucide-react"

export function LanguageToggle() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <LanguagesIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          English
        </DropdownMenuItem>
        <DropdownMenuItem>
          Vietnamese
        </DropdownMenuItem>
        <DropdownMenuItem>
          Japanese
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
