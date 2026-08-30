import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Events', path: '/events' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setScrolled(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-900/90 backdrop-blur-md border-b border-white/10 shadow-sm'
          : 'bg-neutral-950'
      }`}
    >
      <nav
        className="container-page flex items-center justify-between h-16 sm:h-20 text-white"
      >
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white/5 transition-transform group-hover:scale-105">
            <img src="/logo1 copy 3.png" alt="Rynex Security logo" className="h-8 w-8 object-contain" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-lg tracking-tight">RYNEX</span>
            <span className="text-[10px] font-mono text-brand-400 tracking-widest">SECURITY</span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-brand-400 bg-brand-500/10'
                    : 'opacity-80 hover:opacity-100 hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden md:inline-flex btn-primary !py-2.5 !px-5 text-sm">
            Get a Quote
          </Link>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors hover:bg-white/10`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="container-page py-4 space-y-1 bg-neutral-900/95 backdrop-blur-md border-t border-white/10">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-brand-400 bg-brand-500/10'
                    : 'text-white/70 hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="btn-primary w-full mt-2 text-sm">
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
