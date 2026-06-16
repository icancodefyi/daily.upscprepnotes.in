import Link from "next/link";

export function Footer() {
  return (
    <div className="text-center px-5 py-8 text-xs text-gray-400">
      <p>daily.upscprepnotes.in &mdash; Daily Quiz & Current Affairs for UPSC CSE</p>
      <p className="mt-1">
        <Link href="/" className="text-gray-500 underline">
          Home
        </Link>{" "}
        &middot;{" "}
        <a href="https://upscprepnotes.in/about" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">
          About
        </a>{" "}
        &middot;{" "}
        <a href="https://upscprepnotes.in/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">
          Privacy
        </a>{" "}
        &middot;{" "}
        <a href="https://upscprepnotes.in" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline">
          upscprepnotes.in
        </a>
      </p>
    </div>
  );
}
