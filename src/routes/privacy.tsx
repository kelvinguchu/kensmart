import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      {
        title: 'Privacy Policy | Kensmart Utilities',
      },
      {
        name: 'description',
        content:
          'Kensmart Utilities Privacy Policy. How we collect, use, and protect your personal information.',
      },
      {
        property: 'og:title',
        content: 'Privacy Policy | Kensmart Utilities',
      },
      {
        property: 'og:description',
        content:
          'Kensmart Utilities Privacy Policy. How we collect, use, and protect your personal information.',
      },
      {
        property: 'og:url',
        content: 'https://kensmart.co.ke/privacy',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://kensmart.co.ke/privacy',
      },
    ],
  }),
  component: PrivacyPage,
})

function PrivacyPage() {
  return (
    <main className="pt-24 pb-12">
      <section className="py-16 bg-background">
        <div className="container max-w-3xl px-4 sm:px-8">
          <h1 className="text-4xl font-bold tracking-tight mb-8">
            Privacy <span className="text-primary">Policy</span>
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground">Last updated: January 2026</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us, such as when
              you register for our services, make a payment, or contact us for
              support. This may include your name, email address, phone number,
              property details, and meter information.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to provide, maintain, and
              improve our services, process transactions, send you technical
              notices and support messages, and respond to your comments and
              questions.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              3. Information Sharing
            </h2>
            <p className="text-muted-foreground mb-4">
              We do not share your personal information with third parties
              except as described in this policy or with your consent. We may
              share information with service providers who assist us in
              providing our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We take reasonable measures to help protect your personal
              information from loss, theft, misuse, unauthorized access,
              disclosure, alteration, and destruction.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy, please
              contact us at info@ksmart.co.ke.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
