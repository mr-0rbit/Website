import { Link } from 'react-router-dom';
import {
  ShieldCheck, ShieldAlert, Bug, Server, FileCheck,
  GraduationCap, ArrowRight, Lock, Terminal, Activity, Zap,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import SecurityVisual from '@/components/SecurityVisual';

const services = [
  {
    icon: Bug,
    title: 'VAPT',
    desc: 'Vulnerability Assessment & Penetration Testing — find and fix weaknesses before attackers do.',
  },
  {
    icon: Activity,
    title: 'SOC',
    desc: 'Security Operations Center with 24/7 monitoring, threat detection, and incident response.',
  },
  {
    icon: FileCheck,
    title: 'GRC',
    desc: 'Governance, Risk & Compliance — align your organization with industry standards and regulations.',
  },
  {
    icon: ShieldCheck,
    title: 'Security Audits',
    desc: 'Comprehensive security audits to evaluate your infrastructure, policies, and controls.',
  },
  {
    icon: GraduationCap,
    title: 'Cyber Training',
    desc: 'Hands-on cybersecurity training programs for teams and individuals at every level.',
  },
];

const stats = [
  { value: '50+', label: 'Vulnerabilities Found' },
  { value: '24/7', label: 'Monitoring' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '5+', label: 'Service Areas' },
];

const features = [
  {
    icon: Terminal,
    title: 'Offensive Expertise',
    desc: 'Our team thinks like attackers — we exploit weaknesses to build stronger defenses.',
  },
  {
    icon: Lock,
    title: 'Defense in Depth',
    desc: 'Layered security strategies that protect every entry point of your organization.',
  },
  {
    icon: Zap,
    title: 'Rapid Response',
    desc: 'Fast identification and containment of threats to minimize business impact.',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black dark:bg-neutral-950">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-brand-700/10 rounded-full blur-[120px]" />

        <div className="container-page relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-mono mb-6 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                CYBER SECURITY SOLUTIONS — PAKISTAN
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight animate-fade-up">
                Detect. Exploit.{' '}
                <span className="text-brand-500">Secure.</span>
              </h1>

              <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-lg animate-fade-up" style={{ animationDelay: '0.1s' }}>
                Rynex Security delivers enterprise-grade cybersecurity services — from
                penetration testing to 24/7 monitoring — helping businesses across Pakistan
                stay ahead of evolving threats.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <Link to="/services" className="btn-primary">
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-outline !text-white !border-white/20 hover:!border-brand-500 hover:!text-brand-500">
                  Get a Quote
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl sm:text-3xl font-bold text-brand-500">{stat.value}</div>
                    <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3D Security Visual */}
            <div className="hidden lg:flex justify-center">
              <SecurityVisual />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent" />
      </section>

      {/* Tagline Banner */}
      <section className="surface py-16">
        <div className="container-page">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
            {['Detect', 'Exploit', 'Secure'].map((word, i) => (
              <div key={word} className="flex items-center gap-8 md:gap-16">
                <Reveal delay={i * 120} className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                    {[ShieldCheck, ShieldAlert, ShieldCheck][i] && (
                      (() => {
                        const Icon = [ShieldCheck, ShieldAlert, ShieldCheck][i];
                        return <Icon className="w-7 h-7 text-brand-600 dark:text-brand-400" />;
                      })()
                    )}
                  </div>
                  <span className="text-xl font-bold tracking-tight">{word}</span>
                </Reveal>
                {i < 2 && <span className="text-brand-400 text-2xl font-light hidden md:block">.</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="surface-alt py-20">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-brand-600 dark:text-brand-400 tracking-widest uppercase">What We Do</span>
            <h2 className="section-title mt-3">Our Core Services</h2>
            <p className="mt-4 text-muted">
              Comprehensive cybersecurity solutions designed to protect, detect, and respond
              to threats across your entire digital infrastructure.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 80}>
                <div className="card group h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-brand-600 dark:text-brand-400 group-hover:text-black transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-strong leading-relaxed">{service.desc}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={services.length * 80}>
              <Link to="/services" className="card group flex flex-col items-center justify-center text-center border-dashed h-full hover:scale-[1.02] transition-transform">
                <ArrowRight className="w-8 h-8 text-brand-500 mb-3 group-hover:translate-x-1 transition-transform" />
                <span className="font-semibold text-sm">View All Services</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="surface py-20">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="text-xs font-mono text-brand-600 dark:text-brand-400 tracking-widest uppercase">Why Rynex</span>
              <h2 className="section-title mt-3">Security built on offensive mindset</h2>
              <p className="mt-4 text-muted leading-relaxed">
                We don't just check boxes. Our team approaches every engagement with an
                attacker's perspective — uncovering real risks, not just theoretical ones.
                That's the difference between compliance and true security.
              </p>

              <div className="mt-8 space-y-5">
                {features.map((feature, i) => (
                  <Reveal key={feature.title} delay={i * 100}>
                    <div className="flex gap-4 p-4 rounded-xl hover:bg-brand-50 dark:hover:bg-white/5 transition-colors duration-300">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <feature.icon className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-strong leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative">
                <div className="absolute inset-0 grid-bg rounded-3xl opacity-30" />
                <div className="relative bg-black dark:bg-neutral-900 rounded-3xl p-8 overflow-hidden hover:shadow-2xl hover:shadow-brand/10 transition-shadow duration-500">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/20 rounded-full blur-[80px]" />
                  <div className="relative font-mono text-sm space-y-2">
                    <div className="flex items-center gap-2 text-white/40 mb-4">
                      <span className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-500/70" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                        <span className="w-3 h-3 rounded-full bg-green-500/70" />
                      </span>
                      <span className="ml-2 text-xs">rynex@security:~$</span>
                    </div>
                    <div className="text-brand-400">$ rynex scan --target enterprise</div>
                    <div className="text-white/50">[+] Initializing vulnerability scan...</div>
                    <div className="text-white/50">[+] Checking open ports...</div>
                    <div className="text-white/50">[+] Enumerating services...</div>
                    <div className="text-yellow-400">[!] 3 medium vulnerabilities detected</div>
                    <div className="text-red-400">[!] 1 critical vulnerability detected</div>
                    <div className="text-brand-400">[+] Generating report...</div>
                    <div className="text-green-400">[+] Scan complete. Report saved.</div>
                    <div className="flex items-center text-white/40 mt-2">
                      <span>$</span>
                      <span className="ml-2 w-2 h-4 bg-brand-500 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black dark:bg-neutral-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/10 rounded-full blur-[120px]" />
        <Reveal className="container-page relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to secure your organization?
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Get in touch for a free consultation. Our team will help you identify your
            most critical security gaps and build a plan to close them.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary hover:scale-105 transition-transform">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/careers" className="btn-outline !text-white !border-white/20 hover:!border-brand-500 hover:!text-brand-500">
              Join Our Internship Program
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
