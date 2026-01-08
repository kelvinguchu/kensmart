import { createFileRoute } from '@tanstack/react-router'
import { RegisterForm } from '@/components/register/RegisterForm'

export const Route = createFileRoute('/register')({
  head: () => ({
    meta: [
      {
        title: 'Register Meter | Kensmart Utilities',
      },
      {
        name: 'description',
        content:
          'Register your Kensmart prepaid meter to start enjoying smart utility management. Simple and fast online registration.',
      },
      {
        property: 'og:title',
        content: 'Register Meter | Kensmart Utilities',
      },
      {
        property: 'og:description',
        content:
          'Join the Kensmart network. Register your meter online for seamless token purchases and account management.',
      },
      {
        property: 'og:url',
        content: 'https://kensmart.co.ke/register',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://kensmart.co.ke/register',
      },
    ],
  }),
  component: RegisterPage,
})

function RegisterPage() {
  return (
    <main className="pt-12 md:pt-24 pb-12">
      <RegisterForm />
    </main>
  )
}
