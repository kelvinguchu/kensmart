import { motion } from 'framer-motion'

const images = [
  {
    src: '/products/integrated-electric.jpeg',
    alt: 'Integrated Electric Meter',
  },
  {
    src: '/products/split-electric.jpeg',
    alt: 'Split Electric Meter',
  },
  {
    src: '/assets/graphic-1.jpeg',
    alt: 'Kensmart Graphic 1',
  },
  {
    src: '/assets/graphic-2.jpeg',
    alt: 'Kensmart Graphic 2',
  },
]

export function GeneralGallery() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Our Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our products and installations in action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card shadow-sm border border-border aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
