import { Link, useRouterState } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { ArrowRight, ChevronDown, Menu } from 'lucide-react'
import { RiFacebookLine, RiTiktokLine } from 'react-icons/ri'
import { products } from '@/data/products'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 w-full py-2 transition-all duration-300 border-b',
          isHome && !isScrolled
            ? 'bg-transparent border-transparent'
            : 'bg-background/80 backdrop-blur-md border-border/40 shadow-sm',
        )}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            className="shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <img
              src="/logo-for-lightmode.png"
              alt="Kensmart Utilities Limited"
              className="h-14 w-auto dark:hidden"
            />
            <img
              src="/logo-for-darkmode.png"
              alt="Kensmart Utilities Limited"
              className="h-14 w-auto hidden dark:block"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              activeProps={{ className: 'text-primary font-semibold' }}
              inactiveProps={{
                className: 'text-muted-foreground hover:text-foreground',
              }}
              className="text-sm font-medium transition-colors relative group cursor-pointer"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              to="/about"
              activeProps={{ className: 'text-primary font-semibold' }}
              inactiveProps={{
                className: 'text-muted-foreground hover:text-foreground',
              }}
              className="text-sm font-medium transition-colors relative group cursor-pointer"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              to="/gallery"
              activeProps={{ className: 'text-primary font-semibold' }}
              inactiveProps={{
                className: 'text-muted-foreground hover:text-foreground',
              }}
              className="text-sm font-medium transition-colors relative group cursor-pointer"
            >
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>

            {/* Solutions Dropdown */}
            <HoverCard openDelay={0} closeDelay={100}>
              <HoverCardTrigger asChild>
                <button className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors outline-none group cursor-pointer">
                  Solutions
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </button>
              </HoverCardTrigger>
              <HoverCardContent
                align="center"
                sideOffset={20}
                className="w-[360px] p-4 rounded-xl border-border/50 bg-background/95 backdrop-blur-3xl shadow-xl"
              >
                <div className="grid grid-cols-1 gap-2">
                  <div className="pb-2 mb-2 border-b border-border/10">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Our Products
                    </p>
                  </div>
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      to="/meters/$meterId"
                      params={{ meterId: product.id }}
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors group cursor-pointer"
                    >
                      <div
                        className={cn(
                          'mt-1 p-1.5 rounded-md bg-secondary/30',
                          product.color || 'text-primary',
                        )}
                      >
                        <product.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {product.name}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                          {product.tagline}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </HoverCardContent>
            </HoverCard>

            <Link
              to="/contact"
              activeProps={{ className: 'text-primary font-semibold' }}
              inactiveProps={{
                className: 'text-muted-foreground hover:text-foreground',
              }}
              className="text-sm font-medium transition-colors relative group cursor-pointer"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 mr-2">
              <a
                href="https://www.facebook.com/share/1AoSAZXVUN/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-secondary/20 rounded-full border border-foreground/30 hover:border-primary"
              >
                <RiFacebookLine className="w-5 h-5" />
              </a>
              <a
                href="https://vm.tiktok.com/ZMHohHfNnVb8L-r35pc/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-secondary/20 rounded-full border border-foreground/30 hover:border-primary"
              >
                <RiTiktokLine className="w-5 h-5" />
              </a>
            </div>
            <div className="hidden lg:block">
              <Link to="/register">
                <Button className="rounded-md px-6 font-semibold shadow-md active:scale-95 transition-all cursor-pointer">
                  Register
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="lg:hidden p-2 rounded-md hover:bg-secondary/50 transition-colors">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="min-w-[90vw] border-l border-border bg-background"
              >
                <div className="flex flex-col h-full">
                  <SheetHeader className="px-4 py-2 border-b text-left ">
                    <SheetTitle>
                      <Link to="/" className="inline-block">
                        <img
                          src="/logo-for-lightmode.png"
                          alt="Kensmart"
                          className="h-8 w-auto dark:hidden"
                        />
                        <img
                          src="/logo-for-darkmode.png"
                          alt="Kensmart"
                          className="h-8 w-auto hidden dark:block"
                        />
                      </Link>
                    </SheetTitle>
                  </SheetHeader>

                  <nav className="flex-1 overflow-y-auto p-4">
                    <div className="flex flex-col space-y-6">
                      <div className="flex flex-col space-y-4">
                        <SheetClose asChild>
                          <Link
                            to="/"
                            className="text-lg font-medium hover:text-primary transition-colors"
                          >
                            Home
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            to="/about"
                            className="text-lg font-medium hover:text-primary transition-colors"
                          >
                            About
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            to="/gallery"
                            className="text-lg font-medium hover:text-primary transition-colors"
                          >
                            Gallery
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            to="/contact"
                            className="text-lg font-medium hover:text-primary transition-colors"
                          >
                            Contact
                          </Link>
                        </SheetClose>
                      </div>

                      <div className="space-y-4 pt-4 border-t">
                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                          Solutions
                        </p>
                        <div className="grid gap-4">
                          {products.map((product) => (
                            <SheetClose key={product.id} asChild>
                              <Link
                                to="/meters/$meterId"
                                params={{ meterId: product.id }}
                                className="flex items-center gap-3 group"
                              >
                                <div
                                  className={cn(
                                    'text-muted-foreground group-hover:text-primary transition-colors',
                                    product.color,
                                  )}
                                >
                                  <product.icon className="w-5 h-5" />
                                </div>
                                <span className="text-base font-medium group-hover:text-primary transition-colors">
                                  {product.name}
                                </span>
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </div>
                    </div>
                  </nav>

                  <div className="p-6 border-t mt-auto space-y-4">
                    <div className="flex justify-center gap-6">
                      <a
                        href="https://www.facebook.com/share/1AoSAZXVUN/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full border border-border/50 hover:border-primary/50"
                      >
                        <RiFacebookLine className="w-6 h-6" />
                      </a>
                      <a
                        href="https://vm.tiktok.com/ZMHohHfNnVb8L-r35pc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full border border-border/50 hover:border-primary/50"
                      >
                        <RiTiktokLine className="w-6 h-6" />
                      </a>
                    </div>
                    <SheetClose asChild>
                      <Link to="/register">
                        <Button className="w-full rounded-md font-semibold text-lg">
                          Register
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      {/* Dynamic Spacer based on scroll state assumption, sufficient for fixed header */}
      {/* Spacer removed to allow content to flow behind transparent header */}
    </>
  )
}
