"use client";

import Link from "next/link";
import { isCompleted } from "@/lib/streak";
import type { DailyContent } from "@/lib/content";

interface Props {
  prevContent: DailyContent | null;
  prevDate: string | null;
}

export function CatchUpSection({ prevContent, prevDate }: Props) {
  if (!prevContent || !prevDate) return null;

  const alreadyDone = isCompleted(prevDate);
  const prevDay = new Date(prevDate + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "long", month: "short", day: "numeric",
  });

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">📋</span>
            <h2 className="text-base font-bold">{alreadyDone ? prevDay : "You missed " + prevDay}</h2>
          </div>
          <p className="text-sm text-gray-600">
            {alreadyDone
              ? `Reviewed ${prevContent.quiz.questions.length} questions and ${prevContent.currentAffairs.stories.length} stories`
              : `${prevContent.quiz.questions.length} questions and ${prevContent.currentAffairs.stories.length} stories — catch up now`}
          </p>
        </div>
        <Link
          href={`/quiz/${prevDate}`}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-semibold no-underline ${
            alreadyDone
              ? "bg-white border border-gray-200 text-gray-600"
              : "bg-black text-white hover:bg-[#2a2a2a]"
          }`}
        >
          {alreadyDone ? "Review &rarr;" : "Catch up &rarr;"}
        </Link>
      </div>
    </div>
  );
}
