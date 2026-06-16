import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daily UPSC Quiz & Current Affairs — daily.upscprepnotes.in",
  description:
    "Free daily UPSC current affairs quiz and news summaries. 10 MCQs daily with explanations. Prelims-focused current affairs stories categorised by subject.",
  openGraph: {
    title: "Daily UPSC Quiz & Current Affairs",
    description:
      "Free daily UPSC current affairs quiz and news summaries. 10 MCQs daily with explanations.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#f5f5f5] text-black font-sans">{children}</body>
    </html>
  );
}
