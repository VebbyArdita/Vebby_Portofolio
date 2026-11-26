import { Code, Database, Palette, Trophy } from "lucide-react";
import { skillGroups, achievements } from "@/lib/data";

function getCategoryIcon(category: string) {
  if (category.includes("Development"))
    return <Code className="h-5 w-5 text-[#1E5B79]" />;
  if (category.includes("Data"))
    return <Database className="h-5 w-5 text-[#1E5B79]" />;
  return <Palette className="h-5 w-5 text-[#1E5B79]" />;
}

export default function SkillsAchievements() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      {/* Awards & Certification Highlight Cards */}
      <div className="mb-14">
        <div className="mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1E5B79]">
            Milestones & Recognition
          </span>
          <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900">
            Awards & Certification
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#1E5B79]/40 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#1E5B79]/10 px-3 py-1 font-mono text-xs font-bold text-[#1E5B79]">
                  {item.badge}
                </span>
                <Trophy className="h-4 w-4 text-amber-500" />
              </div>
              <p className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900">
                {item.metric}
              </p>
              <h3 className="mt-1 text-base font-bold text-slate-800">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills & Tools Matrix */}
      <div>
        <div className="mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1E5B79]">
            Core Competencies
          </span>
          <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900">
            Skills & Tools
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex items-center gap-2.5 border-b border-slate-100 pb-3.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="text-base font-extrabold text-slate-900">
                  {group.category}
                </h3>
              </div>

              <div className="space-y-4">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <p className="text-sm font-bold text-slate-800">
                      {skill.name}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                      {skill.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
