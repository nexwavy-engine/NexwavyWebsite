import React, { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, Link } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, MessageCircle } from "lucide-react";

const queryClient = new QueryClient();

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Home() {
  const whatsappUrl = "https://wa.me/2348169697844?text=Hi%20Nexwavy%2C%20I%27d%20like%20to%20talk%20about%20a%20project";

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-accent">
              <span className="font-heading text-xl font-bold text-white">N</span>
            </div>
            <span className="font-heading text-lg font-bold text-foreground">Nexwavy Solutions</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "About", "Services", "Solutions", "AI Training", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" data-testid={`nav-${item.toLowerCase().replace(" ", "-")}`}>
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-transparent px-6 text-sm font-medium transition-colors hover:bg-muted" data-testid="nav-whatsapp">
              Chat on WhatsApp
            </a>
            <a href="#contact" className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90" data-testid="nav-contact">
              Start a Project
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden pt-24 pb-32 lg:pt-32 lg:pb-40">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
                <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground">
                  <span className="mr-2 flex h-2 w-2 rounded-full bg-secondary"></span>
                  Now onboarding businesses for AI training and automation projects.
                </motion.div>
                <motion.h1 variants={fadeInUp} className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl mb-6">
                  We help growing businesses replace manual work with smarter digital systems.
                </motion.h1>
                <motion.p variants={fadeInUp} className="text-lg text-foreground/70 mb-10 leading-relaxed max-w-xl">
                  We turn scattered spreadsheets, WhatsApp threads, and paper forms into simple digital systems your team can actually use — so approvals move faster, records stay clean, and you can see what is happening across the business.
                </motion.p>
                <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 mb-10">
                  <a href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90" data-testid="hero-start">
                    Start a Project
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-transparent px-8 text-base font-medium transition-colors hover:bg-muted" data-testid="hero-whatsapp">
                    Chat on WhatsApp
                  </a>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
                  <span>Business Automation</span>
                  <span className="hidden sm:inline text-border">|</span>
                  <span>AI Training</span>
                  <span className="hidden sm:inline text-border">|</span>
                  <span>IT Advisory</span>
                </motion.div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative mx-auto w-full max-w-md lg:ml-auto lg:mr-0">
                <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-3xl bg-accent/5 blur-2xl"></div>
                <div className="relative rounded-3xl border border-border bg-card p-8 shadow-xl">
                  <p className="mb-2 text-xs font-bold tracking-wider text-primary uppercase">ILLUSTRATIVE WORKFLOW</p>
                  <h3 className="font-heading text-xl font-bold mb-8">Manual work becomes visible, trackable, and easier to manage.</h3>
                  
                  <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[1.4rem] before:w-0.5 before:-translate-x-px before:bg-border">
                    {[
                      { title: "Requests captured", desc: "Form or portal" },
                      { title: "Approvals tracked", desc: "Clear status" },
                      { title: "Reporting visible", desc: "Simple dashboard" }
                    ].map((step, i) => (
                      <div key={i} className="relative flex items-start gap-6">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-4 border-card bg-accent shadow-sm">
                          <span className="font-heading text-sm font-bold text-white">N</span>
                        </div>
                        <div className="pt-1.5">
                          <p className="font-semibold text-foreground">{step.title}</p>
                          <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 rounded-2xl bg-muted p-5 text-sm text-foreground/80">
                    <span className="font-semibold text-foreground">Example use cases:</span> approvals, attendance, request intake, field reports, dashboards, and simple internal portals.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section id="about" className="bg-accent py-24 text-white lg:py-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="lg:col-span-5">
                <motion.p variants={fadeInUp} className="mb-4 text-sm font-bold tracking-wider text-secondary uppercase">Modern Challenges</motion.p>
                <motion.h2 variants={fadeInUp} className="font-heading text-3xl font-bold leading-tight md:text-4xl mb-8">
                  Manual work is quietly slowing too many growing businesses down.
                </motion.h2>
                <motion.div variants={fadeInUp} className="space-y-6 text-white/80">
                  <p>Many businesses still run critical operations through WhatsApp messages, Excel sheets, paper forms, scattered approvals, and repeated follow-ups.</p>
                  <p>The result is predictable: delayed execution, weak reporting, avoidable errors, missed opportunities, and poor visibility for decision-makers.</p>
                  <p className="font-medium text-white">The companies that improve fastest are not always the biggest. They are the ones that build better systems earlier.</p>
                </motion.div>
              </motion.div>
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Slow approvals", desc: "Requests sit in chats, emails, or paper forms with no clear owner, status, or timeline." },
                  { title: "Weak reporting", desc: "Owners and managers cannot see what is happening in real time across operations." },
                  { title: "Manual follow-up", desc: "Teams spend too much time checking records, reminding people, and repeating admin work." },
                  { title: "Scattered tools", desc: "Important information lives across WhatsApp, Excel, email, notebooks, and different staff phones." }
                ].map((card, i) => (
                  <motion.div key={i} variants={fadeInUp} className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-transform hover:-translate-y-1">
                    <h3 className="font-heading text-xl font-bold mb-3">{card.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{card.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 lg:py-32">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mx-auto max-w-3xl text-center mb-16">
              <motion.p variants={fadeInUp} className="mb-4 text-sm font-bold tracking-wider text-primary uppercase">What Nexwavy does</motion.p>
              <motion.h2 variants={fadeInUp} className="font-heading text-3xl font-bold md:text-4xl mb-6">
                Business automation first. AI training and advisory where they support better execution.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-foreground/70">
                Nexwavy helps growing businesses move from manual operations to structured digital execution — through automation, AI training, and IT advisory.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Business automation and productivity systems", 
                  desc: "We design and build usable systems for request tracking, approvals, attendance, field reporting, customer intake, dashboards, and simple internal portals.",
                  cta: "Explore Our Services", link: "#services"
                },
                { 
                  title: "AI productivity training", 
                  desc: "We help professionals and teams use AI for writing, research, reporting, planning, spreadsheet support, and better day-to-day execution.",
                  cta: "View AI Training", link: "#ai-training"
                },
                { 
                  title: "IT advisory and process review", 
                  desc: "We help business owners and teams understand what to fix, what to automate, and whether the best answer is a tool, a workflow change, or both.",
                  cta: "Start a Project", link: "#contact"
                }
              ].map((svc, i) => (
                <motion.div key={i} variants={fadeInUp} className="group flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <h3 className="font-heading text-xl font-bold mb-4">{svc.title}</h3>
                  <p className="text-foreground/70 mb-8 flex-grow">{svc.desc}</p>
                  <a href={svc.link} className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-primary/80" data-testid={`service-link-${i}`}>
                    {svc.cta} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Execution Loop */}
        <section className="bg-muted py-24 lg:py-32">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mx-auto max-w-3xl text-center mb-16">
              <motion.p variants={fadeInUp} className="mb-4 text-sm font-bold tracking-wider text-primary uppercase">The Nexwavy Method</motion.p>
              <motion.h2 variants={fadeInUp} className="font-heading text-3xl font-bold md:text-4xl mb-6">
                The Nexwavy Execution Loop
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-foreground/70">
                We keep the work simple and disciplined: understand the workflow, build only what is needed, train the users, and improve from real usage.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { num: "01", title: "Diagnose the workflow", desc: "We study how the work currently moves, where delays happen, and what the team is already using." },
                { num: "02", title: "Map the pain", desc: "We identify the repeated manual steps, missing records, unclear approvals, and reporting gaps." },
                { num: "03", title: "Design the simplest fix", desc: "We recommend the lightest tool or process that can solve the problem properly." },
                { num: "04", title: "Build the working version", desc: "We create the form, dashboard, portal, automation, or workflow needed to run the process better." },
                { num: "05", title: "Train the users", desc: "We help the team understand how to use the system and what changes in their daily routine." },
                { num: "06", title: "Measure and improve", desc: "We review adoption, fix what is not working, and improve the system based on real usage." }
              ].map((step, i) => (
                <div key={i} className="relative rounded-3xl border border-border/60 bg-card p-8 shadow-sm overflow-hidden">
                  <div className="absolute -right-4 -top-6 text-9xl font-heading font-black text-muted/40 select-none">{step.num}</div>
                  <div className="relative">
                    <h3 className="font-heading text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Nexwavy */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                <motion.p variants={fadeInUp} className="mb-4 text-sm font-bold tracking-wider text-primary uppercase">Why Nexwavy</motion.p>
                <motion.h2 variants={fadeInUp} className="font-heading text-3xl font-bold leading-tight md:text-4xl mb-6">
                  Technology only earns its place when it changes the result.
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-lg text-foreground/70 mb-10">
                  We focus on the workflow first. That means understanding the request, record, approval, report, or training problem before deciding whether the answer is a spreadsheet cleanup, a form, a no-code tool, or a custom build.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-10">
                  {["Business-first thinking", "Clear reporting", "Clean records", "Usable tools", "Measured rollout", "Dependable support"].map((tag, i) => (
                    <span key={i} className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl border border-border bg-card p-10 shadow-lg">
                <h3 className="font-heading text-2xl font-bold mb-4">Building proof the right way</h3>
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  Nexwavy is currently focused on selected pilot and early client engagements across automation, reporting, and AI productivity training. As these projects conclude, we will publish verified outcomes, lessons, and client-approved case notes.
                </p>
                <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-5 text-sm font-medium text-secondary-foreground">
                  <span className="text-secondary font-bold mr-2">Note:</span> We will only publish verified outcomes, lessons, and client-approved case notes.
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who We Help */}
        <section id="solutions" className="bg-muted/50 py-24 lg:py-32 border-y border-border">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mx-auto max-w-3xl text-center mb-16">
              <motion.p variants={fadeInUp} className="mb-4 text-sm font-bold tracking-wider text-primary uppercase">Who we help</motion.p>
              <motion.h2 variants={fadeInUp} className="font-heading text-3xl font-bold md:text-4xl mb-6">
                Built for growing teams that want cleaner execution.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-foreground/70">
                From SMEs to corporate departments, the focus stays the same: less manual friction, more visibility, and better day-to-day control.
              </motion.p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "SMEs and growing teams", desc: "Teams that need a cleaner way to manage requests, approvals, tracking, reporting, and follow-up." },
                { title: "Schools and training businesses", desc: "Organizations that need better coordination around attendance, registration, records, communication, and reporting." },
                { title: "Retail and inventory-led businesses", desc: "Businesses that want clearer sales visibility, stock tracking, customer records, and branch-level reporting." },
                { title: "Service businesses", desc: "Teams that need a more structured way to handle customer requests, job status, field activity, and open work." },
                { title: "Corporate departments", desc: "Departments that want practical AI enablement and a more disciplined approach to repetitive internal processes." },
                { title: "Founders and business owners", desc: "Leaders who want clarity on what to fix first before spending on the wrong tool or build." }
              ].map((aud, i) => (
                <div key={i} className="rounded-2xl bg-card p-8 shadow-sm border border-border">
                  <h3 className="font-heading text-lg font-bold mb-3">{aud.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{aud.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing / Offers */}
        <section id="ai-training" className="py-24 lg:py-32">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mx-auto max-w-3xl text-center mb-16">
              <motion.p variants={fadeInUp} className="mb-4 text-sm font-bold tracking-wider text-primary uppercase">Starting offers</motion.p>
              <motion.h2 variants={fadeInUp} className="font-heading text-3xl font-bold md:text-4xl mb-6">
                Choose the next sensible starting point.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-foreground/70">
                Use discovery when you need clarity, training when your team needs capability, and a project conversation when the workflow already needs a build.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                { title: "Paid Discovery Session", price: "From NGN 100,000", desc: "A focused review of your current workflow, friction points, reporting gaps, and next sensible system decision.", cta: "Book a Discovery Session" },
                { title: "AI Productivity Masterclass", price: "NGN 75,000 per participant", desc: "Hands-on AI training for professionals, business owners, and teams that want a clearer and safer way to use AI at work.", cta: "Register for AI Training" },
                { title: "Starter Automation Project", price: "From NGN 500,000", desc: "A focused automation build for one business process such as attendance, request tracking, dashboards, intake, or approvals.", cta: "Discuss Automation" },
                { title: "Team & Corporate AI Training", price: "Corporate training", desc: "Private AI productivity training for SMEs and teams, with corporate department and executive programmes available.", cta: "Request Corporate Training" }
              ].map((offer, i) => (
                <div key={i} className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm">
                  <div className="mb-6 border-b border-border pb-6">
                    <h3 className="font-heading text-xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-lg font-semibold text-primary">{offer.price}</p>
                  </div>
                  <p className="text-foreground/70 mb-8 flex-grow leading-relaxed">{offer.desc}</p>
                  <a href="#contact" className="inline-flex items-center text-sm font-semibold text-foreground hover:text-primary transition-colors">
                    {offer.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-secondary/10 border border-secondary/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-white">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Chat on WhatsApp</p>
                  <p className="text-sm text-foreground/70">If you already know what workflow you want to fix, you can speak with us directly before filling any form.</p>
                </div>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="shrink-0 inline-flex h-10 items-center justify-center rounded-full bg-secondary px-6 text-sm font-medium text-white shadow transition-colors hover:bg-secondary/90">
                Message Us
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-accent py-24 text-white text-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-heading text-4xl font-bold mb-6">Ready to replace manual work with a system that actually works?</h2>
            <p className="text-lg text-white/70 mb-10">We're ready when you are. Reach out to start a conversation about your processes.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="mailto:hello@nexwavy.com" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-accent shadow transition-colors hover:bg-white/90">
                Start a Project
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-transparent px-8 text-base font-medium text-white transition-colors hover:bg-white/10">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-16">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-accent">
                  <span className="font-heading text-sm font-bold text-white">N</span>
                </div>
                <span className="font-heading text-lg font-bold">Nexwavy Solutions</span>
              </div>
              <p className="text-sm text-foreground/70 font-medium mb-4">Business Automation · AI Training · IT Advisory</p>
              <p className="text-sm text-foreground/60 mb-6">Replacing scattered manual work with clean digital systems for growing Nigerian businesses.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 uppercase text-xs tracking-wider text-foreground/50">Contact</h4>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li><a href="mailto:hello@nexwavy.com" className="hover:text-primary transition-colors">hello@nexwavy.com</a></li>
                <li><a href="tel:+2348169697844" className="hover:text-primary transition-colors">+234 816 969 7844</a></li>
                <li><a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">WhatsApp</a></li>
                <li>Lagos, Nigeria</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 uppercase text-xs tracking-wider text-foreground/50">Explore</h4>
              <ul className="space-y-3 text-sm text-foreground/70">
                {["Home", "About", "Services", "Solutions", "AI Training", "Contact"].map(item => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:text-primary transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 uppercase text-xs tracking-wider text-foreground/50">Social & Legal</h4>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li><a href="https://www.linkedin.com/company/nexwavy" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="https://x.com/nexwavy" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">X (Twitter)</a></li>
                <li><a href="https://instagram.com/nexwavy" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
                <li className="pt-2"><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Use</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground/50">© 2025 Nexwavy Solutions Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
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
