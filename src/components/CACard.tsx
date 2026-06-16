import Link from "next/link";
import type { CAStory } from "@/lib/content";

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

interface Props {
  stories: CAStory[];
  date: string;
  standalone?: boolean;
}

export function CACard({ stories, date, standalone }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[17px] font-bold">Today&apos;s Headlines</h2>
        <span className="bg-gray-100 text-gray-500 text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap">
          {stories.length} stories
        </span>
      </div>

      {stories.slice(0, standalone ? undefined : 4).map((s) => (
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

      {!standalone && stories.length > 4 && (
        <p className="text-[13px] text-gray-500 text-center mt-3">
          Showing 4 of {stories.length} stories
        </p>
      )}

      {!standalone && (
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <div className="text-sm text-gray-500">
            <span>Quick summary for Prelims revision</span>
          </div>
          <Link
            href={`/current-affairs/${date}`}
            className="bg-black text-white px-7 py-2.5 rounded-[10px] text-sm font-semibold no-underline inline-block hover:bg-[#2a2a2a]"
          >
            Read All &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}
