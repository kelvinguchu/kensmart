import { HiOutlineEye, HiOutlineFlag } from 'react-icons/hi'

export function MissionVision() {
  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="container px-4 sm:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="bg-white dark:bg-card rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <HiOutlineFlag className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To provide property owners with reliable prepaid metering
              solutions that simplify utility management, reduce losses, and
              promote transparency in electricity, water, and gas consumption.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-card rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <HiOutlineEye className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To become Kenya's trusted partner in smart utility management,
              delivering innovative prepaid metering technology that benefits
              property owners and tenants alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
