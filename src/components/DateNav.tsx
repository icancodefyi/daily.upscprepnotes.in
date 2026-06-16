import Link from "next/link";

interface Props {
  date: string;
  prevDate: string | null;
  nextDate: string | null;
}

export function DateNav({ date, prevDate, nextDate }: Props) {
  const d = new Date(date + "T00:00:00");
  const day = d.toLocaleDateString("en-US", { weekday: "long" });
  const rest = d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between mb-5">
      <div className="font-semibold text-[15px]">
        {day}, <span className="text-gray-500 font-normal">{rest}</span>
      </div>
      <div className="flex gap-2">
        {prevDate ? (
          <Link
            href={`/quiz/${prevDate}`}
            className="border border-gray-200 rounded-md px-2.5 py-1 text-gray-500 no-underline text-base hover:border-black hover:text-black inline-flex items-center justify-center"
          >
            &larr;
          </Link>
        ) : (
          <span className="border border-gray-200 rounded-md px-2.5 py-1 text-gray-300 text-base inline-flex items-center justify-center opacity-30 cursor-default">
            &larr;
          </span>
        )}
        {nextDate ? (
          <Link
            href={`/quiz/${nextDate}`}
            className="border border-gray-200 rounded-md px-2.5 py-1 text-gray-500 no-underline text-base hover:border-black hover:text-black inline-flex items-center justify-center"
          >
            &rarr;
          </Link>
        ) : (
          <span className="border border-gray-200 rounded-md px-2.5 py-1 text-gray-300 text-base inline-flex items-center justify-center opacity-30 cursor-default">
            &rarr;
          </span>
        )}
      </div>
    </div>
  );
}
