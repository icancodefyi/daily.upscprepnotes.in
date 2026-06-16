export interface Question {
  id: number;
  text: string;
  options: { label: string; text: string; correct: boolean }[];
  explanation: string;
  subject: string;
  difficulty: "easy" | "medium" | "hard";
}

export interface CAStory {
  id: number;
  category: string;
  title: string;
  body: string;
  source?: string;
}

export interface DailyContent {
  date: string;
  quiz: {
    title: string;
    questions: Question[];
  };
  currentAffairs: {
    title: string;
    stories: CAStory[];
  };
}

const sample: DailyContent = {
  date: "2026-06-16",
  quiz: {
    title: "Daily Current Affairs Quiz",
    questions: [
      {
        id: 1,
        text: "Which institution recently released the 'FinHealth Report 2026'?",
        options: [
          { label: "A", text: "RBI", correct: true },
          { label: "B", text: "SEBI", correct: false },
          { label: "C", text: "Ministry of Finance", correct: false },
          { label: "D", text: "World Bank", correct: false },
        ],
        explanation:
          "RBI released the FinHealth Report 2026 analysing the financial health of Indian households.",
        subject: "Economy",
        difficulty: "medium",
      },
      {
        id: 2,
        text: "Consider the following statements about Delimitation:",
        options: [
          { label: "A", text: "Statement 1 only", correct: false },
          { label: "B", text: "Statement 2 only", correct: true },
          { label: "C", text: "Both statements are correct", correct: false },
          { label: "D", text: "Neither statement is correct", correct: false },
        ],
        explanation:
          "Delimitation is carried out based on the Census data, and is aimed at redrawing boundaries of constituencies.",
        subject: "Polity",
        difficulty: "medium",
      },
      {
        id: 3,
        text: "Which of the following best describes 'Silver Economy'?",
        options: [
          { label: "A", text: "Economy of precious metals trading", correct: false },
          { label: "B", text: "Economic activities related to aging population", correct: true },
          { label: "C", text: "Digital currency ecosystem", correct: false },
          { label: "D", text: "Silver mining industry output", correct: false },
        ],
        explanation:
          "Silver Economy refers to the economic opportunities and challenges arising from an aging population.",
        subject: "Economy",
        difficulty: "easy",
      },
      {
        id: 4,
        text: "What is the primary objective of the 'National Green Hydrogen Mission'?",
        options: [
          { label: "A", text: "Export of hydrogen to neighbouring countries", correct: false },
          { label: "B", text: "Making India a global hub for green hydrogen production", correct: true },
          { label: "C", text: "Replacing all fossil fuels by 2030", correct: false },
          { label: "D", text: "Import of hydrogen technology", correct: false },
        ],
        explanation:
          "The National Green Hydrogen Mission aims to make India a global hub for production, usage and export of Green Hydrogen.",
        subject: "Environment",
        difficulty: "medium",
      },
      {
        id: 5,
        text: "Consider the following pairs: Wildlife Sanctuary - State",
        options: [
          { label: "A", text: "Pair 1 only", correct: false },
          { label: "B", text: "Pair 2 only", correct: false },
          { label: "C", text: "Both pairs are correct", correct: true },
          { label: "D", text: "Neither pair is correct", correct: false },
        ],
        explanation:
          "Both pairs are correctly matched. These sanctuaries are important tiger reserves in their respective states.",
        subject: "Environment",
        difficulty: "hard",
      },
      {
        id: 6,
        text: "Which article of the Indian Constitution deals with the 'Right to Education'?",
        options: [
          { label: "A", text: "Article 14", correct: false },
          { label: "B", text: "Article 19", correct: false },
          { label: "C", text: "Article 21", correct: false },
          { label: "D", text: "Article 21A", correct: true },
        ],
        explanation:
          "Article 21A was inserted by the 86th Constitutional Amendment Act, 2002, providing free and compulsory education to children aged 6-14 years.",
        subject: "Polity",
        difficulty: "easy",
      },
      {
        id: 7,
        text: "'Exercise Sampriti' is a joint military exercise between India and which country?",
        options: [
          { label: "A", text: "Nepal", correct: false },
          { label: "B", text: "Bangladesh", correct: true },
          { label: "C", text: "Myanmar", correct: false },
          { label: "D", text: "Sri Lanka", correct: false },
        ],
        explanation:
          "Exercise Sampriti is a biennial joint military exercise between India and Bangladesh, hosted alternately.",
        subject: "Security",
        difficulty: "medium",
      },
      {
        id: 8,
        text: "Which of the following is NOT a type of inflation?",
        options: [
          { label: "A", text: "Demand-pull inflation", correct: false },
          { label: "B", text: "Cost-push inflation", correct: false },
          { label: "C", text: "Stagflation", correct: false },
          { label: "D", text: "Hyper-deflation", correct: true },
        ],
        explanation:
          "Hyper-deflation is not a recognized type of inflation. Stagflation refers to high inflation with high unemployment.",
        subject: "Economy",
        difficulty: "easy",
      },
      {
        id: 9,
        text: "'DRDO Young Scientist Laboratory' focuses on which technology?",
        options: [
          { label: "A", text: "Quantum Computing", correct: true },
          { label: "B", text: "Artificial Intelligence", correct: false },
          { label: "C", text: "Cyber Security", correct: false },
          { label: "D", text: "Space Technology", correct: false },
        ],
        explanation:
          "DRDO established a Young Scientist Laboratory for Quantum Computing to nurture young talent in this emerging field.",
        subject: "Science & Tech",
        difficulty: "medium",
      },
      {
        id: 10,
        text: "Consider the following statements regarding SWIFT:",
        options: [
          { label: "A", text: "Statement 1 only", correct: true },
          { label: "B", text: "Statement 2 only", correct: false },
          { label: "C", text: "Both statements are correct", correct: false },
          { label: "D", text: "Neither statement is correct", correct: false },
        ],
        explanation:
          "SWIFT is a global messaging system used for international financial transactions, headquartered in Belgium.",
        subject: "International Relations",
        difficulty: "hard",
      },
    ],
  },
  currentAffairs: {
    title: "Today's Headlines",
    stories: [
      {
        id: 1,
        category: "Economy",
        title: "RBI Releases FinHealth Report 2026",
        body: "The Reserve Bank of India released the FinHealth Report 2026 analysing household financial resilience, digital payment adoption, and credit access across Indian states.",
      },
      {
        id: 2,
        category: "Polity",
        title: "Delimitation Exercise to Begin Next Year",
        body: "The government announced that the delimitation exercise for redrawing Lok Sabha and assembly constituencies will commence after the next Census, sparking debate on representation.",
      },
      {
        id: 3,
        category: "Science & Tech",
        title: "ISRO Successfully Tests Reusable Launch Vehicle",
        body: "ISRO completed the landing experiment of its Reusable Launch Vehicle (RLV) at the Challakere test facility, a major step toward cost-effective space access.",
      },
      {
        id: 4,
        category: "Environment",
        title: "India Achieves 200 GW Renewable Energy Target",
        body: "India crossed the 200 GW installed renewable energy capacity milestone, with solar contributing the largest share at 90 GW.",
      },
      {
        id: 5,
        category: "International Relations",
        title: "India-EU Trade Agreement Talks Resume",
        body: "India and the European Union resumed negotiations for a free trade agreement after a five-year gap, focusing on tariff reduction and intellectual property rights.",
      },
      {
        id: 6,
        category: "Social Issues",
        title: "Maternity Leave Benefits Expanded for Women Workers",
        body: "The Ministry of Labour extended maternity leave benefits to women in the gig and platform economy under the Maternity Benefit Act.",
      },
    ],
  },
};

const dateContentMap: Record<string, DailyContent> = {
  "2026-06-16": sample,
};

function todayDate(): string {
  return new Date().toISOString().slice(0, 10);
}

export function getContent(date?: string): DailyContent | null {
  return dateContentMap[date || todayDate()] || null;
}

export function getAvailableDates(): string[] {
  return Object.keys(dateContentMap);
}

export function getSubjectContent(subject: string): DailyContent[] {
  const slug = subject.toLowerCase().replace(/[\s&-]+/g, "-");
  return Object.values(dateContentMap)
    .map((c) => {
      const filtered: DailyContent = {
        ...c,
        quiz: {
          ...c.quiz,
          questions: c.quiz.questions.filter(
            (q) => q.subject.toLowerCase().replace(/[\s&-]+/g, "-") === slug,
          ),
        },
        currentAffairs: {
          ...c.currentAffairs,
          stories: c.currentAffairs.stories.filter(
            (s) => s.category.toLowerCase().replace(/[\s&-]+/g, "-") === slug,
          ),
        },
      };
      return filtered;
    })
    .filter(
      (c) => c.quiz.questions.length > 0 || c.currentAffairs.stories.length > 0,
    );
}

export function getMonthlyContent(month: string): DailyContent[] {
  return Object.values(dateContentMap).filter((c) => c.date.startsWith(month));
}

export function subjects(): string[] {
  return [
    "Polity", "Economy", "Environment", "Science & Tech",
    "International Relations", "Geography", "History",
    "Social Issues", "Security", "Culture",
  ];
}
