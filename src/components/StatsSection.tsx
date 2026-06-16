"use client";

interface Props {
  date: string;
}

export function StatsSection({ date }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
      <h2 className="text-base font-bold mb-3">Your Progress</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-gray-50 rounded-xl p-3.5 text-center">
          <div className="text-xl font-extrabold">3</div>
          <div className="text-[11px] text-gray-500 mt-0.5">Days this week</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3.5 text-center">
          <div className="text-xl font-extrabold">15</div>
          <div className="text-[11px] text-gray-500 mt-0.5">Qns answered</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3.5 text-center">
          <div className="text-xl font-extrabold text-emerald-600">73%</div>
          <div className="text-[11px] text-gray-500 mt-0.5">Accuracy</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3.5 text-center">
          <div className="text-xl font-extrabold">🔥 3</div>
          <div className="text-[11px] text-gray-500 mt-0.5">Best streak</div>
        </div>
      </div>
    </div>
  );
}
