import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How do I purchase electricity tokens?',
    answer:
      'Open your M-Pesa app, select Pay Bill, enter the Kensmart Business Number, then input your Meter Number as the Account Reference and your desired amount. A 20-digit token will be sent to you via SMS within seconds.',
  },
  {
    question: 'What is the minimum amount I can top up?',
    answer:
      'The minimum transaction is KES 30. Any amount below this will not be processed by the system.',
  },
  {
    question: 'How fast will I receive my token?',
    answer:
      'Tokens are delivered via SMS within 3-8 seconds after your M-Pesa payment is confirmed successfully.',
  },
  {
    question: 'Do I need internet to purchase tokens?',
    answer:
      'No internet is required. The entire process works through M-Pesa Paybill, which only needs basic phone network access. No smartphone app installation is necessary.',
  },
  {
    question: 'How can property managers join Kensmart?',
    answer:
      'Property managers can register online through our self-service portal. Fill in your property details and meter information, and our team will review and activate your account within 24-48 hours.',
  },
  {
    question: 'Which meter brands are compatible with Kensmart?',
    answer:
      'We support a wide range of prepaid meters for electricity, water, and gas from leading manufacturers including Hexing, Stron, Conlog, and others.',
  },
  {
    question: 'How are electricity units calculated?',
    answer:
      'Units are calculated based on the prevailing utility rate for your meter type. A small service fee is applied to each transaction, with the remainder converted to consumable units at the standard rate.',
  },
]

export function FAQ() {
  return (
    <section className="py-6 md:py-8 bg-secondary/20">
      <div className="container max-w-screen-2xl px-4 sm:px-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 w-full">
          <div className="h-0.5 bg-primary w-8 sm:w-12 md:w-24 lg:w-32 rounded-full" />
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="h-0.5 bg-primary w-8 sm:w-12 md:w-24 lg:w-32 rounded-full" />
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
