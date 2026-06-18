export function PremiumUpsell() {
  return (
    <div className="bg-gradient-to-r from-black to-[#1a1a1a] rounded-2xl p-6 mb-4 text-white flex items-center justify-between">
      <div>
        <h3 className="text-[15px] font-bold">Great Weekend Sale &mdash; Biggest Sale Till Date</h3>
        <p className="text-[13px] text-gray-500 mt-1">All products at a one-time price. No subscriptions.</p>
      </div>
      <div className="text-right">
        <div className="text-2xl font-extrabold text-emerald-300">
          ₹99 <span className="text-sm text-gray-500 font-normal">All Products</span>
        </div>
        <a
          href="https://upscprepnotes.in/store"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-1.5 border border-gray-700 rounded-lg px-5 py-2 text-[13px] font-semibold text-white no-underline hover:border-emerald-300 hover:text-emerald-300"
        >
          Shop Now &rarr;
        </a>
      </div>
    </div>
  );
}
