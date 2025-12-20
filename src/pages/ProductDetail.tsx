import { Link, useParams } from 'react-router-dom';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '@/config/api';

type ProductItem = {
  slug: string;
  title: string;
  body: string;
};

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<ProductItem | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`${API_ENDPOINTS.PRODUCTS}/${slug}`);
        if (res.ok) {
          const data = await res.json();
          setProduct(data);
        } else {
          setProduct(undefined);
        }
      } catch (error) {
        console.error("Failed to fetch product", error);
        setProduct(undefined);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchProduct();
    } else {
      setLoading(false);
    }
  }, [slug]);

  usePageTitle(product ? `${product.title} Product` : 'Product not found');

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

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
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-800 min-h-[48px] min-w-[160px]"
            >
              Back to Home
            </Link>
            <Link
              to="/#products"
              className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:border-slate-900 hover:bg-slate-50 min-h-[48px] min-w-[160px]"
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
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 md:px-6 py-16 md:py-20">
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
        <section className="grid gap-12 md:grid-cols-[3fr,2fr] md:items-start">
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
              to={`/contact-us?product=${encodeURIComponent(product.title)}`}
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-emerald-500 min-h-[48px] min-w-[180px]"
            >
              Request&nbsp;quote
            </Link>
          </aside>
        </section>
      </main>
    </div>
  );
}


