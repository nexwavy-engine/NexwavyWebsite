import Image from "next/image";
import { PROCESS } from "@/lib/content/site";

export function HeroVisual() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] bg-[#071b2c] shadow-2xl sm:aspect-[5/4] lg:aspect-square">
      <Image
        src="/images/hero-photo.jpg"
        alt="Business professional coordinating work by phone and laptop"
        fill
        priority
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061a1f]/95 via-[#061a1f]/20 to-transparent" />
      <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-[#061a1f]/70 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm sm:left-7 sm:top-7">
        Illustrative workflow
      </span>
      <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-white/95 p-4 text-[#0b2630] shadow-xl sm:inset-x-7 sm:bottom-7 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#477069]">Purchase approvals</p>
            <p className="mt-1 text-sm font-extrabold sm:text-base">A clear path from request to decision</p>
          </div>
          <span className="hidden rounded-full bg-[#d9f4e9] px-3 py-1.5 text-[10px] font-bold text-[#15735e] sm:block">In progress</span>
        </div>
        <div className="mt-4 flex items-center gap-2 border-t border-[#dce7e9] pt-4 text-[10px] font-bold text-[#34505a] sm:gap-3 sm:text-xs">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#24ae8d]" /> <span className="whitespace-nowrap">Request</span>
          <span className="h-px min-w-3 flex-1 bg-[#b9d4cf]" />
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#24ae8d]" /> <span className="whitespace-nowrap">Budget</span>
          <span className="h-px min-w-3 flex-1 bg-[#b9d4cf]" />
          <span className="h-2 w-2 shrink-0 rounded-full border-2 border-[#3069b0]" /> <span className="whitespace-nowrap">Decision</span>
        </div>
      </div>
    </div>
  );
}

export function ChallengeVisual() {
  return (
    <div className="relative flex aspect-square items-center overflow-hidden rounded-[2rem] bg-[#071b2c] p-4 shadow-xl sm:aspect-[5/4] sm:p-6 lg:aspect-square">
      <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(#9cc6d2_1px,transparent_1px),linear-gradient(90deg,#9cc6d2_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="relative grid w-full grid-cols-2 items-center gap-2 sm:gap-4">
        <div className="min-h-64 -rotate-2 rounded-xl bg-[#e9e2d7] p-3 text-[#24333b] shadow-2xl sm:min-h-80 sm:p-5">
          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#986b4d] sm:text-[11px]">Before / manual</p>
          <div className="mt-4 -rotate-2 rounded-sm border border-[#d6cabb] bg-[#fbf7ee] p-3 shadow-md sm:mt-6 sm:p-4">
            <p className="text-[10px] font-bold sm:text-sm">Purchase request form</p>
            <div className="mt-4 space-y-3">
              <div className="h-px bg-[#b6aa9a]" /><div className="h-px w-4/5 bg-[#b6aa9a]" /><div className="h-px bg-[#b6aa9a]" /><div className="h-px w-3/5 bg-[#b6aa9a]" />
            </div>
            <p className="mt-5 text-[9px] font-bold text-[#9b5d4d] sm:text-xs">Waiting for sign-off</p>
          </div>
          <div className="ml-3 mt-3 w-4/5 rotate-3 rounded-sm bg-[#ffde78] p-3 text-[9px] font-bold text-[#473c29] shadow-md sm:text-xs">Who owns this request?</div>
        </div>
        <div className="min-h-64 rotate-2 rounded-xl bg-[#f7fbfb] p-3 text-[#0b2630] shadow-2xl sm:min-h-80 sm:p-5">
          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#137e86] sm:text-[11px]">After / visible</p>
          <div className="mt-4 rounded-lg border border-[#dbe9e9] bg-white p-3 sm:mt-6 sm:p-4">
            <p className="text-[10px] font-extrabold sm:text-sm">Operations overview</p>
            <div className="mt-4 space-y-3 text-[9px] font-semibold sm:text-xs">
              <div className="flex items-center justify-between gap-1"><span>New request</span><span className="rounded-full bg-[#def4e9] px-2 py-1 text-[#17755e]">Recorded</span></div>
              <div className="flex items-center justify-between gap-1"><span>Budget review</span><span className="rounded-full bg-[#e3eef8] px-2 py-1 text-[#3069b0]">Assigned</span></div>
              <div className="flex items-center justify-between gap-1"><span>Approval</span><span className="rounded-full bg-[#fff0d0] px-2 py-1 text-[#97610b]">Next</span></div>
            </div>
          </div>
          <p className="mt-4 text-[9px] font-bold text-[#477069] sm:text-xs">One owner. One record. A clear next step.</p>
        </div>
        <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-[#071b2c] bg-[#ffc857] text-lg font-black text-[#071b2c] sm:h-14 sm:w-14 sm:text-2xl" aria-hidden="true">→</span>
      </div>
    </div>
  );
}

export function SolutionsVisual() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] bg-[#071b2c] shadow-2xl sm:aspect-[5/4] lg:aspect-square">
      <Image
        src="/images/solutions-photo.jpg"
        alt="Warehouse worker checking stock on a shelf"
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061a1f]/90 via-transparent to-[#061a1f]/15" />
      <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-[#061a1f]/75 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm sm:left-7 sm:top-7">Illustrative inventory view</span>
      <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-white/95 p-4 text-[#0b2630] shadow-xl sm:inset-x-7 sm:bottom-7 sm:p-5">
        <div className="flex items-center justify-between gap-2"><p className="text-sm font-extrabold sm:text-base">Inventory pulse</p><span className="text-[10px] font-semibold text-[#477069]">Example activity</span></div>
        <div className="mt-3 grid gap-2 border-t border-[#dce7e9] pt-3 text-[10px] font-semibold sm:text-xs">
          <div className="flex justify-between gap-2"><span>Stock received</span><span className="font-bold text-[#15735e]">Recorded</span></div>
          <div className="flex justify-between gap-2"><span>Customer order</span><span className="font-bold text-[#3069b0]">In progress</span></div>
          <div className="flex justify-between gap-2"><span>Low-stock alert</span><span className="font-bold text-[#99640e]">Review</span></div>
        </div>
      </div>
    </div>
  );
}

export function WorkflowVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#071b2c] p-5 text-white shadow-2xl sm:p-8">
      <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(#9cc6d2_1px,transparent_1px),linear-gradient(90deg,#9cc6d2_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="relative">
        <div className="flex items-center justify-between gap-3 border-b border-white/15 pb-4"><p className="text-sm font-extrabold">The Nexwavy method</p><span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#25d6e8]">From process to progress</span></div>
        <ol className="mt-4 grid gap-2.5">
          {PROCESS.map((item, index) => (
            <li key={item.step} className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 sm:px-4 sm:py-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#25d6e8]/75 text-[10px] font-black text-[#25d6e8]">{String(index + 1).padStart(2, "0")}</span>
              <div><p className="text-xs font-bold sm:text-sm">{item.step}</p><p className="mt-1 hidden text-[11px] leading-snug text-[#b8c7d1] sm:block">{item.body}</p></div>
            </li>
          ))}
        </ol>
        <p className="mt-4 rounded-lg border border-[#25d6e8]/25 bg-[#25d6e8]/10 p-3 text-[11px] text-[#d2e9eb]">A visible process, usable tools, and a team that knows what happens next.</p>
      </div>
    </div>
  );
}

export function TrainingVisual() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] bg-[#071b2c] shadow-2xl sm:aspect-[5/4] lg:aspect-square">
      <Image
        src="/images/ai-training-photo.jpg"
        alt="Professionals learning together during a workplace training session"
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061a1f]/90 via-transparent to-[#061a1f]/10" />
      <span className="absolute left-5 top-5 rounded-full bg-[#ffc857] px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#071b2c] sm:left-7 sm:top-7">Practical workplace AI</span>
      <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-white/95 p-4 text-[#0b2630] shadow-xl sm:inset-x-7 sm:bottom-7 sm:p-5">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#477069]">Sample training exercise</p>
        <p className="mt-2 text-xs font-bold leading-relaxed sm:text-sm">Summarise customer feedback by theme, flag questions for review, and draft a response for a person to check.</p>
        <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-bold"><span className="rounded-full bg-[#e7f5f2] px-2 py-1 text-[#15735e]">Clear prompt</span><span className="rounded-full bg-[#e3eef8] px-2 py-1 text-[#3069b0]">Useful first draft</span><span className="rounded-full bg-[#fff0d0] px-2 py-1 text-[#99640e]">Human review</span></div>
      </div>
    </div>
  );
}
