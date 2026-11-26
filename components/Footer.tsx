import { profileData } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0D2B3A] py-6 text-center text-xs text-sky-200/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>
          © {new Date().getFullYear()} {profileData.name}. All rights reserved.
        </p>
        <p className="font-mono text-[11px]">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
