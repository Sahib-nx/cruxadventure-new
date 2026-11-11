import { ArrowRight, Calendar } from 'lucide-react';

interface CtaSectionProps {
  onOpenInquiry: () => void;
}

export default function CtaSection({ onOpenInquiry }: CtaSectionProps) {
  return (
    <section className="w-full bg-[#FCF9F5] py-16 sm:py-24 lg:py-28 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#18231C] via-[#121A15] to-[#0D130F] border border-[#C5A059]/30 p-6 sm:p-12 md:p-16 lg:p-20 text-center shadow-2xl">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(197,160,89,0.15),transparent_70%)] pointer-events-none" />

          {/* Badge */}
          <div className="relative z-10 inline-block mb-4 sm:mb-6">
            <span className="font-manrope text-[0.68rem] font-bold tracking-[0.25em] text-[#E9C176] bg-white/5 border border-[#C5A059]/40 px-3.5 py-1.5 rounded-full uppercase">
              PRIVATE EXPEDITIONS 2026 / 2027
            </span>
          </div>

          {/* Main Display Heading */}
          <h2 className="relative z-10 font-playfair text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal leading-[1.12] tracking-tight max-w-4xl mx-auto mb-4 sm:mb-6">
            Your Kashmir story <br />
            <span className="italic font-light text-[#E9C176]">starts here.</span>
          </h2>

          {/* Subtext */}
          <p className="relative z-10 font-manrope text-sm sm:text-base md:text-lg text-white/75 max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10">
            Let our private concierges craft an itinerary tailored to your rhythm, curiosity, and sanctuary desires.
          </p>

          {/* Action Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-lg mx-auto w-full">
            <button
              type="button"
              onClick={onOpenInquiry}
              className="w-full sm:w-auto min-h-[48px] bg-[#C5A059] hover:bg-[#D8B46E] text-[#1C1C1A] font-manrope font-bold text-xs tracking-wider uppercase px-8 py-3.5 sm:py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-200 shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#E9C176]"
            >
              <span>PLAN YOUR BESPOKE EXPEDITION</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>

            <button
              type="button"
              onClick={onOpenInquiry}
              className="w-full sm:w-auto min-h-[48px] bg-white/5 hover:bg-white/10 text-white border border-white/20 font-manrope font-semibold text-xs tracking-wider uppercase px-7 py-3.5 sm:py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <Calendar className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>EXPLORE SEASONAL CALENDAR</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
