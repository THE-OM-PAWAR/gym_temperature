import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Dumbbell, Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-7 h-7 text-chart-1" strokeWidth={2.5} />
              <span className="font-bebas text-2xl tracking-wider">ALPHACORE</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Train Smart. Lift Heavy. Stay Consistent. Join our community of dedicated fitness enthusiasts.
            </p>
            <div className="flex space-x-3 pt-2">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-muted-foreground hover:text-primary text-sm transition">Home</Link>
              <Link href="/services" className="text-muted-foreground hover:text-primary text-sm transition">Services</Link>
              <Link href="/trainers" className="text-muted-foreground hover:text-primary text-sm transition">Trainers</Link>
              <Link href="/pricing" className="text-muted-foreground hover:text-primary text-sm transition">Pricing</Link>
              <Link href="/gallery" className="text-muted-foreground hover:text-primary text-sm transition">Gallery</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary text-sm transition">Contact</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-chart-1" />
                <p className="text-sm text-muted-foreground">
                  123 Fitness Ave, New York, NY 10001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-chart-1" />
                <p className="text-sm text-muted-foreground">(123) 456-7890</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-chart-1" />
                <p className="text-sm text-muted-foreground">info@alphacorefitness.com</p>
              </div>
            </div>
            <div className="pt-2">
              <h4 className="font-bold text-sm mb-2">Hours:</h4>
              <p className="text-sm text-muted-foreground">Mon - Fri: 5am - 10pm</p>
              <p className="text-sm text-muted-foreground">Sat - Sun: 7am - 8pm</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Newsletter</h3>
            <p className="text-muted-foreground text-sm">
              Sign up to receive fitness tips, workout ideas, and exclusive offers.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background/50"
              />
              <Button className="bg-chart-1 hover:bg-chart-1/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 opacity-30" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Gym Temperature. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}