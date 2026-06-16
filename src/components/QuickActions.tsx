import Link from "next/link";

interface Props {
  date: string;
  questionCount: number;
  storyCount: number;
}

export function QuickActions({ date, questionCount, storyCount }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
      <Link
        href={`/quiz/${date}`}
        className="bg-black text-white rounded-2xl p-5 no-underline group hover:bg-[#1a1a1a] transition-colors"
      >
        <div className="text-2xl mb-3">📝</div>
        <h3 className="font-bold text-base">Start Today&apos;s Quiz</h3>
        <p className="text-sm text-gray-400 mt-1">
          {questionCount} questions &middot; ~{Math.ceil(questionCount * 0.8)} min
        </p>
        <div className="mt-3 text-sm font-semibold text-emerald-300 group-hover:underline">
          Take quiz &rarr;
        </div>
      </Link>

      <Link
        href={`/current-affairs/${date}`}
        className="bg-white border border-gray-200 rounded-2xl p-5 no-underline hover:border-gray-300 transition-colors"
      >
        <div className="text-2xl mb-3">📰</div>
        <h3 className="font-bold text-base text-black">Today&apos;s Headlines</h3>
        <p className="text-sm text-gray-500 mt-1">
          {storyCount} stories &middot; ~{Math.ceil(storyCount * 1.5)} min read
        </p>
        <div className="mt-3 text-sm font-semibold text-black group-hover:underline">
          Read all &rarr;
        </div>
      </Link>
    </div>
  );
}
