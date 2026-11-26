"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, ExternalLink } from "lucide-react";
import { profileData } from "@/lib/data";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#184B64] to-[#113649] py-20 text-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left Copy */}
          <div className="lg:col-span-6 space-y-5">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FACC15]">
              Get In Touch
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              LET&apos;S WORK <br />
              TOGETHER.
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-sky-100/90 sm:text-base">
              Terbuka untuk peluang kerja maupun kolaborasi di posisi{" "}
              <strong className="text-white">
                IT, Web Development, dan Administrasi
              </strong>
              . Silakan hubungi langsung melalui WhatsApp, email, atau terhubung
              di LinkedIn.
            </p>

            <div className="pt-2">
              <a
                href={profileData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#FACC15] px-6 py-3.5 text-base font-extrabold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Hire Me! (WhatsApp)
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right macOS Window Card */}
          <div className="lg:col-span-6">
            <div className="mx-auto max-w-md overflow-hidden rounded-3xl border border-slate-200/80 bg-white text-slate-900 shadow-2xl">
              {/* macOS Window Bar */}
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100 px-5 py-3.5">
                <span className="text-sm font-extrabold text-slate-800">
                  Contact
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-emerald-500" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-rose-500" />
                </div>
              </div>

              {/* Contact Items */}
              <div className="space-y-4 p-6">
                {/* Email */}
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3.5">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] font-semibold text-slate-400">
                        Email
                      </p>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="truncate text-sm font-bold text-slate-800 hover:text-blue-600"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="rounded-lg border border-slate-200 bg-white p-2 text-slate-600 transition hover:bg-slate-100 cursor-pointer"
                    title="Salin Email"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-emerald-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Phone / WA */}
                <a
                  href={profileData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3.5 transition hover:border-emerald-200 hover:bg-emerald-50/40"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-400">
                      WhatsApp / Telepon
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                      {profileData.phone}
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3.5 transition hover:border-blue-200 hover:bg-blue-50/40"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0A66C2] text-white font-bold text-sm">
                    in
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-400">
                      LinkedIn
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                      {profileData.linkedinName}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-400">
                      Domisili
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                      {profileData.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
