"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Question } from "@/lib/content";
import { markCompleted } from "@/lib/streak";

interface Props {
  questions: Question[];
  date: string;
}

export function QuizCard({ questions, date }: Props) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [finished, setFinished] = useState(false);

  const total = questions.length;
  const current = questions[step];
  const correctOpt = current?.options.find((o) => o.correct)?.label;

  const handleSelect = useCallback(
    (label: string) => {
      if (revealed) return;
      setSelected(label);
      setRevealed(true);
      setAnswers((prev) => ({ ...prev, [current.id]: label }));
    },
    [revealed, current?.id],
  );

  const handleNext = useCallback(() => {
    if (step < total - 1) {
      setStep((s) => s + 1);
      setSelected(null);
      setRevealed(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      markCompleted(date);
      setFinished(true);
    }
  }, [step, total, date]);

  if (finished) {
    const correct = questions.filter(
      (q) => answers[q.id] === q.options.find((o) => o.correct)?.label,
    ).length;
    const emoji = correct === total ? "🏆" : correct >= total * 0.7 ? "🎉" : correct >= total * 0.4 ? "💪" : "📚";

    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-4 text-center">
        <div className="text-5xl mb-4">{emoji}</div>
        <h2 className="text-xl font-extrabold mb-2">Quiz Complete!</h2>
        <div className="text-4xl font-extrabold mb-1">
          {correct}
          <span className="text-gray-400 text-2xl">/{total}</span>
        </div>
        <p className="text-sm text-gray-500 mb-6">
          {correct === total
            ? "Perfect score! You're on fire!"
            : correct >= total * 0.7
              ? "Great job! Keep it up."
              : correct >= total * 0.4
                ? "Good effort. Review the explanations."
                : "Keep practicing. You'll improve."}
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => {
              setStep(0);
              setSelected(null);
              setRevealed(false);
              setAnswers({});
              setFinished(false);
            }}
            className="bg-gray-100 text-black px-5 py-2.5 rounded-xl text-sm font-semibold border-none cursor-pointer hover:bg-gray-200"
          >
            Retry Quiz
          </button>
          <button
            onClick={() => router.push("/")}
            className="bg-black text-white px-5 py-2.5 rounded-xl text-sm font-semibold border-none cursor-pointer hover:bg-[#2a2a2a]"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">
            Question {step + 1}
            <span className="text-gray-400 font-normal">/{total}</span>
          </span>
          <span className="bg-gray-100 text-gray-500 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full">
            {current.subject}
          </span>
        </div>
        <span className="bg-gray-100 text-gray-500 text-[11px] font-semibold px-3 py-1 rounded-full">
          {current.difficulty}
        </span>
      </div>

      <div className="flex gap-1 mb-5">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-1.5 rounded-full ${
              i < step
                ? answers[questions[i].id] === questions[i].options.find((o) => o.correct)?.label
                  ? "bg-emerald-500"
                  : "bg-red-400"
                : i === step
                  ? "bg-black"
                  : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      <div className="mb-4">
        <div className="text-[15px] font-semibold leading-relaxed">{current.text}</div>
      </div>

      <div className="flex flex-col gap-2.5 mb-4">
        {current.options.map((opt) => {
          let cls =
            "border-2 rounded-xl px-4 py-3.5 text-sm cursor-pointer transition-all duration-150 flex items-center gap-3 ";
          if (revealed) {
            if (opt.label === correctOpt) cls += "border-emerald-500 bg-emerald-50 ";
            else if (opt.label === selected) cls += "border-red-500 bg-red-50 ";
            else cls += "border-gray-100 opacity-50 ";
          } else if (opt.label === selected) {
            cls += "border-black ";
          } else {
            cls += "border-gray-200 hover:border-black hover:bg-gray-50 ";
          }
          return (
            <div key={opt.label} className={cls} onClick={() => handleSelect(opt.label)}>
              <span
                className={`w-7 h-7 inline-flex items-center justify-center rounded-lg text-sm font-bold shrink-0 ${
                  revealed
                    ? opt.label === correctOpt
                      ? "bg-emerald-500 text-white"
                      : opt.label === selected
                        ? "bg-red-500 text-white"
                        : "bg-gray-100 text-gray-400"
                    : opt.label === selected
                      ? "bg-black text-white"
                      : "bg-gray-100"
                }`}
              >
                {revealed ? (opt.label === correctOpt ? "✓" : opt.label === selected ? "✗" : opt.label) : opt.label}
              </span>
              <span className={revealed && opt.label !== correctOpt && opt.label !== selected ? "text-gray-400" : ""}>
                {opt.text}
              </span>
            </div>
          );
        })}
      </div>

      {revealed && (
        <div className="bg-gray-50 rounded-xl px-4 py-3.5 mb-4 text-sm leading-relaxed text-gray-600 border-l-[3px] border-emerald-400">
          <strong className="text-black">Explanation:</strong> {current.explanation}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          {revealed ? (
            selected === correctOpt ? (
              <span className="text-emerald-600 font-semibold">Correct!</span>
            ) : (
              <span className="text-red-600 font-semibold">Incorrect</span>
            )
          ) : (
            <span>Select an answer</span>
          )}
        </div>
        <button
          className={`px-6 py-2.5 rounded-xl text-sm font-semibold border-none cursor-pointer ${
            revealed
              ? "bg-black text-white hover:bg-[#2a2a2a]"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
          onClick={handleNext}
          disabled={!revealed}
        >
          {step < total - 1 ? "Next Question &rarr;" : "Finish Quiz &rarr;"}
        </button>
      </div>
    </div>
  );
}
