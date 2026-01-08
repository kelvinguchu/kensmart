import {
  MdOutlineCheckCircle,
  MdOutlineFactory,
  MdOutlineHome,
  MdOutlineStore,
} from 'react-icons/md'
import { cn } from '@/lib/utils'

const sectors = [
  {
    id: 'residential',
    title: 'Residential Properties',
    tagline: "Intelligent living for today's communities",
    description:
      'Enable property owners and tenants with accurate, real-time consumption data. Our residential metering solutions eliminate billing confusion and streamline utility collection for modern living spaces.',
    details: [
      'Per-unit sub-metering capabilities',
      'Mobile-friendly payment options',
      'Automated billing notifications',
      'Early leak detection alerts',
    ],
    image: '/assets/residential-building.jpg',
    icon: MdOutlineHome,
    color: 'text-cyan-500',
  },
  {
    id: 'commercial',
    title: 'Commercial Spaces',
    tagline: 'Streamlined operations for business environments',
    description:
      'Optimize utility management across shopping centers, office buildings, and mixed-use developments. Ensure precise cost allocation and seamless expense recovery for all commercial tenants.',
    details: [
      'Flexible tariff structures',
      'Shared area cost distribution',
      'Peak usage monitoring',
      'Building management integration',
    ],
    image: '/assets/commercial-building.jpg',
    icon: MdOutlineStore,
    color: 'text-teal-500',
  },
  {
    id: 'industrial',
    title: 'Industrial Operations',
    tagline: 'High-performance solutions for manufacturing',
    description:
      'Purpose-built metering for demanding industrial environments. Track power quality, manage load requirements, and minimize operational expenses with precision-grade instrumentation.',
    details: [
      'High-voltage compatibility',
      'Power factor analysis',
      'Demand management tools',
      'Production-based consumption tracking',
    ],
    image: '/assets/industrialfactory-building.jpg',
    icon: MdOutlineFactory,
    color: 'text-slate-700 dark:text-slate-300',
  },
]

export function TargetAudience() {
  return (
    <section className="py-6 md:py-8 bg-background relative overflow-hidden">
      <div className="container max-w-screen-2xl px-4 sm:px-8 space-y-8">
        <div className="flex items-center justify-center gap-2 sm:gap-4 w-full">
          <div className="h-0.5 bg-primary w-8 sm:w-12 md:w-24 lg:w-32 rounded-full" />
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-center">
            Industries <span className="text-primary">We Support</span>
          </h2>
          <div className="h-0.5 bg-primary w-8 sm:w-12 md:w-24 lg:w-32 rounded-full" />
        </div>

        <div className="space-y-12">
          {sectors.map((sector, index) => (
            <div
              key={sector.id}
              className="bg-card rounded-3xl shadow-xl border border-border/50 p-3"
            >
              <div
                className={cn(
                  'grid lg:grid-cols-2 gap-3 h-full',
                  index % 2 !== 0 && 'lg:grid-flow-dense',
                )}
              >
                {/* Image Section */}
                <div
                  className={cn(
                    'relative h-[250px] sm:h-[350px] lg:h-auto w-full overflow-hidden rounded-2xl',
                    index % 2 !== 0 && 'lg:col-start-2',
                  )}
                >
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent hover:from-transparent transition-all duration-500" />
                </div>

                <div
                  className={cn(
                    'flex flex-col justify-center p-5 sm:p-8 lg:p-12 rounded-2xl h-full',
                    'bg-secondary/80 dark:bg-secondary/20',
                  )}
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <sector.icon size={28} className={sector.color} />
                      <span
                        className={cn(
                          'text-sm font-bold uppercase tracking-wider',
                          sector.color,
                        )}
                      >
                        {sector.title}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
                        {sector.tagline}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {sector.description}
                      </p>
                    </div>

                    <ul className="space-y-3 pt-4">
                      {sector.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <MdOutlineCheckCircle
                            className={cn(
                              'mt-1 text-xl shrink-0 opacity-80',
                              sector.color,
                            )}
                          />
                          <span className="font-medium text-foreground/90">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
