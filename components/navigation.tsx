"use client"

import { Mail, Home, FileText, Briefcase, Award, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useScrollDirection } from "@/hooks/use-scroll-direction"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/resume", label: "Resume", icon: FileText },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/achievements", label: "Achievements", icon: Award },
  { href: "/blogs", label: "Blogs", icon: BookOpen },
]

export function Navigation() {
  const pathname = usePathname()
  const scrollDirection = useScrollDirection()

  // Hide navigation when scrolling down (but always show at top)
  const isVisible = scrollDirection === "top" || scrollDirection === "up"

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out",
        !isVisible && "translate-y-full"
      )}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 pb-4 pt-2">
        <div className="max-w-2xl mx-auto">
          {/* Navigation Container with Glassmorphism */}
          <div className="relative bg-white/90 backdrop-blur-lg border-4 border-black rounded-2xl px-4 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between gap-2">
              {/* Navigation Links */}
              <div className="flex items-center gap-1 sm:gap-2 flex-1 justify-center">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  const Icon = item.icon

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex flex-col sm:flex-row items-center justify-center gap-1 px-2 sm:px-4 py-2 rounded-lg transition-all",
                        "hover:bg-black hover:text-white group",
                        isActive && "bg-black text-white"
                      )}
                      aria-label={item.label}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <Icon
                        className="w-5 h-5 sm:w-4 sm:h-4 flex-shrink-0"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                      <span className="text-[10px] sm:text-sm font-bold leading-tight">
                        {item.label}
                      </span>
                    </Link>
                  )
                })}
              </div>

              {/* Email Button */}
              <a
                href="mailto:jayantkurekar1@gmail.com"
                aria-label="Send email"
              >
                <Button
                  className="bg-black text-white hover:bg-black/90 rounded-lg px-3 sm:px-4 h-10 sm:h-12 min-w-[40px] sm:min-w-[48px] flex-shrink-0"
                  aria-label="Contact via email"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Safe area spacer for iOS devices */}
      <div className="h-[env(safe-area-inset-bottom)] bg-transparent" />
    </nav>
  )
}
