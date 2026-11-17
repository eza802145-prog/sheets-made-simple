import {Check, ArrowUpRight} from 'lucide-react';
import {WHATSAPP_ORDER_URL} from '../config/whatsapp';

const PACK_CONTENTS = [
  {
    number: '01',
    title: 'Daily Sales & Expense Tracker',
    detail: 'Log every sale and business expense in minutes. Built-in formulas auto-calculate your daily, weekly, and monthly profit with zero manual math.',
    highlight: 'Auto-calculates profit',
  },
  {
    number: '02',
    title: 'Customer Debt & Invoice Log',
    detail: 'Track who owes you, how much they have paid, and exact balance due dates so no customer debt slips through the cracks.',
    highlight: 'Zero forgotten balances',
  },
  {
    number: '03',
    title: 'Monthly Inventory & Restock Sheet',
    detail: 'See what is selling fast, what is running low, and exact restock quantities before you run out of high-demand stock.',
    highlight: 'Smart restock visibility',
  },
  {
    number: '04',
    title: 'Simple 5-Minute Video Walkthrough',
    detail: 'Watch a short, plain-language screen guide showing exactly where to type your daily numbers on your phone or laptop.',
    highlight: 'Ready in 5 minutes',
  },
];

const SAMPLE_LEDGER_ROWS = [
  {date: 'Mon 11 Nov', item: 'Walk-in Retail Sales', sales: '₦145,000', expense: '₦32,500', profit: '₦112,500'},
  {date: 'Tue 12 Nov', item: 'Wholesale Dispatch (Ikeja)', sales: '₦210,000', expense: '₦84,000', profit: '₦126,000'},
  {date: 'Wed 13 Nov', item: 'Storefront & Delivery Orders', sales: '₦168,500', expense: '₦41,200', profit: '₦127,300'},
];

const FAQ_ITEMS = [
  {
    question: 'Do I need to be good at Excel?',
    answer:
      'No, just type in your numbers and the formulas calculate everything automatically.',
  },
  {
    question: 'Does it work on my phone?',
    answer:
      'Yes, it works on Microsoft Excel and the free Google Sheets app on Android, iPhone, and laptops.',
  },
  {
    question: 'How do I get it after paying?',
    answer:
      'You receive an instant download link via email and WhatsApp immediately after payment confirmation.',
  },
];

export default function SalesPage() {
  const handleOrderClick = () => {
    window.setTimeout(() => {
      window.location.assign('/thank-you.html');
    }, 80);
  };

  const renderOrderButton = (fullWidth = false) => (
    <a
      href={WHATSAPP_ORDER_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleOrderClick}
      className={`inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${
        fullWidth ? 'w-full' : ''
      }`}
    >
      <span>Order Now via WhatsApp — ₦15,000</span>
      <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
    </a>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        {/* Brand Lockup — clean unboxed editorial kicker (no navbar) */}
        <div className="mb-8 border-b border-slate-200 pb-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-display text-lg font-bold tracking-tight text-slate-900">
              Sheets Made Simple
            </span>
            <span className="text-xs font-medium text-slate-500">
              Excel Starter Pack for Small Business · One-Time Payment
            </span>
          </div>
        </div>

        {/* Hero Split */}
        <section className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="mb-3 text-sm font-medium text-emerald-800">
                Built for Nigerian business owners · Ready in 10 minutes a day
              </p>

              <h1 className="max-w-2xl text-balance font-display text-[clamp(2.15rem,4vw,3.35rem)] font-bold leading-[1.1] tracking-tight text-slate-950">
                Stop Losing Track of Your Business Money. Organize Your Sales, Expenses &amp; Profit in 10 Minutes a Day.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Small business owners lose money every month because receipts are scattered, customer debts are forgotten, and profit is just a guess.
              </p>
            </div>

            {/* Pricing & Single Conversion Button */}
            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Excel Starter Pack for Small Business
                  </p>
                  <div className="mt-1 flex items-baseline gap-2.5">
                    <span className="font-mono text-3xl font-semibold tracking-tight text-slate-950 tabular-nums">
                      ₦15,000
                    </span>
                    <span className="text-sm text-slate-600">
                      One-time payment, lifetime access
                    </span>
                  </div>
                </div>

                {renderOrderButton()}
              </div>

              <p className="mt-4 border-t border-slate-100 pt-3 text-xs text-slate-500">
                Works on Microsoft Excel &amp; free Google Sheets · Android, iPhone &amp; Laptop · Instant WhatsApp &amp; email delivery
              </p>
            </div>
          </div>

          {/* Right Column: Clean CSS-Styled Spreadsheet Preview Card */}
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
              {/* Spreadsheet Window Bar */}
              <div className="flex items-center justify-between border-b border-slate-200 bg-emerald-800 px-4 py-3 text-white">
                <span className="font-mono text-xs font-medium tracking-tight">
                  Business_Money_Tracker.xlsx
                </span>
                <span className="font-mono text-[11px] text-emerald-100">
                  Formula Ready
                </span>
              </div>

              {/* Column Letter Header */}
              <div className="grid grid-cols-12 border-b border-slate-200 bg-slate-100 text-center font-mono text-[11px] font-medium text-slate-500">
                <div className="col-span-1 border-r border-slate-200 py-1.5" />
                <div className="col-span-5 border-r border-slate-200 py-1.5">A · Category</div>
                <div className="col-span-3 border-r border-slate-200 py-1.5">B · Amount</div>
                <div className="col-span-3 py-1.5">C · Status</div>
              </div>

              {/* Spreadsheet Rows */}
              <div className="divide-y divide-slate-200 font-mono text-xs">
                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-1 border-r border-slate-200 bg-slate-50 py-2.5 text-center text-[11px] text-slate-400">
                    1
                  </div>
                  <div className="col-span-5 border-r border-slate-200 px-3 py-2.5 font-sans font-semibold text-slate-900">
                    Weekly Sales
                  </div>
                  <div className="col-span-3 border-r border-slate-200 px-3 py-2.5 text-right font-medium text-slate-900 tabular-nums">
                    ₦523,500
                  </div>
                  <div className="col-span-3 px-3 py-2.5 text-right text-emerald-700">
                    Recorded
                  </div>
                </div>

                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-1 border-r border-slate-200 bg-slate-50 py-2.5 text-center text-[11px] text-slate-400">
                    2
                  </div>
                  <div className="col-span-5 border-r border-slate-200 px-3 py-2.5 font-sans font-medium text-slate-700">
                    Stock &amp; Supplies
                  </div>
                  <div className="col-span-3 border-r border-slate-200 px-3 py-2.5 text-right text-slate-600 tabular-nums">
                    -₦128,000
                  </div>
                  <div className="col-span-3 px-3 py-2.5 text-right text-slate-500">
                    Paid
                  </div>
                </div>

                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-1 border-r border-slate-200 bg-slate-50 py-2.5 text-center text-[11px] text-slate-400">
                    3
                  </div>
                  <div className="col-span-5 border-r border-slate-200 px-3 py-2.5 font-sans font-medium text-slate-700">
                    Delivery &amp; Fuel
                  </div>
                  <div className="col-span-3 border-r border-slate-200 px-3 py-2.5 text-right text-slate-600 tabular-nums">
                    -₦29,700
                  </div>
                  <div className="col-span-3 px-3 py-2.5 text-right text-slate-500">
                    Paid
                  </div>
                </div>

                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-1 border-r border-slate-200 bg-slate-50 py-2.5 text-center text-[11px] text-slate-400">
                    4
                  </div>
                  <div className="col-span-5 border-r border-slate-200 px-3 py-2.5 font-sans font-medium text-slate-700">
                    Customer Debts Due
                  </div>
                  <div className="col-span-3 border-r border-slate-200 px-3 py-2.5 text-right font-medium text-amber-700 tabular-nums">
                    ₦64,000
                  </div>
                  <div className="col-span-3 px-3 py-2.5 text-right text-amber-700">
                    Follow-up
                  </div>
                </div>

                <div className="grid grid-cols-12 items-center bg-emerald-50/70">
                  <div className="col-span-1 border-r border-slate-200 bg-emerald-100/70 py-3 text-center text-[11px] font-semibold text-emerald-900">
                    5
                  </div>
                  <div className="col-span-5 border-r border-slate-200 px-3 py-3 font-sans font-bold text-slate-950">
                    Net Profit (=SUM)
                  </div>
                  <div className="col-span-3 border-r border-slate-200 px-3 py-3 text-right font-bold text-emerald-800 tabular-nums">
                    ₦365,800
                  </div>
                  <div className="col-span-3 px-3 py-3 text-right font-semibold text-emerald-800">
                    Auto
                  </div>
                </div>
              </div>

              {/* Sheet Tabs Footer */}
              <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-2.5 text-[11px] text-slate-500">
                <span className="font-medium text-emerald-800">
                  Sales &amp; Expenses · Debt Log · Inventory
                </span>
                <span className="font-mono tabular-nums">
                  10 min/day
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Problem + Live Sample Ledger Strip */}
        <section className="mt-14 grid grid-cols-1 gap-8 border-t border-slate-200 pt-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium text-slate-500">
              The Problem
            </p>
            <h2 className="mt-2 text-balance font-display text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Busy every day, yet unsure where the cash went?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Small business owners lose money every month because receipts are scattered, customer debts are forgotten, and profit is just a guess.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Instead of guessing at month-end or paying recurring subscriptions for complicated software, spend 10 minutes a day entering your numbers into one structured workbook.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100/70 px-5 py-3">
                <span className="text-xs font-semibold text-slate-700">
                  Daily Sales &amp; Expense Tracker — Sample View
                </span>
                <span className="font-mono text-xs font-medium text-emerald-800">
                  Auto-Calculated
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs font-medium text-slate-500">
                      <th className="px-5 py-3">Date</th>
                      <th className="px-5 py-3">Entry</th>
                      <th className="px-5 py-3 text-right">Sales</th>
                      <th className="px-5 py-3 text-right">Expenses</th>
                      <th className="px-5 py-3 text-right">Net Profit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {SAMPLE_LEDGER_ROWS.map((row) => (
                      <tr key={row.date} className="text-slate-700">
                        <td className="whitespace-nowrap px-5 py-3 font-mono text-xs text-slate-500 tabular-nums">
                          {row.date}
                        </td>
                        <td className="px-5 py-3 font-medium text-slate-900">
                          {row.item}
                        </td>
                        <td className="whitespace-nowrap px-5 py-3 text-right font-mono text-xs tabular-nums">
                          {row.sales}
                        </td>
                        <td className="whitespace-nowrap px-5 py-3 text-right font-mono text-xs text-slate-500 tabular-nums">
                          {row.expense}
                        </td>
                        <td className="whitespace-nowrap px-5 py-3 text-right font-mono text-xs font-semibold text-emerald-800 tabular-nums">
                          {row.profit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t border-slate-200 bg-slate-50 font-semibold text-slate-950">
                      <td colSpan={2} className="px-5 py-3 text-xs">
                        3-Day Summary
                      </td>
                      <td className="whitespace-nowrap px-5 py-3 text-right font-mono text-xs tabular-nums">
                        ₦523,500
                      </td>
                      <td className="whitespace-nowrap px-5 py-3 text-right font-mono text-xs text-slate-600 tabular-nums">
                        ₦157,700
                      </td>
                      <td className="whitespace-nowrap px-5 py-3 text-right font-mono text-xs text-emerald-800 tabular-nums">
                        ₦365,800
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* What's Inside */}
        <section className="mt-14 border-t border-slate-200 pt-12">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-medium text-slate-500">
                What&apos;s Inside
              </p>
              <h2 className="mt-2 text-balance font-display text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Excel Starter Pack for Small Business
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-600">
              Everything you need to track cash flow, unpaid customer balances, and monthly stock in one download.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-12">
            {PACK_CONTENTS.map((item, index) => {
              const spanClass =
                index === 0 || index === 3 ? 'md:col-span-7' : 'md:col-span-5';
              return (
                <article
                  key={item.number}
                  className={`${spanClass} flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-xs font-semibold text-slate-400 tabular-nums">
                        {item.number}
                      </span>
                      <span className="text-xs font-medium text-emerald-800">
                        {item.highlight}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.detail}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Who It Is For & Offer Clarity */}
        <section className="mt-14 grid grid-cols-1 gap-8 border-t border-slate-200 pt-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium text-slate-500">
              Who It Is For
            </p>
            <h2 className="mt-2 text-balance font-display text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Built for Nigerian Businesses That Want Clear Numbers Without Monthly Software Bills
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Shop owners, vendors, freelancers, and growing small businesses in Nigeria who want clarity without paying for expensive monthly accounting software.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                'Retail shops & boutique owners',
                'Online vendors & food businesses',
                'Freelancers & service providers',
                'Growing small teams & distributors',
              ].map((audience) => (
                <li
                  key={audience}
                  className="flex items-center gap-2.5 text-sm font-medium text-slate-800"
                >
                  <Check className="h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-medium text-slate-500">
                Simple One-Time Pricing
              </p>
              <div className="mt-2 flex items-baseline gap-2.5">
                <span className="font-mono text-4xl font-bold tracking-tight text-slate-950 tabular-nums">
                  ₦15,000
                </span>
                <span className="text-sm font-medium text-slate-600">
                  once · yours forever
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Pay once via bank transfer on WhatsApp. No monthly renewals, no per-user charges, and no internet required once downloaded to your device.
              </p>
              <div className="mt-5 border-t border-slate-100 pt-5">
                {renderOrderButton(true)}
              </div>
            </div>
          </div>
        </section>

        {/* 3 Common Questions & Answers (Open Layout — Zero Extra Buttons) */}
        <section className="mt-14 border-t border-slate-200 pt-12">
          <p className="text-xs font-medium text-slate-500">
            Common Questions &amp; Answers
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Everything you need to know before ordering
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {FAQ_ITEMS.map((faq, idx) => (
              <div
                key={faq.question}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <span className="font-mono text-xs font-semibold text-slate-400 tabular-nums">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-display text-base font-bold text-slate-950">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Conversion Block After FAQ */}
        <section className="mt-12 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                Ready to see your real daily profit?
              </h2>
              <p className="mt-1.5 text-sm text-slate-600">
                Get all 3 automated templates + the 5-minute video walkthrough for a one-time payment of ₦15,000.
              </p>
            </div>
            {renderOrderButton()}
          </div>
        </section>

        {/* Quiet Footer — No Links */}
        <footer className="mt-14 border-t border-slate-200 pt-6 text-xs text-slate-500">
          Sheets Made Simple · Excel Starter Pack for Small Business · One-time payment, lifetime access
        </footer>
      </main>
    </div>
  );
}
