import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {
  return (
    <aside className="h-fit rounded-2xl border border-slate-100 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
      <p className="mt-0.5 text-sm text-slate-400">
        {stack.length} Technology Selected
      </p>

      {/* Conditional rendering: empty state vs list of selected items */}
      {stack.length === 0 ? (
        <p className="mt-6 rounded-xl bg-slate-50 px-4 py-6 text-center text-sm text-slate-400">
          You haven't added any technology yet. Pick one from the list to start building
          your stack.
        </p>
      ) : (
        <>
          <ul className="mt-4 flex flex-col gap-3">
            {stack.map((tech) => (
              <li
                key={tech.id}
                className="flex items-center gap-3 rounded-xl border border-slate-100 px-3 py-2.5"
              >
                <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-800">{tech.name}</p>
                  <p className="text-xs text-slate-400">{tech.category}</p>
                </div>
                <button
                  onClick={() => onRemove(tech.id)}
                  aria-label={`Remove ${tech.name} from stack`}
                  className="text-slate-400 transition hover:text-rose-500"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-xl border border-rose-200 py-2.5 text-sm font-semibold text-rose-500 transition hover:bg-rose-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}
