"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, MessageCircle, Zap, BrainCircuit, Lightbulb,
  BarChart3, ClipboardCheck, Search, Map, Hammer, GraduationCap, TrendingUp,
  Building2, School, ShoppingCart, Briefcase, Users, User, Menu, X,
  Phone, Mail, MapPin, Linkedin, Twitter, Instagram,
} from "lucide-react";
import { useState, useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: "easeOut" },
  }),
};

const whatsappUrl =
  "https://wa.me/2348169697844?text=Hi%20Nexwavy%2C%20I%27d%20like%20to%20talk%20about%20a%20project";

/* ─── NAVBAR ─────────────────────────────────────────────── */
function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-[#E5E7EB] bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-6 xl:px-10">
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3069B0]">
            <span className="font-heading text-base font-bold text-white">N</span>
          </div>
          <div>
            <span className="block font-heading text-[15px] font-bold leading-tight text-[#071626]">Nexwavy</span>
            <span className="block text-[10px] font-medium tracking-wide text-[#697586]">Solutions</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {["Home", "About", "Services", "AI Training", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="rounded-full px-4 py-2 text-[13px] font-semibold text-[#697586] hover:bg-[#F4F7FB] hover:text-[#3069B0] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={whatsappUrl} target="_blank" rel="noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-full border border-[#E5E7EB] px-5 text-[13px] font-semibold text-[#071626] hover:border-[#3069B0] hover:text-[#3069B0] transition-all"
          >
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
          </a>
          <a
            href="mailto:hello@nexwavy.com"
            className="inline-flex h-9 items-center rounded-full bg-[#3069B0] px-5 text-[13px] font-semibold text-white shadow-md shadow-[#3069B0]/25 hover:bg-[#071626] transition-all"
          >
            Book Consultation
          </a>
        </div>

        <button className="lg:hidden rounded-md p-2 text-[#071626]" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#E5E7EB] bg-white px-6 py-4 space-y-1.5">
          {["Home", "About", "Services", "AI Training", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#697586] hover:bg-[#F4F7FB] hover:text-[#3069B0]"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-3 space-y-2 border-t border-[#E5E7EB]">
            <a href={whatsappUrl} target="_blank" rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-[#E5E7EB] py-2.5 text-sm font-semibold text-[#071626]">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <a href="mailto:hello@nexwavy.com"
              className="flex w-full items-center justify-center rounded-full bg-[#3069B0] py-2.5 text-sm font-semibold text-white">
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ─── HERO ────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(48,105,176,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(48,105,176,0.045) 1px,transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage: "linear-gradient(to bottom,rgba(0,0,0,.6) 0%,transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-80 w-[700px] rounded-full bg-[#3069B0]/8 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px] px-6 xl:px-10 pt-16 pb-10">
        <motion.div initial="hidden" animate="visible" className="mx-auto max-w-4xl text-center mb-10">
          <motion.div custom={0} variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#3069B0]/20 bg-[#3069B0]/5 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#1E90FF] animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest text-[#3069B0] uppercase">
              Now onboarding — AI Training &amp; Automation
            </span>
          </motion.div>

          <motion.h1 custom={1} variants={fadeUp}
            className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-[#071626] sm:text-5xl lg:text-[3.75rem] mb-5">
            We help growing businesses replace{" "}
            <span className="text-[#3069B0]">manual work</span>{" "}
            with smarter digital systems.
          </motion.h1>

          <motion.p custom={2} variants={fadeUp} className="text-lg text-[#697586] leading-relaxed mb-8 mx-auto max-w-2xl">
            We turn scattered spreadsheets, WhatsApp threads, and paper forms into simple digital systems your team can
            actually use — so approvals move faster, records stay clean, and you see exactly what&apos;s happening
            across the business.
          </motion.p>

          <motion.div custom={3} variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <a href="mailto:hello@nexwavy.com"
              className="inline-flex h-12 items-center rounded-full bg-[#3069B0] px-8 text-sm font-bold text-white shadow-lg shadow-[#3069B0]/30 hover:bg-[#071626] hover:-translate-y-0.5 transition-all">
              Start a Project <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-8 text-sm font-bold text-[#071626] hover:border-[#3069B0] hover:text-[#3069B0] transition-all">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div custom={4} variants={fadeUp} className="flex flex-wrap items-center justify-center gap-2">
            {["Business Automation", "AI Training", "IT Advisory"].map((tag) => (
              <span key={tag}
                className="rounded-full border border-[#E5E7EB] bg-[#F4F7FB] px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#697586]">
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Full-width hero image with workflow overlay */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
          className="relative h-[clamp(360px,52vw,620px)] w-full overflow-hidden rounded-2xl border border-[#E5E7EB] shadow-2xl shadow-[#071626]/12"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-automation.png"
            alt="Nexwavy business automation dashboard"
            className="h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071626]/70 via-[#071626]/15 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="text-[10px] font-bold tracking-widest text-[#1E90FF] uppercase mb-3">
              Illustrative Workflow
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { Icon: ClipboardCheck, title: "Requests captured", sub: "Form or portal" },
                { Icon: CheckCircle2, title: "Approvals tracked", sub: "Clear status" },
                { Icon: BarChart3, title: "Reporting visible", sub: "Simple dashboard" },
              ].map(({ Icon, title, sub }, i) => (
                <div key={i}
                  className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md px-4 py-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#3069B0]">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{title}</p>
                    <p className="text-[11px] text-white/70">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 border-t border-[#E5E7EB] pt-6">
          {[
            { n: "3 Core Services", label: "Automation · AI Training · IT Advisory" },
            { n: "Lagos, Nigeria", label: "Serving growing businesses across Africa" },
            { n: "Outcome-led", label: "Technology earns its place when it changes the result" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-heading text-sm font-bold text-[#071626]">{s.n}</div>
              <div className="text-[11px] text-[#697586] mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── CHALLENGES ──────────────────────────────────────────── */
function Challenges() {
  const problems = [
    { icon: ClipboardCheck, title: "Slow approvals", desc: "Requests sit in chats, emails, or paper forms with no clear owner, status, or timeline." },
    { icon: BarChart3, title: "Weak reporting", desc: "Owners and managers cannot see what is happening in real time across operations." },
    { icon: Users, title: "Manual follow-up", desc: "Teams spend too much time checking records, reminding people, and repeating admin work." },
    { icon: Briefcase, title: "Scattered tools", desc: "Important information lives across WhatsApp, Excel, email, notebooks, and different staff phones." },
  ];

  return (
    <section id="about" className="bg-[#071626] py-20 lg:py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 font-heading text-[280px] font-black text-white/[0.025] select-none leading-none translate-x-10 -translate-y-10">
        N
      </div>
      <div className="relative mx-auto max-w-[1280px] px-6 xl:px-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <motion.p custom={0} variants={fadeUp} className="mb-3 text-[10px] font-bold tracking-widest text-[#1E90FF] uppercase">
            Modern Challenges
          </motion.p>
          <motion.h2 custom={1} variants={fadeUp}
            className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl mx-auto max-w-3xl leading-tight">
            Manual work is quietly slowing too many growing businesses down.
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 h-[clamp(260px,38vw,480px)] w-full overflow-hidden rounded-2xl border border-white/10 shadow-xl"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/sales-inventory.png"
            alt="Nexwavy operational reporting and sales dashboard"
            className="h-full w-full object-cover object-center opacity-75"
            loading="eager"
            decoding="async"
          />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-4 space-y-4 text-[15px] text-[#697586] leading-relaxed">
            <motion.p custom={0} variants={fadeUp}>
              Many businesses still run critical operations through WhatsApp messages, Excel sheets, paper forms,
              scattered approvals, and repeated follow-ups.
            </motion.p>
            <motion.p custom={1} variants={fadeUp}>
              The result is predictable: delayed execution, weak reporting, avoidable errors, missed opportunities,
              and poor visibility for decision-makers.
            </motion.p>
            <motion.p custom={2} variants={fadeUp} className="font-semibold text-white/90">
              The companies that improve fastest are not always the biggest. They are the ones that build better systems earlier.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {problems.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={i} custom={i} variants={fadeUp}
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 hover:border-[#3069B0]/40 hover:bg-[#3069B0]/10 transition-all">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10">
                  <Icon className="h-5 w-5 text-[#1E90FF]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ────────────────────────────────────────────── */
function Services() {
  const services = [
    {
      icon: Zap, title: "Business Automation & Productivity Systems",
      desc: "We design and build usable systems for request tracking, approvals, attendance, field reporting, customer intake, dashboards, and simple internal portals.",
      bullets: ["Request tracking & approvals", "Attendance & field reporting", "Operational dashboards", "Simple internal portals"],
      image: "/images/hero-automation.png",
      cta: "Explore Services", color: "#3069B0",
    },
    {
      icon: BrainCircuit, title: "AI Productivity Training",
      desc: "We help professionals and teams use AI for writing, research, reporting, planning, spreadsheet support, and better day-to-day execution.",
      bullets: ["Clear prompting techniques", "Daily AI use cases at work", "Document & email support", "Data safety & usage rules"],
      image: "/images/ai-masterclass.png",
      cta: "View Training", color: "#1E90FF",
    },
    {
      icon: Lightbulb, title: "IT Advisory & Process Review",
      desc: "We help business owners and teams understand what to fix, what to automate, and whether the best answer is a tool, a workflow change, or both.",
      bullets: ["Workflow & process review", "Automation readiness audit", "Build vs. buy decisions", "Implementation planning"],
      image: "/images/staff-attendance.png",
      cta: "Start a Project", color: "#3069B0",
    },
  ];

  return (
    <section id="services" className="bg-[#F4F7FB] py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 xl:px-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
          <motion.p custom={0} variants={fadeUp} className="mb-3 text-[10px] font-bold tracking-widest text-[#3069B0] uppercase">
            What Nexwavy Does
          </motion.p>
          <motion.h2 custom={1} variants={fadeUp}
            className="font-heading text-3xl font-bold text-[#071626] md:text-4xl lg:text-5xl mx-auto max-w-3xl leading-tight">
            Business automation first. AI training and advisory where they support better execution.
          </motion.h2>
          <motion.p custom={2} variants={fadeUp} className="mt-4 text-[15px] text-[#697586] max-w-2xl mx-auto">
            Nexwavy helps growing businesses move from manual operations to structured digital execution — through
            automation, AI training, and IT advisory.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, bullets, image, cta, color }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-[#071626]/10 transition-all">
              <div className="relative h-64 overflow-hidden sm:h-72 lg:h-80">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt={title} loading={i === 0 ? "eager" : "lazy"} decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071626]/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3069B0] shadow-lg">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-heading text-[17px] font-bold text-[#071626] mb-3 leading-snug">{title}</h3>
                <p className="text-sm text-[#697586] leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2 mb-6">
                  {bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-[#697586]">
                      <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />{b}
                    </li>
                  ))}
                </ul>
                <a href="mailto:hello@nexwavy.com"
                  className="mt-auto inline-flex items-center text-sm font-bold transition-colors"
                  style={{ color }}>
                  {cta} <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-[#3069B0]/15 bg-[#3069B0]/5 px-8 py-6">
          <p className="text-sm font-semibold text-[#071626] text-center sm:text-left">
            We do not build custom software where a simpler existing tool is enough. Sometimes the right answer is a
            spreadsheet cleanup, a no-code form, or a better process.
          </p>
          <a href="mailto:hello@nexwavy.com"
            className="shrink-0 inline-flex h-10 items-center rounded-full bg-[#3069B0] px-6 text-sm font-bold text-white hover:bg-[#071626] transition-colors">
            Talk to us →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── EXECUTION LOOP ──────────────────────────────────────── */
function ExecutionLoop() {
  const steps = [
    { num: "01", icon: Search, title: "Diagnose the workflow", desc: "We study how work currently moves, where delays happen, and what the team already uses." },
    { num: "02", icon: Map, title: "Map the pain", desc: "We identify repeated manual steps, missing records, unclear approvals, and reporting gaps." },
    { num: "03", icon: Lightbulb, title: "Design the simplest fix", desc: "We recommend the lightest tool or process that can solve the problem properly." },
    { num: "04", icon: Hammer, title: "Build the working version", desc: "We create the form, dashboard, portal, automation, or workflow needed to run the process better." },
    { num: "05", icon: GraduationCap, title: "Train the users", desc: "We help the team understand how to use the system and what changes in their daily routine." },
    { num: "06", icon: TrendingUp, title: "Measure and improve", desc: "We review adoption, fix what is not working, and improve the system from real usage." },
  ];

  return (
    <section className="bg-[#071626] py-20 lg:py-24 relative overflow-hidden">
      <div className="relative mx-auto max-w-[1280px] px-6 xl:px-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <motion.p custom={0} variants={fadeUp} className="mb-3 text-[10px] font-bold tracking-widest text-[#1E90FF] uppercase">
            The Nexwavy Method
          </motion.p>
          <motion.h2 custom={1} variants={fadeUp}
            className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl mx-auto max-w-2xl leading-tight">
            The Nexwavy Execution Loop
          </motion.h2>
          <motion.p custom={2} variants={fadeUp} className="mt-4 text-[15px] text-[#697586] max-w-xl mx-auto">
            We keep the work simple and disciplined: understand the workflow, build only what is needed, train the
            users, and improve from real usage.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map(({ num, icon: Icon, title, desc }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 hover:border-[#3069B0]/40 hover:bg-[#3069B0]/10 transition-all">
              <div className="absolute right-4 top-3 font-heading text-6xl font-black text-white/[0.05] select-none">{num}</div>
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#3069B0]/20 border border-[#3069B0]/30">
                <Icon className="h-5 w-5 text-[#1E90FF]" />
              </div>
              <div className="mb-1 text-[10px] font-bold tracking-widest text-[#1E90FF]/60 uppercase">{num}</div>
              <h3 className="font-heading text-base font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHY NEXWAVY ─────────────────────────────────────────── */
function WhyNexwavy() {
  const points = ["Business-first thinking", "Clear reporting", "Clean records", "Usable tools", "Measured rollout", "Dependable support"];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 xl:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p custom={0} variants={fadeUp} className="mb-3 text-[10px] font-bold tracking-widest text-[#3069B0] uppercase">Why Nexwavy</motion.p>
            <motion.h2 custom={1} variants={fadeUp}
              className="font-heading text-3xl font-bold text-[#071626] md:text-4xl mb-5 leading-tight">
              Technology only earns its place when it changes the result.
            </motion.h2>
            <motion.p custom={2} variants={fadeUp} className="text-[15px] text-[#697586] leading-relaxed mb-8">
              We focus on the workflow first. That means understanding the request, record, approval, report, or training
              problem before deciding whether the answer is a spreadsheet cleanup, a form, a no-code tool, or a custom build.
            </motion.p>
            <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-2.5">
              {points.map((pt, i) => (
                <span key={i}
                  className="inline-flex items-center gap-2 rounded-full border border-[#3069B0]/20 bg-[#3069B0]/5 px-4 py-2 text-sm font-semibold text-[#3069B0]">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" /> {pt}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[clamp(260px,32vw,420px)] overflow-hidden rounded-2xl border border-[#E5E7EB] shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/staff-attendance.png"
                alt="Nexwavy workflow and attendance strategy dashboard"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl border border-[#E5E7EB] bg-[#F4F7FB] p-7">
              <div className="mb-1 text-[10px] font-bold tracking-widest text-[#3069B0] uppercase">Proof Note</div>
              <h3 className="font-heading text-lg font-bold text-[#071626] mb-3">Building proof the right way</h3>
              <p className="text-sm text-[#697586] leading-relaxed mb-4">
                Nexwavy is currently focused on selected pilot and early client engagements across automation, reporting,
                and AI productivity training. As these projects conclude, we will publish verified outcomes, lessons,
                and client-approved case notes.
              </p>
              <div className="rounded-xl border border-[#3069B0]/15 bg-white px-4 py-3 text-xs font-medium text-[#697586]">
                <span className="font-bold text-[#3069B0]">Note: </span>We will only publish verified outcomes, lessons,
                and client-approved case notes.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── WHO WE HELP ─────────────────────────────────────────── */
function WhoWeHelp() {
  const audiences = [
    { icon: Building2, title: "SMEs and growing teams", desc: "Teams that need a cleaner way to manage requests, approvals, tracking, reporting, and follow-up." },
    { icon: School, title: "Schools and training businesses", desc: "Organizations that need better coordination around attendance, registration, records, communication, and reporting." },
    { icon: ShoppingCart, title: "Retail and inventory-led businesses", desc: "Businesses that want clearer sales visibility, stock tracking, customer records, and branch-level reporting." },
    { icon: Briefcase, title: "Service businesses", desc: "Teams that need a more structured way to handle customer requests, job status, field activity, and open work." },
    { icon: Users, title: "Corporate departments", desc: "Departments that want practical AI enablement and a more disciplined approach to repetitive internal processes." },
    { icon: User, title: "Founders and business owners", desc: "Leaders who want clarity on what to fix first before spending on the wrong tool or build." },
  ];

  return (
    <section id="solutions" className="bg-[#F4F7FB] py-20 lg:py-24 border-y border-[#E5E7EB]">
      <div className="mx-auto max-w-[1280px] px-6 xl:px-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
          <motion.p custom={0} variants={fadeUp} className="mb-3 text-[10px] font-bold tracking-widest text-[#3069B0] uppercase">Who We Help</motion.p>
          <motion.h2 custom={1} variants={fadeUp}
            className="font-heading text-3xl font-bold text-[#071626] md:text-4xl lg:text-5xl mx-auto max-w-3xl leading-tight">
            Built for growing teams that want cleaner execution.
          </motion.h2>
          <motion.p custom={2} variants={fadeUp} className="mt-4 text-[15px] text-[#697586] max-w-2xl mx-auto">
            From SMEs to corporate departments, the focus stays the same: less manual friction, more visibility,
            and better day-to-day control.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {audiences.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex gap-4 rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm hover:border-[#3069B0]/30 hover:-translate-y-0.5 hover:shadow-md transition-all">
              <div className="shrink-0 mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#3069B0]/5 border border-[#3069B0]/15">
                <Icon className="h-5 w-5 text-[#3069B0]" />
              </div>
              <div>
                <h3 className="font-heading text-[15px] font-bold text-[#071626] mb-1.5">{title}</h3>
                <p className="text-sm text-[#697586] leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING ─────────────────────────────────────────────── */
function Pricing() {
  const offers = [
    { badge: "Clarity first", title: "Paid Discovery Session", price: "From NGN 100,000", desc: "A focused review of your current workflow, friction points, reporting gaps, and next sensible system decision.", cta: "Book a Discovery Session", featured: false },
    { badge: "Most popular", title: "AI Productivity Masterclass", price: "NGN 75,000 / participant", desc: "Hands-on AI training for professionals, business owners, and teams that want a clearer and safer way to use AI at work.", cta: "Register for Training", featured: true },
    { badge: "Build ready", title: "Starter Automation Project", price: "From NGN 500,000", desc: "A focused automation build for one business process — attendance, request tracking, dashboards, intake, or approvals.", cta: "Discuss Automation", featured: false },
    { badge: "Enterprise", title: "Team & Corporate AI Training", price: "From NGN 500,000 / session", desc: "Private AI productivity training for SMEs and teams, with corporate department and executive programmes available.", cta: "Request Corporate Training", featured: false },
  ];

  return (
    <section id="ai-training" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 xl:px-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
          <motion.p custom={0} variants={fadeUp} className="mb-3 text-[10px] font-bold tracking-widest text-[#3069B0] uppercase">Starting Offers</motion.p>
          <motion.h2 custom={1} variants={fadeUp}
            className="font-heading text-3xl font-bold text-[#071626] md:text-4xl lg:text-5xl mx-auto max-w-2xl leading-tight">
            Choose the next sensible starting point.
          </motion.h2>
          <motion.p custom={2} variants={fadeUp} className="mt-4 text-[15px] text-[#697586] max-w-2xl mx-auto">
            Use discovery when you need clarity, training when your team needs capability, and a project conversation
            when the workflow already needs a build.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {offers.map(({ badge, title, price, desc, cta, featured }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`flex flex-col rounded-2xl border p-6 hover:-translate-y-1 hover:shadow-xl transition-all ${
                featured
                  ? "border-[#3069B0] bg-[#3069B0] shadow-xl shadow-[#3069B0]/30"
                  : "border-[#E5E7EB] bg-white shadow-sm hover:shadow-[#071626]/10"
              }`}>
              <span className={`mb-5 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                featured ? "bg-white/20 text-white" : "bg-[#F4F7FB] text-[#3069B0]"
              }`}>
                {badge}
              </span>
              <h3 className={`font-heading text-base font-bold mb-2 ${featured ? "text-white" : "text-[#071626]"}`}>{title}</h3>
              <p className={`text-lg font-bold mb-4 ${featured ? "text-white" : "text-[#3069B0]"}`}>{price}</p>
              <p className={`text-sm leading-relaxed flex-1 mb-6 ${featured ? "text-white/80" : "text-[#697586]"}`}>{desc}</p>
              <a href="mailto:hello@nexwavy.com"
                className={`inline-flex items-center justify-center gap-2 rounded-full py-2.5 px-5 text-sm font-bold transition-all ${
                  featured
                    ? "bg-white text-[#3069B0] hover:bg-[#F4F7FB]"
                    : "border border-[#E5E7EB] text-[#071626] hover:border-[#3069B0] hover:text-[#3069B0]"
                }`}>
                {cta} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl border border-[#E5E7EB] bg-[#F4F7FB] px-7 py-5">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#25D366]/20 bg-[#25D366]/10">
              <MessageCircle className="h-5 w-5 text-[#25D366]" />
            </div>
            <div>
              <p className="font-bold text-[#071626] text-sm">Chat on WhatsApp</p>
              <p className="text-xs text-[#697586]">Already know what workflow you want to fix? Speak with us before filling any form.</p>
            </div>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer"
            className="shrink-0 inline-flex h-10 items-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white hover:bg-[#1ea854] transition-all">
            <MessageCircle className="h-4 w-4" /> Message Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ───────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#071626] py-24 lg:py-28">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-automation.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-10"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#071626] via-[#071626]/95 to-[#071626]/80" />
      </div>
      <div className="relative mx-auto max-w-[1280px] px-6 xl:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="mb-4 text-[10px] font-bold tracking-widest text-[#1E90FF] uppercase">
            Ready to begin?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-5 leading-tight">
            Replace manual work with a system that actually works.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#697586] text-lg mb-10 leading-relaxed">
            We&apos;re ready when you are. Reach out to start a conversation about your processes, team, and what
            needs to change first.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:hello@nexwavy.com"
              className="inline-flex h-12 items-center rounded-full bg-white px-8 text-sm font-bold text-[#3069B0] shadow-xl hover:bg-[#F4F7FB] hover:-translate-y-0.5 transition-all">
              Start a Project <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/20 transition-all">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8">
            {[
              { label: "hello@nexwavy.com", href: "mailto:hello@nexwavy.com" },
              { label: "+234 816 969 7844", href: "tel:+2348169697844" },
              { label: "Lagos, Nigeria", href: "#" },
            ].map(({ label, href }, i) => (
              <a key={i} href={href} className="text-sm text-[#697586] hover:text-white transition-colors">{label}</a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ──────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[#071626] border-t border-white/10">
      <div className="mx-auto max-w-[1280px] px-6 xl:px-10 py-16">
        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3069B0]">
                <span className="font-heading text-base font-bold text-white">N</span>
              </div>
              <span className="font-heading text-base font-bold text-white">Nexwavy Solutions</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-sm">
              Replacing scattered manual work with clean digital systems for growing businesses in Nigeria and across Africa.
            </p>
            <p className="text-[10px] font-bold tracking-widest text-[#3069B0] uppercase mb-5">
              Business Automation · AI Training · IT Advisory
            </p>
            <div className="flex items-center gap-2.5">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/nexwavy", label: "LinkedIn" },
                { Icon: Twitter, href: "https://x.com/nexwavy", label: "X" },
                { Icon: Instagram, href: "https://instagram.com/nexwavy", label: "Instagram" },
              ].map(({ Icon, href, label }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 hover:border-[#3069B0] hover:text-[#3069B0] transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-[10px] font-bold uppercase tracking-widest text-white/30">Contact</h4>
            <ul className="space-y-3.5">
              {[
                { Icon: Mail, label: "hello@nexwavy.com", href: "mailto:hello@nexwavy.com" },
                { Icon: Phone, label: "+234 816 969 7844", href: "tel:+2348169697844" },
                { Icon: MessageCircle, label: "WhatsApp", href: whatsappUrl, external: true },
                { Icon: MapPin, label: "Lagos, Nigeria", href: "#" },
              ].map(({ Icon, label, href, external }, i) => (
                <li key={i}>
                  <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="flex items-center gap-2.5 text-sm text-white/55 hover:text-[#3069B0] transition-colors">
                    <Icon className="h-4 w-4 shrink-0 text-[#3069B0]" />{label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[10px] font-bold uppercase tracking-widest text-white/30">Explore</h4>
            <ul className="space-y-3.5">
              {["Home", "About", "Services", "Solutions", "AI Training", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-white/55 hover:text-[#3069B0] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[10px] font-bold uppercase tracking-widest text-white/30">Legal</h4>
            <ul className="space-y-3.5">
              {["Privacy Policy", "Terms of Use", "Refund Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/55 hover:text-[#3069B0] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-8">
          <p className="text-xs text-white/30">© 2025 Nexwavy Solutions Ltd. All rights reserved.</p>
          <p className="text-xs font-bold text-white/20 uppercase tracking-widest">Automation · AI · Advisory · Lagos</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ROOT ───────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <NavBar />
      <main>
        <Hero />
        <Challenges />
        <Services />
        <ExecutionLoop />
        <WhyNexwavy />
        <WhoWeHelp />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
