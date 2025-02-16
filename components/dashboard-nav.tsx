"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Home, Wallet, LineChart, Settings, HelpCircle } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Wallet, label: 'Agent Wallet', href: '/dashboard/agent-wallet' },
  { icon: LineChart, label: 'Agent Observation', href: '/dashboard/agent-observation' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  { icon: HelpCircle, label: 'Help', href: '/dashboard/help' },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start gap-2 p-4">
      {navItems.map((item) => {
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              pathname === item.href
                ? "bg-muted hover:bg-muted"
                : "hover:bg-transparent hover:underline",
              "justify-start",
              "dark:text-gray-300 dark:hover:text-white"
            )}
          >
            {Icon && <Icon className="mr-2 h-4 w-4" />}
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

