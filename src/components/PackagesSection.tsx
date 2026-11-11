import { PACKAGES } from '../data';
import { PackageItem } from '../types';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

interface PackagesSectionProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

export default function PackagesSection({ onSelectPackage }: PackagesSectionProps) {
  return (
    <section id="packages" className="w-full bg-[#F6F3EF] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-[#E5E2DE]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <span className="font-manrope text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block mb-3">
            CURATED JOURNEYS
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl lg:text-6xl text-[#1C1C1A] leading-[1.12] font-normal tracking-tight mb-4 sm:mb-6">
            Your Kashmir, <span className="italic text-[#775A19]">Your Way</span>
          </h2>
          <p className="font-manrope text-xs sm:text-sm md:text-base text-[#4E4639] leading-relaxed max-w-2xl mx-auto">
            Each bespoke expedition includes dedicated private Mercedes transport, private boat transfers, and 24/7 personal concierge team.
          </p>
        </div>

        {/* 2x2 Grid of Packages — 1 column mobile, 2 columns tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {PACKAGES.map((pkg) => {
            const isPopular = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#FCF9F5] border-2 border-[#C5A059] shadow-2xl relative'
                    : 'bg-[#FCF9F5] border border-[#D1C5B4]/60 sunkissed-elevation hover:border-[#C5A059]'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3 right-6 sm:right-8">
                    <span className="bg-[#C5A059] text-[#1C1C1A] font-manrope font-bold text-[0.65rem] sm:text-[0.68rem] tracking-[0.18em] px-3 sm:px-3.5 py-1 rounded-full uppercase shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div>
                  {/* Top Meta: Duration & Price */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-manrope text-xs font-semibold tracking-widest text-[#7F7667] uppercase">
                      {pkg.durationDays} DAYS • {pkg.durationNights} NIGHTS
                    </span>
                    <div className="text-right">
                      <span className="font-manrope text-xs text-[#7F7667] mr-1">From</span>
                      <span className="font-playfair text-2xl font-bold text-[#1C1C1A]">
                        ₹{pkg.pricePerPerson.toLocaleString()}
                      </span>
                      <span className="font-manrope text-xs text-[#7F7667] ml-1">/ PAX</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair text-2xl sm:text-3xl text-[#1C1C1A] font-medium mb-3">
                    {pkg.title}
                  </h3>

                  {/* Summary */}
                  <p className="font-manrope text-xs sm:text-sm text-[#4E4639] leading-relaxed mb-6">
                    {pkg.summary}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pkg.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-manrope text-[0.65rem] font-semibold tracking-wider text-[#4E4639] bg-[#EBE8E4] px-2.5 py-1 rounded-md uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Inclusions List */}
                  <div className="space-y-3 mb-8 pt-4 border-t border-[#E5E2DE]">
                    {pkg.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4E4639] font-manrope leading-relaxed">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full font-manrope font-bold text-xs tracking-wider uppercase py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md ${
                    isPopular
                      ? 'bg-[#C5A059] hover:bg-[#D8B46E] text-[#1C1C1A]'
                      : 'bg-[#F0EDEA] hover:bg-[#E5E2DE] text-[#1C1C1A] border border-[#D1C5B4]'
                  }`}
                >
                  <span>VIEW FULL ITINERARY & PRICING</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
