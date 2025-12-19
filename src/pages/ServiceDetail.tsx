import { Link, useParams } from 'react-router-dom';
import { getServiceBySlug } from '@/data/catalog';
import { getServiceDetailBySlug } from '@/data/servicesdetail';
import { usePageTitle } from '@/hooks/usePageTitle';

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const serviceDetail = slug ? getServiceDetailBySlug(slug) : undefined;

  usePageTitle(service ? `${service.title} Service` : 'Service not found');

  if (!service) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-slate-50 px-4 py-16">
        <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-emerald-700">
            Service
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
            Service not found
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            We couldn&apos;t find the service you were looking for. Please check the link or explore all our available
            sports and infrastructure services.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-emerald-500 min-h-[48px] min-w-[160px]"
            >
              Back to Home
            </Link>
            <Link
              to="/#services"
              className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:border-slate-900 hover:bg-slate-50 min-h-[48px] min-w-[160px]"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Special layout for services with detailed data
  if (serviceDetail) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        {/* Top Banner */}
        <section className="relative w-full overflow-hidden bg-slate-900">
          {serviceDetail.bannerImage && (
            <div
              className="absolute inset-0 h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url('${serviceDetail.bannerImage}')`,
              }}
            />
          )}
          <div className="absolute inset-0 bg-slate-900/70" />
          <div className="relative z-10 mx-auto flex min-h-[260px] w-full max-w-6xl flex-col justify-center px-4 py-10 text-white md:min-h-[320px] md:py-16 lg:min-h-[380px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-300">
              Sabaysis Sports &amp; Infra
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              {serviceDetail.bannerTitle}
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-white/80 md:text-base">
              {service.body}
            </p>
          </div>
        </section>

        <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 md:px-6 py-16 md:py-20">
          {/* Breadcrumb + meta */}
          <section className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6 text-xs text-slate-500">
            <div className="flex flex-wrap items-center gap-2">
              <Link to="/" className="hover:text-slate-900">
                Home
              </Link>
              <span>/</span>
              <Link to="/#services" className="hover:text-slate-900">
                Services
              </Link>
              <span>/</span>
              <span className="font-semibold text-slate-900">{service.title}</span>
            </div>
            <p className="uppercase tracking-[0.25em] text-emerald-700">Service Detail</p>
          </section>

          {/* Welcome Section */}
          <section className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              {serviceDetail.welcomeText}
            </p>
          </section>

          {/* Why Choose Our (if exists) */}
          {serviceDetail.whyChooseOurTitle && serviceDetail.whyChooseOurItems && (
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                {serviceDetail.whyChooseOurTitle}
              </h2>
              <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                {serviceDetail.whyChooseOurItems.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-md"
                  >
                    <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Services Features */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                {serviceDetail.servicesTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                {serviceDetail.servicesDescription}
              </p>
            </div>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              {serviceDetail.features.map((feature, index) => (
                <article
                  key={index}
                  className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-md ${index === serviceDetail.features.length - 1 && serviceDetail.features.length % 2 === 1
                    ? 'md:col-span-2'
                    : ''
                    }`}
                >
                  <h3 className="text-base font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Types (if exists) */}
          {serviceDetail.typesTitle && serviceDetail.typesItems && (
            <section className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  {serviceDetail.typesTitle}
                </h2>
              </div>
              <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                {serviceDetail.typesItems.map((type, index) => (
                  <article
                    key={index}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-md"
                  >
                    <h3 className="text-base font-semibold text-slate-900">{type.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{type.description}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Why Choose Sabaysis / Company Why */}
          <section className="grid gap-12 md:grid-cols-[3fr,2fr] md:items-start">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                {serviceDetail.companyWhyTitle || serviceDetail.whyChooseTitle}
              </h2>
              <div className="space-y-4">
                {(serviceDetail.companyWhyItems || serviceDetail.whyChooseItems).map((item, index) => (
                  <div key={index} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                Work with Sabaysis
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Ready to build or upgrade your <span className="font-semibold">{service.title}</span>{' '}
                facility? Our experts will help you plan, design, and execute a solution tailored to your requirements.
              </p>
              <div className="space-y-2 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Talk to our team</p>
                <p>Call us at +91 98970 53591 or send your project details through our contact form.</p>
              </div>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-emerald-500"
              >
                Enquire now
              </Link>
            </aside>
          </section>
        </main>
      </div>
    );
  }

  // Default layout for other services
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 md:px-6 py-16 md:py-20">
        {/* Hero */}
        <section className="space-y-4 border-b border-slate-200 pb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-emerald-700">
            Service
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            {service.title}
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            {service.body}{' '}
            This service is part of our specialised sports and infrastructure offerings at Sabaysis Sports &amp; Infra,
            designed to deliver durable, high-performance play areas for schools, clubs, and commercial venues.
          </p>
        </section>

        {/* Details */}
        <section className="grid gap-12 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-slate-900">
              What&apos;s included in this service
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-700">
              <li>
                <span className="font-semibold text-emerald-700">Site assessment &amp; planning:</span>{' '}
                We evaluate your space, usage patterns, and performance needs to propose the right system and layout.
              </li>
              <li>
                <span className="font-semibold text-emerald-700">High-quality materials:</span> All surfaces and
                components are sourced to meet strict durability and safety standards for intense sports usage.
              </li>
              <li>
                <span className="font-semibold text-emerald-700">Professional installation:</span>{' '}
                Our field teams ensure proper base preparation, levelling, drainage, and finishing for long-lasting
                performance.
              </li>
              <li>
                <span className="font-semibold text-emerald-700">After‑care &amp; guidance:</span>{' '}
                We provide maintenance guidance and can design a customised upkeep plan to keep your facility
                match‑ready.
              </li>
            </ul>
          </div>

          <aside className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Work with Sabaysis
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Ready to build or upgrade your <span className="font-semibold">{service.title}</span>{' '}
              facility? Our experts will help you plan, design, and execute a solution tailored to your requirements.
            </p>
            <div className="space-y-2 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Talk to our team</p>
              <p>Call us at +91 98970 53591 or send your project details through our contact form.</p>
            </div>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-emerald-500 min-h-[48px] min-w-[160px]"
            >
              Enquire now
            </Link>
          </aside>
        </section>
      </main>
    </div>
  );
}

