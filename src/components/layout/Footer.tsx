import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube } from 'lucide-react';
import footerLogo from '../../assets/whiteLogo.png';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 lg:flex-row lg:items-start lg:justify-between">
        {/* Left: Brand & socials */}
        <div className="space-y-4 lg:max-w-sm">
          <div className="flex items-center gap-3">
            <img
              src={footerLogo}
              alt="Sabaysis Sports & Infra"
              className="h-16 w-16 object-contain"
            />
            <h2 className="text-lg font-semibold tracking-tight text-white">
              Sabaysis Sports &amp; Infra
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Premium artificial grass, sports infrastructure, and maintenance solutions engineered
            for performance, safety, and long-term value.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-100 transition hover:border-emerald-400 hover:text-emerald-300"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-100 transition hover:border-emerald-400 hover:text-emerald-300"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-100 transition hover:border-emerald-400 hover:text-emerald-300"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Middle: Quick links & contact info */}
        <div className="grid flex-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Quick Links
            </h3>
            <nav className="mt-4 space-y-2 text-sm">
              <Link to="/" className="block text-slate-100 transition hover:text-emerald-300">
                Home
              </Link>
              <Link to="/about" className="block text-slate-100 transition hover:text-emerald-300">
                About Us
              </Link>
              <a href="#" className="block text-slate-100 transition hover:text-emerald-300">
                Projects
              </a>
              <Link
                to="/maintenance"
                className="block text-slate-100 transition hover:text-emerald-300"
              >
                Maintenance
              </Link>
              <Link
                to="/contact-us"
                className="block text-slate-100 transition hover:text-emerald-300"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Contact Information
            </h3>
            <dl className="mt-4 space-y-3 text-sm text-slate-100">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Address
                </dt>
                <dd className="mt-1">
                  Tiwari Quarters, Phase 2, Kesharganj,
                  <br />
                  Meerut, Uttar Pradesh 250001
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Hours
                </dt>
                <dd className="mt-1">9 am - 9 pm</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a href="tel:+919897053591" className="text-emerald-300 hover:underline">
                    +91 98970 53591
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href="mailto:support@sabaysissports.com"
                    className="break-all text-emerald-300 hover:underline"
                  >
                    support@sabaysissports.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-[11px] text-slate-500 sm:flex-row">
          <p>
            © Copyright 2023 – Sabaysis Sports &amp; Infra | Design and Develop by{' '}
            <a
              href="https://www.justcharge.in/"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-300 hover:underline"
            >
              Just Charge
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}


