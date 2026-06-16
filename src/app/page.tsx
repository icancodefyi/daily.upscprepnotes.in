import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { QuickActions } from "@/components/QuickActions";
import { CAPreview } from "@/components/CAPreview";
import { StatsSection } from "@/components/StatsSection";
import { CatchUpSection } from "@/components/CatchUpSection";
import { SubjectPills } from "@/components/SubjectPills";
import { PremiumUpsell } from "@/components/PremiumUpsell";
import { StoreCrossSell } from "@/components/StoreCrossSell";
import { getContent, getAvailableDates } from "@/lib/content";

export default function HomePage() {
  const dates = getAvailableDates();
  const today = dates[dates.length - 1];
  const content = getContent(today);
  const prevDate = dates.length > 1 ? dates[dates.length - 2] : null;
  const prevContent = prevDate ? getContent(prevDate) : null;

  if (!content)
    return (
      <div className="max-w-[640px] mx-auto px-5 py-6 flex-1">
        <p className="py-10 text-center text-gray-500">No content available yet.</p>
      </div>
    );

  return (
    <>
      <Header />
      <div className="max-w-[640px] mx-auto px-5 py-6 flex-1">
        <HeroSection date={today} />
        <QuickActions
          date={today}
          questionCount={content.quiz.questions.length}
          storyCount={content.currentAffairs.stories.length}
        />
        <CatchUpSection prevContent={prevContent} prevDate={prevDate} />
        <CAPreview stories={content.currentAffairs.stories} date={today} />
        <StatsSection date={today} />
        <SubjectPills />
        <PremiumUpsell />
        <StoreCrossSell />
      </div>
      <Footer />
    </>
  );
}
