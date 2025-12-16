import { Link } from 'react-router-dom';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { useState, useRef } from 'react';
import ajarLogo from '../../assets/ajarlogo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const navItems = [
  { label: 'About', href: '/about' },
  {
    label: 'Service',
    description: 'Sports • Infrastructure',
    items: [
      { title: 'Box Cricket', body: 'Premium turf for intense matches.' },
      { title: 'Volleyball Court', body: 'Standard courts for pro play.' },
      { title: 'Basketball Court', body: 'High-quality flooring systems.' },
      { title: 'Pickleball Court', body: 'Trending racket sport surfacing.' },
      { title: 'Football Court', body: 'FIFA-standard artificial turf.' },
      { title: 'Paddleball Court', body: 'Durable courts for fast action.' },
      { title: 'Badminton Court', body: 'Shock-absorbing wooden floors.' },
      { title: 'Swimming Pool', body: 'Temperature-controlled pools.' },
      { title: 'Tennis Court', body: 'Acrylic, clay, and synth courts.' },
      { title: 'Multisport Tracks', body: 'All-weather athletic tracks.' },
    ],
  },
  {
    label: 'Products',
    description: 'Turf • Nets • Equipment',
    items: [
      { title: 'Sports Net', body: 'High-quality safety and practice nets.' },
      { title: 'Football Turf', body: 'Professional-grade football surfaces.' },
      { title: 'Cricket Turf', body: 'Durable turf for cricket pitches.' },
      { title: 'Artificial Grass', body: 'Lush, low-maintenance synthetic grass.' },
      { title: 'Landscape Turf', body: 'Aesthetic solutions for outdoor spaces.' },
      { title: 'Outdoor Gym', body: 'Robust fitness gear for parks.' },
      { title: 'Pitch Equipment', body: 'Essential gear for pitch maintenance.' },
    ],
  },
  { label: 'Maintenance', href: '/maintenance' },
  { label: 'Contact Us', href: '/contact-us' },
];

export function NavBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm text-slate-900 shadow-sm transition-all">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <div className="flex shrink-0 items-center">
          <Link to="/" className="flex items-center">
            <img
              src={ajarLogo}
              alt="AJAR "
              className="h-14 w-auto object-contain sm:h-12" 
            />
          </Link>
        </div>

        <div className="hidden h-full items-center gap-6 lg:flex">
          {navItems.map((item) =>
            item.items ? (
              <DropdownMenu
                key={item.label}
                open={activeMenu === item.label}
                onOpenChange={(open) => {
                  if (!open) handleMouseLeave();
                }}
                modal={false}
              >
                <div 
                  className="h-full flex items-center"
                  onMouseEnter={() => handleMouseEnter(item.label)} 
                  onMouseLeave={handleMouseLeave}
                >
                  <DropdownMenuTrigger asChild>
                    <button className="group inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-bold uppercase tracking-widest text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 focus:outline-none data-[state=open]:bg-slate-50 data-[state=open]:text-slate-900">
                      {item.label}
                      <ChevronDown className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </button>
                  </DropdownMenuTrigger>
                </div>
                <DropdownMenuContent
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                  align="center"
                  className="mt-2 w-[600px] border border-slate-200 bg-white p-4 shadow-xl animate-in fade-in-0 zoom-in-95"
                  sideOffset={0}
                >
                  <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2">
                    <DropdownMenuLabel className="text-sm font-bold text-slate-900">
                      {item.label}
                    </DropdownMenuLabel>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      {item.description}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {item.items.map((subItem) => (
                      <DropdownMenuItem
                        key={subItem.title}
                        asChild
                      >
                         <Link 
                            to="#" 
                            className="flex cursor-pointer flex-col items-start gap-0.5 rounded-lg p-3 outline-none transition-colors hover:bg-slate-50 focus:bg-slate-50"
                         >
                            <span className="text-sm font-semibold text-slate-900">
                              {subItem.title}
                            </span>
                            <span className="text-xs text-slate-500 line-clamp-1">
                              {subItem.body}
                            </span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.label}
                to={item.href || '#'}
                className="inline-flex items-center rounded-md px-3 py-2 text-xs font-bold uppercase tracking-widest text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* RIGHT SIDE ACTIONS */}
        <div className="hidden items-center gap-4 lg:flex">
          <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-700 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white">
            <Globe className="h-3.5 w-3.5" />
            Global
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="flex items-center gap-4 lg:hidden">
            <button className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-50">
              <Globe className="h-4 w-4" />
            </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-900 transition hover:bg-slate-50"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU CONTENT */}
      {isMobileOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-4 p-4">
            {navItems.map((item) =>
              item.items ? (
                <div key={item.label} className="space-y-2">
                  <p className="px-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                    {item.label}
                  </p>
                  <div className="grid grid-cols-1 gap-1 rounded-xl bg-slate-50 p-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={`${item.label}-${subItem.title}`}
                        to="#"
                        onClick={() => setIsMobileOpen(false)}
                        className="rounded-lg px-3 py-2 transition hover:bg-white hover:shadow-sm"
                      >
                        <p className="text-sm font-semibold text-slate-900">
                          {subItem.title}
                        </p>
                        <p className="text-xs text-slate-500">{subItem.body}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href || '#'}
                  onClick={() => setIsMobileOpen(false)}
                  className="block rounded-lg px-2 py-2 text-sm font-bold uppercase tracking-widest text-slate-900 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              )
            )}
             <div className="pt-4">
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-xs font-bold uppercase tracking-widest text-white">
                  <Globe className="h-4 w-4" />
                  Visit Global Site
                </button>
             </div>
          </nav>
        </div>
      )}
    </header>
  );
}