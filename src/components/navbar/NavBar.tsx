import { Link } from 'react-router-dom';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { useState, useRef } from 'react';
import ajarLogo from '../../assets/ajarlogo.png';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

import { services, products } from '@/data/catalog';

/* ---------------- TYPES ---------------- */

type NavSubItem = {
  title: string;
  body: string;
  slug: string;
};

type NavItem =
  | {
      label: string;
      href: string;
    }
  | {
      label: string;
      description: string;
      basePath: string;
      items: NavSubItem[];
    };

/* ---------------- DATA ---------------- */

const serviceNavItems: NavSubItem[] = services.map((s) => ({
  title: s.title,
  body: s.body,
  slug: s.slug,
}));

const productNavItems: NavSubItem[] = products.map((p) => ({
  title: p.title,
  body: p.body,
  slug: p.slug,
}));

const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    description: 'Sports • Infrastructure',
    basePath: '/services',
    items: serviceNavItems,
  },
  {
    label: 'Products',
    description: 'Turf • Nets • Equipment',
    basePath: '/products',
    items: productNavItems,
  },
  { label: 'Maintenance', href: '/maintenance' },
  { label: 'Contact', href: '/contact-us' },
];

/* ---------------- COMPONENT ---------------- */

export function NavBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 120);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-8">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={ajarLogo}
            alt="AJAR"
            className="h-11 w-auto object-contain lg:h-14"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) =>
            'items' in item ? (
              <DropdownMenu
                key={item.label}
                open={activeMenu === item.label}
                onOpenChange={(open) => !open && handleMouseLeave()}
                modal={false}
              >
                <div
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <DropdownMenuTrigger asChild>
                    <button className="group inline-flex items-center gap-2 px-5 py-3 font-heading text-[13px] font-semibold uppercase tracking-wide text-slate-700 transition hover:text-emerald-600 min-h-[44px]">
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform group-data-[state=open]:rotate-180" />
                    </button>
                  </DropdownMenuTrigger>
                </div>

                <DropdownMenuContent
                  align="center"
                  sideOffset={8}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                  className="w-[640px] rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl animate-in fade-in zoom-in-95"
                >
                  <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                    <DropdownMenuLabel className="font-heading text-sm font-bold uppercase tracking-wider text-slate-900">
                      {item.label}
                    </DropdownMenuLabel>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {item.description}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {item.items.map((subItem) => (
                      <DropdownMenuItem key={subItem.title} asChild>
                        <Link
                          to={`${item.basePath}/${subItem.slug}`}
                          className="group rounded-xl p-5 transition hover:bg-emerald-50 min-h-[80px] flex flex-col justify-center"
                        >
                          <p className="font-heading text-sm font-semibold text-slate-900 group-hover:text-emerald-700">
                            {subItem.title}
                          </p>
                          <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                            {subItem.body}
                          </p>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="px-5 py-3 font-heading text-[13px] font-semibold uppercase tracking-wide text-slate-700 transition hover:text-emerald-600 min-h-[44px] inline-flex items-center"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* RIGHT ACTION */}
        <div className="hidden lg:flex">
          <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-emerald-600 min-h-[44px] min-w-[120px] justify-center">
            <Globe className="h-4 w-4" />
            Global
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 lg:hidden min-h-[44px] min-w-[44px]"
          onClick={() => setIsMobileOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="space-y-6 p-5">
            {navItems.map((item) =>
              'items' in item ? (
                <div key={item.label}>
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                    {item.label}
                  </p>
                  <div className="space-y-1 rounded-xl bg-slate-50 p-2">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.slug}
                        to={`${item.basePath}/${sub.slug}`}
                        onClick={() => setIsMobileOpen(false)}
                        className="block rounded-lg px-4 py-3.5 text-sm font-semibold text-slate-900 hover:bg-white min-h-[44px] flex items-center"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block rounded-xl px-4 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-900 hover:bg-slate-50 min-h-[44px] flex items-center"
                >
                  {item.label}
                </Link>
              )
            )}

            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg min-h-[44px]">
              <Globe className="h-4 w-4" />
              Visit Global Site
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
