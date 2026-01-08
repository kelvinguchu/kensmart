import { Link } from '@tanstack/react-router'
import { HiOutlineCheck } from 'react-icons/hi'
import type { Product } from '@/data/products'
import { Button } from '@/components/ui/button'

interface MeterSpecsProps {
  product: Product
}

export function MeterSpecs({ product }: MeterSpecsProps) {
  return (
    <section className="py-6 md:py-8 bg-secondary/30">
      <div className="container px-4 sm:px-8">
        {/* Two column grid for Features and Best For */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Features Card */}
          <div className="bg-white dark:bg-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold mb-4">Features</h2>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <HiOutlineCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Best For Card */}
          <div className="bg-white dark:bg-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold mb-4">Best For</h2>
            <ul className="space-y-3">
              {product.idealFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <HiOutlineCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white dark:bg-card rounded-xl border border-border p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold mb-1">Ready to get started?</p>
            <p className="text-sm text-muted-foreground">
              Contact our team for a customized solution.
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/register">Register Bought Meters</Link>
            </Button>
            <Button asChild variant="outline" className="hover:bg-secondary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
