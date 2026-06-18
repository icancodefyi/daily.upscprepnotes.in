import Link from "next/link";

export function EditorPick() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[17px] font-bold">Great Weekend Sale &mdash; Biggest Sale Till Date</h2>
        <span className="bg-emerald-100 text-emerald-700 text-[11px] font-semibold px-3 py-1 rounded-full">SALE</span>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <p className="text-[13px] text-gray-500 max-w-[500px] leading-relaxed">
          Great Weekend Sale &mdash; All Products at ₹99. One-time purchase, no subscriptions. Shop now!
        </p>
        <div className="flex items-center gap-4">
          <span className="text-xl font-extrabold">₹99</span>
          <Link
            href="https://upscprepnotes.in/store"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-5 py-2 rounded-[10px] text-[13px] font-semibold no-underline inline-block hover:bg-[#2a2a2a]"
          >
            Shop Now &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
