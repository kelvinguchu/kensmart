import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/home/Hero'
import { TargetAudience } from '@/components/home/TargetAudience'
import { ProductShowcase } from '@/components/home/ProductShowcase'
import { HowItWorks } from '@/components/home/HowItWorks'
import { FAQ } from '@/components/home/FAQ'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title:
          'Kensmart Utilities | Smart Prepayment Metering Solutions in Kenya',
      },
      {
        name: 'description',
        content:
          'Leading provider of smart prepaid meters for electricity, water, and gas in Kenya. Integrated systems for landlords and tenants.',
      },
      {
        property: 'og:title',
        content:
          'Kensmart Utilities | Smart Prepayment Metering Solutions in Kenya',
      },
      {
        property: 'og:description',
        content:
          'Leading provider of smart prepaid meters for electricity, water, and gas in Kenya. Secure investments and streamlined utility management.',
      },
      {
        property: 'og:url',
        content: 'https://www.ksmart.co.ke/',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://www.ksmart.co.ke/',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Kensmart Utilities',
          url: 'https://www.ksmart.co.ke',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://www.ksmart.co.ke/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }),
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Kensmart Utilities Limited',
          image: 'https://www.ksmart.co.ke/logo-for-lightmode.png',
          '@id': 'https://www.ksmart.co.ke',
          url: 'https://www.ksmart.co.ke',
          telephone: '+254700000000',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Nairobi, Kenya',
            addressLocality: 'Nairobi',
            addressCountry: 'KE',
          },
        }),
      },
    ],
  }),
  component: Home,
})

function Home() {
  return (
    <>
      <Hero />
      <TargetAudience />
      <ProductShowcase />
      <HowItWorks />
      <FAQ />
    </>
  )
}
