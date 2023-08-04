"use client";

import { UserButton } from "@clerk/nextjs";
import { Menu, Sparkles } from "lucide-react";
import Link from "next/link";

import { MobileSidebar } from "./mobile-sidebar";

const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex bg-second-color justify-between items-center py-2 px-4 h-16">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href={'/'}>
        <h1 className="hidden md:block text-xl md:text-3xl font-bold">AI</h1></Link>
      </div>
      <div className="flex items-center gap-x-3">
        <button className="text-[black] font-semibold flex justify-center items-center px-2 py-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
          Upgrade
          <Sparkles className="h-4 w-4 fill-black text-black ml-2" />
        </button>
        <UserButton />
      </div>
    </div>
  )
}

export default Navbar;