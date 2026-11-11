import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#181816] text-[#E5E2DE] pt-16 sm:pt-20 pb-12 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 sm:gap-10 pb-12 sm:pb-16 border-b border-white/10">
          <div className="max-w-md">
            <span className="font-playfair text-3xl sm:text-4xl text-white font-medium tracking-tight block mb-3 sm:mb-4">
              crux<span className="italic font-normal text-[#E9C176]">adventure</span>
            </span>
            <p className="font-manrope text-xs sm:text-sm text-white/60 leading-relaxed">
              Curators of exceptional alpine journeys. We design custom Kashmir expeditions that combine heritage hospitality, secluded mountain sanctuaries, and timeless tranquility.
            </p>
          </div>

          <div className="flex flex-col md:items-end">
            <span className="font-manrope text-[0.68rem] font-bold tracking-[0.2em] text-[#C5A059] uppercase block mb-2">
              CONCIERGE DIRECT LINE
            </span>
            <a
              href="tel:+911942804211"
              aria-label="Call concierge direct line at +91 194 280 4211"
              className="inline-flex items-center gap-3 font-playfair text-2xl sm:text-3xl text-white hover:text-[#E9C176] transition-colors py-1.5 focus:outline-none focus:ring-2 focus:ring-[#C5A059] rounded-lg"
            >
              <Phone className="w-5 h-5 text-[#C5A059] shrink-0" />
              <span>+91 194 280 4211</span>
            </a>
            <span className="font-manrope text-xs text-white/40 mt-1">
              Direct dispatch from Srinagar Private Atelier
            </span>
          </div>
        </div>

        {/* Middle Navigation Links */}
        <div className="py-6 sm:py-8 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-between gap-y-3 sm:gap-y-4 gap-x-6 border-b border-white/10">
          {[
            { label: 'THE COLLECTION', href: '#destinations' },
            { label: 'EXPEDITIONS', href: '#packages' },
            { label: 'HERITAGE ATELIER', href: '#experiences' },
            { label: 'SUSTAINABLE EXPEDITION', href: '#circuit' },
            { label: 'CONCIERGE DESK', href: '#cruxadventure-navbar' },
            { label: 'PRIVACY & TERMS', href: '#' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="min-h-[44px] flex items-center font-manrope text-xs font-semibold tracking-[0.16em] text-white/70 hover:text-[#E9C176] transition-colors uppercase focus:outline-none focus:text-[#E9C176]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 font-manrope text-xs text-center sm:text-left">
          <p>
            © 2026 Crux Adventure Editorial Expeditions. All rights reserved. Crafted for the discerning voyager.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-xs text-white/60">
            <a href="#destinations" className="min-h-[36px] flex items-center hover:text-white transition-colors">Srinagar</a>
            <span aria-hidden="true">•</span>
            <a href="#destinations" className="min-h-[36px] flex items-center hover:text-white transition-colors">Gulmarg</a>
            <span aria-hidden="true">•</span>
            <a href="#destinations" className="min-h-[36px] flex items-center hover:text-white transition-colors">Pahalgam</a>
            <span aria-hidden="true">•</span>
            <a href="#destinations" className="min-h-[36px] flex items-center hover:text-white transition-colors">Sonamarg</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
