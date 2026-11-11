import { PHILOSOPHY_POINTS } from '../data';
import { Sparkles, ArrowRight } from 'lucide-react';

interface PhilosophySectionProps {
  onReserveSanctuary: () => void;
}

export default function PhilosophySection({ onReserveSanctuary }: PhilosophySectionProps) {
  return (
    <section className="w-full bg-[#F6F3EF] py-16 sm:py-24 lg:py-32 px-4 sm:px-10 md:px-16 border-b border-[#E5E2DE]">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Heading Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="font-manrope text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block mb-3">
            PHILOSOPHY OF THE SANCTUARY
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1A] leading-[1.12] font-normal tracking-tight mb-6">
            Some places are visited. <br />
            <span className="italic text-[#775A19]">Kashmir is experienced.</span>
          </h2>
          <p className="font-manrope text-sm sm:text-base text-[#4E4639] leading-relaxed max-w-2xl mx-auto">
            An unfiltered sanctuary of mountain majesty, handcrafted legacy, and deep tranquility reserved for those who know that true luxury is the quiet stillness of alpine silence.
          </p>
        </div>

        {/* Bento Grid layout — 1 column on mobile, 3 columns on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 mb-5 lg:mb-8">
          {/* Card 01 */}
          <div className="bg-[#FCF9F5] border border-[#D1C5B4]/60 rounded-2xl p-6 sm:p-8 lg:p-9 flex flex-col justify-between sunkissed-elevation hover:border-[#C5A059] transition-all duration-300 group">
            <div>
              <span className="font-playfair text-2xl sm:text-3xl font-light text-[#C5A059] block mb-4 sm:mb-6">
                {PHILOSOPHY_POINTS[0].number}
              </span>
              <h3 className="font-playfair text-xl sm:text-2xl text-[#1C1C1A] font-medium leading-snug mb-2.5 sm:mb-3.5 group-hover:text-[#775A19] transition-colors">
                {PHILOSOPHY_POINTS[0].title}
              </h3>
              <p className="font-manrope text-xs sm:text-sm text-[#4E4639] leading-relaxed">
                {PHILOSOPHY_POINTS[0].description}
              </p>
            </div>
            <div className="pt-4 sm:pt-6 mt-5 sm:mt-6 border-t border-[#E5E2DE] flex items-center justify-between">
              <span className="font-manrope text-[0.68rem] font-bold tracking-[0.18em] text-[#7F7667] uppercase">
                {PHILOSOPHY_POINTS[0].tag}
              </span>
            </div>
          </div>

          {/* Card 02 */}
          <div className="bg-[#FCF9F5] border border-[#D1C5B4]/60 rounded-2xl p-6 sm:p-8 lg:p-9 flex flex-col justify-between sunkissed-elevation hover:border-[#C5A059] transition-all duration-300 group">
            <div>
              <span className="font-playfair text-2xl sm:text-3xl font-light text-[#C5A059] block mb-4 sm:mb-6">
                {PHILOSOPHY_POINTS[1].number}
              </span>
              <h3 className="font-playfair text-xl sm:text-2xl text-[#1C1C1A] font-medium leading-snug mb-2.5 sm:mb-3.5 group-hover:text-[#775A19] transition-colors">
                {PHILOSOPHY_POINTS[1].title}
              </h3>
              <p className="font-manrope text-xs sm:text-sm text-[#4E4639] leading-relaxed">
                {PHILOSOPHY_POINTS[1].description}
              </p>
            </div>
            <div className="pt-4 sm:pt-6 mt-5 sm:mt-6 border-t border-[#E5E2DE] flex items-center justify-between">
              <span className="font-manrope text-[0.68rem] font-bold tracking-[0.18em] text-[#7F7667] uppercase">
                {PHILOSOPHY_POINTS[1].tag}
              </span>
            </div>
          </div>

          {/* Card 03 */}
          <div className="bg-[#FCF9F5] border border-[#D1C5B4]/60 rounded-2xl p-6 sm:p-8 lg:p-9 flex flex-col justify-between sunkissed-elevation hover:border-[#C5A059] transition-all duration-300 group">
            <div>
              <span className="font-playfair text-2xl sm:text-3xl font-light text-[#C5A059] block mb-4 sm:mb-6">
                {PHILOSOPHY_POINTS[2].number}
              </span>
              <h3 className="font-playfair text-xl sm:text-2xl text-[#1C1C1A] font-medium leading-snug mb-2.5 sm:mb-3.5 group-hover:text-[#775A19] transition-colors">
                {PHILOSOPHY_POINTS[2].title}
              </h3>
              <p className="font-manrope text-xs sm:text-sm text-[#4E4639] leading-relaxed">
                {PHILOSOPHY_POINTS[2].description}
              </p>
            </div>
            <div className="pt-4 sm:pt-6 mt-5 sm:mt-6 border-t border-[#E5E2DE] flex items-center justify-between">
              <span className="font-manrope text-[0.68rem] font-bold tracking-[0.18em] text-[#7F7667] uppercase">
                {PHILOSOPHY_POINTS[2].tag}
              </span>
            </div>
          </div>
        </div>

        {/* Row 2 of Bento Grid: Card 04 (1/3) and Card 05 (2/3 wider card) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-8">
          {/* Card 04 (5 cols) */}
          <div className="md:col-span-5 bg-[#FCF9F5] border border-[#D1C5B4]/60 rounded-2xl p-6 sm:p-8 lg:p-9 flex flex-col justify-between sunkissed-elevation hover:border-[#C5A059] transition-all duration-300 group">
            <div>
              <span className="font-playfair text-2xl sm:text-3xl font-light text-[#C5A059] block mb-4 sm:mb-6">
                {PHILOSOPHY_POINTS[3].number}
              </span>
              <h3 className="font-playfair text-xl sm:text-2xl text-[#1C1C1A] font-medium leading-snug mb-2.5 sm:mb-3.5 group-hover:text-[#775A19] transition-colors">
                {PHILOSOPHY_POINTS[3].title}
              </h3>
              <p className="font-manrope text-xs sm:text-sm text-[#4E4639] leading-relaxed">
                {PHILOSOPHY_POINTS[3].description}
              </p>
            </div>
            <div className="pt-4 sm:pt-6 mt-5 sm:mt-6 border-t border-[#E5E2DE] flex items-center justify-between">
              <span className="font-manrope text-[0.68rem] font-bold tracking-[0.18em] text-[#7F7667] uppercase">
                {PHILOSOPHY_POINTS[3].tag}
              </span>
            </div>
          </div>

          {/* Card 05 (7 cols - Wider highlight card) */}
          <div className="md:col-span-7 bg-gradient-to-br from-[#1C2C22] to-[#121A15] border border-[#C5A059]/30 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between text-white shadow-xl hover:border-[#C5A059] transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="font-playfair text-2xl sm:text-3xl font-light text-[#E9C176]">
                  {PHILOSOPHY_POINTS[4].number}
                </span>
                <span className="font-manrope text-[0.62rem] sm:text-[0.68rem] font-semibold tracking-[0.18em] text-[#E9C176] bg-white/10 px-3 py-1 rounded-full uppercase border border-[#E9C176]/30">
                  ICONIC EXPERIENCE
                </span>
              </div>
              <h3 className="font-playfair text-2xl sm:text-3xl text-white font-medium leading-snug mb-3">
                {PHILOSOPHY_POINTS[4].title}
              </h3>
              <p className="font-manrope text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl mb-6">
                {PHILOSOPHY_POINTS[4].description}
              </p>
            </div>

            <div className="pt-5 sm:pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <span className="font-manrope text-[0.65rem] sm:text-[0.7rem] font-semibold tracking-[0.16em] text-white/70 uppercase">
                NIGEEN & DAL LAKE PRIVATE ANCHORAGE
              </span>
              <button
                type="button"
                onClick={onReserveSanctuary}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#D8B46E] text-[#1C1C1A] font-manrope font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-full transition-all duration-200 shadow-md cursor-pointer hover:shadow-lg min-h-[44px]"
              >
                <span>RESERVE A SANCTUARY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
