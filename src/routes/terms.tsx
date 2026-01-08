import { createFileRoute } from '@tanstack/react-router'

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
        content: 'https://kensmart.co.ke/terms',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://kensmart.co.ke/terms',
      },
    ],
  }),
  component: TermsPage,
})

function TermsPage() {
  return (
    <main className="pt-16 md:pt-24 pb-12">
      <section className="py-16 bg-background">
        <div className="container max-w-3xl px-4 sm:px-8">
          <h1 className="text-4xl font-bold tracking-tight mb-8">
            Terms of <span className="text-primary">Service</span>
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground">Last updated: January 2026</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground mb-4">
              By accessing or using Kensmart Utilities Limited services, you
              agree to be bound by these Terms of Service and all applicable
              laws and regulations.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Use of Services</h2>
            <p className="text-muted-foreground mb-4">
              You agree to use our services only for lawful purposes and in
              accordance with these Terms. You are responsible for maintaining
              the confidentiality of your account information.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Payment Terms</h2>
            <p className="text-muted-foreground mb-4">
              All payments for prepaid utility tokens are processed via M-Pesa.
              Tokens are delivered via SMS upon successful payment confirmation.
              Minimum transaction amounts apply.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              4. Limitation of Liability
            </h2>
            <p className="text-muted-foreground mb-4">
              Kensmart Utilities Limited shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising
              out of or relating to your use of our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              5. Changes to Terms
            </h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right to modify these Terms at any time. We will
              notify users of any material changes by posting the new Terms on
              our website.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact</h2>
            <p className="text-muted-foreground mb-4">
              For questions about these Terms, please contact us at
              info@ksmart.co.ke.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
