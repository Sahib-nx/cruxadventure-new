import { TESTIMONIALS } from '../data';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#FCF9F5] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-[#E5E2DE]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <span className="font-manrope text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block mb-3">
            GUEST TESTIMONIALS
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl lg:text-6xl text-[#1C1C1A] leading-[1.12] font-normal tracking-tight">
            Letters From <span className="italic text-[#775A19]">Discerning</span> Voyagers
          </h2>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FCF9F5] border border-[#D1C5B4]/60 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between sunkissed-elevation hover:border-[#C5A059] transition-all duration-300"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-5 sm:mb-6 text-[#C5A059]" aria-label={`${t.stars} out of 5 stars`}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-playfair italic text-base sm:text-lg text-[#1C1C1A] leading-relaxed mb-6 sm:mb-8">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 sm:pt-6 border-t border-[#E5E2DE]">
                <h4 className="font-playfair text-lg sm:text-xl font-medium text-[#1C1C1A]">
                  {t.name}
                </h4>
                <p className="font-manrope text-xs text-[#7F7667] tracking-wider uppercase mt-1">
                  {t.role} • {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
