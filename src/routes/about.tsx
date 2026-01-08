import { createFileRoute } from '@tanstack/react-router'
import { AboutHero } from '@/components/about/AboutHero'
import { MissionVision } from '@/components/about/MissionVision'
import { Values } from '@/components/about/Values'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      {
        title: 'About Kensmart Utilities - Mission & Vision',
      },
      {
        name: 'description',
        content:
          'Learn about Kensmart Utilities, our mission to revolutionize utility management in Kenya, and our core values of integrity and innovation.',
      },
      {
        property: 'og:title',
        content: 'About Kensmart Utilities - Mission & Vision',
      },
      {
        property: 'og:description',
        content:
          'We are dedicated to providing smart, reliable, and transparent utility solutions across Kenya.',
      },
      {
        property: 'og:url',
        content: 'https://kensmart.co.ke/about',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://kensmart.co.ke/about',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          mainEntity: {
            '@type': 'Organization',
            name: 'Kensmart Utilities Limited',
            description:
              'Kensmart Utilities Limited delivers smart solutions for power and water.',
            url: 'https://kensmart.co.ke',
          },
        }),
      },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <main className="pt-16 md:pt-24">
      <AboutHero />
      <MissionVision />
      <Values />
    </main>
  )
}
