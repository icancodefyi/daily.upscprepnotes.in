import Link from "next/link";

export function StoreCrossSell() {
  return (
    <div className="bg-white border-2 border-emerald-300 rounded-2xl px-6 py-5 mb-8 flex items-center justify-between flex-wrap gap-3">
      <div>
        <div className="text-xs font-bold text-green-700 uppercase tracking-wider mb-1">From Our Store</div>
        <h3 className="text-base font-bold">50+ Topper Answer Copies &mdash; ₹790</h3>
        <p className="text-[13px] text-gray-500 mt-0.5">Learn from AIR 1-50 rankers. Includes GS 1-4 + Essay.</p>
      </div>
      <Link
        href="https://upscprepnotes.in/store"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white px-7 py-2.5 rounded-[10px] text-sm font-semibold no-underline inline-block whitespace-nowrap hover:bg-[#2a2a2a]"
      >
        Buy Now &rarr;
      </Link>
    </div>
  );
}
