"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Folder, Menu, X } from 'lucide-react';
import Link from "next/link";
import { useState } from "react";

const HeaderMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpen(prevOpen => !prevOpen);
  }

  return (
    <DropdownMenu open={open} onOpenChange={toggleMenu}>
      <DropdownMenuTrigger asChild>
        <Button onClick={toggleMenu} className="mr-4" variant="secondary">
          {
            open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />
          }
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="flex">
            <Folder className="mr-2 h-4 w-4" /><span>Projects</span>
          </Link></DropdownMenuItem>
 
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default HeaderMenu;
