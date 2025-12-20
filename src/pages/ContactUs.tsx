import { MapPin, Phone, Mail } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useState, useEffect } from 'react';
import { ContactForm } from '@/components/ContactForm';
import { useSearchParams } from 'react-router-dom';

export function ContactUs() {
  usePageTitle('Contact Us');
  const [mapError, setMapError] = useState(false);
  const [searchParams] = useSearchParams();
  const productName = searchParams.get('product') || '';

  useEffect(() => {
    // Set a timeout to detect if map fails to load
    const timer = setTimeout(() => {
      // Check if iframe loaded successfully (this is a fallback check)
      const iframe = document.querySelector('iframe[title="Sabaysis Sports & Infra Location"]') as HTMLIFrameElement;
      if (iframe && !iframe.contentWindow) {
        setMapError(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 md:px-6 py-16 md:py-20">
        {/* Header */}
        <section className="space-y-4 text-center md:text-left">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-emerald-700">
            Contact Us
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Get a free quote for your sports &amp; infra project.
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 md:mx-0 md:text-base">
            We are delighted to be of service to you. If you have any inquiries, project ideas, or
            need maintenance support, please reach out and our team will get back to you shortly.
          </p>
        </section>

        {/* Contact Details Section */}
        <section className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
          <h2 className="text-base font-semibold uppercase tracking-[0.25em] text-slate-500">
            Contact Details
          </h2>
          <dl className="mt-4 grid gap-4 text-sm text-slate-700 sm:grid-cols-3">
            <div>
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                <MapPin className="h-4 w-4 text-emerald-700" />
                <span>Address</span>
              </dt>
              <dd className="mt-1">
                Tiwari Quarters, Phase 2, Kesharganj,
                <br />
                Meerut, Uttar Pradesh 250001
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                <Phone className="h-4 w-4 text-emerald-700" />
                <span>Phone Number</span>
              </dt>
              <dd className="mt-1">
                <a href="tel:+919897053591" className="text-emerald-700 hover:underline">
                  +91 98970 53591
                </a>
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                <Mail className="h-4 w-4 text-emerald-700" />
                <span>Email ID</span>
              </dt>
              <dd className="mt-1">
                <a
                  href="mailto:ajarenterprisesmeerut@gmail.com"
                  className="break-all text-emerald-700 hover:underline"
                >
                  ajarenterprisesmeerut@gmail.com
                </a>
              </dd>
            </div>
          </dl>
        </section>

        {/* Form and Map - Half Screen Each */}
        <section className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Send us a message form - Left Half */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
            <h2 className="text-base font-semibold text-slate-900 md:text-lg">Send us a message</h2>
            <p className="mt-2 text-xs text-slate-500 md:text-sm">
              Share a few details and we&apos;ll respond with a tailored quote or clarification.
            </p>

            <ContactForm initialSubject={productName} className="mt-6" />
          </div>

          {/* Map - Right Half */}
          <div className="flex flex-col">
            <h2 className="text-base font-semibold text-slate-900 md:text-lg mb-2">Visit our location</h2>
            <p className="text-sm leading-relaxed text-slate-600 mb-4">
              We are based in Meerut, Uttar Pradesh. Use the map to find directions to our office
              at Tiwari Quarters, Phase 2, Kesharganj.
            </p>
            <div className="flex-1 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
              <div className="relative h-full min-h-[400px] w-full md:min-h-[500px]">
                {mapError ? (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-slate-50 p-8 text-center">
                    <MapPin className="h-12 w-12 text-slate-400 mb-4" />
                    <p className="text-sm font-semibold text-slate-700 mb-2">Map unavailable</p>
                    <p className="text-xs text-slate-600 mb-6 max-w-xs">
                      Tiwari Quarters, Phase 2, Kesharganj,
                      <br />
                      Meerut, Uttar Pradesh 250001
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Tiwari+Quarters,+Phase+2,+Kesharganj,+Meerut,+Uttar+Pradesh+250001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-all duration-200 hover:bg-emerald-700 active:scale-[0.98] min-h-[48px] min-w-[200px]"
                    >
                      <MapPin className="h-4 w-4" />
                      Open in Google Maps
                    </a>
                  </div>
                ) : (
                  <>
                    <iframe
                      title="Sabaysis Sports & Infra Location"
                      src="https://maps.google.com/maps?q=Tiwari+Quarters,+Phase+2,+Kesharganj,+Meerut,+Uttar+Pradesh+250001&t=&z=14&ie=UTF8&iwloc=&output=embed"
                      className="h-full w-full"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      onLoad={() => setMapError(false)}
                    />
                    {/* Fallback link overlay for accessibility */}
                    <div className="absolute bottom-4 right-4 z-10">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Tiwari+Quarters,+Phase+2,+Kesharganj,+Meerut,+Uttar+Pradesh+250001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2.5 text-xs font-semibold text-slate-900 shadow-md transition-all duration-200 hover:bg-white hover:shadow-lg active:scale-[0.98] backdrop-blur-sm min-h-[44px]"
                      >
                        <MapPin className="h-3.5 w-3.5 text-emerald-600" />
                        Open in Maps
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


