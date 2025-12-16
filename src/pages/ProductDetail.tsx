import { Link, useParams } from 'react-router-dom';
import { getProductBySlug } from '@/data/catalog';
import { usePageTitle } from '@/hooks/usePageTitle';

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  usePageTitle(product ? `${product.title} Product` : 'Product not found');

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-lg text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">
            Product
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
            Product not found
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            We couldn&apos;t find the product you were looking for. Please check the link or browse
            our full range of sports and infrastructure products.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center rounded-full bg-slate-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-800"
            >
              Back to Home
            </Link>
            <Link
              to="/#products"
              className="inline-flex items-center rounded-full border border-slate-300 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:border-slate-900 hover:bg-slate-50"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16">
        {/* Hero */}
        <section className="space-y-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-emerald-700">
            Product
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            {product.title}
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            {product.body}{' '}
            Engineered by Sabaysis Sports &amp; Infra, this product is designed for long-lasting
            performance, safety, and low maintenance in demanding sports and outdoor environments.
          </p>
        </section>

        {/* Details */}
        <section className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-slate-900">Key specifications</h2>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-700">
              <li>
                <span className="font-semibold text-emerald-700">High performance materials:</span>{' '}
                Manufactured with quality components to withstand intensive use and varying weather
                conditions.
              </li>
              <li>
                <span className="font-semibold text-emerald-700">Safety and compliance:</span> Meets
                relevant industry guidelines for player safety, durability, and surface performance.
              </li>
              <li>
                <span className="font-semibold text-emerald-700">Custom configuration:</span> Can be
                tailored in size, specification, and design to fit your venue and play requirements.
              </li>
              <li>
                <span className="font-semibold text-emerald-700">Installation &amp; support:</span>{' '}
                We offer professional installation and guidance on upkeep to maximise product life.
              </li>
            </ul>
          </div>

          <aside className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50/80 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Need this product?
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Share your project details and we&apos;ll help you size and configure{' '}
              <span className="font-semibold">{product.title}</span> for your facility.
            </p>
            <div className="space-y-2 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Speak to a specialist</p>
              <p>Call +91 98970 53591 or send us a message to receive a customised proposal.</p>
            </div>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-emerald-500"
            >
              Request&nbsp;quote
            </Link>
          </aside>
        </section>
      </main>
    </div>
  );
}


