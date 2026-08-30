import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Send, CheckCircle2, Clock } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Reveal from '@/components/Reveal';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'info@rynexsecurity.com', href: 'mailto:info@rynexsecurity.com' },
  { icon: Phone, label: 'Phone', value: '0327 2873812', href: 'tel:03272873812' },
  { icon: MapPin, label: 'Location', value: 'Pakistan', href: null },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
];

const socialLinks = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Discord', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'TikTok', href: '#' },
  { label: 'Facebook', href: '#' },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        subject: form.subject,
        message: form.message,
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
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-brand-500/15 rounded-full blur-[120px]" />
        <div className="container-page relative z-10">
          <span className="text-xs font-mono text-brand-500 tracking-widest uppercase">Contact</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Let's secure your organization
          </h1>
          <p className="mt-5 text-lg text-white/60 max-w-2xl leading-relaxed">
            Whether you need a penetration test, a security audit, or just have a question —
            we're here to help. Reach out and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="surface py-16">
        <div className="container-page">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, i) => (
              <Reveal key={info.label} delay={i * 80}>
              <div className="card text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-xs font-mono text-brand-600 uppercase tracking-wide mb-2">{info.label}</h3>
                {info.href ? (
                  <a href={info.href} className="text-sm font-semibold hover:text-brand-600 transition-colors break-all">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold">{info.value}</p>
                )}
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="surface-alt py-20">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <Reveal>
            <div>
              <span className="text-xs font-mono text-brand-600 dark:text-brand-400 tracking-widest uppercase">Get in Touch</span>
              <h2 className="section-title mt-3">Send us a message</h2>
              <p className="mt-4 text-muted leading-relaxed">
                Fill out the form and our team will get back to you as soon as possible.
                For urgent inquiries, call us directly.
              </p>

              <div className="mt-8 space-y-4">
                <a href="mailto:info@rynexsecurity.com" className="flex items-center gap-4 p-4 rounded-xl surface border border-soft hover:border-brand/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-soft">Email us at</div>
                    <div className="text-sm font-semibold">info@rynexsecurity.com</div>
                  </div>
                </a>
                <a href="tel:03272873812" className="flex items-center gap-4 p-4 rounded-xl surface border border-soft hover:border-brand/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-soft">Call us at</div>
                    <div className="text-sm font-semibold">0327 2873812</div>
                  </div>
                </a>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-semibold mb-3">Follow us</h4>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="px-4 py-2 rounded-lg surface border border-soft text-sm font-medium hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            </Reveal>

            {/* Right: Form */}
            <Reveal delay={120}>
            <div>
              {status === 'success' ? (
                <div className="card text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted max-w-sm mx-auto">
                    Thanks for reaching out. We'll get back to you at the email you
                    provided within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-outline mt-6"
                  >
                    Send Another Message
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
                      <label className="block text-sm font-medium mb-1.5">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
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
                      <label className="block text-sm font-medium mb-1.5">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="03XX XXXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-black/10 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    {status !== 'submitting' && <Send className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black dark:bg-neutral-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-brand-500/10 rounded-full blur-[100px]" />
        <Reveal className="container-page relative z-10 text-center">
          <h2 className="text-2xl font-bold text-white tracking-tight">Looking for an internship?</h2>
          <p className="mt-3 text-white/60 max-w-lg mx-auto">
            Check out our internship program and start your cybersecurity career with us.
          </p>
          <a href="/careers" className="btn-primary mt-6">
            View Internship Program
            <ArrowRight className="w-4 h-4" />
          </a>
        </Reveal>
      </section>
    </div>
  );
}
