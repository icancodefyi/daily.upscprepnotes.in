"use client";

import { getStreak, isCompleted, getWeekDates } from "@/lib/streak";

interface Props {
  date: string;
}

export function HeroSection({ date }: Props) {
  const d = new Date(date + "T00:00:00");
  const dayName = d.toLocaleDateString("en-US", { weekday: "long" });
  const month = d.toLocaleDateString("en-US", { month: "long" });
  const dayNum = d.getDate();
  const year = d.getFullYear();

  const hour = new Date().getHours();
  let greeting = "Good evening";
  if (hour < 12) greeting = "Good morning";
  else if (hour < 17) greeting = "Good afternoon";

  const streak = getStreak();
  const done = isCompleted(date);
  const weekDates = getWeekDates();

  return (
    <div className="mb-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{greeting}</p>
          <h1 className="text-2xl font-extrabold tracking-tight">
            {dayName}, {month} {dayNum}
            <span className="text-gray-400 font-medium">, {year}</span>
          </h1>
        </div>
        {streak > 0 && (
          <div className="flex items-center gap-1.5 bg-orange-50 border border-orange-200 rounded-xl px-3.5 py-2 shrink-0">
            <span className="text-lg">🔥</span>
            <span className="font-bold text-sm text-orange-700">{streak}-day streak</span>
          </div>
        )}
      </div>

      <div className="mt-4 flex gap-1.5">
        {weekDates.map((wd) => {
          const isToday = wd === date;
          const completed = isCompleted(wd);
          const label = new Date(wd + "T00:00:00").toLocaleDateString("en-US", { weekday: "short" });
          return (
            <div
              key={wd}
              className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-lg ${
                isToday ? "bg-black text-white" : completed ? "bg-emerald-50 text-emerald-700" : "bg-gray-100 text-gray-400"
              }`}
            >
              <span className="text-[10px] font-semibold uppercase tracking-wider">{label}</span>
              <span className={`w-2 h-2 rounded-full ${isToday ? "bg-white" : completed ? "bg-emerald-500" : "bg-gray-300"}`} />
            </div>
          );
        })}
      </div>

      {done && (
        <div className="mt-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5 flex items-center gap-2">
          <span className="text-emerald-600 font-bold text-sm">Today&apos;s quiz done</span>
          <span className="text-emerald-500 text-xs">Come back tomorrow for a new one!</span>
        </div>
      )}
    </div>
  );
}
