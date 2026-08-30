import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: MessageCircle, label: 'Discord', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
];

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Events', path: '/events' },
      { label: 'Careers', path: '/careers' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'VAPT', path: '/services' },
      { label: 'SOC', path: '/services' },
      { label: 'GRC', path: '/services' },
      { label: 'Security Audits', path: '/services' },
      { label: 'Training', path: '/services' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact Us', path: '/contact' },
      { label: 'Internship', path: '/careers' },
      { label: 'Events', path: '/events' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img src="/logo1 copy 3.png" alt="Rynex Security logo" className="h-8 w-8 object-contain" />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-lg tracking-tight">RYNEX</span>
                <span className="text-[10px] font-mono text-brand-500 tracking-widest">SECURITY</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Detect. Exploit. Secure. — Pakistan-based cybersecurity firm protecting
              businesses through proactive defense, assessment, and training.
            </p>
            <div className="space-y-2 text-sm">
              <a href="mailto:info@rynexsecurity.com" className="flex items-center gap-2 text-white/60 hover:text-brand-400 transition-colors">
                <Mail className="w-4 h-4" />
                info@rynexsecurity.com
              </a>
              <a href="tel:03272873812" className="flex items-center gap-2 text-white/60 hover:text-brand-400 transition-colors">
                <Phone className="w-4 h-4" />
                0327 2873812
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm mb-4 text-white/90">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/50 hover:text-brand-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Rynex Security. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-brand-500 hover:border-brand-500 hover:text-black transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
