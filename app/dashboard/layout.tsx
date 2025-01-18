import { DashboardNav } from '@/components/dashboard-nav'
import { UserNav } from '@/components/user-nav'
import { ThemeToggle } from '@/components/theme-toggle'
import { Logo } from '@/components/logo'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-[hsl(220,20%,2%)] dark:to-[hsl(220,20%,4%)] font-sans antialiased">
      <header className="sticky top-0 z-40 border-b bg-white/95 dark:bg-[hsl(220,20%,2%)]/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[hsl(220,20%,2%)]/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Logo />
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <UserNav />
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <DashboardNav />
        </aside>
        <main className="flex w-full flex-col overflow-hidden p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

