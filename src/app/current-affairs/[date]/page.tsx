import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getContent, getAvailableDates } from "@/lib/content";

const catClass: Record<string, string> = {
  Economy: "bg-green-50 text-green-700",
  Polity: "bg-blue-50 text-blue-700",
  Environment: "bg-red-50 text-red-700",
  "Science & Tech": "bg-purple-50 text-purple-700",
  "International Relations": "bg-orange-50 text-orange-700",
  "Social Issues": "bg-pink-50 text-pink-700",
  Security: "bg-indigo-50 text-indigo-700",
  Culture: "bg-orange-50 text-orange-800",
  History: "bg-amber-50 text-amber-800",
  Geography: "bg-teal-50 text-teal-700",
};

export function generateStaticParams() {
  return getAvailableDates().map((date) => ({ date }));
}

export default async function CAPage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const content = getContent(date);
  if (!content) notFound();

  const d = new Date(date + "T00:00:00");
  const label = d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });

  return (
    <>
      <Header />
      <div className="max-w-[640px] mx-auto px-5 py-6 flex-1">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 no-underline hover:text-black mb-4">
          &larr; Back to Home
        </Link>

        <h1 className="text-xl font-extrabold mb-1">{label}</h1>
        <p className="text-sm text-gray-500 mb-5">{content.currentAffairs.stories.length} stories &middot; curated for UPSC Prelims</p>

        {content.currentAffairs.stories.map((s) => (
          <div key={s.id} className="bg-white border border-gray-200 rounded-2xl p-5 mb-3">
            <span
              className={`inline-block text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2 ${catClass[s.category] || "bg-gray-100 text-gray-500"}`}
            >
              {s.category}
            </span>
            <h2 className="text-base font-bold mb-1.5">{s.title}</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
