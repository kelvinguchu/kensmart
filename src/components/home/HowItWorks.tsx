import {
  HiOutlineCalculator,
  HiOutlineChartBar,
  HiOutlineCreditCard,
  HiOutlineLightningBolt,
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
} from 'react-icons/hi'

const userSteps = [
  {
    title: 'Pay via M-Pesa',
    description:
      'Access M-Pesa, select Pay Bill, and enter the Kensmart Business Number.',
    icon: HiOutlineCreditCard,
  },
  {
    title: 'Enter Meter Details',
    description:
      'Input your Meter Number as Account Number with your top-up amount.',
    icon: HiOutlineCalculator,
  },
  {
    title: 'Get Your Token',
    description:
      'Receive a 20-digit token via SMS. Key it into your meter to activate.',
    icon: HiOutlineLightningBolt,
  },
]

const managerSteps = [
  {
    title: 'Register Property',
    description:
      'Complete our quick registration with property and meter information.',
    icon: HiOutlineOfficeBuilding,
  },
  {
    title: 'Manage Tenants',
    description:
      'Assign meters to units and monitor tenant activity from your dashboard.',
    icon: HiOutlineUsers,
  },
  {
    title: 'Track Revenue',
    description:
      'Access real-time consumption data and revenue reports from all meters.',
    icon: HiOutlineChartBar,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-6 md:py-8 bg-secondary/30">
      <div className="container max-w-7xl px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Simple steps to get started with Kensmart prepaid metering
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Users Column */}
          <div className="bg-white dark:bg-card rounded-2xl border border-border p-6 lg:p-8">
            <h3 className="text-xl font-bold mb-6 pb-3 border-b border-border">
              For Tenants
            </h3>
            <div className="space-y-6">
              {userSteps.map((step) => (
                <div key={step.title} className="flex gap-4">
                  <step.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Managers Column */}
          <div className="bg-white dark:bg-card rounded-2xl border border-border p-6 lg:p-8">
            <h3 className="text-xl font-bold mb-6 pb-3 border-b border-border">
              For Property Managers
            </h3>
            <div className="space-y-6">
              {managerSteps.map((step) => (
                <div key={step.title} className="flex gap-4">
                  <step.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
