import { Link } from '@tanstack/react-router'
import { products } from '@/data/products'

export function Footer() {
  return (
    <footer className="border-t bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
          <div className="space-y-4 max-w-sm">
            <img
              src="/logo-for-darkmode.png"
              alt="Kensmart Utilities Limited Logo"
              className="h-16 md:h-20 w-auto dark:hidden"
            />
            <img
              src="/logo-for-lightmode.png"
              alt="Kensmart Utilities Limited Logo"
              className="h-16 md:h-20 w-auto hidden dark:block"
            />
            <p className="text-sm text-background/70">
              Smart solutions for power and water. Delivering prepaid metering
              for modern property management.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-background">Pages</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <Link to="/" className="hover:text-primary cursor-pointer">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-primary cursor-pointer"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-primary cursor-pointer"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="hover:text-primary cursor-pointer"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-background">Solutions</h4>
              <ul className="space-y-2 text-sm text-background/70">
                {products.map((product) => (
                  <li key={product.id}>
                    <Link
                      to="/meters/$meterId"
                      params={{ meterId: product.id }}
                      className="hover:text-primary cursor-pointer"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-background">Legal</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-primary cursor-pointer"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-primary cursor-pointer"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-background">Contact</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a
                    href="mailto:info@ksmart.co.ke"
                    className="hover:text-primary cursor-pointer"
                  >
                    info@ksmart.co.ke
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+254712431201"
                    className="hover:text-primary cursor-pointer"
                  >
                    +254 712 431 201
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>
            &copy; {new Date().getFullYear()} Kensmart Utilities Limited. All
            rights reserved.
          </p>
          <p className="mt-2 text-xs">
            Designed and Developed by{' '}
            <a
              href="https://www.astraque.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Astraque Softwares
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
