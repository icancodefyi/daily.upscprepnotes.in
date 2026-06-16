import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PremiumUpsell } from "@/components/PremiumUpsell";
import { StoreCrossSell } from "@/components/StoreCrossSell";
import { getMonthlyContent, getAvailableDates } from "@/lib/content";

export function generateStaticParams() {
  const months = new Set(getAvailableDates().map((d) => d.slice(0, 7)));
  return Array.from(months).map((slug) => ({ slug }));
}

export default async function MonthlyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const contents = getMonthlyContent(slug);
  if (contents.length === 0) notFound();

  const [year, month] = slug.split("-");
  const label = new Date(Number(year), Number(month) - 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Header />
      <div className="max-w-[780px] mx-auto px-5 py-6 flex-1">
        <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between mb-5">
          <div className="font-semibold text-[15px]">{label}</div>
          <Link
            href="/"
            className="bg-[#1a1a1a] text-white border border-gray-700 px-4 py-1.5 rounded-lg text-xs font-semibold no-underline hover:bg-[#2a2a2a]"
          >
            &larr; Home
          </Link>
        </div>

        {contents.map((c) => (
          <div key={c.date} className="bg-white border border-gray-200 rounded-2xl p-6 mb-4">
            <Link href={`/quiz/${c.date}`} className="no-underline text-inherit">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[17px] font-bold">
                  {new Date(c.date + "T00:00:00").toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </h2>
                <span className="bg-gray-100 text-gray-500 text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  {c.quiz.questions.length} Q &middot; {c.currentAffairs.stories.length} stories
                </span>
              </div>
            </Link>
          </div>
        ))}

        <PremiumUpsell />
        <StoreCrossSell />
      </div>
      <Footer />
    </>
  );
}
