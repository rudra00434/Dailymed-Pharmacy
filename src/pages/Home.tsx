import PromoSlider from '../components/PromoSlider';
import Hero from '../components/Hero';
import Products from '../components/Products';

export default function Home() {
  return (
    <>
      {/* Promotional Slider */}
      <PromoSlider />

      {/* Main Hero */}
      <Hero />

      {/* Trust Banner / Features */}
      <section className="py-12 bg-white border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {/* Secure Payments */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>

              <h3 className="font-bold text-foreground mb-1">
                Secure Payments
              </h3>

              <p className="text-sm text-muted-foreground">
                100% secure checkout
              </p>
            </div>

            {/* Privacy Protection */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </div>

              <h3 className="font-bold text-foreground mb-1">
                Privacy Protection
              </h3>

              <p className="text-sm text-muted-foreground">
                Your data is safe with us
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>

              <h3 className="font-bold text-foreground mb-1">
                24/7 Support
              </h3>

              <p className="text-sm text-muted-foreground">
                Dedicated team available
              </p>
            </div>

            {/* Quality Assurance */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>

              <h3 className="font-bold text-foreground mb-1">
                Quality Assurance
              </h3>

              <p className="text-sm text-muted-foreground">
                Genuine products only
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Products */}
      <Products />

      {/* Prescription Upload Banner */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">

        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-20"
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">

            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Have a prescription?
            </h2>

            <p className="text-lg md:text-xl opacity-90 mb-10">
              Upload your prescription and let our pharmacists do the rest.
              We'll pack and deliver your medicines to your doorstep.
            </p>

            <button
              type="button"
              className="px-8 py-4 bg-white text-primary hover:bg-gray-100 rounded-full font-bold text-lg transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-3"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>

              Upload Prescription Now
            </button>

          </div>
        </div>
      </section>
    </>
  );
}