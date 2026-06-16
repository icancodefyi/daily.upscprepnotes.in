import Link from "next/link";

const subjects = [
  { slug: "polity", name: "Polity" },
  { slug: "economy", name: "Economy" },
  { slug: "environment", name: "Environment" },
  { slug: "history", name: "History" },
  { slug: "geography", name: "Geography" },
  { slug: "science-tech", name: "Science & Tech" },
];

export function SubjectPills() {
  return (
    <div className="flex flex-wrap gap-2 items-center mt-5 mb-8">
      <span className="text-[13px] text-gray-500">Popular subjects:</span>
      {subjects.map((s) => (
        <Link
          key={s.slug}
          href={`/subject/${s.slug}`}
          className="bg-gray-100 px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-600 no-underline hover:bg-gray-200"
        >
          {s.name}
        </Link>
      ))}
      <Link
        href="/subject/polity"
        className="bg-black text-white px-3.5 py-1.5 rounded-full text-xs font-semibold no-underline hover:bg-[#2a2a2a]"
      >
        All Subjects &rarr;
      </Link>
    </div>
  );
}
