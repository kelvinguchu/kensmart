import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from 'react-icons/hi'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { sendContactEmail } from '@/server/email'

// Zod v4 schema using top-level validators
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      const result = await sendContactEmail({ data })
      if (result.success) {
        toast.success('Message sent successfully!')
        reset()
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error(error)
      toast.error('An error occurred.')
    }
  }

  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="container px-4 sm:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-muted-foreground">
            Have questions about our prepaid metering solutions? Reach out to
            our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white dark:bg-card rounded-2xl p-6 border border-border">
            <h2 className="text-xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="+254 700 000 000"
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    {...register('subject')}
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  rows={4}
                  className="resize-none"
                  {...register('message')}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-card rounded-2xl p-5 border border-border">
              <div className="flex items-center gap-4">
                <HiOutlineMail className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold mb-0.5">Email Us</h3>
                  <a
                    href="mailto:info@ksmart.co.ke"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@ksmart.co.ke
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-card rounded-2xl p-5 border border-border">
              <div className="flex items-center gap-4">
                <HiOutlinePhone className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold mb-0.5">Call Us</h3>
                  <a
                    href="tel:+254712431201"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +254 712 431201
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-card rounded-2xl p-5 border border-border">
              <div className="flex items-center gap-4">
                <HiOutlineLocationMarker className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold mb-0.5">Visit Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
