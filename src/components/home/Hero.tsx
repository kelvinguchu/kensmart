import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* CSS Keyframe Animations */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-12px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(10px) translateX(-6px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(6px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes bgFloat1 {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.5; }
          50% { transform: translateY(-40px) translateX(20px); opacity: 0.8; }
        }
        @keyframes bgFloat2 {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.5; }
          50% { transform: translateY(60px) translateX(-30px); opacity: 0.8; }
        }
      `}</style>

      {/* Background blur elements with CSS animations */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[20%] left-[10%] w-32 h-32 bg-primary/40 rounded-full blur-2xl"
          style={{ animation: 'bgFloat1 15s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-[30%] right-[20%] w-48 h-48 bg-secondary/40 rounded-full blur-[50px]"
          style={{ animation: 'bgFloat2 18s ease-in-out infinite 2s' }}
        />
        <div className="absolute left-[20%] top-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-[20%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute right-0 top-[20%] h-[600px] w-[600px] translate-x-1/3 rounded-full bg-secondary/30 blur-[100px] opacity-60" />
      </div>

      {/* Container */}
      <div className="container relative z-10 max-w-screen-2xl px-4 sm:px-12 flex min-h-screen pt-16 md:pt-20 items-center">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 items-center w-full py-8 md:py-12">
          {/* Left: Text content */}
          <div className="flex flex-col justify-center space-y-6 max-w-[60ch] order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl font-heading">
                Control Your Utilities{' '}
                <span className="text-primary">With Precision</span>
              </h1>
              <p className="text-muted-foreground md:text-xl leading-relaxed">
                The next generation of smart prepaid metering. Manage
                electricity, water, and gas with our integrated, tamper-proof,
                and user-friendly solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 text-lg px-8 h-12 rounded-full cursor-pointer"
              >
                <Link to="/register">Register</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 h-12 rounded-full border-2 hover:bg-secondary/50 cursor-pointer"
                onClick={() => {
                  document
                    .getElementById('products')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                View Products
              </Button>
            </div>
          </div>

          {/* Right: Product cards with CSS animations */}
          <div className="relative mx-auto w-full flex flex-col justify-center items-center lg:items-end order-1 lg:order-2">
            <div className="relative w-full max-w-[500px] h-[420px]">
              {/* Main product - center */}
              <div
                className="absolute left-1/2 top-1/2 z-20"
                style={{ animation: 'float1 5s ease-in-out infinite' }}
              >
                <div className="bg-white dark:bg-card rounded-2xl shadow-2xl border border-border p-5 w-[240px]">
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-xl h-40 flex items-center justify-center mb-3">
                    <img
                      src="/products/integrated-electric.avif"
                      alt="Electric Meter"
                      className="max-h-36 object-contain"
                    />
                  </div>
                  <p className="font-semibold">Integrated Electric</p>
                  <p className="text-sm text-muted-foreground">KES 4,500</p>
                </div>
              </div>

              {/* Product 2 - top left */}
              <div
                className="absolute left-0 top-0 z-10"
                style={{ animation: 'float2 6s ease-in-out infinite 1s' }}
              >
                <div className="bg-white dark:bg-card rounded-xl shadow-xl border border-border p-4 w-[180px]">
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg h-24 flex items-center justify-center mb-2">
                    <img
                      src="/products/water-prepaid.avif"
                      alt="Water Meter"
                      className="max-h-20 object-contain"
                    />
                  </div>
                  <p className="font-medium text-sm">Water Meter</p>
                </div>
              </div>

              {/* Product 3 - bottom right */}
              <div
                className="absolute right-0 bottom-4 z-10"
                style={{ animation: 'float3 5.5s ease-in-out infinite 0.5s' }}
              >
                <div className="bg-white dark:bg-card rounded-xl shadow-xl border border-border p-4 w-[180px]">
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg h-24 flex items-center justify-center mb-2">
                    <img
                      src="/products/gas-prepaid.avif"
                      alt="Gas Meter"
                      className="max-h-20 object-contain"
                    />
                  </div>
                  <p className="font-medium text-sm">Gas Meter</p>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute right-8 top-16 z-30 bg-primary text-white px-4 py-2 rounded-full shadow-lg"
                style={{ animation: 'pulse 2s ease-in-out infinite' }}
              >
                <p className="text-sm font-medium">Prepaid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
