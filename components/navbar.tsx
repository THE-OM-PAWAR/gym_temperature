"use client"

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Dumbbell, X } from 'lucide-react'
import { motion } from '@/components/motion'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Trainers', href: '/trainers' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white border-b-4 border-black'
          : 'bg-white/50 backdrop-blur-sm'
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <Dumbbell className="w-8 h-8 text-[#FFD100]" strokeWidth={3} />
          <span className="font-bebas text-3xl tracking-wider">ALPHACORE</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-bold uppercase transition-colors hover:text-[#FFD100] relative',
                pathname === item.href 
                  ? 'text-black' 
                  : 'text-black'
              )}
            >
              {pathname === item.href && (
                <motion.span 
                  layoutId="underline" 
                  className="absolute left-0 top-full block h-1 w-full bg-[#FFD100]" 
                />
              )}
              {item.name}
            </Link>
          ))}
          <Button className="ml-2 neo-button">
            Book Free Trial
          </Button>
        </nav>

        {/* Mobile navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 border-l-4 border-black">
            <nav className="flex flex-col h-full bg-white px-6 py-10">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <Dumbbell className="w-7 h-7 text-[#FFD100]" strokeWidth={3} />
                  <span className="font-bebas text-xl tracking-wider">ALPHACORE</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <div className="flex flex-col space-y-6 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-lg font-bold uppercase transition-colors hover:text-[#FFD100]',
                      pathname === item.href 
                        ? 'text-black bg-[#FFD100] px-2 py-1 -mx-2' 
                        : 'text-black'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="mt-4 neo-button">
                  Book Free Trial
                </Button>
              </div>
              <div className="mt-auto">
                <p className="text-sm font-bold border-t-4 border-black pt-4 mt-8">
                  TRAIN SMART. LIFT HEAVY. STAY CONSISTENT.
                </p>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}