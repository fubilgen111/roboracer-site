"use client";

import FloatingTestimonials from "../components/FloatingTestimonials";

const STATS = [
  { number: "90+", label: "Universities" },
  { number: "20+", label: "Countries" },
  { number: "60+", label: "Publications" },
  { number: "24+", label: "Racing Events" },
];

const PLATFORM_CARDS = [
  {
    title: "Build",
    label: "Hardware Platform",
    description:
      "Assemble and customize a 1:10 scale autonomous race car using open hardware resources and robotics-ready system designs.",
    link: "/build",
    linkText: "Start building",
  },
  {
    title: "Simulate",
    label: "Digital Testbed",
    description:
      "Develop and test autonomy algorithms in simulation before deploying them to a physical RoboRacer vehicle.",
    link: "/learn",
    linkText: "Explore resources",
  },
  {
    title: "Race",
    label: "Global Competitions",
    description:
      "Compete in time trials and head-to-head autonomous racing events with teams from around the world.",
    link: "/race",
    linkText: "View races",
  },
];

const PILLARS = [
  {
    title: "Education",
    description:
      "Hands-on learning resources for robotics, perception, localization, mapping, planning, and control.",
  },
  {
    title: "Research",
    description:
      "A repeatable platform for testing autonomy algorithms in measurable, high-speed racing scenarios.",
  },
  {
    title: "Open Source",
    description:
      "Shared hardware and software resources that help teams build, learn, and contribute faster.",
  },
  {
    title: "Community",
    description:
      "A global network of students, researchers, educators, and autonomous racing teams.",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-white pt-[68px] text-slate-950 md:pt-[85px]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-cyan-100/50 blur-3xl" />
        <div className="absolute left-0 top-40 h-[420px] w-[420px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="relative mx-auto grid min-h-[82vh] max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Autonomous Racing Platform
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
              Where autonomy is tested at speed.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              RoboRacer is an open platform for building, simulating, and racing
              1:10 scale autonomous vehicles — connecting education, research,
              and global competition.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/race"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Explore Competitions
              </a>
              <a
                href="/build"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50"
              >
                Start Building
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.2rem] bg-gradient-to-br from-blue-100 via-cyan-100 to-white blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-2 shadow-2xl">
              <video
                className="aspect-video w-full rounded-[1.55rem] object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/landing/hero-roboracer.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="absolute -bottom-6 left-6 hidden rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-xl backdrop-blur md:block">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Live Testbed
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-950">
                Build → Simulate → Race
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="text-4xl font-semibold tracking-tight text-slate-950">
                {stat.number}
              </div>
              <div className="mt-2 text-sm font-medium text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORM */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              The Platform
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Build, simulate, and race autonomous systems.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              RoboRacer combines hardware, software, education, and competition
              into one accessible robotics ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PLATFORM_CARDS.map((card) => (
              <article
                key={card.title}
                className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm font-semibold text-blue-700">
                  {card.label}
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                  {card.title}
                </h3>
                <p className="mt-4 min-h-32 text-base leading-7 text-slate-600">
                  {card.description}
                </p>
                <a
                  href={card.link}
                  className="mt-8 inline-flex font-semibold text-slate-950 transition group-hover:text-blue-700"
                >
                  {card.linkText} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white lg:col-span-2">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Open Autonomy Testbed
              </p>
              <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
                A practical way to measure autonomy in motion.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Racing turns autonomy into a measurable challenge: faster laps,
                safer behavior, better planning, stronger control, and more
                reliable sim-to-real transfer.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Community
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                Join researchers and teams worldwide.
              </h3>
              <a
                href="https://join.slack.com/t/robo-racer/shared_invite/zt-2pq4fuyjq-gTUflzeZDKDDGjuVoeZqNg"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                <img src="/logos/slack-logo.svg" alt="" width={20} height={20} />
                Join on Slack
              </a>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-950">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Start Racing
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Build your car. Test your autonomy. Join the next race.
          </h2>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/build"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Start Building
            </a>
            <a
              href="/learn"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
            >
              Explore Learning Resources
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Community Voices
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              What our community says
            </h2>
          </div>
          <FloatingTestimonials />
        </div>
      </section>
    </div>
  );
}
