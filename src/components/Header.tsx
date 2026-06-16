import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black px-6 py-3.5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="text-lg font-extrabold text-white tracking-tight">
          <Link href="/" className="text-white no-underline">
            daily<span className="text-emerald-300">.</span>
            <span className="text-gray-500 font-medium text-[13px]">upscprepnotes.in</span>
          </Link>
        </div>
      </div>
      <nav className="hidden sm:flex gap-5">
        <Link href="/" className="text-gray-400 no-underline text-sm font-medium hover:text-white">
          Home
        </Link>
        <Link
          href={`/quiz/${new Date().toISOString().slice(0, 10)}`}
          className="text-gray-400 no-underline text-sm font-medium hover:text-white"
        >
          Quiz
        </Link>
        <Link
          href={`/current-affairs/${new Date().toISOString().slice(0, 10)}`}
          className="text-gray-400 no-underline text-sm font-medium hover:text-white"
        >
          Current Affairs
        </Link>
        <Link href="/subject/polity" className="text-gray-400 no-underline text-sm font-medium hover:text-white">
          Subjects
        </Link>
      </nav>
      <div className="flex items-center gap-3">
        <span className="bg-emerald-200 text-black text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Premium
        </span>
        <a
          href="https://upscprepnotes.in/store"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1a1a1a] text-white border border-gray-700 px-4 py-1.5 rounded-lg text-[13px] font-semibold no-underline inline-block hover:bg-[#2a2a2a] hover:border-gray-500"
        >
          Store
        </a>
      </div>
    </header>
  );
}
