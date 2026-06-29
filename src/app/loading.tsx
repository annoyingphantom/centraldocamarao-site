export default function Loading() {
  return (
    <main className="min-h-screen bg-brand-cream px-4 py-24">
      <div className="mx-auto max-w-5xl animate-pulse">
        <div className="h-6 w-48 rounded-full bg-brand-gold/35" />
        <div className="mt-6 h-14 max-w-2xl rounded-brand bg-brand-navy/15" />
        <div className="mt-4 h-5 max-w-xl rounded-full bg-brand-navy/10" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="h-52 rounded-brand bg-white shadow-soft" />
          <div className="h-52 rounded-brand bg-white shadow-soft" />
          <div className="h-52 rounded-brand bg-white shadow-soft" />
        </div>
      </div>
    </main>
  );
}
