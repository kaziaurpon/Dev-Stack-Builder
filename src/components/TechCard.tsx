import type { Technology } from "../types/technology";

interface TechCardProps {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

export default function TechCard({ tech, isAdded, onAdd }: TechCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex items-start justify-between">
        <img src={tech.icon} alt={`${tech.name} logo`} className="h-9 w-9 object-contain" />
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
          {tech.badge}
        </span>
      </div>

      <h3 className="text-base font-semibold text-slate-900">{tech.name}</h3>
      <p className="mt-1 flex-1 text-sm text-slate-500">{tech.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-md bg-slate-100 px-2 py-1 font-medium text-slate-600">
          {tech.category}
        </span>
        <span className="text-slate-500">{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-medium text-slate-700">
          <span className="text-amber-400">★</span>
          {tech.rating}
        </span>
      </div>

      <button
  onClick={() => onAdd(tech)}
  disabled={isAdded}
  className={
    isAdded
      ? "mt-4 cursor-not-allowed rounded-xl bg-emerald-50 py-2.5 text-sm font-semibold text-emerald-600"
      : "bg-gradient-brand mt-4 rounded-xl py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
  }
>
  {isAdded ? "✓ Added to Stack" : "Add to Stack"}
</button>
    </div>
  );
}
