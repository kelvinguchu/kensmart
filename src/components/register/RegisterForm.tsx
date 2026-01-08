import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { sendRegisterEmail } from '@/server/email'

// Zod v4 schema
const registerSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  email: z.email('Please enter a valid email'),
  idNumber: z.string().min(6, 'ID number must be at least 6 characters'),
  kraPin: z.string().min(10, 'KRA PIN must be at least 10 characters'),
  county: z.string().min(2, 'County is required'),
  location: z.string().min(5, 'Location must be at least 5 characters'),
  buildingType: z.string().min(1, 'Please select building type'),
  utilityType: z.string().min(1, 'Please select utility type'),
  motherMeter: z.string().min(5, 'Mother meter number is required'),
  initialReading: z.string().min(1, 'Initial reading is required'),
  paymentMode: z.string().min(1, 'Please select payment mode'),
  installationType: z.string().min(1, 'Please select installation type'),
  billPayer: z.string().min(1, 'Please select who pays the bill'),
  suppliesOther: z.boolean().optional(),
  techName: z.string().optional(),
  techPhone: z.string().optional(),
  terms: z.literal(true, { message: 'You must accept the terms' }),
})

type RegisterFormData = z.infer<typeof registerSchema>

export function RegisterForm() {
  const [subMeters, setSubMeters] = useState<Array<string>>([''])

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const addSubMeter = () => setSubMeters([...subMeters, ''])
  const updateSubMeter = (index: number, value: string) => {
    const updated = [...subMeters]
    updated[index] = value
    setSubMeters(updated)
  }
  const removeSubMeter = (index: number) => {
    if (subMeters.length > 1) {
      setSubMeters(subMeters.filter((_, i) => i !== index))
    }
  }

  const onSubmit = async (data: RegisterFormData) => {
    console.log('Form data:', { ...data, subMeters })
    // Submit to email
    try {
      const result = await sendRegisterEmail({
        data: {
          ...data,
          subMeters,
        },
      })

      if (result.success) {
        toast.success('Registration successful! Check your email.')
        // TODO: Reset form or redirect
      } else {
        toast.error('Failed to register. Please try again.')
      }
    } catch (error) {
      console.error(error)
      toast.error('An error occurred.')
    }
  }

  return (
    <div className="container max-w-5xl mx-auto px-4 sm:px-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Register Your <span className="text-primary">Meters</span>
        </h1>
        <p className="text-muted-foreground">
          Fill out the form below to register your purchased meters with
          Kensmart.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="bg-white dark:bg-card rounded-xl border border-border p-6 space-y-4">
          <h2 className="text-lg font-bold">Personal Information</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                placeholder="John"
                {...register('firstName')}
              />
              {errors.firstName && (
                <p className="text-sm text-destructive">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                placeholder="Doe"
                {...register('lastName')}
              />
              {errors.lastName && (
                <p className="text-sm text-destructive">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="0712345678"
                {...register('phone')}
              />
              {errors.phone && (
                <p className="text-sm text-destructive">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
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
              <Label htmlFor="idNumber">ID Number *</Label>
              <Input
                id="idNumber"
                placeholder="12345678"
                {...register('idNumber')}
              />
              {errors.idNumber && (
                <p className="text-sm text-destructive">
                  {errors.idNumber.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="kraPin">KRA PIN *</Label>
              <Input
                id="kraPin"
                placeholder="A012345678B"
                {...register('kraPin')}
              />
              {errors.kraPin && (
                <p className="text-sm text-destructive">
                  {errors.kraPin.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Property Information */}
        <div className="bg-white dark:bg-card rounded-xl border border-border p-6 space-y-4">
          <h2 className="text-lg font-bold">Property Information</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="county">County *</Label>
              <Input
                id="county"
                placeholder="Nairobi"
                {...register('county')}
              />
              {errors.county && (
                <p className="text-sm text-destructive">
                  {errors.county.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location / Address *</Label>
              <Input
                id="location"
                placeholder="Westlands, ABC Apartments"
                {...register('location')}
              />
              {errors.location && (
                <p className="text-sm text-destructive">
                  {errors.location.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Building Type *</Label>
              <Controller
                name="buildingType"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.buildingType && (
                <p className="text-sm text-destructive">
                  {errors.buildingType.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label>Utility Type *</Label>
              <Controller
                name="utilityType"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select utility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electricity">Electricity</SelectItem>
                      <SelectItem value="water">Water</SelectItem>
                      <SelectItem value="gas">Gas</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.utilityType && (
                <p className="text-sm text-destructive">
                  {errors.utilityType.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Mother Meter Information */}
        <div className="bg-white dark:bg-card rounded-xl border border-border p-6 space-y-4">
          <h2 className="text-lg font-bold">Mother Meter Details</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="motherMeter">Mother Meter Number *</Label>
              <Input
                id="motherMeter"
                placeholder="KPLC meter number"
                {...register('motherMeter')}
              />
              {errors.motherMeter && (
                <p className="text-sm text-destructive">
                  {errors.motherMeter.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="initialReading">Initial Reading *</Label>
              <Input
                id="initialReading"
                type="number"
                placeholder="0"
                {...register('initialReading')}
              />
              {errors.initialReading && (
                <p className="text-sm text-destructive">
                  {errors.initialReading.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Payment Mode *</Label>
              <Controller
                name="paymentMode"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="prepaid">Prepaid</SelectItem>
                      <SelectItem value="postpaid">Postpaid</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.paymentMode && (
                <p className="text-sm text-destructive">
                  {errors.paymentMode.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label>Installation Type *</Label>
              <Controller
                name="installationType"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New Installation</SelectItem>
                      <SelectItem value="existing">Existing Meters</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.installationType && (
                <p className="text-sm text-destructive">
                  {errors.installationType.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Who pays the KPLC bill? *</Label>
              <Controller
                name="billPayer"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kplc">KPLC (Direct)</SelectItem>
                      <SelectItem value="landlord">Landlord</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.billPayer && (
                <p className="text-sm text-destructive">
                  {errors.billPayer.message}
                </p>
              )}
            </div>
            <div className="flex items-center gap-2 pt-6">
              <Controller
                name="suppliesOther"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="suppliesOther"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label
                htmlFor="suppliesOther"
                className="font-normal cursor-pointer"
              >
                Supplies power to other houses
              </Label>
            </div>
          </div>
        </div>

        {/* Sub-Meters */}
        <div className="bg-white dark:bg-card rounded-xl border border-border p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Sub-Meter Numbers</h2>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addSubMeter}
            >
              + Add Meter
            </Button>
          </div>

          <div className="space-y-3">
            {subMeters.map((meter, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={meter}
                  onChange={(e) => updateSubMeter(index, e.target.value)}
                  placeholder={`Sub-meter ${index + 1} number`}
                />
                {subMeters.length > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => removeSubMeter(index)}
                  >
                    ×
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technician Information */}
        <div className="bg-white dark:bg-card rounded-xl border border-border p-6 space-y-4">
          <h2 className="text-lg font-bold">Technician Details (Optional)</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="techName">Technician Name</Label>
              <Input
                id="techName"
                placeholder="Full name"
                {...register('techName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="techPhone">Technician Phone</Label>
              <Input
                id="techPhone"
                type="tel"
                placeholder="0712345678"
                {...register('techPhone')}
              />
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-start gap-3">
          <Controller
            name="terms"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="terms"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            )}
          />
          <Label
            htmlFor="terms"
            className="font-normal text-sm leading-relaxed cursor-pointer"
          >
            I accept the{' '}
            <Link to="/terms" className="text-primary hover:underline">
              Terms and Conditions
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>{' '}
            and confirm that all information provided is accurate.
          </Label>
        </div>
        {errors.terms && (
          <p className="text-sm text-destructive">{errors.terms.message}</p>
        )}

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Registration'}
        </Button>
      </form>
    </div>
  )
}
