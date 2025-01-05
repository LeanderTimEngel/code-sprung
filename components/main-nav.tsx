'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  const links = [
    { href: '/problems', label: 'challenges', color: 'javascript' },
    { href: '/progress', label: 'progress', color: 'python' },
    { href: '/resources', label: 'resources', color: 'rust' },
    { href: '/approach', label: 'approach', color: 'typescript' },
  ]

  return (
    <nav className="flex items-center space-x-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "nav-link font-mono text-sm transition-colors text-tech",
            link.color,
            pathname === link.href && "active"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

