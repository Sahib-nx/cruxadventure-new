import { useState } from 'react';
import { CIRCUIT_STAGES } from '../data';
import { Compass, ArrowRight, ArrowLeft } from 'lucide-react';

export default function CircuitSection() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const stage = CIRCUIT_STAGES[activeStageIndex];

  return (
    <section id="circuit" className="w-full bg-[#FCF9F5] py-16 sm:py-24 lg:py-32 px-4 sm:px-10 md:px-16 border-b border-[#E5E2DE]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#C5A059]" />
              <span className="font-manrope text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase">
                TRANSIT TOPOLOGY
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-5xl lg:text-6xl text-[#1C1C1A] leading-[1.1] font-normal tracking-tight">
              The Trans-Himalayan <span className="italic text-[#775A19]">Circuit</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-manrope text-sm sm:text-base text-[#4E4639] leading-relaxed">
              Explore the ancient trade routes that connect these enclaves. Curated seamlessly to eliminate friction, ensuring smooth transitions between lake level and mountain ridges.
            </p>
          </div>
        </div>

        {/* MOBILE VIEW: Vertical Chronological Timeline (< md) */}
        <div className="md:hidden relative pl-2 pr-1 mb-8">
          {/* Continuous vertical timeline spine */}
          <div className="absolute left-[19px] top-4 bottom-8 w-[2px] bg-[#C5A059]/35" aria-hidden="true" />

          <div className="space-y-7">
            {CIRCUIT_STAGES.map((s) => (
              <div key={s.id} className="relative flex items-start gap-4">
                {/* Timeline node */}
                <div className="w-8 h-8 rounded-full bg-[#C5A059] text-[#1C1C1A] font-manrope font-bold text-xs flex items-center justify-center shrink-0 z-10 shadow-sm mt-1 ring-4 ring-[#FCF9F5]">
                  {s.stageNumber}
                </div>

                {/* Stage card */}
                <div className="flex-1 bg-white border border-[#D1C5B4]/60 rounded-xl p-4 sm:p-5 shadow-sm overflow-hidden">
                  {/* Stage Image */}
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-3 bg-black/10">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="font-manrope text-[0.62rem] font-bold tracking-wider text-white bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full uppercase border border-white/20">
                        {s.name}
                      </span>
                    </div>
                  </div>

                  <span className="font-manrope text-[0.65rem] font-bold tracking-[0.18em] text-[#C5A059] uppercase block mb-1">
                    STAGE {s.stageNumber} / {s.altitude}
                  </span>

                  <h3 className="font-playfair text-xl sm:text-2xl text-[#1C1C1A] font-medium mb-2 leading-snug">
                    {s.title}
                  </h3>

                  <p className="font-manrope text-xs sm:text-sm text-[#4E4639] leading-relaxed mb-4">
                    {s.description}
                  </p>

                  {/* Metrics bar */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#F0EDEA] text-xs font-manrope">
                    <div>
                      <span className="text-[0.62rem] font-bold text-[#7F7667] uppercase block">
                        TRANSIT
                      </span>
                      <span className="font-medium text-[#1C1C1A] text-xs">
                        {s.transitTime}
                      </span>
                    </div>
                    <div>
                      <span className="text-[0.62rem] font-bold text-[#7F7667] uppercase block">
                        HIGHLIGHT
                      </span>
                      <span className="font-medium text-[#775A19] text-xs truncate block">
                        {s.keyHighlight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP & TABLET VIEW: Interactive Stepper (md+) */}
        <div className="hidden md:block">
          {/* Interactive Progress Line & Stepper */}
          <div className="relative mb-12 lg:mb-16">
            <div className="absolute top-5 left-8 right-8 h-[2px] bg-[#E5E2DE] z-0" />
            <div
              className="absolute top-5 left-8 h-[2px] bg-[#C5A059] z-0 transition-all duration-500 ease-out"
              style={{ width: `${(activeStageIndex / (CIRCUIT_STAGES.length - 1)) * 100}%` }}
            />

            <div className="grid grid-cols-5 gap-2 relative z-10">
              {CIRCUIT_STAGES.map((s, idx) => {
                const isActive = idx === activeStageIndex;
                const isPast = idx < activeStageIndex;

                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveStageIndex(idx)}
                    className="flex flex-col items-center text-center group cursor-pointer p-1"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-manrope text-xs font-bold transition-all duration-300 ${
                        isActive
                          ? 'bg-[#C5A059] text-[#1C1C1A] ring-4 ring-[#C5A059]/25 scale-110 shadow-md'
                          : isPast
                          ? 'bg-[#1C1C1A] text-white'
                          : 'bg-white border border-[#D1C5B4] text-[#7F7667] group-hover:border-[#C5A059]'
                      }`}
                    >
                      {s.stageNumber}
                    </div>
                    <span
                      className={`mt-2 font-manrope text-xs md:text-sm tracking-wider transition-colors duration-200 block ${
                        isActive
                          ? 'font-bold text-[#1C1C1A]'
                          : 'text-[#7F7667] group-hover:text-[#1C1C1A]'
                      }`}
                    >
                      {s.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Circuit Stage Container */}
          <div className="bg-white border border-[#D1C5B4]/60 rounded-2xl overflow-hidden sunkissed-elevation p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left: Narrative & Metrics */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="font-manrope text-[0.68rem] font-bold tracking-[0.2em] text-[#C5A059] uppercase block mb-2">
                    STAGE {stage.stageNumber} OF 05 / VALLEY LEVEL ({stage.altitude})
                  </span>

                  <h3 className="font-playfair text-3xl lg:text-4xl text-[#1C1C1A] font-medium mb-4">
                    {stage.title}
                  </h3>

                  <p className="font-manrope text-sm lg:text-base text-[#4E4639] leading-relaxed mb-6 lg:mb-8">
                    {stage.description}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 pt-5 border-t border-[#F0EDEA] mb-6">
                  <div>
                    <span className="font-manrope text-[0.65rem] font-bold tracking-widest text-[#7F7667] uppercase block mb-1">
                      TRANSIT TIME
                    </span>
                    <span className="font-playfair text-xl lg:text-2xl font-semibold text-[#1C1C1A]">
                      {stage.transitTime}
                    </span>
                  </div>

                  <div>
                    <span className="font-manrope text-[0.65rem] font-bold tracking-widest text-[#7F7667] uppercase block mb-1">
                      ALTITUDE
                    </span>
                    <span className="font-playfair text-xl lg:text-2xl font-semibold text-[#1C1C1A]">
                      {stage.altitude}
                    </span>
                  </div>

                  <div>
                    <span className="font-manrope text-[0.65rem] font-bold tracking-widest text-[#7F7667] uppercase block mb-1">
                      KEY HIGHLIGHT
                    </span>
                    <span className="font-playfair text-lg lg:text-xl font-medium text-[#775A19]">
                      {stage.keyHighlight}
                    </span>
                  </div>
                </div>

                {/* Navigation Steppers */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    disabled={activeStageIndex === 0}
                    onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                    className="w-10 h-10 rounded-full border border-[#D1C5B4] flex items-center justify-center text-[#1C1C1A] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#F0EDEA] transition-colors cursor-pointer"
                    aria-label="Previous circuit stage"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    disabled={activeStageIndex === CIRCUIT_STAGES.length - 1}
                    onClick={() => setActiveStageIndex((prev) => Math.min(CIRCUIT_STAGES.length - 1, prev + 1))}
                    className="w-10 h-10 rounded-full bg-[#C5A059] hover:bg-[#D8B46E] text-[#1C1C1A] flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer shadow-sm"
                    aria-label="Next circuit stage"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <span className="font-manrope text-xs text-[#7F7667] ml-2">
                    Step {activeStageIndex + 1} of {CIRCUIT_STAGES.length}
                  </span>
                </div>
              </div>

              {/* Right: Stage Photography */}
              <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black shadow-lg group">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    key={stage.id}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="font-manrope text-xs font-semibold tracking-wider text-[#E9C176]">
                      {stage.name} Enclave
                    </span>
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
