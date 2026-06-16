"use client";

const STORAGE_KEY = "daily-quiz-completed";

function getCompletedDates(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCompletedDates(dates: string[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dates));
}

export function markCompleted(date: string): void {
  const dates = getCompletedDates();
  if (!dates.includes(date)) {
    dates.push(date);
    saveCompletedDates(dates);
  }
}

export function isCompleted(date: string): boolean {
  return getCompletedDates().includes(date);
}

export function getStreak(): number {
  const dates = getCompletedDates().sort().reverse();
  if (dates.length === 0) return 0;

  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  const latest = dates[0];
  if (latest !== today && latest !== yesterday) return 0;

  let streak = 1;
  for (let i = 1; i < dates.length; i++) {
    const prev = new Date(dates[i - 1] + "T00:00:00");
    const curr = new Date(dates[i] + "T00:00:00");
    const diff = (prev.getTime() - curr.getTime()) / 86400000;
    if (diff === 1) streak++;
    else break;
  }
  return streak;
}

export function getWeekDates(): string[] {
  const dates: string[] = [];
  const today = new Date();
  const dayOfWeek = today.getDay();
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((dayOfWeek + 6) % 7));
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    dates.push(d.toISOString().slice(0, 10));
  }
  return dates;
}

export function getMonthlyDays(year: number, month: number): string[] {
  const days: string[] = [];
  const count = new Date(year, month, 0).getDate();
  for (let d = 1; d <= count; d++) {
    const ds = `${year}-${String(month).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    days.push(ds);
  }
  return days;
}
