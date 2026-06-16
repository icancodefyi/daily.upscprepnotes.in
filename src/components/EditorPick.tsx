import Link from "next/link";

export function EditorPick() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[17px] font-bold">Monthly Compilation &mdash; June 2026</h2>
        <span className="bg-gray-100 text-gray-500 text-[11px] font-semibold px-3 py-1 rounded-full">PDF</span>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <p className="text-[13px] text-gray-500 max-w-[500px] leading-relaxed">
          All 300+ MCQs and 150+ current affairs stories from June 2026 in one downloadable PDF. Perfect for offline
          revision.
        </p>
        <div className="flex items-center gap-4">
          <span className="text-xl font-extrabold">₹99</span>
          <Link
            href="#"
            className="bg-black text-white px-5 py-2 rounded-[10px] text-[13px] font-semibold no-underline inline-block hover:bg-[#2a2a2a]"
          >
            Buy PDF
          </Link>
        </div>
      </div>
    </div>
  );
}
