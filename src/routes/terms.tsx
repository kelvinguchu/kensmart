import { createFileRoute } from '@tanstack/react-router'
import { TermsContent } from '@/components/common/TermsContent'

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      {
        title: 'Terms of Service | Kensmart Utilities',
      },
      {
        name: 'description',
        content:
          'Kensmart Utilities Terms of Service. User agreements, payment policies, and service usage guidelines.',
      },
      {
        property: 'og:title',
        content: 'Terms of Service | Kensmart Utilities',
      },
      {
        property: 'og:description',
        content:
          'Kensmart Utilities Terms of Service. User agreements, payment policies, and service usage guidelines.',
      },
      {
        property: 'og:url',
        content: 'https://www.ksmart.co.ke/terms',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://www.ksmart.co.ke/terms',
      },
    ],
  }),
  component: TermsPage,
})

function TermsPage() {
  return (
    <main className="pt-24 pb-12">
      <section className="py-16 bg-background">
        <div className="container max-w-3xl px-4 sm:px-8">
          <h1 className="text-4xl font-bold tracking-tight mb-8">
            Terms of <span className="text-primary">Service</span>
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <TermsContent />
          </div>
        </div>
      </section>
    </main>
  )
}
