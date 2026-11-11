import { ArrowUpRight } from 'lucide-react';
import { DESTINATIONS } from '../data';
import { Destination } from '../types';

interface DestinationsSectionProps {
  onSelectDestination: (dest: Destination) => void;
}

export default function DestinationsSection({ onSelectDestination }: DestinationsSectionProps) {
  return (
    <section id="destinations" className="w-full bg-[#FCF9F5] py-16 sm:py-24 lg:py-32 px-4 sm:px-10 md:px-16 border-b border-[#E5E2DE]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header — Refined & Compact on Mobile, Tablet, and Desktop */}
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-[1px] bg-[#C5A059]" />
            <span className="font-manrope text-[0.68rem] sm:text-xs font-semibold tracking-[0.22em] text-[#C5A059] uppercase">
              THE ENCLAVES OF KASHMIR
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-12 lg:items-end">
            <div className="lg:col-span-7">
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] text-[#1C1C1A] leading-[1.12] font-normal tracking-tight">
                Discover the Enclaves of{' '}
                <span className="italic font-normal text-[#775A19]">Kashmir</span>
              </h2>
            </div>

            <div className="lg:col-span-5 lg:pb-1">
              <p className="font-manrope text-xs sm:text-sm md:text-base text-[#4E4639] leading-relaxed max-w-lg">
                Four distinct geographical sanctuaries. Secretly guarded valleys of snow, floating botanical gardens, and alpine passes tailored for the discerning expedition.
              </p>
            </div>
          </div>
        </div>

        {/* 2x2 Grid of Destination Cards — 1 column on mobile, 2 columns on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 lg:gap-10">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="group relative rounded-2xl overflow-hidden bg-[#1C1C1A] text-white shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-end min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] cursor-pointer"
              onClick={() => onSelectDestination(dest)}
            >
              {/* Background Image with gentle scale */}
              <img
                src={dest.image}
                alt={dest.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85"
                loading="lazy"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:via-black/35 transition-colors duration-500" />

              {/* Content Overlay */}
              <div className="relative z-10 p-5 sm:p-8 lg:p-10 flex flex-col justify-end h-full">
                {/* Badges in top area */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-auto pb-4 sm:pb-6">
                  {dest.badges.map((badge) => (
                    <span
                      key={badge}
                      className="font-manrope text-[0.62rem] sm:text-[0.68rem] tracking-[0.16em] font-semibold text-white/95 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 uppercase"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-playfair text-2xl sm:text-3xl lg:text-4xl text-white font-medium mb-2 sm:mb-2.5 tracking-tight group-hover:text-[#FFDEA5] transition-colors duration-300">
                  {dest.name}
                </h3>

                {/* Description */}
                <p className="font-manrope text-xs sm:text-sm text-white/80 leading-relaxed max-w-lg mb-4 sm:mb-6 line-clamp-3">
                  {dest.description}
                </p>

                {/* Link button */}
                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[#E9C176] group-hover:text-white transition-colors duration-300 min-h-[44px]">
                  <span className="font-manrope text-xs font-semibold tracking-[0.18em] uppercase flex items-center gap-1.5">
                    {dest.actionText}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-[#1C1C1A] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
