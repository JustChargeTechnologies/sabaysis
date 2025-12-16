import { MapPin, Phone, Mail } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';

export function ContactUs() {
  usePageTitle('Contact Us');
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16">
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

        {/* Content */}
        <section className="grid gap-10 lg:grid-cols-[1.1fr,1.1fr]">
          {/* Contact details + form */}
          <div className="space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
              <h2 className="text-base font-semibold uppercase tracking-[0.25em] text-slate-500">
                Contact Details
              </h2>
              <dl className="mt-4 space-y-4 text-sm text-slate-700">
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
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-base font-semibold text-slate-900">Send us a message</h2>
              <p className="mt-1 text-xs text-slate-500">
                Share a few details and we&apos;ll respond with a tailored quote or clarification.
              </p>

              <form className="mt-5 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-1 focus:ring-slate-900/10"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-1 focus:ring-slate-900/10"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-1 focus:ring-slate-900/10"
                    placeholder="+91 ..."
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                      Enter your message...
                    </label>
                    <span className="text-[10px] text-slate-400">0 / 180</span>
                  </div>
                  <textarea
                    rows={4}
                    maxLength={180}
                    className="resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-1 focus:ring-slate-900/10"
                    placeholder="Tell us about your project or requirements (max 180 characters)."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-800"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-slate-900">Visit our location</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              We are based in Meerut, Uttar Pradesh. Use the map to find directions to our office
              at Tiwari Quarters, Phase 2, Kesharganj.
            </p>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
              <div className="relative h-80 w-full md:h-[420px] lg:h-[480px]">
                <iframe
                  title="Sabaysis Sports & Infra Location"
                  src="https://www.google.com/maps?q=28.860397,77.635107&z=14&output=embed"
                  className="h-full w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


