import { createServerFn } from '@tanstack/react-start'
import { Resend } from 'resend'
import { z } from 'zod'
import { ContactEmail } from '@/components/emails/ContactEmail'
import { RegisterEmail } from '@/components/emails/RegisterEmail'

// Validating environment variables
const resendApiKey = process.env.RESEND_API_KEY
const fromEmail = process.env.FROM_EMAIL || 'metering@ksmart.co.ke'
const toEmail = process.env.TO_EMAIL || 'info@ksmart.co.ke'

if (!resendApiKey) {
  console.warn('RESEND_API_KEY is not set')
}

const resend = new Resend(resendApiKey)

// Schemas
const contactSchema = z.object({
  name: z.string(),
  email: z.email(),
  phone: z.string(),
  subject: z.string(),
  message: z.string(),
})

const registerSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  email: z.email(),
  idNumber: z.string(),
  kraPin: z.string(),
  county: z.string(),
  location: z.string(),
  buildingType: z.string(),
  utilityType: z.string(),
  motherMeter: z.string(),
  initialReading: z.string(),
  paymentMode: z.string(),
  installationType: z.string(),
  billPayer: z.string(),
  suppliesOther: z.boolean().optional(),
  techName: z.string().optional(),
  techPhone: z.string().optional(),
  subMeters: z.array(z.string()).optional(),
  terms: z.literal(true),
})

export const sendContactEmail = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    console.log('Sending contact email to:', toEmail)
    try {
      const { data: result, error } = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        subject: `StartUp Inquiry: ${data.subject}`,
        react: ContactEmail({ ...data }),
      })

      if (error) {
        console.error('Error sending contact email:', error)
        return {
          success: false,
          error: error.message || 'Failed to send email',
        }
      }

      console.log('Contact email sent successfully:', result)
      return { success: true, result }
    } catch (err) {
      console.error('Exception sending contact email:', err)
      return { success: false, error: 'Internal server error' }
    }
  })

export const sendRegisterEmail = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => registerSchema.parse(data))
  .handler(async ({ data }) => {
    console.log('Sending registration details to admin:', toEmail)
    try {
      const { data: result, error } = await resend.emails.send({
        from: fromEmail,
        to: [toEmail], // Send to company/admin
        subject: `New Meter Registration: ${data.firstName} ${data.lastName}`,
        react: RegisterEmail({ ...data }),
      })

      if (error) {
        console.error('Error sending register email:', error)
        return {
          success: false,
          error: error.message || 'Failed to send email',
        }
      }

      return { success: true, result }
    } catch (err) {
      console.error('Exception sending register email:', err)
      return { success: false, error: 'Internal server error' }
    }
  })
