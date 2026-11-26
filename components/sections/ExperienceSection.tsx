import { Briefcase, Code2, Users, Award, CheckCircle2 } from "lucide-react";
import { experiences, ExperienceItem } from "@/lib/data";

function getBadgeStyle(type: ExperienceItem["type"]) {
  switch (type) {
    case "Work":
      return {
        label: "Full-Time / Contract",
        bg: "bg-emerald-50 text-emerald-700 border-emerald-200",
        icon: <Briefcase className="h-4 w-4 text-[#1E5B79]" />,
      };
    case "Internship":
      return {
        label: "Internship",
        bg: "bg-sky-50 text-sky-700 border-sky-200",
        icon: <Code2 className="h-4 w-4 text-[#1E5B79]" />,
      };
    case "Organization":
      return {
        label: "Organization",
        bg: "bg-amber-50 text-amber-800 border-amber-200",
        icon: <Users className="h-4 w-4 text-[#1E5B79]" />,
      };
    case "Certification":
      return {
        label: "Certification",
        bg: "bg-purple-50 text-purple-700 border-purple-200",
        icon: <Award className="h-4 w-4 text-[#1E5B79]" />,
      };
  }
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1E5B79]">
          Career & Organizational Track
        </span>
        <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900">
          Experience & Certification
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Pengalaman profesional di bidang administrasi produksi tambang,
          pengembangan web, serta kepemimpinan organisasi mahasiswa.
        </p>
      </div>

      <div className="relative space-y-6 before:absolute before:inset-y-2 before:left-5 before:w-0.5 before:bg-slate-200 sm:before:left-6">
        {experiences.map((exp) => {
          const style = getBadgeStyle(exp.type);
          return (
            <div key={exp.id} className="relative pl-14 sm:pl-16">
              <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm sm:h-12 sm:w-12">
                {style.icon}
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition hover:border-[#1E5B79]/40 hover:shadow-md sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-[#1E5B79]">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${style.bg}`}
                    >
                      {style.label}
                    </span>
                    <span className="rounded-lg bg-slate-100 px-2.5 py-1 font-mono text-xs font-medium text-slate-700">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.description.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1E5B79]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
