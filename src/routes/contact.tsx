import { createFileRoute } from '@tanstack/react-router'
import { ContactInfo } from '@/components/contact/ContactInfo'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      {
        title: 'Contact Kensmart Utilities | Support & Inquiries',
      },
      {
        name: 'description',
        content:
          'Get in touch with Kensmart Utilities for inquiries about our smart meters, technical support, or partnership opportunities. We are here to help.',
      },
      {
        property: 'og:title',
        content: 'Contact Kensmart Utilities | Support & Inquiries',
      },
      {
        property: 'og:description',
        content:
          'Contact us for smart meter sales, installation support, and general inquiries. Visit our office or call us today.',
      },
      {
        property: 'og:url',
        content: 'https://kensmart.co.ke/contact',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://kensmart.co.ke/contact',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          mainEntity: {
            '@type': 'Organization',
            name: 'Kensmart Utilities Limited',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+254701860991',
              contactType: 'customer service',
              areaServed: 'KE',
              availableLanguage: ['en', 'sw'],
            },
          },
        }),
      },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <main className="pt-16 md:pt-24 pb-12">
      <ContactInfo />
    </main>
  )
}
