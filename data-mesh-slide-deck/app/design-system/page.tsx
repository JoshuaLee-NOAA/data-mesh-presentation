export default function DesignSystemPage() {
  const colors = [
    { name: "Blue", token: "georgetown-blue", hex: "#011E41", class: "bg-georgetown-blue" },
    { name: "Gray", token: "georgetown-gray", hex: "#63666A", class: "bg-georgetown-gray" },
    { name: "Gold", token: "georgetown-gold", hex: "#F4B942", class: "bg-georgetown-gold" },
    { name: "Teal", token: "georgetown-teal", hex: "#14B8A6", class: "bg-georgetown-teal" },
    { name: "Cool Gray", token: "georgetown-cool-gray", hex: "#A0A0A5", class: "bg-georgetown-cool-gray" },
    { name: "Off White", token: "georgetown-off-white", hex: "#F5F5F0", class: "bg-georgetown-off-white border border-georgetown-cool-gray" },
  ];

  const typography = [
    { label: "Heading 1 (5xl)", className: "font-display text-5xl font-bold text-georgetown-blue tracking-tight", sample: "Data Mesh Architecture" },
    { label: "Heading 2 (4xl)", className: "font-display text-4xl font-bold text-georgetown-blue tracking-tight", sample: "Domain Ownership" },
    { label: "Heading 3 (3xl)", className: "font-display text-3xl font-bold text-georgetown-blue tracking-tight", sample: "Electronic Monitoring" },
    { label: "Heading 4 (2xl)", className: "font-display text-2xl font-semibold text-georgetown-blue", sample: "Migration Patterns" },
    { label: "Body Large", className: "font-sans text-lg text-georgetown-gray", sample: "NOAA Fisheries manages the nation's living marine resources across eight Regional Fishery Management Councils." },
    { label: "Body Base", className: "font-sans text-base text-georgetown-gray", sample: "The data mesh is a decentralized sociotechnical approach to managing analytical data at scale." },
    { label: "Body Small", className: "font-sans text-sm text-georgetown-gray", sample: "Author — Georgetown University — June 2026" },
    { label: "Section Label", className: "font-sans text-xs uppercase tracking-[0.2em] text-georgetown-gold font-semibold", sample: "PROBLEM" },
  ];

  const cards = [
    { label: "Default Card", className: "border border-georgetown-blue bg-white rounded-xl shadow-lg" },
    { label: "Risk Card", className: "border-l-4 border-l-rose-500 bg-white rounded-xl shadow-lg" },
  ];

  const pills = [
    { label: "Section Pill", className: "bg-georgetown-gold text-white text-xs font-semibold uppercase tracking-widest px-3 py-1" },
    { label: "Stat Pill", className: "bg-georgetown-blue text-white text-xs font-bold px-3 py-1" },
    { label: "Teal Pill", className: "bg-georgetown-teal text-white text-xs font-semibold px-3 py-1" },
  ];

  return (
    <div className="min-h-screen bg-white p-8 lg:p-16 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-2">
          <h1 className="font-display text-4xl font-bold text-georgetown-blue tracking-tight">
            Design System
          </h1>
          <span className="bg-georgetown-teal text-white text-xs font-semibold px-3 py-1 rounded-full">v2</span>
        </div>
        <p className="text-georgetown-gray mb-4">Data Mesh Slide Deck — Georgetown University Palette</p>
        <div className="w-24 h-[3px] gradient-divider mb-12" />

        {/* Colors */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-georgetown-blue mb-6 border-b border-georgetown-cool-gray pb-2 tracking-tight">
            Color Palette
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {colors.map((c) => (
              <div key={c.token} className="text-center">
                <div className={`${c.class} h-20 rounded-xl mb-2 shadow-md`} />
                <p className="text-xs font-semibold text-georgetown-blue">{c.name}</p>
                <p className="text-xs text-georgetown-cool-gray">{c.token}</p>
                <p className="text-xs text-georgetown-cool-gray font-mono">{c.hex}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gradients */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-georgetown-blue mb-6 border-b border-georgetown-cool-gray pb-2 tracking-tight">
            Gradients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-georgetown-cool-gray font-mono mb-2">Gold → Teal Divider</p>
              <div className="w-full h-3 gradient-divider rounded-full" />
            </div>
            <div>
              <p className="text-xs text-georgetown-cool-gray font-mono mb-2">Card Top Accent</p>
              <div className="border border-georgetown-cool-gray/20 rounded-xl overflow-hidden shadow-lg bg-white">
                <div className="h-1 gradient-divider" />
                <div className="p-4">
                  <p className="text-sm font-semibold text-georgetown-blue">Gradient-accented card</p>
                  <p className="text-xs text-georgetown-gray mt-1">Uses gradient-divider as a top border accent for visual interest.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-georgetown-blue mb-6 border-b border-georgetown-cool-gray pb-2 tracking-tight">
            Typography
          </h2>
          <div className="space-y-3">
            {typography.map((t) => (
              <div key={t.label} className="flex flex-col gap-1 p-3 rounded-xl border border-georgetown-cool-gray/30">
                <span className="text-xs text-georgetown-cool-gray font-mono">{t.label}</span>
                <span className={t.className}>{t.sample}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-georgetown-blue mb-6 border-b border-georgetown-cool-gray pb-2 tracking-tight">
            Cards (Elevated)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cards.map((card) => (
              <div key={card.label} className={`${card.className} p-6`}>
                <p className="text-xs text-georgetown-cool-gray font-mono mb-2">{card.label}</p>
                <p className="font-semibold text-georgetown-blue font-sans">Card Title</p>
                <p className="text-sm text-georgetown-gray mt-1">
                  Floating depth with shadow-lg and rounded-xl. Cards feel like elevated, modern UI.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pills / Badges */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-georgetown-blue mb-6 border-b border-georgetown-cool-gray pb-2 tracking-tight">
            Pills & Badges
          </h2>
          <div className="flex flex-wrap gap-4 items-center">
            {pills.map((pill) => (
              <div key={pill.label} className="flex flex-col items-center gap-2">
                <span className={pill.className + " rounded-full"}>{pill.label}</span>
                <span className="text-xs text-georgetown-cool-gray font-mono">{pill.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Arrows */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-georgetown-blue mb-6 border-b border-georgetown-cool-gray pb-2 tracking-tight">
            Navigation Arrows
          </h2>
          <div className="flex gap-8 items-center">
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-georgetown-teal text-white arrow-glow-teal arrow-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7-7 7 7" />
              </svg>
            </button>
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-georgetown-gold/80 text-white arrow-glow-gold arrow-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7 7 7-7" />
              </svg>
            </button>
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-georgetown-teal text-white arrow-glow-teal arrow-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7 7 7-7" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-georgetown-cool-gray mt-3">
            Vibrant Gold (default). Teal variant available. Hover: scale(1.1) + gold glow shadow.
          </p>
        </section>

        {/* Layout Samples */}
        <section>
          <h2 className="font-display text-2xl font-bold text-georgetown-blue mb-6 border-b border-georgetown-cool-gray pb-2 tracking-tight">
            Layout Patterns
          </h2>
          <div className="space-y-6">
            <div className="border border-dashed border-georgetown-cool-gray rounded-xl p-6">
              <p className="text-xs text-georgetown-cool-gray font-mono mb-3">Two-Column (55/45)</p>
              <div className="flex gap-6">
                <div className="flex-[55] bg-georgetown-off-white rounded-xl p-4 shadow-sm">
                  <p className="text-sm font-semibold text-georgetown-blue">Left Column (Text)</p>
                </div>
                <div className="flex-[45] bg-[#E8FAF8] rounded-xl p-4 shadow-sm">
                  <p className="text-sm font-semibold text-georgetown-teal">Right Column (Diagram)</p>
                </div>
              </div>
            </div>
            <div className="border border-dashed border-georgetown-cool-gray rounded-xl p-6">
              <p className="text-xs text-georgetown-cool-gray font-mono mb-3">Card Grid (2x2)</p>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="border border-georgetown-blue rounded-xl p-4 bg-white shadow-lg">
                    <p className="text-sm font-semibold text-georgetown-blue">Card {i}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-dashed border-georgetown-cool-gray rounded-xl p-6">
              <p className="text-xs text-georgetown-cool-gray font-mono mb-3">Centered Layout</p>
              <div className="flex items-center justify-center h-32 bg-georgetown-off-white rounded-xl">
                <p className="text-lg font-display text-georgetown-blue font-semibold">Centered Content</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}