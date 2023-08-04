"use client"

import { Menu } from "lucide-react"
import Sidebar from '@/components/sidebar'
import { useState } from "react"

export const MobileSidebar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="md:hidden pr-4 h-full">
      <Menu onClick={() => { setOpen(true) }} className="cursor-pointer" />
      {open && <div className="mt-[290px]">
        <Sidebar />
      </div>}
    </div>
  )
}