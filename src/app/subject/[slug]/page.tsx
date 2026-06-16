import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PremiumUpsell } from "@/components/PremiumUpsell";
import { StoreCrossSell } from "@/components/StoreCrossSell";
import { getSubjectContent, subjects } from "@/lib/content";

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
  return subjects().map((s) => ({ slug: s.toLowerCase().replace(/[\s&-]+/g, "-") }));
}

export default async function SubjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const contents = getSubjectContent(slug);

  const subjectName =
    subjects().find((s) => s.toLowerCase().replace(/[\s&-]+/g, "-") === slug) ||
    slug.charAt(0).toUpperCase() + slug.slice(1);

  if (contents.length === 0) notFound();

  return (
    <>
      <Header />
      <div className="max-w-[780px] mx-auto px-5 py-6 flex-1">
        <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between mb-5">
          <div className="font-semibold text-[15px] capitalize">{subjectName}</div>
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
              </div>
            </Link>

            {c.quiz.questions.length > 0 && (
              <div className="mb-3">
                {c.quiz.questions.map((q) => (
                  <div key={q.id} className="mb-3">
                    <div className="text-[15px] font-medium">{q.text}</div>
                  </div>
                ))}
              </div>
            )}

            {c.currentAffairs.stories.length > 0 && (
              <div>
                {c.currentAffairs.stories.map((s) => (
                  <div key={s.id} className="py-3.5 border-b border-gray-100 last:border-b-0 last:pb-0">
                    <span
                      className={`inline-block text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1.5 ${catClass[s.category] || "bg-gray-100 text-gray-500"}`}
                    >
                      {s.category}
                    </span>
                    <h3 className="text-sm font-semibold mb-1 leading-tight">{s.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <PremiumUpsell />
        <StoreCrossSell />
      </div>
      <Footer />
    </>
  );
}
