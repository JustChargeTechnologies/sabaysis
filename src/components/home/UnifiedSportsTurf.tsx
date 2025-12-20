import unifiedMain from '@/assets/Unified S/synthetic-lawn-2048px-802551536-2x1-1.webp';
import { ContactForm } from '../ContactForm';
import featureOne from '@/assets/Unified S/Untitled-design-2023-12-23T101940.389.webp';
import featureTwo from '@/assets/Unified S/Untitled-design-2023-12-23T104200.082.webp';
import featureThree from '@/assets/Unified S/Untitled-design-2023-12-23T104210.112.webp';

export function UnifiedSportsTurf() {
  return (
    <section className="animate-fade-in-up px-4 md:px-6 py-16 md:py-20">
      {/* Section Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
          Unified Sports Turf System
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Comprehensive sports &amp; outdoor turf solutions.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          As a leading enterprise in the industry,&nbsp;
          <span className="font-semibold">Sabaysis Sports &amp; Infra</span> is your go‑to partner for complete
          solutions catering to all sports surface requirements. We design and produce top‑notch artificial turf systems
          tailored for football, hockey, tennis, rugby, and multi‑sport activities.
        </p>
      </div>

      {/* Main two-column layout */}
      <div className="mt-12 md:mt-16 grid gap-10 md:gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
        {/* Left: hero + feature grid */}
        <div className="space-y-8">
          {/* Hero card */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-60 w-full overflow-hidden sm:h-72">
              <img
                src={unifiedMain}
                alt="Professional artificial turf field"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-emerald-300">
                  Sabaysis Sports &amp; Infra
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  Redefining outdoor spaces with exceptional artificial grass solutions.
                </h3>
              </div>
            </div>
          </div>

          {/* Our Core Features & Why Choose – as separate cards */}
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                Our Core Features
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>
                    <span className="font-semibold">Premium Materials</span> – high‑performance fibers and infill for
                    professional‑grade play.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>
                    <span className="font-semibold">Durability Assurance</span> – engineered to withstand intensive,
                    all‑weather usage.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>
                    <span className="font-semibold">Advanced Technology</span> – consistent ball roll, traction and
                    impact absorption.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>
                    <span className="font-semibold">Stringent Quality Control</span> – every layer tested for
                    resilience and safety.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                Why Choose Sabaysis
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>
                    <span className="font-semibold">Unrivaled Excellence</span> in artificial grass manufacturing.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>
                    <span className="font-semibold">Cutting‑Edge Technology</span> that pioneers the future of sports
                    infrastructure.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>
                    <span className="font-semibold">Tailored Brilliance</span> with unmatched customization for every
                    project.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>
                    <span className="font-semibold">Green Innovation</span> and eco‑friendly practices that redefine
                    landscaping.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>
                    <span className="font-semibold">Proven Leadership</span> and trusted partnerships across the
                    industry.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature image strip */}
          <div className="grid gap-4 md:gap-6 sm:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <img
                src={featureOne}
                alt="High performance sports turf"
                className="h-32 w-full object-cover sm:h-36"
                loading="lazy"
              />
              <div className="p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  High Performance
                </p>
                <p className="mt-1 text-xs text-slate-700">
                  Surfaces optimized for football, hockey, tennis, rugby &amp; multi‑sport.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <img
                src={featureTwo}
                alt="Eco friendly synthetic turf"
                className="h-32 w-full object-cover sm:h-36"
                loading="lazy"
              />
              <div className="p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Eco Friendly
                </p>
                <p className="mt-1 text-xs text-slate-700">
                  Reduced water usage, low maintenance and recyclable materials.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <img
                src={featureThree}
                alt="Urban turf installations"
                className="h-32 w-full object-cover sm:h-36"
                loading="lazy"
              />
              <div className="p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Urban Spaces
                </p>
                <p className="mt-1 text-xs text-slate-700">
                  Transforming city plazas, rooftops and schools into vibrant green zones.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: enquiry card */}
        <aside className="overflow-hidden rounded-3xl border border-emerald-600/25 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.40em] text-emerald-700">
            Transforming Urban Spaces
          </p>
          <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">
            Transform urban spaces with artificial turf solutions.
          </h3>
          <p className="mt-3 text-sm text-slate-600">
            Considering artificial turf for your city, institution, or sports facility? Discover innovative solutions to
            revitalize urban spaces and elevate aesthetics with tailored synthetic turf systems.
          </p>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-emerald-700">
            Contact us today to bring your vision to life.
          </p>

          <ContactForm initialSubject="Unified Sports Turf Inquiry" className="mt-6" />

          <p className="mt-4 text-xs text-slate-500">
            Our team will get back to you within 1–2 business days with tailored proposals for your project.
          </p>
        </aside>
      </div>
    </section>
  );
}