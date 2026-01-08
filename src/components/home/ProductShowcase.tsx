import { MdArrowForward } from 'react-icons/md'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { products } from '@/data/products'

export function ProductShowcase() {
  return (
    <section id="products" className="py-6 md:py-8 bg-background">
      <div className="container w-full px-4 sm:px-8 space-y-10">
        {/* Simple Header */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-px bg-border flex-1 max-w-24" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
            Our <span className="text-primary">Products</span>
          </h2>
          <div className="h-px bg-border flex-1 max-w-24" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to="/meters/$meterId"
              params={{ meterId: product.id }}
              className="group block h-full"
            >
              <div className="h-full bg-card rounded-2xl border border-border shadow-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30">
                {/* Image */}
                <div className="relative aspect-4/3 bg-white dark:bg-slate-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <div
                    className={cn(
                      'inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-2',
                      product.color,
                    )}
                  >
                    <product.icon className="text-base" />
                    {product.type}
                  </div>

                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <p className="font-bold text-lg">
                      <span className="text-xs text-muted-foreground font-medium mr-1">
                        From
                      </span>
                      KES {product.price}
                    </p>
                    <Button
                      size="icon"
                      className="rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all cursor-pointer"
                    >
                      <MdArrowForward className="text-lg" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
