import { Link } from 'react-router-dom';
import {
  Bug, Activity, FileCheck, ShieldCheck, GraduationCap,
  ArrowRight, CheckCircle2, Server, Lock, Network, Database, Cloud,
} from 'lucide-react';
import Reveal from '@/components/Reveal';

const services = [
  {
    icon: Bug,
    title: 'VAPT',
    subtitle: 'Vulnerability Assessment & Penetration Testing',
    desc: 'Our flagship service. We simulate real-world attacks against your systems, applications, and networks to uncover vulnerabilities — then provide actionable remediation guidance.',
    features: ['Web Application Testing', 'Network Penetration Testing', 'Mobile App Security', 'API Security Testing', 'Wireless Network Assessment', 'Social Engineering'],
  },
  {
    icon: Activity,
    title: 'SOC',
    subtitle: 'Security Operations Center',
    desc: 'Round-the-clock monitoring and threat detection. Our SOC team watches your environment 24/7, identifying and responding to security incidents before they escalate.',
    features: ['24/7 Threat Monitoring', 'SIEM Implementation', 'Incident Response', 'Threat Intelligence', 'Log Management & Analysis', 'Security Alerting'],
  },
  {
    icon: FileCheck,
    title: 'GRC',
    subtitle: 'Governance, Risk & Compliance',
    desc: 'Align your organization with industry standards and regulatory frameworks. We help you build policies, assess risk, and maintain compliance with confidence.',
    features: ['Risk Assessment', 'Policy Development', 'Compliance Frameworks', 'ISO 27001, SOC 2', 'Data Privacy (GDPR, PDPA)', 'Security Governance'],
  },
  {
    icon: ShieldCheck,
    title: 'Security Audits',
    subtitle: 'Comprehensive Security Assessments',
    desc: 'Deep-dive evaluations of your infrastructure, policies, and controls. We identify gaps and provide a clear roadmap to strengthen your security posture.',
    features: ['Infrastructure Audits', 'Policy & Procedure Review', 'Access Control Assessment', 'Configuration Reviews', 'Gap Analysis', 'Security Roadmaps'],
  },
  {
    icon: GraduationCap,
    title: 'Cyber Security Training',
    subtitle: 'Professional Training Programs',
    desc: 'Hands-on, practical training that builds real skills. From beginner to advanced, our programs equip your team with the knowledge to defend your organization.',
    features: ['Ethical Hacking Basics', 'Advanced Penetration Testing', 'SOC Analyst Training', 'Security Awareness', 'Custom Workshops', 'Internship Programs'],
  },
];

const process = [
  { step: '01', title: 'Assess', desc: 'We evaluate your current security posture and identify key areas of concern.' },
  { step: '02', title: 'Test', desc: 'Our team conducts thorough testing and analysis to uncover real vulnerabilities.' },
  { step: '03', title: 'Report', desc: 'You receive a detailed report with findings, risk ratings, and remediation steps.' },
  { step: '04', title: 'Secure', desc: 'We help you implement fixes and verify that your security gaps are closed.' },
];

const capabilities = [
  { icon: Server, label: 'Infrastructure' },
  { icon: Cloud, label: 'Cloud Environments' },
  { icon: Network, label: 'Networks' },
  { icon: Database, label: 'Databases' },
  { icon: Lock, label: 'Applications' },
  { icon: Bug, label: 'Web Apps' },
  { icon: ShieldCheck, label: 'Endpoints' },
  { icon: Activity, label: 'Operations' },
];

const quickNav = [
  { icon: Bug, label: 'VAPT' },
  { icon: Activity, label: 'SOC' },
  { icon: FileCheck, label: 'GRC' },
  { icon: ShieldCheck, label: 'Audits' },
  { icon: GraduationCap, label: 'Training' },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-black dark:bg-neutral-950 py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px]" />
        <div className="container-page relative z-10">
          <span className="text-xs font-mono text-brand-500 tracking-widest uppercase">Our Services</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Comprehensive cybersecurity services
          </h1>
          <p className="mt-5 text-lg text-white/60 max-w-2xl leading-relaxed">
            From penetration testing to 24/7 monitoring, we offer the full spectrum of
            security services to protect your organization at every layer.
          </p>
        </div>
      </section>

      {/* Service Areas Quick Nav */}
      <section className="surface py-12 border-b border-soft">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {quickNav.map((item, i) => (
              <Reveal key={item.label} delay={i * 60}>
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-brand-50 dark:hover:bg-white/5 hover:scale-105 transition-all cursor-default">
                  <item.icon className="w-7 h-7 text-brand-600 dark:text-brand-400" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="surface-alt py-20">
        <div className="container-page space-y-20">
          {services.map((service, idx) => (
            <Reveal key={service.title} delay={idx * 60}>
              <div
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
                className={`grid lg:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center mb-5 hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{service.title}</h2>
                  <p className="text-sm font-mono text-brand-600 dark:text-brand-400 mt-1">{service.subtitle}</p>
                  <p className="mt-5 text-muted leading-relaxed">{service.desc}</p>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="card hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-soft">What's Included</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2.5 hover:translate-x-1 transition-transform">
                          <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0" />
                          <span className="text-sm text-muted">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="surface py-20">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-brand-600 dark:text-brand-400 tracking-widest uppercase">How We Work</span>
            <h2 className="section-title mt-3">Our engagement process</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 100}>
                <div className="relative hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-5xl font-bold text-brand-100 dark:text-brand-500/20">{p.step}</div>
                  <h3 className="text-lg font-bold mt-2 mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-strong leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="surface-alt py-20">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-brand-600 dark:text-brand-400 tracking-widest uppercase">Coverage</span>
            <h2 className="section-title mt-3">What we protect</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {capabilities.map((item, i) => (
              <Reveal key={item.label} delay={i * 50}>
                <div className="flex items-center gap-3 p-4 surface rounded-xl border border-soft hover:border-brand/30 hover:scale-105 transition-all">
                  <item.icon className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black dark:bg-neutral-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-brand-500/10 rounded-full blur-[100px]" />
        <Reveal className="container-page relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">Need a specific service?</h2>
          <p className="mt-3 text-white/60 max-w-lg mx-auto">
            Tell us about your requirements and we'll build a custom security plan for your organization.
          </p>
          <Link to="/contact" className="btn-primary mt-7 hover:scale-105 transition-transform">
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
