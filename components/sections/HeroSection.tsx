"use client";

import { useState } from "react";
import {
  GraduationCap,
  MapPin,
  Award,
  ArrowDownRight,
  Terminal,
  User,
} from "lucide-react";
import { profileData } from "@/lib/data";

const floatingBadges = [
  { label: "C#", bg: "bg-blue-600", pos: "top-3 left-3 -rotate-6" },
  { label: "Unity", bg: "bg-slate-900", pos: "top-3 right-3 rotate-6" },
  { label: "Excel", bg: "bg-emerald-600", pos: "bottom-16 left-2 rotate-3" },
  {
    label: "JS",
    bg: "bg-amber-500 text-slate-950",
    pos: "bottom-16 right-2 -rotate-3",
  },
];

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-[#1E5B79] via-[#194E68] to-[#133D52] text-white"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        {/* Top Tagline */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-sky-100 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{profileData.availability}</span>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-200">
                Information Systems Portfolio
              </p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Hello, I&apos;m <br />
                <span className="text-[#FACC15]">{profileData.shortName}</span>
              </h1>
              <p className="mt-3 text-lg font-semibold text-sky-100 sm:text-xl">
                {profileData.headline}
              </p>
            </div>

            <p className="max-w-2xl text-sm leading-relaxed text-sky-100/90 sm:text-base">
              {profileData.summary}
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2.5 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-white border border-white/15">
                <Award className="h-4 w-4 text-[#FACC15]" />
                BNSP Junior Web Developer
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-white border border-white/15">
                <GraduationCap className="h-4 w-4 text-sky-300" />
                IPK 3.96 • Unsrat
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-white border border-white/15">
                <MapPin className="h-4 w-4 text-rose-300" />
                {profileData.location}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-[#FACC15] px-5 py-3 text-sm font-extrabold text-slate-900 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Lihat Proyek Pilihan
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20"
              >
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* Right Visual Card (Photo + Floating Stack + Terminal) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md shadow-2xl">
              {/* Floating Badges */}
              {floatingBadges.map((b) => (
                <span
                  key={b.label}
                  className={`absolute ${b.pos} z-10 rounded-xl ${b.bg} px-3 py-1.5 font-mono text-xs font-bold shadow-lg border border-white/20`}
                >
                  {b.label}
                </span>
              ))}

              {/* Profile Photo Circle */}
              <div className="mx-auto mt-2 flex h-52 w-52 items-center justify-center overflow-hidden rounded-full border-4 border-white/30 bg-slate-800/70 shadow-inner">
                {!imgError ? (
                  <img
                    src={profileData.profilePhoto}
                    alt={profileData.name}
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center px-4 text-center text-sky-200/80">
                    <User className="h-12 w-12 mb-1.5 opacity-75" />
                    <span className="text-xs font-semibold">
                      Vebby Ardita Manalu
                    </span>
                    <span className="mt-1 font-mono text-[10px] text-sky-300/70">
                      public/projects/vebby-profile.jpg
                    </span>
                  </div>
                )}
              </div>

              {/* Education Mini Card */}
              <div className="mt-5 rounded-2xl border border-white/15 bg-slate-900/50 p-3.5 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-300">
                    {profileData.education.university}
                  </span>
                  <span className="rounded bg-[#FACC15]/20 px-2 py-0.5 font-mono text-[11px] font-bold text-[#FACC15]">
                    IPK {profileData.education.gpa}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-200">
                  {profileData.education.degree} ({profileData.education.period}
                  )
                </p>
              </div>

              {/* Terminal Build Snippet from PDF */}
              <div className="mt-3 rounded-xl border border-slate-700/80 bg-slate-950 p-3 font-mono text-xs shadow-inner">
                <div className="mb-1.5 flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span className="ml-auto flex items-center gap-1 text-[10px] text-slate-400">
                    <Terminal className="h-3 w-3" /> build
                  </span>
                </div>
                <p className="text-sky-300">$ build EcoSort --webgl</p>
                <p className="text-emerald-400">✓ build complete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
