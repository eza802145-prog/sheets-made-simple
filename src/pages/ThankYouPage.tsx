import {CheckCircle2, ArrowUpRight} from 'lucide-react';
import {SUPPORT_EMAIL, WHATSAPP_ORDER_URL} from '../config/whatsapp';

const NEXT_STEPS = [
  {
    step: '01',
    title: 'Send your pre-filled WhatsApp message',
    description:
      'Your WhatsApp chat opened in a new tab with your order details ready. Simply tap Send in WhatsApp.',
  },
  {
    step: '02',
    title: 'Receive bank transfer details within 15 minutes',
    description:
      'Our team will reply directly on WhatsApp within 15 minutes with our Nigerian bank transfer account details for the ₦15,000 one-time payment.',
  },
  {
    step: '03',
    title: 'Get instant file access',
    description:
      'Immediately after payment confirmation, we send your download link for all 3 spreadsheet templates and the 5-minute video walkthrough via WhatsApp and email.',
  },
];

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-between px-5 py-12 sm:px-8 lg:py-16">
        <div>
          {/* Brand Lockup — clean unboxed text (no navbar) */}
          <div className="mb-10 border-b border-slate-200 pb-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-display text-lg font-bold tracking-tight text-slate-900">
                Sheets Made Simple
              </span>
              <span className="text-xs font-medium text-slate-500">
                Order Confirmation
              </span>
            </div>
          </div>

          {/* Confirmation Card */}
          <section className="rounded-xl border border-slate-200 bg-white p-7 shadow-xs sm:p-10">
            <div className="flex items-center gap-3 text-emerald-700">
              <CheckCircle2 className="h-6 w-6 shrink-0" aria-hidden="true" />
              <span className="text-sm font-semibold">
                WhatsApp Order Ready
              </span>
            </div>

            <h1 className="mt-4 text-balance font-display text-[clamp(1.85rem,3.5vw,2.65rem)] font-bold leading-[1.15] tracking-tight text-slate-950">
              Order Request Received! You&apos;re One Step Away.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Your WhatsApp message is ready to send. Once sent, our team will reply within <span className="font-semibold text-slate-900">15 minutes</span> with bank transfer details and instant file access.
            </p>

            {/* Single Action Button on Thank-You Page */}
            <div className="mt-7 rounded-lg border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm text-slate-600">
                Did your browser block the WhatsApp popup, or did you close the tab by mistake?
              </p>
              <a
                href={WHATSAPP_ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-[48px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 sm:w-auto"
              >
                <span>Re-open WhatsApp Chat</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </section>

          {/* What Happens Next */}
          <section className="mt-10">
            <h2 className="font-display text-lg font-bold tracking-tight text-slate-950">
              What Happens Next
            </h2>
            <div className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
              {NEXT_STEPS.map((item) => (
                <div key={item.step} className="flex gap-4 p-5 sm:p-6">
                  <span className="font-mono text-xs font-semibold text-emerald-800 tabular-nums pt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold text-slate-950 sm:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How to Get Help — plain text support email (no extra buttons or footer links) */}
          <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="font-display text-base font-bold text-slate-950">
              How to Get Help
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              If you have any trouble sending your WhatsApp message or need assistance with your order, write to our support desk at{' '}
              <span className="font-mono font-medium text-slate-900 select-all">
                {SUPPORT_EMAIL}
              </span>
              .
            </p>
          </section>
        </div>

        {/* Quiet Footer — No Links */}
        <footer className="mt-12 border-t border-slate-200 pt-6 text-xs text-slate-500">
          Sheets Made Simple · Excel Starter Pack for Small Business
        </footer>
      </main>
    </div>
  );
}
