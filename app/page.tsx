'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

const problemCards = [
  {
    title: "Can't answer emergency calls late at night",
    anchor: 'problem-night-calls',
  },
  {
    title: 'Lose jobs while crews are too busy to pick up',
    anchor: 'problem-busy-crews',
  },
  {
    title: 'No way to triage true plumbing emergencies fast',
    anchor: 'problem-triage',
  },
  {
    title: 'Voicemails pile up and homeowners never hear back',
    anchor: 'problem-voicemail',
  },
]

const solutionSections = [
  {
    id: 'problem-night-calls',
    heading: 'Problem: Late-night emergencies go unanswered',
    subheading: 'Solution: AI Appointment Setter answers 24/7, escalates instantly',
    points: [
      'Greets panicked homeowners at 2 a.m., captures the leak details, and books the first available emergency slot.',
      'Pings your on-call plumber via SMS/voice when critical keywords like "burst pipe" or "no water" are detected.',
      'Logs every call and transcript so your morning crew knows exactly what happened overnight.',
    ],
  },
  {
    id: 'problem-busy-crews',
    heading: 'Problem: Crews miss calls while working jobs',
    subheading: 'Solution: AI keeps the phone covered while techs stay focused',
    points: [
      'Handles inbound estimates while techs are under a sink, collecting address, fixture type, and photos.',
      'Syncs confirmed appointments into Google Calendar, ServiceTitan, or Housecall Pro with buffer times.',
      'Sends customers prep instructions automatically so techs arrive ready and on schedule.',
    ],
  },
  {
    id: 'problem-triage',
    heading: 'Problem: Dispatch can\'t triage real emergencies fast enough',
    subheading: 'Solution: AI classifies urgency before dispatch sees the call',
    points: [
      'Asks dynamic questions about water shutoff, visible flooding, and gas connection risks.',
      'Routes true emergencies to a high-priority queue while scheduling routine jobs for later windows.',
      'Delivers a structured summary to dispatch so they can assign the right plumber without guesswork.',
    ],
  },
  {
    id: 'problem-voicemail',
    heading: 'Problem: Voicemails and form submissions fall through the cracks',
    subheading: 'Solution: AI follows up and keeps homeowners warm',
    points: [
      'Calls back voicemails within seconds, books the appointment, or offers available times via SMS.',
      'Triggers automated reminders and status updates so homeowners stay confident in your arrival.',
      'Collects reviews after completion, lifting local search rankings and referral volume.',
    ],
  },
]

const featureSections = [
  {
    quote: 'Burst pipes will not wait for business hours.',
    label: 'Emergency Call Desk',
    headline: 'Answer plumbing emergencies in seconds, schedule within minutes',
    description:
      'AI Appointment Setter listens for leaks, backups, or no-hot-water calls, captures photos, and reserves the right crew slot before the customer dials a competitor.',
    cta: 'See emergency mode',
    image: 'https://media.giphy.com/media/3fmx53I4G4sUbYH9go/giphy.gif',
  },
  {
    quote: 'Paper calendars foul up growth.',
    label: 'Dispatch Control',
    headline: 'Qualify, price, and assign every job from one command center',
    description:
      'Connect Google Calendar, Housecall Pro, or ServiceTitan. The AI confirms address, fixture type, and urgency, then routes techs with zero double-booking.',
    cta: 'Streamline dispatch',
    image: 'https://media.giphy.com/media/cnF0QKUVz6MQzP8rsI/giphy.gif',
  },
  {
    quote: 'Missed estimates sink revenue.',
    label: 'Reputation Guard',
    headline: 'Proactive follow-up keeps quotes hot and reviews glowing',
    description:
      'Hold slots, send prep instructions, and trigger automated reminders so customers stay ready when the van rolls up. Every conversation is logged for your team.',
    cta: 'Boost show rates',
    image: 'https://media.giphy.com/media/IfieLcRaa2s1l5KKIY/giphy.gif',
  },
]

const testimonials = [
  {
    quote:
      '"Three night-shift plumbers quit in Q1. The AI picked up the slack, booked emergencies in under 12 seconds, and revenue still climbed 22%."',
    name: 'Morgan Blake',
    role: 'Owner-Austin,TX-April 2025',
    image: 'https://d1yvfvgonqvf8f.cloudfront.net/images/official/1-4.png',
  },
  {
    quote:
      '"Dispatch used to juggle five inboxes. Now the AI qualifies fixture type, water shutoff status, and budget before it routes the call to my board."',
    name: 'Priya Acharya',
    role: 'Service Manager-Austin,TX-April 2025',
    image: 'https://d1yvfvgonqvf8f.cloudfront.net/images/official/1-2.png',
  },
  {
    quote:
      '"After-hours overflow was a nightmare. The AI books non-urgent work for morning, but escalates burst lines to me instantly. My customers noticed."',
    name: 'Jason Lowery',
    role: 'On-Call Supervisor-Denver,CO-March 2025',
    image: 'https://d1yvfvgonqvf8f.cloudfront.net/images/official/1-3.png',
  },
  {
    quote:
      '"Twilio integrations, tracking numbers, transcripts—everything lives in one spot. I can audit every call without digging through voicemails."',
    name: 'Claire Walters',
    role: 'Ops Director-Portland,OR-May 2025',
    image: 'https://d1yvfvgonqvf8f.cloudfront.net/images/official/1-4.png',
  },
  {
    quote:
      '"We update scripts in LiveKit, test them in the browser, and ship to Twilio in minutes. Seasonal promos roll out faster than our competitors."',
    name: 'Rahul Deshmukh',
    role: 'Revenue Engineer-Seattle,WA-February 2025',
    image: 'https://d1yvfvgonqvf8f.cloudfront.net/images/official/3-1.png',
  },
  {
    quote:
      '"Deposits, reminders, review requests—the AI handles it. Repeat business is up 30% and techs arrive to warm customers every time."',
    name: 'Naomi Feld',
    role: 'Growth Lead-Phoenix,AZ-January 2025',
    image: 'https://d1yvfvgonqvf8f.cloudfront.net/images/official/3-2.png',
  },
  {
    quote:
      '"Our franchise spans eight cities. The AI keeps local pricing and availability straight so each branch stays booked without stepping on another."',
    name: 'Evan Chambers',
    role: 'COO-Chicago,IL-June 2025',
    image: 'https://d1yvfvgonqvf8f.cloudfront.net/images/official/3-3.png',
  },
  {
    quote:
      '"The AI schedules, logs notes in ServiceTitan, and keeps prospects warm with status updates. My techs focus on fixing, not filling paperwork."',
    name: 'Emily Reese',
    role: 'Customer Experience Lead-Tampa,FL-July 2025',
    image: 'https://d1yvfvgonqvf8f.cloudfront.net/images/official/2-1.png',
  },
  {
    quote:
      '"Homeowners expect instant responses. AI Appointment Setter gives us that, plus proof of every conversion lift when I review the numbers."',
    name: 'Jordan McAllister',
    role: 'Partner-Boise,ID-August 2025',
    image: 'https://d1yvfvgonqvf8f.cloudfront.net/images/official/2-2.png',
  },
]

const footerLinks = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Use Cases', href: '/use-cases' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Use', href: '/terms' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'Twitter', href: 'https://x.com' },
    { label: 'YouTube', href: 'https://www.youtube.com' },
    { label: 'Discord', href: 'https://discord.com' },
    { label: 'Support', href: '/support' },
  ],
}

export default function LandingPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [scrollY, setScrollY] = useState(0)

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
    requestAnimationFrame(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => undefined)
      }
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#02030B] text-[#F5F7FF]"
      style={{ fontFamily: 'Inter, "PingFang SC", Helvetica, sans-serif' }}
    >
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(56,224,255,0.18)_0%,transparent_60%),radial-gradient(circle_at_20%_80%,rgba(255,107,107,0.12)_0%,transparent_55%),linear-gradient(135deg,#02030B_0%,#0E1A3A_55%,#02030B_100%)]" />
      <div
        className="pointer-events-none fixed inset-0 opacity-40 mix-blend-screen"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'4\' cy=\'4\' r=\'4\' fill=\'%23283759\'/%3E%3C/svg%3E")',
        }}
      />

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050915]/70 py-6 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center space-x-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9AA7D1]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#38E0FF] to-[#6F4BFF] text-base font-black text-[#04112D] shadow-[0_10px_25px_rgba(56,224,255,0.35)]">
              AI
            </span>
            <span className="hidden md:inline">AI APPOINTMENT SETTER</span>
          </Link>

          <div className="hidden items-center space-x-10 text-sm font-medium text-[#C6CBE3] md:flex">
            <Link href="/product" className="transition hover:text-white">
              Product
            </Link>
            <Link href="/built" className="transition hover:text-white">
              Built for
            </Link>
            <Link href="/pricing" className="transition hover:text-white">
              Pricing
            </Link>
            <Link href="/about" className="transition hover:text-white">
              About Us
            </Link>
          </div>

          <Link
            href="/register"
            className="relative inline-flex items-center gap-2 rounded-full bg-[#38E0FF] px-6 py-2 text-sm font-semibold text-[#021026] shadow-[0_18px_45px_rgba(56,224,255,0.35)] transition-all hover:shadow-[0_24px_60px_rgba(56,224,255,0.45)]"
          >
            <span>Get Started for Free</span>
            <ArrowRight className="h-4 w-4" />
            <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#38E0FF]/80 to-[#38E0FF]/20 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pt-44 pb-20 lg:flex-row lg:items-end">
          <div className="pointer-events-none absolute -inset-x-6 inset-y-0 z-0 overflow-hidden">
            <div
              className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#38E0FF]/12 blur-[140px]"
              style={{ transform: `translate3d(-50%, ${scrollY * 0.15}px, 0)` }}
            />
            <div
              className="absolute bottom-0 left-0 h-[22rem] w-[22rem] -translate-x-2/3 translate-y-1/3 rounded-full bg-[#FF6B6B]/10 blur-[160px]"
              style={{ transform: `translate3d(0, ${scrollY * 0.25}px, 0)` }}
            />
            <div
              className="absolute -right-1/3 top-10 h-[26rem] w-[26rem] rounded-full bg-[#2757FF]/14 blur-[180px]"
              style={{ transform: `translate3d(0, ${scrollY * 0.1 * -1}px, 0)` }}
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,224,255,0.18),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(39,87,255,0.18),transparent_50%)]"
              style={{ opacity: 0.6 }}
            />
          </div>

          <div className="relative z-10 flex-1">
            <div className="text-[52px] leading-[1.05] font-black tracking-[-0.02em] text-white md:text-[70px] md:leading-[1.05]">
              <span className="block">Your</span>
              <span className="block bg-gradient-to-r from-white via-[#A4D7FF] to-[#38E0FF] bg-clip-text text-transparent">
                AI Appointment
              </span>
              <span className="block">Setter for Every Lead</span>
            </div>
            <p className="mt-6 text-lg font-medium uppercase tracking-[0.28em] text-[#9AA7D1]">
              Answer plumbing calls instantly. Qualify intelligently. Book automatically.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href="/register"
                className="group inline-flex items-center gap-3 rounded-full bg-white/10 px-8 py-3 text-base font-semibold text-white shadow-[0_20px_50px_rgba(56,224,255,0.25)] transition-all hover:bg-white/15 hover:shadow-[0_24px_60px_rgba(56,224,255,0.35)]"
              >
                <span>Start booking plumbing jobs</span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-8 py-3 text-base font-semibold text-[#C6CBE3] hover:border-white/30 hover:text-white"
              >
                Open dispatcher view
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10">
              <a
                href="https://www.producthunt.com/products/ai-phone-scheduler?embed=true&utm_source=badge-top-post-badge&utm_medium=badge"
                target="_blank"
                rel="noreferrer"
                className="inline-flex"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=973916&theme=dark&period=daily"
                  alt="AI Appointment Setter on Product Hunt"
                  className="h-12 w-auto"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          <div className="relative z-10 w-full flex-1 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_30px_90px_rgba(9,18,56,0.45)] backdrop-blur-2xl">
            <p className="text-lg font-semibold text-[#C6CBE3]">
              "We turned every burst-pipe call into a booked job. The AI captures the details, confirms access, and dispatches the right crew before a human even picks up."
            </p>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="mt-8 flex items-center gap-4">
              <img
                src="https://d1yvfvgonqvf8f.cloudfront.net/images/official/1-2.png"
                alt="Customer avatar"
                className="h-14 w-14 rounded-full border border-white/20 object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-semibold text-white">Luis Ramirez</p>
                <p className="text-xs uppercase tracking-[0.28em] text-[#8492BC]">
                  Director of Operations, RapidFlow Plumbing
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pt-24 pb-32">
          <div
            className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-[0_25px_70px_rgba(9,18,56,0.4)] backdrop-blur-2xl"
            style={{ transform: `translate3d(0, ${scrollY * -0.03}px, 0)` }}
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.32em] text-[#7687B4]">
                  BUILT FOR YOUR PLUMBING TEAM
                </p>
                <p className="mt-4 max-w-md text-2xl font-semibold text-white">
                  Spot the biggest problems slowing your plumbing bookings
                </p>
              </div>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {problemCards.map((problem) => (
                <button
                  key={problem.title}
                  type="button"
                  onClick={() => {
                    const section = document.getElementById(problem.anchor)
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="group relative flex flex-col justify-between gap-10 overflow-hidden rounded-3xl border border-white/8 bg-[#070D1F]/70 p-6 text-left shadow-[0_20px_60px_rgba(9,18,56,0.55)] transition-all hover:-translate-y-2 hover:border-white/20 hover:bg-[#0A122C]/80"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#38E0FF]/15 blur-[60px] transition group-hover:bg-[#38E0FF]/25" />
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">{problem.title}</h3>
                  </div>
                  <span className="flex items-center gap-2 text-sm font-semibold text-[#38E0FF]">
                    Results with AI Appointment Setter
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-white/10 bg-white/5 p-6 text-center text-[#9AA7D1] sm:flex-row sm:justify-center">
              <img
                src="https://d1yvfvgonqvf8f.cloudfront.net/assets/png/bofang-CzSN_jbb.png"
                alt="Spark icon"
                className="h-8 w-8"
                loading="lazy"
              />
              <p className="text-sm font-medium uppercase tracking-[0.22em]">
                Need a different plumbing workflow? Just tell us how you operate...
              </p>
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-6xl px-6 pb-28">
          <div
            className="relative overflow-hidden rounded-[40px] border border-white/12 bg-gradient-to-br from-[#060C1E] via-[#0B162F] to-[#081128] shadow-[0_30px_80px_rgba(4,10,40,0.65)]"
            style={{ transform: `translate3d(0, ${scrollY * 0.03}px, 0)` }}
          >
            {!isVideoPlaying ? (
              <div className="relative flex flex-col items-center justify-center px-10 pb-16 pt-20 text-center">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#38E0FF]/15 to-transparent" />
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#6F84B7]">PLATFORM PREVIEW</p>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-white md:text-[42px] md:leading-[1.1]">
                  Watch AI Appointment Setter triage plumbing jobs and dispatch in real time
                </h2>
                <p className="mt-5 max-w-xl text-base text-[#A9B6D9]">
                  See the voice agent capture water issues, hold the right crew slot, and sync the appointment straight
                  into your plumbing ops stack.
                </p>
                <button
                  type="button"
                  onClick={handleVideoPlay}
                  className="group relative mt-10 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#021026] shadow-[0_18px_50px_rgba(255,255,255,0.2)] transition hover:shadow-[0_24px_70px_rgba(255,255,255,0.25)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#021026] text-white transition group-hover:bg-[#38E0FF]">
                    <Play className="h-4 w-4" />
                  </span>
                  Watch the product film
                </button>
                <img
                  src="https://media.giphy.com/media/3fmx53I4G4sUbYH9go/giphy.gif"
                  alt="AI Appointment Setter handling a late-night plumbing emergency"
                  className="mt-12 w-full max-w-3xl rounded-3xl border border-white/10 object-cover shadow-[0_30px_90px_rgba(2,7,26,0.6)]"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="aspect-video w-full overflow-hidden rounded-[40px]">
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover"
                  controls
                  poster="https://media.giphy.com/media/3fmx53I4G4sUbYH9go/giphy.gif"
                >
                  <source src="https://media.giphy.com/media/3fmx53I4G4sUbYH9go/giphy.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </section>

        <section className="relative mt-24 bg-[#02030B] px-6 pt-20 pb-24">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#030613] via-[#02030B]_60% to-transparent" />
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-20">
            {solutionSections.map((solution) => (
              <article
                key={solution.id}
                id={solution.id}
                className="rounded-[36px] border border-white/10 bg-[#060C1E]/80 px-10 py-14 shadow-[0_24px_70px_rgba(4,10,40,0.5)] backdrop-blur-2xl"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#FF9D6F]">
                  {solution.heading}
                </p>
                <h3 className="mt-4 text-[34px] font-semibold leading-tight text-white md:text-[40px]">
                  {solution.subheading}
                </h3>
                <ul className="mt-8 space-y-4 text-base leading-relaxed text-[#A9B6D9]">
                  {solution.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[#38E0FF] to-[#6F4BFF]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="relative bg-[#02030B] px-6 pt-24 pb-32">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0B1632] via-[#02030B]_60% to-transparent"
            aria-hidden="true"
          />
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-20">
            {featureSections.map((feature, index) => (
              <div
                key={feature.label}
                className={`flex flex-col overflow-hidden rounded-[40px] border border-white/8 bg-[#070D1F]/80 shadow-[0_30px_80px_rgba(4,10,40,0.45)] backdrop-blur-2xl transition-transform lg:flex-row ${
                  index % 2 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 space-y-6 px-10 py-12 text-[#C6CBE3] lg:px-16">
                  <blockquote className="border-l-2 border-white/20 pl-6 text-sm uppercase tracking-[0.28em] text-[#7C8EBE]">
                    {feature.quote}
                  </blockquote>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#38E0FF]">{feature.label}</p>
                    <h3 className="mt-4 text-[32px] font-semibold leading-[1.25] text-white md:text-[38px]">
                      {feature.headline}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-[#A9B6D9]">{feature.description}</p>
                  <Link
                    href="/register"
                    className="inline-flex items-center gap-3 text-sm font-semibold text-[#38E0FF] transition hover:text-white"
                  >
                    {feature.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="flex-1 bg-[#050C1C] p-6 lg:p-8">
                  <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/12 bg-[#020712]">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,224,255,0.18),transparent_60%)] opacity-80" />
                    <img
                      src={feature.image}
                      alt={feature.label}
                      className="relative h-full w-full rounded-[24px] object-cover shadow-[0_25px_70px_rgba(3,8,28,0.45)]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pt-24 pb-32">
          <h2 className="text-[40px] font-semibold leading-tight text-white md:text-[50px]">
            Loved by plumbing teams who live and die by booked jobs
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="relative flex h-full flex-col justify-between gap-6 rounded-[28px] border border-white/8 bg-[#070D1F]/75 p-8 text-left shadow-[0_22px_70px_rgba(5,12,35,0.45)] backdrop-blur-2xl transition hover:-translate-y-2 hover:border-white/18"
              >
                <span className="text-[20px] leading-[1.5] text-[#E8ECFF]">{testimonial.quote}</span>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full border border-white/15 object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#8192C3]">{testimonial.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10 bg-[#01020A]/80 px-6 pt-16 pb-10 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 lg:flex-row lg:justify-between">
          <div className="max-w-sm space-y-6">
            <img
              src="https://d1yvfvgonqvf8f.cloudfront.net/assets/png/logo-D4gSa2mB.png"
              alt="AI Appointment Setter Logo"
              className="h-9 w-auto"
              loading="lazy"
            />
            <p className="text-base text-[#B4C0E4]">
              Built for plumbing crews that can&apos;t afford to miss a single leak alert.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-3 rounded-full bg-[#38E0FF] px-6 py-2 text-sm font-semibold text-[#021026] shadow-[0_18px_45px_rgba(56,224,255,0.35)] transition hover:shadow-[0_24px_60px_rgba(56,224,255,0.45)]"
            >
              Get Started for Free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="pt-4 text-xs uppercase tracking-[0.3em] text-[#586694]">© 2025 Scheduler Labs</p>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-10 text-sm md:grid-cols-3 lg:gap-16">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7687B4]">Product</h4>
              <ul className="mt-5 space-y-3 text-[#C6CBE3]">
                {footerLinks.product.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7687B4]">Company</h4>
              <ul className="mt-5 space-y-3 text-[#C6CBE3]">
                {footerLinks.company.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7687B4]">Social Media</h4>
              <ul className="mt-5 space-y-3 text-[#C6CBE3]">
                {footerLinks.social.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} target="_blank" rel="noreferrer" className="transition hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-16 text-center text-xs uppercase tracking-[0.28em] text-[#4D5C86]">Scheduler Labs, Inc.</p>
      </footer>
    </div>
  )
}

