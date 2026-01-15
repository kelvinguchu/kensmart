import { createFileRoute } from '@tanstack/react-router'
import { ProductShowcase } from '@/components/home/ProductShowcase'

export const Route = createFileRoute('/meters/')({
  head: () => ({
    meta: [
      {
        title: 'Our Meters | Kensmart Utilities',
      },
      {
        name: 'description',
        content:
          'Explore our range of smart prepaid meters for electricity, water, and gas. Reliable, secure, and easy to manage.',
      },
    ],
  }),
  component: MetersIndexPage,
})

function MetersIndexPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <ProductShowcase />
    </div>
  )
}
