import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowRight, Users, Trophy, Laptop } from 'lucide-react';
import Reveal from '@/components/Reveal';

const upcomingEvents = [
  {
    title: 'Hands-On Web Application Penetration Testing Workshop',
    date: 'September 15, 2026',
    time: '10:00 AM — 4:00 PM',
    location: 'Online (Virtual)',
    desc: 'A full-day intensive workshop covering OWASP Top 10, hands-on exploitation, and real-world vulnerability discovery in web applications.',
    tag: 'Workshop',
    seats: 'Limited Seats',
  },
  {
    title: 'Cybersecurity Career Day & Networking',
    date: 'October 5, 2026',
    time: '2:00 PM — 6:00 PM',
    location: 'Lahore, Pakistan',
    desc: 'Connect with industry professionals, explore career paths in cybersecurity, and learn about our internship program.',
    tag: 'Networking',
    seats: 'Open Registration',
  },
  {
    title: 'CTF Challenge — Rynex Capture the Flag',
    date: 'November 12, 2026',
    time: '9:00 AM — 8:00 PM',
    location: 'Online (Virtual)',
    desc: 'Test your skills in our Capture the Flag competition. Categories include web, crypto, forensics, reverse engineering, and more.',
    tag: 'Competition',
    seats: 'Team Registration',
  },
];

const pastEvents = [
  { title: 'Introduction to Ethical Hacking — Free Webinar', date: 'July 2026', attendees: '500+' },
  { title: 'SOC Analyst Bootcamp — 3 Day Intensive', date: 'June 2026', attendees: '120+' },
  { title: 'Information Security Awareness for Businesses', date: 'May 2026', attendees: '300+' },
  { title: 'Rynex CTF Season 1', date: 'April 2026', attendees: '250+' },
];

const eventTypes = [
  { icon: Laptop, title: 'Workshops', desc: 'Hands-on, practical training sessions covering real cybersecurity skills and techniques.' },
  { icon: Trophy, title: 'CTF Competitions', desc: 'Capture the Flag challenges that test your skills across multiple security domains.' },
  { icon: Users, title: 'Community Meetups', desc: 'Networking events and talks to connect with the local cybersecurity community.' },
];

export default function Events() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-black dark:bg-neutral-950 py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px]" />
        <div className="container-page relative z-10">
          <span className="text-xs font-mono text-brand-500 tracking-widest uppercase">Events</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Workshops, CTFs & community
          </h1>
          <p className="mt-5 text-lg text-white/60 max-w-2xl leading-relaxed">
            Join our events to learn, compete, and connect with the cybersecurity
            community. From hands-on workshops to Capture the Flag competitions.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="surface py-20">
        <div className="container-page">
          <Reveal className="flex items-center gap-3 mb-10">
            <div className="w-2 h-8 bg-brand-500 rounded-full" />
            <h2 className="text-2xl font-bold tracking-tight">Upcoming Events</h2>
          </Reveal>

          <div className="space-y-6">
            {upcomingEvents.map((event, i) => (
              <Reveal key={event.title} delay={i * 100}>
                <div className="card flex flex-col lg:flex-row gap-6 lg:items-center hover:shadow-lg hover:shadow-brand/5 hover:-translate-y-0.5 transition-all">
                  <div className="lg:w-48 flex-shrink-0">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-500/10 text-brand-700 dark:text-brand-400 text-xs font-mono font-semibold mb-3">
                      {event.tag}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-soft">
                      <Calendar className="w-4 h-4 text-brand-500" />
                      {event.date}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-strong leading-relaxed mb-4">{event.desc}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-muted-soft">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-500" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-brand-500" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-brand-500" />
                        {event.seats}
                      </span>
                    </div>
                  </div>

                  <Link to="/contact" className="btn-outline !py-2.5 text-sm flex-shrink-0 hover:scale-105 transition-transform">
                    Register
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="surface-alt py-20">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-brand-600 dark:text-brand-400 tracking-widest uppercase">What We Host</span>
            <h2 className="section-title mt-3">Types of events</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {eventTypes.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="card text-center h-full hover:-translate-y-1.5 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center mx-auto mb-5 hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-strong leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="surface py-20">
        <div className="container-page">
          <Reveal className="flex items-center gap-3 mb-10">
            <div className="w-2 h-8 bg-brand-500 rounded-full" />
            <h2 className="text-2xl font-bold tracking-tight">Past Events</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {pastEvents.map((event, i) => (
              <Reveal key={event.title} delay={i * 80}>
                <div className="flex items-center justify-between p-5 rounded-xl border border-soft hover:border-brand/30 hover:scale-[1.02] transition-all">
                  <div>
                    <h3 className="font-semibold text-sm">{event.title}</h3>
                    <div className="text-xs text-muted-soft mt-1 flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {event.attendees} attendees
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10 px-3 py-1 rounded-full">
                    Completed
                  </span>
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
          <h2 className="text-3xl font-bold text-white tracking-tight">Want to host an event with us?</h2>
          <p className="mt-3 text-white/60 max-w-lg mx-auto">
            We collaborate with universities, organizations, and communities to deliver cybersecurity events.
          </p>
          <Link to="/contact" className="btn-primary mt-7 hover:scale-105 transition-transform">
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
