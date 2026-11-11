import { useState } from 'react';
import { EXPERIENCES } from '../data';
import { Experience } from '../types';
import { ArrowRight } from 'lucide-react';

interface ExperiencesSectionProps {
  onInquireExperience: (exp: Experience) => void;
}

type FilterCategory = 'ALL' | 'ADVENTURE' | 'CULTURE' | 'NATURE' | 'HERITAGE';

export default function ExperiencesSection({ onInquireExperience }: ExperiencesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('ALL');

  const filters: FilterCategory[] = ['ALL', 'ADVENTURE', 'CULTURE', 'NATURE', 'HERITAGE'];

  const filteredExperiences = activeFilter === 'ALL'
    ? EXPERIENCES
    : EXPERIENCES.filter((exp) => exp.category === activeFilter);

  return (
    <section id="experiences" className="w-full bg-[#FCF9F5] py-16 sm:py-24 lg:py-32 px-4 sm:px-10 md:px-16 border-b border-[#E5E2DE]">
      <div className="max-w-7xl mx-auto">
        {/* Header with Title and Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-16 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#C5A059]" />
              <span className="font-manrope text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase">
                CURATED MOMENTS
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-5xl lg:text-6xl text-[#1C1C1A] leading-[1.1] font-normal tracking-tight">
              Bespoke Kashmir <span className="italic text-[#775A19]">Experiences</span>
            </h2>
          </div>

          {/* Filter Pills - Smooth touch scroll on mobile */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none max-w-full sm:flex-wrap snap-x -mx-1 px-1">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`font-manrope text-xs font-semibold tracking-wider px-4 py-2.5 sm:py-2 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap active:scale-95 snap-start min-h-[40px] ${
                    isActive
                      ? 'bg-[#C5A059] text-[#1C1C1A] shadow-sm'
                      : 'bg-[#F0EDEA] text-[#4E4639] hover:bg-[#E5E2DE] hover:text-[#1C1C1A]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3x2 Grid of Experiences — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white border border-[#D1C5B4]/50 rounded-2xl overflow-hidden sunkissed-elevation hover:border-[#C5A059] transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="font-manrope text-[0.65rem] font-bold tracking-[0.2em] text-white bg-[#1C1C1A]/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 uppercase">
                    {exp.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#7F7667] font-manrope text-xs tracking-wider">
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.subLocation}</span>
                  </div>

                  <h3 className="font-playfair text-xl sm:text-2xl text-[#1C1C1A] font-medium leading-snug mb-2.5 sm:mb-3 group-hover:text-[#775A19] transition-colors">
                    {exp.title}
                  </h3>

                  <p className="font-manrope text-xs sm:text-sm text-[#4E4639] leading-relaxed mb-5 sm:mb-6 line-clamp-3">
                    {exp.description}
                  </p>
                </div>

                {/* Footer Meta & Action */}
                <div className="pt-4 border-t border-[#F0EDEA] flex items-center justify-between min-h-[44px]">
                  <span className="font-manrope text-xs text-[#7F7667]">
                    {exp.duration} • {exp.exclusivity}
                  </span>

                  <button
                    type="button"
                    onClick={() => onInquireExperience(exp)}
                    className="flex items-center gap-1.5 font-manrope text-xs font-bold tracking-wider text-[#775A19] hover:text-[#1C1C1A] uppercase transition-colors cursor-pointer group-hover:translate-x-0.5 duration-200 py-2 pl-3"
                  >
                    <span>INQUIRE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
