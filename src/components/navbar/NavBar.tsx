import { Link } from 'react-router-dom';
import { ChevronDown, Globe, Menu } from 'lucide-react';
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
  { label: 'Home', href: '/' },
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
      { title: 'Multisport & Running Tracks', body: 'All-weather athletic tracks.' },
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
      { title: 'Outdoor Gym Equipment', body: 'Robust fitness gear for parks.' },
      { title: 'Cricket Pitch Equipments', body: 'Essential gear for pitch maintenance.' },
    ],
  },
  { label: 'Maintenance', href: '/maintenance' },
  { label: 'Contact Us', href: '/contact-us' },
];

export function NavBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
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
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white text-slate-900 shadow-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-6 px-4 py-4">
        <div className="flex flex-1 justify-start">
          <img src={ajarLogo} alt="AJAR Growth Collective" className="h-12 w-auto object-contain" />
        </div>

        <div className="hidden flex-1 items-center justify-center gap-4 lg:flex">
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
                <div onMouseEnter={() => handleMouseEnter(item.label)} onMouseLeave={handleMouseLeave}>
                  <DropdownMenuTrigger asChild>
                    <button className="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900">
                      {item.label}
                      <ChevronDown className="h-3 w-3" />
                    </button>
                  </DropdownMenuTrigger>
                </div>
                <DropdownMenuContent
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                  align="center"
                  className="w-[40rem] border border-slate-200 bg-white p-2 text-slate-900 shadow-2xl"
                  sideOffset={8}
                >
                  <DropdownMenuLabel className="mb-1">{item.description}</DropdownMenuLabel>
                  <DropdownMenuSeparator className="mb-2" />
                  <div className="grid grid-cols-2 gap-2">
                    {item.items.map((subItem) => (
                      <DropdownMenuItem
                        key={subItem.title}
                        className="flex flex-col items-start gap-1 rounded-lg border border-transparent px-3 py-2 text-slate-700 hover:border-slate-200 hover:bg-slate-50 focus:bg-slate-50 focus:text-slate-900"
                      >
                        <span className="text-sm font-semibold tracking-wide text-slate-900">
                          {subItem.title}
                        </span>
                        <span className="text-xs text-slate-500">{subItem.body}</span>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.label}
                to={item.href || '#'}
                className="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden flex-1 items-center justify-end lg:flex">
          <button className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:border-slate-900 hover:bg-slate-50">
            <Globe className="h-3.5 w-3.5" />
            Global
          </button>
        </div>

        <div className="flex flex-1 items-center justify-end gap-3 lg:hidden">
          <button className="rounded-full border border-slate-300 p-2 text-slate-900">
            <Globe className="h-4 w-4" />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="rounded-full border border-slate-300 p-2 text-slate-900">
                <Menu className="h-5 w-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-64 space-y-2 border border-slate-200 bg-white text-slate-900 shadow-2xl"
            >
              {navItems.map((item, index) =>
                item.items ? (
                  <div key={item.label}>
                    <DropdownMenuLabel className="text-[11px] text-slate-500">
                      {item.label}
                    </DropdownMenuLabel>
                    {item.items.map((subItem) => (
                      <DropdownMenuItem
                        key={`${item.label}-${subItem.title}`}
                        className="flex flex-col items-start gap-1 rounded-lg border border-transparent px-3 py-3 text-slate-700 hover:border-slate-200 hover:bg-slate-50 focus:bg-slate-50 focus:text-slate-900"
                      >
                        <span className="text-sm font-semibold text-slate-900">
                          {subItem.title}
                        </span>
                        <span className="text-xs text-slate-500">{subItem.body}</span>
                      </DropdownMenuItem>
                    ))}
                    {index !== navItems.length - 1 && <DropdownMenuSeparator />}
                  </div>
                ) : (
                  <div key={item.label}>
                    <DropdownMenuItem asChild>
                      <Link
                        to={item.href || '#'}
                        className="flex w-full items-center rounded-lg border border-transparent px-3 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-900 hover:bg-slate-50"
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                    {index !== navItems.length - 1 && <DropdownMenuSeparator />}
                  </div>
                )
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}