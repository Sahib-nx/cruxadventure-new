import CruxEmblem from './CruxEmblem';

export interface BrandLogoProps {
  /** Logo display layout: full horizontal lockup, emblem-only, or stacked */
  variant?: 'full' | 'emblem' | 'stacked';
  /** Color theme for dark, light, or antique gold backgrounds */
  colorMode?: 'gold' | 'light' | 'dark';
  /** Custom CSS classes for the root container */
  className?: string;
  /** Whether to show the editorial 'Kashmir' subscript in full lockup */
  showSubtitle?: boolean;
}

/**
 * Crux Adventure Official Brand Logo
 *
 * Combines the custom mountain 'C' monogram emblem with the elegant
 * editorial serif wordmark. Built for sharp rendering from mobile to 4K displays.
 */
export default function BrandLogo({
  variant = 'full',
  colorMode = 'gold',
  className = '',
  showSubtitle = true,
}: BrandLogoProps) {
  // If emblem-only is requested
  if (variant === 'emblem') {
    return (
      <CruxEmblem
        colorMode={colorMode}
        size={36}
        className={`drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] ${className}`}
      />
    );
  }

  // If stacked layout is requested
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center gap-2.5 ${className}`}>
        <CruxEmblem
          colorMode={colorMode}
          size={52}
          className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
        />
        <div className="flex flex-col items-center leading-none">
          <span
            className={`font-serif italic text-2xl sm:text-3xl tracking-tight ${
              colorMode === 'dark' ? 'text-[#18231C]' : 'text-white'
            }`}
          >
            crux<span className={colorMode === 'dark' ? 'text-[#775A19]' : 'text-[#E9C176]'}>adventure</span>
          </span>
          {showSubtitle && (
            <span
              className={`font-manrope text-[0.6rem] font-bold tracking-[0.28em] uppercase mt-1 ${
                colorMode === 'dark' ? 'text-[#775A19]' : 'text-[#C5A059]'
              }`}
            >
              Kashmir
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default: Complete Horizontal Lockup (Emblem + Wordmark)
  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 md:gap-3 select-none ${className}`}>
      {/* Mountain 'C' Monogram Emblem */}
      <CruxEmblem
        colorMode={colorMode}
        size={34}
        className="w-8 h-8 sm:w-9 sm:h-9 md:w-[38px] md:h-[38px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
      />

      {/* Elegant Wordmark */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-serif italic text-lg sm:text-2xl md:text-[1.65rem] tracking-tight whitespace-nowrap transition-colors ${
            colorMode === 'dark'
              ? 'text-[#18231C]'
              : 'text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]'
          }`}
        >
          crux<span className={colorMode === 'dark' ? 'text-[#775A19]' : 'text-[#E9C176]'}>adventure</span>
        </span>

        {showSubtitle && (
          <span
            className={`font-manrope text-[0.52rem] sm:text-[0.58rem] md:text-[0.62rem] font-semibold tracking-[0.24em] uppercase mt-0.5 sm:mt-1 whitespace-nowrap ${
              colorMode === 'dark'
                ? 'text-[#775A19]'
                : 'text-[#C5A059] drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]'
            }`}
          >
            Kashmir
          </span>
        )}
      </div>
    </div>
  );
}
