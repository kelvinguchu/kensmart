import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title:
          'Kensmart Utilities Limited | Smart Solutions for Power and Water',
      },
      {
        name: 'description',
        content:
          'Kensmart Utilities Limited delivers smart solutions for power and water. Prepaid metering for modern properties.',
      },
      // Open Graph
      {
        property: 'og:site_name',
        content: 'Kensmart Utilities',
      },
      {
        property: 'og:title',
        content:
          'Kensmart Utilities Limited | Smart Solutions for Power and Water',
      },
      {
        property: 'og:description',
        content:
          'Discover smart prepaid metering solutions for electricity, water, and gas. Secure, reliable, and convenient utility management for modern properties in Kenya.',
      },
      {
        property: 'og:image',
        content: 'https://kensmart.co.ke/opengraph-image.png',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      // Twitter Card
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content:
          'Kensmart Utilities Limited | Smart Solutions for Power and Water',
      },
      {
        name: 'twitter:description',
        content:
          'Smart prepaid metering solutions for Kenyan properties. Take control of your power and water utilities.',
      },
      {
        name: 'twitter:image',
        content: 'https://kensmart.co.ke/opengraph-image.png',
      },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
      },
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => (
    <div className="p-4">
      Page Not Found <Link to="/">Go Home</Link>
    </div>
  ),
})

function RootComponent() {
  return (
    <RootDocument>
      <div className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <Scripts />
      </div>
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Kensmart Utilities Limited',
              url: 'https://kensmart.co.ke',
              logo: 'https://kensmart.co.ke/logo-for-lightmode.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+254700000000',
                contactType: 'customer service',
              },
              sameAs: [
                'https://facebook.com/kensmart',
                'https://twitter.com/kensmart',
                'https://linkedin.com/company/kensmart',
              ],
            }),
          }}
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NWP8Q2Z9SZ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NWP8Q2Z9SZ');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <TanStackRouterDevtools position="bottom-right" />
      </body>
    </html>
  )
}
