"use client"

import { Home, Wallet, LineChart, Settings, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/logo'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Wallet, label: 'Agent Wallet', href: '/dashboard/agent-wallet' },
  { icon: LineChart, label: 'Agent Observation Deck', href: '/dashboard/agent-observation' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  { icon: HelpCircle, label: 'Help', href: '/dashboard/help' },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <>
      <SidebarHeader className="flex items-center px-4">
        <Logo />
      </SidebarHeader>
      <SidebarGroup>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild isActive={pathname === item.href}>
                  <Link href={item.href}>
                    {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  )
}

