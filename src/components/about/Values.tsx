import {
  HiOutlineGlobe,
  HiOutlineLightBulb,
  HiOutlineStar,
  HiOutlineUserGroup,
} from 'react-icons/hi'

const values = [
  {
    icon: HiOutlineStar,
    title: 'Quality',
    description:
      'We deliver reliable, accurate metering solutions built to last.',
  },
  {
    icon: HiOutlineLightBulb,
    title: 'Innovation',
    description:
      'We use modern technology to solve utility management challenges.',
  },
  {
    icon: HiOutlineUserGroup,
    title: 'Customer Focus',
    description:
      'We listen to our customers and tailor solutions to their needs.',
  },
  {
    icon: HiOutlineGlobe,
    title: 'Sustainability',
    description: 'We promote efficient resource usage through smart metering.',
  },
]

export function Values() {
  return (
    <section className="py-6 md:py-8 bg-secondary/30">
      <div className="container px-4 sm:px-8">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Our <span className="text-primary">Values</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white dark:bg-card rounded-xl p-5 border border-border"
            >
              <value.icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-bold mb-1">{value.title}</h3>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
