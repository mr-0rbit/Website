import { Link } from 'react-router-dom';
import {
  Bug, Activity, FileCheck, ShieldCheck, GraduationCap,
  ArrowRight, CheckCircle2, Server, Lock, Network, Database, Cloud,
  ChevronRight,
} from 'lucide-react';
import Reveal from '@/components/Reveal';

const services = [
  {
    icon: Bug,
    title: 'VAPT',
    subtitle: 'Vulnerability Assessment & Penetration Testing',
    desc: 'Our flagship service. We simulate real-world attacks against your systems, applications, and networks to uncover vulnerabilities — then provide actionable remediation guidance.',
    longDesc: 'We think like attackers. Every engagement begins with reconnaissance — mapping your attack surface, identifying exposed services, and understanding your architecture. From there, our team methodically exploits weaknesses, escalates privileges, and demonstrates real-world impact. You receive a detailed report with proof-of-concept exploits, risk ratings, and step-by-step remediation guidance your developers can act on immediately.',
    features: ['Web Application Testing', 'Network Penetration Testing', 'Mobile App Security', 'API Security Testing', 'Wireless Assessment', 'Social Engineering'],
  },
  {
    icon: Activity,
    title: 'SOC',
    subtitle: 'Security Operations Center',
    desc: 'Round-the-clock monitoring and threat detection. Our SOC team watches your environment 24/7, identifying and responding to security incidents before they escalate.',
    longDesc: 'Threats do not sleep, and neither do we. Our Security Operations Center provides continuous monitoring of your infrastructure, applications, and cloud environments. Using industry-leading SIEM platforms and threat intelligence feeds, our analysts correlate events, detect anomalies, and respond to incidents in real time — containing threats before they become breaches.',
    features: ['24/7 Threat Monitoring', 'SIEM Implementation', 'Incident Response', 'Threat Intelligence', 'Log Management', 'Security Alerting'],
  },
  {
    icon: FileCheck,
    title: 'GRC',
    subtitle: 'Governance, Risk & Compliance',
    desc: 'Align your organization with industry standards and regulatory frameworks. We help you build policies, assess risk, and maintain compliance with confidence.',
    longDesc: 'Security is not just technology — it is governance. We help you build a security program that stands up to scrutiny. From risk assessments to policy development, we translate complex regulatory frameworks into practical, actionable steps. Whether you are pursuing ISO 27001 certification, preparing for a SOC 2 audit, or navigating data privacy regulations, we guide you every step of the way.',
    features: ['Risk Assessment', 'Policy Development', 'Compliance Frameworks', 'ISO 27001 & SOC 2', 'Data Privacy (GDPR, PDPA)', 'Security Governance'],
  },
  {
    icon: ShieldCheck,
    title: 'Security Audits',
    subtitle: 'Comprehensive Security Assessments',
    desc: 'Deep-dive evaluations of your infrastructure, policies, and controls. We identify gaps and provide a clear roadmap to strengthen your security posture.',
    longDesc: 'You cannot secure what you have not assessed. Our comprehensive security audits examine every layer of your organization — infrastructure configurations, access controls, policies, procedures, and employee practices. We measure your current state against industry best practices, identify gaps, and deliver a prioritized roadmap that tells you exactly what to fix first, why it matters, and how to get there.',
    features: ['Infrastructure Audits', 'Policy & Procedure Review', 'Access Control Assessment', 'Configuration Reviews', 'Gap Analysis', 'Security Roadmaps'],
  },
  {
    icon: GraduationCap,
    title: 'Cyber Security Training',
    subtitle: 'Professional Training Programs',
    desc: 'Hands-on, practical training that builds real skills. From beginner to advanced, our programs equip your team with the knowledge to defend your organization.',
    longDesc: 'The strongest security control is a trained team. Our training programs go beyond theory — every module includes hands-on labs, real-world scenarios, and practical exercises. Whether you are upskilling your development team on secure coding, training your IT staff on incident response, or building a SOC analyst from scratch, we deliver training that translates directly to the workplace.',
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

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-neutral-950 py-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-700/10 rounded-full blur-[100px]" />
        <div className="container-page relative z-10">
          <Reveal>
            <span className="text-xs font-mono text-brand-400 tracking-widest uppercase">Our Services</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Comprehensive cybersecurity<br />services
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-2xl leading-relaxed">
              From penetration testing to 24/7 monitoring, we offer the full spectrum of
              security services to protect your organization at every layer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service Areas Quick Nav */}
      <section className="surface py-10 border-b border-white/10">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {services.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <a
                  href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                >
                  <item.icon className="w-7 h-7 text-brand-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium group-hover:text-brand-400 transition-colors">{item.title}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services — large description, compact features */}
      <section className="surface-alt py-24">
        <div className="container-page space-y-24">
          {services.map((service, idx) => (
            <div
              key={service.title}
              id={service.title.toLowerCase().replace(/\s+/g, '-')}
              className="scroll-mt-24"
            >
              <div className={`grid lg:grid-cols-3 gap-10 items-start`}>
                {/* Large description area — takes 2 columns */}
                <Reveal className="lg:col-span-2" delay={idx * 40}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-brand-400" />
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{service.title}</h2>
                      <p className="text-sm font-mono text-brand-400 mt-1">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-lg text-white/70 leading-relaxed">{service.desc}</p>
                  <p className="mt-5 text-base text-white/50 leading-relaxed">{service.longDesc}</p>
                </Reveal>

                {/* Compact features sidebar — 1 column */}
                <Reveal variant="right" delay={idx * 40 + 100}>
                  <div className="card">
                    <h4 className="font-semibold mb-4 text-xs uppercase tracking-widest text-brand-400">What's Included</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 hover:translate-x-1 transition-transform duration-200">
                          <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0" />
                          <span className="text-sm text-white/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>

              {/* Divider between services */}
              {idx < services.length - 1 && (
                <div className="mt-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="surface py-24">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono text-brand-400 tracking-widest uppercase">How We Work</span>
            <h2 className="section-title mt-3">Our engagement process</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 100}>
                <div className="relative hover:-translate-y-1.5 transition-transform duration-300">
                  <div className="text-5xl font-bold text-brand-500/20">{p.step}</div>
                  <h3 className="text-lg font-bold mt-2 mb-2">{p.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>
                  {i < process.length - 1 && (
                    <ChevronRight className="hidden lg:block absolute -right-4 top-8 w-6 h-6 text-brand-500/30" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="surface-alt py-24">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-brand-400 tracking-widest uppercase">Coverage</span>
            <h2 className="section-title mt-3">What we protect</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {capabilities.map((item, i) => (
              <Reveal key={item.label} delay={i * 50}>
                <div className="flex items-center gap-3 p-4 bg-neutral-900 rounded-xl border border-white/10 hover:border-brand/30 hover:scale-105 transition-all duration-300">
                  <item.icon className="w-5 h-5 text-brand-400 flex-shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-brand-500/10 rounded-full blur-[100px]" />
        <Reveal className="container-page relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Need a specific service?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Tell us about your requirements and we'll build a custom security plan for your organization.
          </p>
          <Link to="/contact" className="btn-primary mt-8 hover:scale-105 transition-transform">
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
