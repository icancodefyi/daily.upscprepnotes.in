import Link from "next/link";

const subjects = [
  { slug: "polity", name: "Polity" },
  { slug: "economy", name: "Economy" },
  { slug: "environment", name: "Environment" },
  { slug: "history", name: "History" },
  { slug: "geography", name: "Geography" },
  { slug: "science-tech", name: "Science & Tech" },
  { slug: "international-relations", name: "International Relations" },
  { slug: "social-issues", name: "Social Issues" },
  { slug: "security", name: "Security" },
  { slug: "culture", name: "Culture" },
];

export function SubjectTags() {
  return (
    <div className="subjects">
      <span>Filter by subject:</span>
      {subjects.map((s) => (
        <Link key={s.slug} href={`/subject/${s.slug}`}>{s.name}</Link>
      ))}
      <Link href="/subject/polity" className="primary">All Subjects &rarr;</Link>
    </div>
  );
}
