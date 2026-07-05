import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, MessageCircle, Zap, BrainCircuit, Lightbulb,
  BarChart3, ClipboardCheck, Search, Map, Wrench, Hammer, GraduationCap, TrendingUp,
  Building2, School, ShoppingCart, Briefcase, Users, User, Menu, X, Phone, Mail, MapPin,
  Linkedin, Twitter, Instagram, ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" } })
};

const whatsappUrl = "https://wa.me/2348169697844?text=Hi%20Nexwavy%2C%20I%27d%20like%20to%20talk%20about%20a%20project";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "border-b border-[#E5E7EB] bg-white/95 shadow-sm backdrop-blur-md"
        : "bg-white/80 backdrop-blur-sm"}`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 shrink-0" data-testid="logo">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3069B0]">
            <span className="font-heading text-base font-bold text-white leading-none">N</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-[15px] font-bold leading-tight text-[#071626]">Nexwavy</span>
            <span className="text-[10px] font-medium tracking-wide text-[#697586]">Solutions</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {["Home", "About", "Services", "AI Training", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="rounded-full px-4 py-2 text-[13px] font-semibold text-[#697586] transition-colors hover:bg-[#F4F7FB] hover:text-[#3069B0]"
              data-testid={`nav-${item.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={whatsappUrl} target="_blank" rel="noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-5 text-[13px] font-semibold text-[#071626] transition-all hover:border-[#3069B0] hover:text-[#3069B0]"
            data-testid="nav-whatsapp"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Chat on WhatsApp
          </a>
          <a
            href="mailto:hello@nexwavy.com"
            className="inline-flex h-9 items-center rounded-full bg-[#3069B0] px-5 text-[13px] font-semibold text-white shadow-md shadow-[#3069B0]/25 transition-all hover:bg-[#071626]"
            data-testid="nav-start"
          >
            Book Consultation
          </a>
        </div>

        <button
          className="lg:hidden rounded-md p-2 text-[#071626]"
          onClick={() => setOpen(!open)}
          data-testid="nav-mobile-toggle"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#E5E7EB] bg-white px-6 py-4 space-y-2">
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
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-2 rounded-full border border-[#E5E7EB] py-2.5 text-sm font-semibold text-[#071626]">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <a href="mailto:hello@nexwavy.com" className="flex w-full items-center justify-center rounded-full bg-[#3069B0] py-2.5 text-sm font-semibold text-white">
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(rgba(48,105,176,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(48,105,176,0.05) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 80%)"
        }}
      />
      {/* Blue glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-96 -translate-x-1/2 rounded-full bg-[#3069B0]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-0 lg:px-8 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: Copy */}
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            <motion.div custom={0} variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#3069B0]/20 bg-[#3069B0]/5 px-4 py-1.5"
            >
              <span className="h-2 w-2 rounded-full bg-[#1E90FF] animate-pulse" />
              <span className="text-xs font-bold tracking-wide text-[#3069B0] uppercase">Now onboarding — AI Training & Automation</span>
            </motion.div>

            <motion.h1 custom={1} variants={fadeUp}
              className="font-heading text-4xl font-bold leading-[1.12] tracking-tight text-[#071626] md:text-5xl lg:text-[3.5rem] mb-6"
            >
              We help growing businesses replace{" "}
              <span className="text-[#3069B0]">manual work</span>{" "}
              with smarter digital systems.
            </motion.h1>

            <motion.p custom={2} variants={fadeUp}
              className="text-lg leading-relaxed text-[#697586] mb-8 max-w-xl"
            >
              We turn scattered spreadsheets, WhatsApp threads, and paper forms into simple digital systems your team can actually use — so approvals move faster, records stay clean, and you see exactly what's happening across the business.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
              <a href="mailto:hello@nexwavy.com"
                className="inline-flex h-12 items-center rounded-full bg-[#3069B0] px-7 text-sm font-bold text-white shadow-lg shadow-[#3069B0]/30 transition-all hover:bg-[#071626] hover:-translate-y-0.5"
                data-testid="hero-cta-primary"
              >
                Start a Project <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-7 text-sm font-bold text-[#071626] transition-all hover:border-[#3069B0] hover:text-[#3069B0]"
                data-testid="hero-cta-whatsapp"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </motion.div>

            {/* Tags */}
            <motion.div custom={4} variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
              {["Business Automation", "AI Training", "IT Advisory"].map((tag) => (
                <span key={tag} className="rounded-full border border-[#E5E7EB] bg-[#F4F7FB] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#697586]">
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div custom={5} variants={fadeUp}
              className="flex items-center gap-8 border-t border-[#E5E7EB] pt-8"
            >
              {[
                { n: "3 Services", label: "Automation, AI Training, IT Advisory" },
                { n: "Lagos", label: "Nigeria — serving businesses across Africa" },
                { n: "Outcome-led", label: "Technology only earns its place when it changes the result" }
              ].map((s, i) => (
                <div key={i} className="min-w-0">
                  <div className="font-heading text-base font-bold text-[#071626]">{s.n}</div>
                  <div className="text-[11px] text-[#697586] leading-tight mt-0.5 max-w-[120px]">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image + Workflow Card */}
          <div className="relative flex flex-col gap-5">
            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="relative overflow-hidden rounded-2xl border border-[#E5E7EB] shadow-xl shadow-[#071626]/10"
              style={{ height: 260 }}
            >
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=85&auto=format&fit=crop"
                alt="African business team collaborating on digital systems"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071626]/60 via-[#071626]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-heading font-bold text-lg leading-snug">Replacing manual work with systems your team can actually use.</p>
              </div>
            </motion.div>

            {/* Illustrative Workflow Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
              className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-lg shadow-[#071626]/8"
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-[#3069B0] uppercase mb-1">Illustrative Workflow</p>
                  <h3 className="font-heading text-base font-bold text-[#071626] leading-snug max-w-xs">Manual work becomes visible, trackable, and easier to manage.</h3>
                </div>
                <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-[#071626]">
                  <span className="font-heading text-base font-bold text-white">N</span>
                </div>
              </div>

              <div className="space-y-3 mb-5">
                {[
                  { icon: ClipboardCheck, title: "Requests captured", sub: "Form or portal", color: "#3069B0" },
                  { icon: CheckCircle2, title: "Approvals tracked", sub: "Clear status", color: "#1E90FF" },
                  { icon: BarChart3, title: "Reporting visible", sub: "Simple dashboard", color: "#3069B0" },
                ].map(({ icon: Icon, title, sub, color }, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-xl border border-[#E5E7EB] bg-[#F4F7FB] px-4 py-3">
                    <Icon className="h-4 w-4 shrink-0" style={{ color }} />
                    <div>
                      <p className="text-sm font-semibold text-[#071626]">{title}</p>
                      <p className="text-xs text-[#697586]">{sub}</p>
                    </div>
                    <ChevronRight className="ml-auto h-3.5 w-3.5 text-[#E5E7EB]" />
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-[#071626] px-4 py-3 text-xs text-white/80">
                <span className="font-bold text-white">Use cases:</span> approvals, attendance, request intake, field reports, dashboards, simple internal portals.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Challenges() {
  const problems = [
    { icon: ClipboardCheck, title: "Slow approvals", desc: "Requests sit in chats, emails, or paper forms with no clear owner, status, or timeline." },
    { icon: BarChart3, title: "Weak reporting", desc: "Owners and managers cannot see what is happening in real time across operations." },
    { icon: Users, title: "Manual follow-up", desc: "Teams spend too much time checking records, reminding people, and repeating admin work." },
    { icon: Briefcase, title: "Scattered tools", desc: "Important information lives across WhatsApp, Excel, email, notebooks, and different staff phones." },
  ];

  return (
    <section id="about" className="bg-[#071626] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5"
          >
            <motion.p custom={0} variants={fadeUp} className="mb-3 text-[10px] font-bold tracking-widest text-[#1E90FF] uppercase">Modern Challenges</motion.p>
            <motion.h2 custom={1} variants={fadeUp} className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl mb-6">
              Manual work is quietly slowing too many growing businesses down.
            </motion.h2>
            <motion.div custom={2} variants={fadeUp} className="space-y-4 text-[#697586] text-[15px] leading-relaxed mb-8">
              <p>Many businesses still run critical operations through WhatsApp messages, Excel sheets, paper forms, scattered approvals, and repeated follow-ups.</p>
              <p>The result is predictable: delayed execution, weak reporting, avoidable errors, missed opportunities, and poor visibility for decision-makers.</p>
              <p className="font-semibold text-white/90">The companies that improve fastest are not always the biggest. They are the ones that build better systems earlier.</p>
            </motion.div>
            {/* Image inside dark section */}
            <motion.div custom={3} variants={fadeUp} className="overflow-hidden rounded-2xl border border-white/10 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1664575599736-c5197c684b67?w=700&q=85&auto=format&fit=crop"
                alt="Team reviewing business data and dashboards"
                className="w-full h-48 object-cover opacity-80"
              />
            </motion.div>
          </motion.div>

          {/* Right: Problem cards */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-5"
          >
            {problems.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i} custom={i} variants={fadeUp}
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition-all hover:border-[#3069B0]/40 hover:bg-[#3069B0]/10"
              >
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

function Services() {
  const services = [
    {
      icon: Zap,
      title: "Business Automation & Productivity Systems",
      desc: "We design and build usable systems for request tracking, approvals, attendance, field reporting, customer intake, dashboards, and simple internal portals.",
      bullets: ["Request tracking & approvals", "Attendance & field reporting", "Operational dashboards", "Simple internal portals"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=85&auto=format&fit=crop",
      cta: "Explore Services",
      color: "#3069B0"
    },
    {
      icon: BrainCircuit,
      title: "AI Productivity Training",
      desc: "We help professionals and teams use AI for writing, research, reporting, planning, spreadsheet support, and better day-to-day execution.",
      bullets: ["Clear prompting techniques", "Daily work AI use cases", "Document & email support", "Team usage rules & data safety"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=85&auto=format&fit=crop",
      cta: "View Training",
      color: "#1E90FF"
    },
    {
      icon: Lightbulb,
      title: "IT Advisory & Process Review",
      desc: "We help business owners and teams understand what to fix, what to automate, and whether the best answer is a tool, a workflow change, or both.",
      bullets: ["Workflow & process review", "Automation readiness audit", "Build vs. buy decisions", "Implementation planning"],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=85&auto=format&fit=crop",
      cta: "Start a Project",
      color: "#3069B0"
    }
  ];

  return (
    <section id="services" className="bg-[#F4F7FB] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
          <motion.p custom={0} variants={fadeUp} className="mb-3 text-[10px] font-bold tracking-widest text-[#3069B0] uppercase">What Nexwavy Does</motion.p>
          <motion.h2 custom={1} variants={fadeUp} className="font-heading text-3xl font-bold text-[#071626] md:text-4xl max-w-2xl">
            Business automation first. AI training and advisory where they support better execution.
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, bullets, image, cta, color }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#071626]/10"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-44">
                <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${i === 1 ? '#071626' : '#071626'}/70, transparent)` }} />
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/15 backdrop-blur-sm">
                    <Icon className="h-4.5 w-4.5 text-white" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-heading text-[17px] font-bold text-[#071626] mb-3 leading-snug">{title}</h3>
                <p className="text-sm text-[#697586] leading-relaxed mb-5">{desc}</p>

                <ul className="space-y-2 mb-6">
                  {bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-[#697586]">
                      <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:hello@nexwavy.com"
                  className="mt-auto inline-flex items-center text-sm font-bold transition-colors"
                  style={{ color }}
                  data-testid={`service-cta-${i}`}
                >
                  {cta} <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tagline band */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 rounded-2xl border border-[#3069B0]/15 bg-[#3069B0]/5 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm font-semibold text-[#071626] max-w-xl">
            We do not build custom software where a simpler existing tool is enough. Sometimes the right answer is a spreadsheet cleanup, a no-code form, or a better process.
          </p>
          <a href="mailto:hello@nexwavy.com" className="shrink-0 inline-flex h-10 items-center rounded-full bg-[#3069B0] px-6 text-sm font-bold text-white transition-colors hover:bg-[#071626]">
            Talk to us →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

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
      {/* Background N pattern */}
      <div className="pointer-events-none absolute right-0 top-0 text-[320px] font-heading font-black text-white/[0.025] select-none leading-none translate-x-16 -translate-y-8">N</div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid lg:grid-cols-2 gap-8 items-end">
          <div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="mb-3 text-[10px] font-bold tracking-widest text-[#1E90FF] uppercase">The Nexwavy Method</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="font-heading text-3xl font-bold text-white md:text-4xl">
              The Nexwavy Execution Loop
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-[#697586] text-[15px] leading-relaxed max-w-xl">
            We keep the work simple and disciplined: understand the workflow, build only what is needed, train the users, and improve from real usage.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map(({ num, icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 transition-all hover:border-[#3069B0]/40 hover:bg-[#3069B0]/10"
            >
              <div className="absolute right-4 top-4 font-heading text-5xl font-black text-white/[0.06] select-none">{num}</div>
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#3069B0]/20 border border-[#3069B0]/30">
                <Icon className="h-5 w-5 text-[#1E90FF]" />
              </div>
              <div className="mb-1 text-[10px] font-bold tracking-widest text-[#1E90FF]/70 uppercase">{num}</div>
              <h3 className="font-heading text-base font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyNexwavy() {
  const points = ["Business-first thinking", "Clear reporting", "Clean records", "Usable tools", "Measured rollout", "Dependable support"];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p custom={0} variants={fadeUp} className="mb-3 text-[10px] font-bold tracking-widest text-[#3069B0] uppercase">Why Nexwavy</motion.p>
            <motion.h2 custom={1} variants={fadeUp} className="font-heading text-3xl font-bold text-[#071626] md:text-4xl mb-5 leading-tight">
              Technology only earns its place when it changes the result.
            </motion.h2>
            <motion.p custom={2} variants={fadeUp} className="text-[15px] text-[#697586] leading-relaxed mb-8 max-w-xl">
              We focus on the workflow first. That means understanding the request, record, approval, report, or training problem before deciding whether the answer is a spreadsheet cleanup, a form, a no-code tool, or a custom build.
            </motion.p>
            <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-2.5">
              {points.map((pt, i) => (
                <span key={i} className="inline-flex items-center gap-2 rounded-full border border-[#3069B0]/20 bg-[#3069B0]/5 px-4 py-2 text-sm font-semibold text-[#3069B0]">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" /> {pt}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Proof note + image */}
          <div className="space-y-5">
            {/* Image */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-2xl border border-[#E5E7EB] shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=85&auto=format&fit=crop"
                alt="Business team reviewing workflow strategy"
                className="w-full h-52 object-cover"
              />
            </motion.div>

            {/* Proof note card */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl border border-[#E5E7EB] bg-[#F4F7FB] p-7"
            >
              <div className="mb-1 text-[10px] font-bold tracking-widest text-[#3069B0] uppercase">Proof Note</div>
              <h3 className="font-heading text-lg font-bold text-[#071626] mb-3">Building proof the right way</h3>
              <p className="text-sm text-[#697586] leading-relaxed mb-5">
                Nexwavy is currently focused on selected pilot and early client engagements across automation, reporting, and AI productivity training. As these projects conclude, we will publish verified outcomes, lessons, and client-approved case notes.
              </p>
              <div className="rounded-xl border border-[#3069B0]/15 bg-white px-4 py-3 text-xs font-medium text-[#697586]">
                <span className="font-bold text-[#3069B0]">Note: </span>We will only publish verified outcomes, lessons, and client-approved case notes.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid lg:grid-cols-2 gap-8 items-end">
          <div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="mb-3 text-[10px] font-bold tracking-widest text-[#3069B0] uppercase">Who We Help</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="font-heading text-3xl font-bold text-[#071626] md:text-4xl">
              Built for growing teams that want cleaner execution.
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-[15px] text-[#697586] leading-relaxed">
            From SMEs to corporate departments, the focus stays the same: less manual friction, more visibility, and better day-to-day control.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {audiences.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex gap-4 rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all hover:border-[#3069B0]/30 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="shrink-0 mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#3069B0]/8 border border-[#3069B0]/15">
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

function Pricing() {
  const offers = [
    {
      badge: "Clarity first",
      title: "Paid Discovery Session",
      price: "From NGN 100,000",
      desc: "A focused review of your current workflow, friction points, reporting gaps, and next sensible system decision.",
      cta: "Book a Discovery Session",
      featured: false
    },
    {
      badge: "Most popular",
      title: "AI Productivity Masterclass",
      price: "NGN 75,000 / participant",
      desc: "Hands-on AI training for professionals, business owners, and teams that want a clearer and safer way to use AI at work.",
      cta: "Register for Training",
      featured: true
    },
    {
      badge: "Build ready",
      title: "Starter Automation Project",
      price: "From NGN 500,000",
      desc: "A focused automation build for one business process — attendance, request tracking, dashboards, intake, or approvals.",
      cta: "Discuss Automation",
      featured: false
    },
    {
      badge: "Enterprise",
      title: "Team & Corporate AI Training",
      price: "From NGN 500,000 / session",
      desc: "Private AI productivity training for SMEs and teams, with corporate department and executive programmes available.",
      cta: "Request Corporate Training",
      featured: false
    }
  ];

  return (
    <section id="ai-training" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="mb-3 text-[10px] font-bold tracking-widest text-[#3069B0] uppercase">Starting Offers</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="font-heading text-3xl font-bold text-[#071626] md:text-4xl mb-3 max-w-2xl">
            Choose the next sensible starting point.
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-[#697586] max-w-2xl text-[15px]">
            Use discovery when you need clarity, training when your team needs capability, and a project conversation when the workflow already needs a build.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {offers.map(({ badge, title, price, desc, cta, featured }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`flex flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-xl ${featured
                ? "border-[#3069B0] bg-[#3069B0] text-white shadow-xl shadow-[#3069B0]/30"
                : "border-[#E5E7EB] bg-white shadow-sm hover:shadow-[#071626]/10"}`}
            >
              <span className={`mb-5 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${featured ? "bg-white/20 text-white" : "bg-[#F4F7FB] text-[#3069B0]"}`}>
                {badge}
              </span>
              <h3 className={`font-heading text-base font-bold mb-2 ${featured ? "text-white" : "text-[#071626]"}`}>{title}</h3>
              <p className={`text-lg font-bold mb-4 ${featured ? "text-white" : "text-[#3069B0]"}`}>{price}</p>
              <p className={`text-sm leading-relaxed flex-1 mb-6 ${featured ? "text-white/80" : "text-[#697586]"}`}>{desc}</p>
              <a
                href="mailto:hello@nexwavy.com"
                className={`inline-flex items-center justify-center gap-2 rounded-full py-2.5 px-5 text-sm font-bold transition-all ${featured
                  ? "bg-white text-[#3069B0] hover:bg-[#F4F7FB]"
                  : "border border-[#E5E7EB] text-[#071626] hover:border-[#3069B0] hover:text-[#3069B0]"}`}
                data-testid={`offer-cta-${i}`}
              >
                {cta} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl border border-[#E5E7EB] bg-[#F4F7FB] px-7 py-5"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 border border-[#25D366]/20">
              <MessageCircle className="h-5 w-5 text-[#25D366]" />
            </div>
            <div>
              <p className="font-bold text-[#071626] text-sm">Chat on WhatsApp</p>
              <p className="text-xs text-[#697586]">Already know what workflow you want to fix? Speak with us before filling any form.</p>
            </div>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer"
            className="shrink-0 inline-flex h-10 items-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white transition-all hover:bg-[#1ea854]"
            data-testid="whatsapp-banner"
          >
            <MessageCircle className="h-4 w-4" /> Message Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#071626] py-20 lg:py-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071626] via-[#071626]/95 to-[#071626]/80" />
      </div>
      {/* N watermark */}
      <div className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 font-heading text-[280px] font-black text-white/[0.03] select-none">N</div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="mb-4 text-[10px] font-bold tracking-widest text-[#1E90FF] uppercase">Ready to begin?</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="font-heading text-3xl font-bold text-white md:text-5xl mb-5 leading-tight">
            Replace manual work with a system that actually works.
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-[#697586] text-lg mb-10 leading-relaxed">
            We're ready when you are. Reach out to start a conversation about your processes, team, and what needs to change first.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a href="mailto:hello@nexwavy.com"
              className="inline-flex h-12 items-center rounded-full bg-white px-8 text-sm font-bold text-[#3069B0] shadow-xl transition-all hover:bg-[#F4F7FB] hover:-translate-y-0.5"
              data-testid="cta-start"
            >
              Start a Project <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              data-testid="cta-whatsapp"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8"
          >
            {[
              { label: "hello@nexwavy.com", href: "mailto:hello@nexwavy.com" },
              { label: "+234 816 969 7844", href: "tel:+2348169697844" },
              { label: "Lagos, Nigeria", href: "#" }
            ].map(({ label, href }, i) => (
              <a key={i} href={href} className="text-sm text-[#697586] hover:text-white transition-colors">{label}</a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3069B0]">
                <span className="font-heading text-sm font-bold text-white">N</span>
              </div>
              <span className="font-heading text-base font-bold text-[#071626]">Nexwavy Solutions</span>
            </div>
            <p className="text-xs font-bold text-[#3069B0] uppercase tracking-widest mb-3">Business Automation · AI Training · IT Advisory</p>
            <p className="text-sm text-[#697586] leading-relaxed mb-5">Replacing scattered manual work with clean digital systems for growing Nigerian businesses.</p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/nexwavy" },
                { Icon: Twitter, href: "https://x.com/nexwavy" },
                { Icon: Instagram, href: "https://instagram.com/nexwavy" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#697586] transition-colors hover:border-[#3069B0] hover:text-[#3069B0]">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#071626]/40">Contact</h4>
            <ul className="space-y-3 text-sm text-[#697586]">
              <li className="flex items-center gap-2.5"><Mail className="h-4 w-4 shrink-0 text-[#3069B0]" /><a href="mailto:hello@nexwavy.com" className="hover:text-[#3069B0] transition-colors">hello@nexwavy.com</a></li>
              <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 shrink-0 text-[#3069B0]" /><a href="tel:+2348169697844" className="hover:text-[#3069B0] transition-colors">+234 816 969 7844</a></li>
              <li className="flex items-center gap-2.5"><MessageCircle className="h-4 w-4 shrink-0 text-[#3069B0]" /><a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-[#3069B0] transition-colors">WhatsApp</a></li>
              <li className="flex items-center gap-2.5"><MapPin className="h-4 w-4 shrink-0 text-[#3069B0]" /><span>Lagos, Nigeria</span></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#071626]/40">Explore</h4>
            <ul className="space-y-3 text-sm text-[#697586]">
              {["Home", "About", "Services", "Solutions", "AI Training", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:text-[#3069B0] transition-colors hover:translate-x-0.5 inline-block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#071626]/40">Legal</h4>
            <ul className="space-y-3 text-sm text-[#697586]">
              {["Privacy Policy", "Terms of Use", "Refund Policy"].map((item) => (
                <li key={item}><a href="#" className="hover:text-[#3069B0] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E5E7EB] pt-6">
          <p className="text-xs text-[#697586]">© 2025 Nexwavy Solutions Ltd. All rights reserved.</p>
          <p className="text-xs font-bold text-[#697586] uppercase tracking-widest">Automation · AI · Advisory</p>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
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

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
