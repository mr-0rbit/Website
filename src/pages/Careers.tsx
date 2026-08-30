import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, GraduationCap, Bug, Activity, FileCheck, ShieldCheck,
  Rocket, BookOpen, Users, Briefcase, CheckCircle2,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Reveal from '@/components/Reveal';

const tracks = [
  { icon: Bug, name: 'VAPT', desc: 'Vulnerability Assessment & Penetration Testing' },
  { icon: Activity, name: 'SOC', desc: 'Security Operations Center & Threat Detection' },
  { icon: FileCheck, name: 'GRC', desc: 'Governance, Risk & Compliance' },
  { icon: ShieldCheck, name: 'Security Audits', desc: 'Infrastructure & Application Audits' },
];

const benefits = [
  { icon: BookOpen, title: 'Hands-on Training', desc: 'Work on real projects with real tools — not just theory.' },
  { icon: Users, title: 'Mentorship', desc: 'Learn directly from experienced cybersecurity professionals.' },
  { icon: Briefcase, title: 'Real Experience', desc: 'Build a portfolio of actual security work to showcase.' },
  { icon: Rocket, title: 'Career Growth', desc: 'Top performers may be offered full-time opportunities.' },
];

const programSteps = [
  { step: '01', title: 'Apply', desc: 'Submit your registration form with your details and chosen track.' },
  { step: '02', title: 'Screening', desc: 'We review applications and conduct a brief interview.' },
  { step: '03', title: 'Onboarding', desc: 'Selected interns join the program and begin training.' },
  { step: '04', title: 'Graduate', desc: 'Complete the program with real-world experience and certification.' },
];

type FormState = {
  full_name: string;
  email: string;
  phone: string;
  university: string;
  degree: string;
  graduation_year: string;
  track: string;
  experience: string;
  resume_url: string;
  why: string;
};

const initialForm: FormState = {
  full_name: '',
  email: '',
  phone: '',
  university: '',
  degree: '',
  graduation_year: '',
  track: '',
  experience: '',
  resume_url: '',
  why: '',
};

export default function Careers() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('internship_registrations').insert({
        full_name: form.full_name,
        email: form.email,
        phone: form.phone,
        university: form.university || null,
        degree: form.degree || null,
        graduation_year: form.graduation_year || null,
        track: form.track,
        experience: form.experience || null,
        resume_url: form.resume_url || null,
        why: form.why || null,
      });

      if (error) throw error;

      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-black dark:bg-neutral-950 py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-brand-500/15 rounded-full blur-[120px]" />
        <div className="container-page relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-mono mb-6">
            <GraduationCap className="w-3.5 h-3.5" />
            INTERNSHIP PROGRAM 2026
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Start your cybersecurity career
          </h1>
          <p className="mt-5 text-lg text-white/60 max-w-2xl leading-relaxed">
            Join the Rynex Security Internship Program — gain hands-on experience,
            mentorship from industry experts, and build a real foundation in
            cybersecurity.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="surface py-20">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-brand-600 dark:text-brand-400 tracking-widest uppercase">Why Join</span>
            <h2 className="section-title mt-3">What you'll get</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 80}>
                <div className="card text-center h-full hover:-translate-y-1.5 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center mx-auto mb-5 hover:scale-110 transition-transform">
                    <benefit.icon className="w-7 h-7 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="font-bold text-base mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-strong leading-relaxed">{benefit.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="surface-alt py-20">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-brand-600 dark:text-brand-400 tracking-widest uppercase">Choose Your Path</span>
            <h2 className="section-title mt-3">Internship tracks</h2>
            <p className="mt-4 text-muted">
              Select the area of cybersecurity that interests you most. You'll be trained
              and assigned projects within your chosen track.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((track, i) => (
              <Reveal key={track.name} delay={i * 80}>
              <button
                onClick={() => setForm({ ...form, track: track.name })}
                className={`card text-left transition-all duration-300 ${
                  form.track === track.name
                    ? 'border-brand-500 ring-2 ring-brand-500/20 shadow-lg shadow-brand/10'
                    : ''
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  form.track === track.name ? 'bg-brand-500' : 'bg-brand-50 border border-brand-100'
                }`}>
                  <track.icon className={`w-6 h-6 transition-colors ${
                    form.track === track.name ? 'text-black' : 'text-brand-600'
                  }`} />
                </div>
                <h3 className="font-bold text-base mb-1">{track.name}</h3>
                <p className="text-xs text-muted-soft leading-relaxed">{track.desc}</p>
                {form.track === track.name && (
                  <div className="flex items-center gap-1.5 mt-3 text-xs font-semibold text-brand-600">
                    <CheckCircle2 className="w-4 h-4" />
                    Selected
                  </div>
                )}
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="surface py-20">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-brand-600 dark:text-brand-400 tracking-widest uppercase">How It Works</span>
            <h2 className="section-title mt-3">Program process</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programSteps.map((p, i) => (
              <Reveal key={p.step} delay={i * 100}>
                <div className="text-center hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-5xl font-bold text-brand-100 dark:text-brand-500/20">{p.step}</div>
                  <h3 className="text-lg font-bold mt-2 mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-strong leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="surface-alt py-20">
        <div className="container-page">
          <div className="max-w-2xl mx-auto">
            <Reveal className="text-center mb-10">
              <span className="text-xs font-mono text-brand-600 dark:text-brand-400 tracking-widest uppercase">Apply Now</span>
              <h2 className="section-title mt-3">Internship registration</h2>
              <p className="mt-4 text-muted">
                Fill out the form below to apply for the Rynex Security Internship Program.
                We'll get back to you within 5 business days.
              </p>
            </Reveal>

            {status === 'success' ? (
              <div className="card text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Application Submitted!</h3>
                <p className="text-muted max-w-md mx-auto">
                  Thank you for your interest in the Rynex Security Internship Program.
                  We've received your application and will contact you at the email you
                  provided within 5 business days.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-outline mt-6"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card space-y-5">
                {status === 'error' && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                    {errorMsg}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="full_name"
                      required
                      value={form.full_name}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="03XX XXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Graduation Year</label>
                    <input
                      type="text"
                      name="graduation_year"
                      value={form.graduation_year}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="2026"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">University</label>
                    <input
                      type="text"
                      name="university"
                      value={form.university}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="University name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Degree Program</label>
                    <input
                      type="text"
                      name="degree"
                      value={form.degree}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="BS Computer Science"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Preferred Track *</label>
                  <select
                    name="track"
                    required
                    value={form.track}
                    onChange={handleChange}
                    className="input-field bg-white dark:bg-neutral-800"
                  >
                    <option value="">Select a track</option>
                    {tracks.map((t) => (
                      <option key={t.name} value={t.name}>{t.name} — {t.desc}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Resume / Portfolio Link</label>
                  <input
                    type="url"
                    name="resume_url"
                    value={form.resume_url}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="https://drive.google.com/..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Relevant Experience</label>
                  <textarea
                    name="experience"
                    rows={3}
                    value={form.experience}
                    onChange={handleChange}
                    className="input-field resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Why do you want to join?</label>
                  <textarea
                    name="why"
                    rows={3}
                    value={form.why}
                    onChange={handleChange}
                    className="input-field resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
                  {status !== 'submitting' && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black dark:bg-neutral-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <Reveal className="container-page relative z-10 text-center">
          <h2 className="text-2xl font-bold text-white tracking-tight">Have questions about the program?</h2>
          <p className="mt-3 text-white/60 max-w-lg mx-auto">
            Reach out and we'll be happy to answer any questions you have.
          </p>
          <Link to="/contact" className="btn-primary mt-6">
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
