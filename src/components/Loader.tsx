export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24">
      <span className="loading loading-spinner loading-lg text-secondary" />
      <p className="text-sm text-slate-500">Loading technologies…</p>
    </div>
  );
}
