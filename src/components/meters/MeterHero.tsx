import { Link } from '@tanstack/react-router'
import type { Product } from '@/data/products'
import { Button } from '@/components/ui/button'

interface MeterHeroProps {
  product: Product
}

export function MeterHero({ product }: MeterHeroProps) {
  return (
    <section className="min-h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)] pt-16">
      <div className="container px-4 sm:px-8 h-full">
        {/* Breadcrumb-style type indicator */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <span>/</span>
          <Link to="/" className="hover:text-foreground">
            Products
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">{product.type}</span>
        </div>

        {/* Main content - stacked on mobile, side by side on desktop */}
        <div className="flex flex-col lg:flex-row gap-6 lg:h-[calc(100%-3rem)]">
          {/* Left: Image with white bg */}
          <div className="lg:w-1/2 lg:h-full">
            <div className="bg-white dark:bg-slate-900 rounded-xl h-64 lg:h-full flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* Right: Product details in card */}
          <div className="lg:w-1/2 lg:h-full">
            <div className="bg-white dark:bg-card rounded-xl border border-border p-6 lg:h-full flex flex-col justify-center">
              <span className="text-sm font-medium text-primary uppercase tracking-wide mb-2">
                {product.tagline}
              </span>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {product.name}
              </h1>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Price block */}
              <div className="mb-6">
                <span className="text-sm text-muted-foreground">
                  Starting from
                </span>
                <div className="text-3xl font-bold text-primary">
                  KES {product.price}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button asChild size="lg">
                  <Link to="/contact">Ask a Question</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
