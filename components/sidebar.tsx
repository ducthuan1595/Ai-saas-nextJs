"use client";

import { Home, Plug, Settings } from "lucide-react"
import { usePathname, useRouter } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const routes = [
    {
      icon: Home,
      href: '/',
      label: "Home",
      pro: false
    },
    {
      icon: Plug,
      href: '/companion/new',
      label: "Create",
      pro: false
    },
    {
      icon: Settings,
      href: '/settings',
      label: "Settings",
      pro: false
    },
  ]

  const onNavigate = (url: string, pro: boolean) => {    
    return router.push(url)
  }

  return (
    <div className="space-y-4 flex flex-col h-full bg-second-color items-center">
      <div className="p-3 flex-1 justify-center">
        <div className="space-y-2">
          {routes.map(r => (
            <div onClick={() => onNavigate(r.href, r.pro)} key={r.href} className='text-xs flex p-3 w-full justify-start font-medium cursor-pointer hover:text-[#9b9b9b] rounded-lg transition' style={{ backgroundColor: `${pathname === r.href ? '#484847' : ''}`}}>
              <div className="flex flex-col gap-y-2 items-center flex-1">
                <r.icon className="h-5 w-5" />
                {r.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;