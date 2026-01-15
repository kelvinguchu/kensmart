import { createFileRoute } from '@tanstack/react-router'
import { getProductById } from '@/data/products'
import { MeterHero } from '@/components/meters/MeterHero'
import { MeterSpecs } from '@/components/meters/MeterSpecs'

export const Route = createFileRoute('/meters/$meterId')({
  loader: ({ params }) => {
    const product = getProductById(params.meterId)
    if (!product) {
      return { product: undefined }
    }
    const { icon: _icon, ...serializableProduct } = product
    return {
      product: serializableProduct,
    }
  },
  head: ({ loaderData, params }) => {
    const product = loaderData?.product
    if (!product) {
      return {
        meta: [{ title: 'Product Not Found | Kensmart Utilities' }],
      }
    }
    return {
      meta: [
        {
          title: `${product.name} | Kensmart Utilities`,
        },
        {
          name: 'description',
          content: product.description,
        },
        {
          property: 'og:title',
          content: product.name,
        },
        {
          property: 'og:description',
          content: product.tagline,
        },
        {
          property: 'og:image',
          content: `https://www.ksmart.co.ke${product.image}`,
        },
        {
          property: 'og:url',
          content: `https://www.ksmart.co.ke/meters/${params.meterId}`,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: product.name,
        },
        {
          name: 'twitter:description',
          content: product.description,
        },
        {
          name: 'twitter:image',
          content: `https://www.ksmart.co.ke${product.image}`,
        },
      ],
      links: [
        {
          rel: 'canonical',
          href: `https://www.ksmart.co.ke/meters/${params.meterId}`,
        },
      ],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            image: `https://www.ksmart.co.ke${product.image}`,
            description: product.description,
            brand: {
              '@type': 'Brand',
              name: 'Kensmart',
            },
            offers: {
              '@type': 'Offer',
              url: `https://www.ksmart.co.ke/meters/${params.meterId}`,
              priceCurrency: 'KES',
              price: product.price.replace(/,/g, ''),
              availability: 'https://schema.org/InStock',
            },
          }),
        },
      ],
    }
  },
  component: MeterDetailsPage,
})

function MeterDetailsPage() {
  const { meterId } = Route.useParams()
  const product = getProductById(meterId)

  if (!product) {
    return (
      <main className="pt-8 md:pt-24">
        <div className="container max-w-screen-2xl px-4 sm:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <p className="text-muted-foreground mt-2">
            The meter you're looking for doesn't exist.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-8">
      <MeterHero product={product} />
      <MeterSpecs product={product} />
    </main>
  )
}
