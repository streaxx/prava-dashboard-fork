"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_ICON = "3rem"

const SidebarContext = React.createContext<{
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}>({
  collapsed: false,
  setCollapsed: () => {},
})

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false)
  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </SidebarContext.Provider>
  )
}

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { collapsed } = React.useContext(SidebarContext)

  return (
    <div
      ref={ref}
      className={cn(
        "flex h-full w-[var(--sidebar-width)] flex-col border-r bg-background transition-all",
        collapsed && "w-[var(--sidebar-width-icon)]",
        className
      )}
      style={{
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  )
})
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex h-14 items-center border-b px-4", className)}
    {...props}
  />
))
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 overflow-auto py-2", className)}
    {...props}
  />
))
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex h-14 items-center border-t px-4", className)}
    {...props}
  />
))
SidebarFooter.displayName = "SidebarFooter"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("px-2 py-2", className)}
    {...props}
  />
))
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { collapsed } = React.useContext(SidebarContext)
  if (collapsed) return null
  return (
    <div
      ref={ref}
      className={cn("mb-2 px-2 text-xs font-semibold text-muted-foreground", className)}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-1", className)} {...props} />
))
SidebarGroupContent.displayName = "SidebarGroupContent"

const sidebarItemVariants = cva(
  "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "text-foreground",
        ghost: "hover:bg-transparent hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const SidebarItem = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
    VariantProps<typeof sidebarItemVariants>
>(({ className, variant, ...props }, ref) => {
  const { collapsed } = React.useContext(SidebarContext)
  return (
    <a
      ref={ref}
      className={cn(sidebarItemVariants({ variant }), className)}
      {...props}
    >
      {props.children}
      {collapsed && (
        <span className="sr-only">{props["aria-label"] || props.children}</span>
      )}
    </a>
  )
})
SidebarItem.displayName = "SidebarItem"

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarItem,
}

