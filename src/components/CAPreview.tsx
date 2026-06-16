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
}

export function CAPreview({ stories, date }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-bold">Today&apos;s Headlines</h2>
        <Link
          href={`/current-affairs/${date}`}
          className="text-sm font-semibold text-black no-underline hover:underline"
        >
          Read all {stories.length} &rarr;
        </Link>
      </div>
      <div className="space-y-3">
        {stories.slice(0, 4).map((s) => (
          <div key={s.id} className="flex items-start gap-3">
            <span
              className={`shrink-0 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full mt-0.5 ${catClass[s.category] || "bg-gray-100 text-gray-500"}`}
            >
              {s.category}
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold leading-tight">{s.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
