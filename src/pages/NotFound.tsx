import { Link } from 'react-router-dom';
import { usePageTitle } from '@/hooks/usePageTitle';

export function NotFound() {
  usePageTitle('Page not found');
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
        The page you are looking for doesn&apos;t exist or may have been moved. Use the navigation
        above or return to the homepage to continue exploring Sabaysis Sports &amp; Infra.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center rounded-full bg-slate-900 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-800"
        >
          Go to Home
        </Link>
        <Link
          to="/contact-us"
          className="inline-flex items-center rounded-full border border-slate-300 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:border-slate-900 hover:bg-slate-50"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}


