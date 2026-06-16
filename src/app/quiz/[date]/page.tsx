import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuizCard } from "@/components/QuizCard";
import { getContent, getAvailableDates } from "@/lib/content";

export function generateStaticParams() {
  return getAvailableDates().map((date) => ({ date }));
}

export default async function QuizPage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const content = getContent(date);
  if (!content) notFound();

  return (
    <>
      <Header />
      <div className="max-w-[640px] mx-auto px-5 py-6 flex-1">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 no-underline hover:text-black mb-4">
          &larr; Back to Home
        </Link>
        <QuizCard questions={content.quiz.questions} date={date} />
      </div>
      <Footer />
    </>
  );
}
