import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { Maximize2 } from 'lucide-react';

interface GallerySectionProps {
  onOpenLightbox: (item: { url: string; title: string; badge?: string }) => void;
}

export default function GallerySection({ onOpenLightbox }: GallerySectionProps) {
  return (
    <section className="w-full bg-[#F6F3EF] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-[#E5E2DE] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <span className="font-manrope text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block mb-3">
            VISUAL VIGNETTES
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl lg:text-6xl text-[#1C1C1A] leading-[1.12] font-normal tracking-tight mb-4">
            Atmospheric <span className="italic text-[#775A19]">Impressions</span>
          </h2>
          <p className="font-manrope text-sm sm:text-base text-[#4E4639] leading-relaxed max-w-xl mx-auto">
            Captured moments of quiet contemplation, ancient waterways, and towering alpine weather.
          </p>
        </div>

        {/* Gallery: Mobile Horizontal Swipe Carousel (< sm) / Responsive Grid (sm+) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 sm:overflow-visible">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title}`}
              onClick={() => onOpenLightbox({ url: item.image, title: item.title, badge: item.badge })}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenLightbox({ url: item.image, title: item.title, badge: item.badge });
                }
              }}
              className="group relative rounded-2xl overflow-hidden aspect-[9/16] w-[72vw] min-w-[220px] max-w-[280px] shrink-0 snap-center sm:w-auto sm:max-w-none bg-black cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300" />

              {/* Expand icon hover/mobile */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Card Title & Badge */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white">
                <span className="font-manrope text-[0.65rem] font-bold tracking-[0.2em] text-[#E9C176] uppercase block mb-1.5">
                  {item.badge}
                </span>
                <h3 className="font-playfair text-lg sm:text-2xl font-medium leading-snug text-white group-hover:text-[#FFDEA5] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <p className="sm:hidden text-center text-xs text-[#7F7667] font-manrope mt-2 flex items-center justify-center gap-1.5">
          <span>Swipe to explore 4 vignettes</span>
          <span className="text-[#C5A059]">→</span>
        </p>
      </div>
    </section>
  );
}
