import { Link } from 'react-router-dom';
import { Target, Eye, Heart, ShieldCheck, Users, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    desc: 'We hold ourselves to the highest ethical standards. Trust is the foundation of every engagement.',
  },
  {
    icon: Target,
    title: 'Precision',
    desc: 'Thorough, methodical, and detail-oriented — we leave no stone unturned in securing your assets.',
  },
  {
    icon: Heart,
    title: 'Partnership',
    desc: 'Your security is our mission. We work alongside your team, not just as a vendor, but as a partner.',
  },
];

const milestones = [
  { year: 'Founded', text: 'Rynex Security established in Pakistan with a mission to make world-class cybersecurity accessible.' },
  { year: 'Growth', text: 'Expanded service offerings across VAPT, SOC, GRC, audits, and professional training.' },
  { year: 'Today', text: 'A trusted cybersecurity partner helping organizations detect, exploit, and secure their digital assets.' },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-neutral-950 py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px]" />
        <Reveal className="container-page relative z-10">
          <span className="text-xs font-mono text-brand-400 tracking-widest uppercase">About Us</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Securing what matters most
          </h1>
          <p className="mt-5 text-lg text-white/60 max-w-2xl leading-relaxed">
            Rynex Security is a Pakistan-based cybersecurity company built on a simple
            principle: to protect organizations, you must first understand how to breach them.
          </p>
        </Reveal>
      </section>

      {/* Mission & Vision */}
      <section className="surface py-20">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal variant="left">
              <div className="card border-l-4 border-l-brand-500 h-full hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-brand-400" />
                </div>
                <h2 className="text-xl font-bold mb-3">Our Mission</h2>
                <p className="text-muted leading-relaxed">
                  To empower organizations with the knowledge, tools, and expertise needed
                  to defend against evolving cyber threats — making enterprise-grade security
                  accessible to businesses of all sizes across Pakistan and beyond.
                </p>
              </div>
            </Reveal>
            <Reveal variant="right" delay={120}>
              <div className="card border-l-4 border-l-brand-500 h-full hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6 text-brand-400" />
                </div>
                <h2 className="text-xl font-bold mb-3">Our Vision</h2>
                <p className="text-muted leading-relaxed">
                  To become the most trusted name in cybersecurity across the region —
                  recognized for our offensive expertise, commitment to excellence, and
                  the success of the clients we protect.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="surface-alt py-20">
        <div className="container-page">
          <Reveal className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-mono text-brand-400 tracking-widest uppercase">Our Philosophy</span>
            <h2 className="section-title mt-3">Detect. Exploit. Secure.</h2>
            <p className="mt-5 text-muted leading-relaxed">
              These three words define everything we do. We <strong>detect</strong> threats
              and vulnerabilities before they can be exploited. We <strong>exploit</strong>{' '}
              weaknesses ourselves — ethically — to understand them fully. And we{' '}
              <strong>secure</strong> your organization with solutions that actually work in
              the real world, not just on paper.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="surface py-20">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-brand-400 tracking-widest uppercase">Our Values</span>
            <h2 className="section-title mt-3">What drives us forward</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 100}>
                <div className="card text-center h-full hover:-translate-y-1.5 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mx-auto mb-5 hover:scale-110 transition-transform">
                    <value.icon className="w-7 h-7 text-brand-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-strong leading-relaxed">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="surface-alt py-20">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-brand-400 tracking-widest uppercase">Our Journey</span>
            <h2 className="section-title mt-3">How we got here</h2>
          </Reveal>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 120}>
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-brand-500 text-black flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {i + 1}
                      </div>
                      {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-brand-500/20 mt-2" />}
                    </div>
                    <div className="pb-8">
                      <h3 className="font-bold text-lg mb-1">{m.year}</h3>
                      <p className="text-muted leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-neutral-900 py-16">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, value: 'Expert Team', label: 'Security Professionals' },
              { icon: Award, value: '5+', label: 'Service Areas' },
              { icon: ShieldCheck, value: '24/7', label: 'Monitoring & Response' },
              { icon: CheckCircle2, value: '100%', label: 'Client Commitment' },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="hover:scale-105 transition-transform duration-300">
                  <s.icon className="w-8 h-8 text-brand-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-white/40 mt-1">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="surface py-20">
        <Reveal className="container-page text-center">
          <h2 className="text-3xl font-bold tracking-tight">Want to learn more?</h2>
          <p className="mt-3 text-muted max-w-lg mx-auto">
            Explore our services or reach out for a free consultation.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link to="/services" className="btn-primary hover:scale-105 transition-transform">
              Our Services
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-outline">Get in Touch</Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
