'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  const links = [
    { href: '/problems', label: 'challenges', color: 'javascript' },
    { href: '/progress', label: 'fortschritte', color: 'python' },
    { href: '/resources', label: 'ressourcen', color: 'rust' },
    { href: '/approach', label: 'ansatz', color: 'typescript' },
  ]

  return (
    <nav className="flex items-center overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
      <div className="flex space-x-4 md:space-x-6 min-w-max px-2 md:px-0">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "nav-link font-mono text-sm min-h-[44px] flex items-center transition-colors text-tech px-2 md:px-0",
              link.color,
              pathname === link.href && "active"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

