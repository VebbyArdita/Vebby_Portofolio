"use client";

import { useState } from "react";
import {
  Gamepad2,
  Globe,
  Sparkles,
  Image as ImageIcon,
  Check,
} from "lucide-react";
import { projects } from "@/lib/data";

export default function ProjectSection() {
  const [filter, setFilter] = useState<
    "All" | "Game Development" | "Web Development"
  >("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="border-y border-slate-200/80 bg-white py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1E5B79]">
              Featured Works
            </span>
            <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900">
              Selected Projects
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600">
              Karya pengembangan game edukasi Unity WebGL, portal pariwisata
              regional, dan sistem informasi pendidikan.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(["All", "Game Development", "Web Development"] as const).map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`rounded-xl px-3.5 py-2 text-xs font-bold transition cursor-pointer ${
                    filter === tab
                      ? "bg-[#1E5B79] text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                  }`}
                >
                  {tab}
                </button>
              ),
            )}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-1">
          {filteredProjects.map((project, index) => (
            <article
              key={project.slug}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/70 shadow-sm transition hover:border-[#1E5B79]/40 hover:shadow-md"
            >
              <div className="grid lg:grid-cols-12">
                {/* Preview / Screenshot Area */}
                <div className="flex flex-col justify-between border-b border-slate-200 bg-gradient-to-br from-[#1E5B79]/10 via-sky-50 to-slate-100 p-6 lg:col-span-5 lg:border-b-0 lg:border-r">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1 font-mono text-xs font-bold text-[#1E5B79] shadow-xs">
                      {project.category === "Game Development" ? (
                        <Gamepad2 className="h-3.5 w-3.5" />
                      ) : (
                        <Globe className="h-3.5 w-3.5" />
                      )}
                      0{index + 1} • {project.category}
                    </span>
                  </div>

                  {project.coverImage ? (
                    <div className="my-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="h-52 w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="my-5 flex h-48 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-white/80 p-4 text-center">
                      <ImageIcon className="h-8 w-8 text-slate-400" />
                      <p className="mt-2 text-xs font-bold text-slate-700">
                        Screenshot {project.title}
                      </p>
                      <p className="mt-1 font-mono text-[11px] text-slate-500">
                        Taruh gambar di public/projects/{project.slug}.png
                      </p>
                    </div>
                  )}

                  {project.terminalCommand && (
                    <div className="rounded-xl bg-slate-900 px-3.5 py-2 font-mono text-[11px] text-emerald-400">
                      {project.terminalCommand}
                    </div>
                  )}
                </div>

                {/* Details Area */}
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs font-semibold text-slate-500">
                        {project.period}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#FACC15]/25 px-3 py-0.5 text-xs font-bold text-slate-800">
                        <Sparkles className="h-3 w-3 text-amber-600" />
                        {project.role}
                      </span>
                    </div>

                    <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#1E5B79]">
                      {project.subtitle}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {project.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {project.highlights.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200/80 pt-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-1 font-mono text-xs font-semibold text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
