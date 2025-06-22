"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Building2, DollarSign, Users, LogOut } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Add Agency", href: "/add-agency", icon: Building2 },
  { name: "Pricing", href: "/pricing", icon: DollarSign },
  { name: "Subscriber", href: "/subscribers", icon: Users },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-teal-500 text-white flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <div className="bg-white rounded-lg p-3 w-32">
          <div className="text-teal-500 font-bold text-sm text-center">Your Logo</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                isActive ? "bg-teal-600 text-white" : "text-teal-100 hover:bg-teal-600 hover:text-white",
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-4">
        <button className="flex items-center px-4 py-3 text-sm font-medium text-teal-100 hover:bg-teal-600 hover:text-white rounded-lg transition-colors w-full">
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  )
}
