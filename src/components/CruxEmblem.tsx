import { useId } from 'react';

export interface CruxEmblemProps {
  /** Size in pixels (applies to width & height) or CSS class */
  size?: number | string;
  /** Custom CSS classes */
  className?: string;
  /** Color theme variant */
  colorMode?: 'gold' | 'light' | 'dark';
  /** Accessible title or hidden from screen readers */
  title?: string;
}

/**
 * Crux Adventure Custom Brand Emblem
 *
 * An original architectural monogram intertwining the letter 'C' (for Crux)
 * with a soaring Himalayan mountain ridge summit (Pir Panjal & Apharwat inspired)
 * and an alpine crux pass.
 */
export default function CruxEmblem({
  size = 36,
  className = '',
  colorMode = 'gold',
  title = 'Crux Adventure Emblem',
}: CruxEmblemProps) {
  const uid = useId().replace(/:/g, '');

  const strokeColor =
    colorMode === 'dark'
      ? '#18231C'
      : colorMode === 'light'
      ? '#FFFFFF'
      : `url(#cruxGoldStroke-${uid})`;

  const ridgeColor =
    colorMode === 'dark'
      ? '#775A19'
      : colorMode === 'light'
      ? 'rgba(255, 255, 255, 0.9)'
      : `url(#cruxGoldStroke-${uid})`;

  const monogramFill =
    colorMode === 'dark'
      ? '#18231C'
      : colorMode === 'light'
      ? 'rgba(255, 255, 255, 0.95)'
      : `url(#cruxGoldFill-${uid})`;

  const monogramStroke =
    colorMode === 'dark'
      ? '#775A19'
      : colorMode === 'light'
      ? '#FFFFFF'
      : `url(#cruxGoldStroke-${uid})`;

  return (
    <svg
      viewBox="0 0 100 100"
      width={typeof size === 'number' ? `${size}px` : size}
      height={typeof size === 'number' ? `${size}px` : size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <defs>
        {/* Antique Gold Stroke Gradient */}
        <linearGradient
          id={`cruxGoldStroke-${uid}`}
          x1="15%"
          y1="0%"
          x2="85%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#F4D791" />
          <stop offset="50%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#9C772F" />
        </linearGradient>

        {/* Warm Gold Foliated Ribbon Fill Gradient */}
        <linearGradient
          id={`cruxGoldFill-${uid}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FCEFD0" />
          <stop offset="50%" stopColor="#D4AF65" />
          <stop offset="100%" stopColor="#A88235" />
        </linearGradient>
      </defs>

      {/* 1. Base Ground Foundation Line */}
      <line
        x1="12"
        y1="85"
        x2="88"
        y2="85"
        stroke={strokeColor}
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* 2. Outer Mountain Silhouette / Triangular Canopy */}
      <polyline
        points="12,85 50,17 88,85"
        stroke={strokeColor}
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* 3. Central Himalayan Peak Summit */}
      <polyline
        points="34,61 50,33 66,61"
        stroke={ridgeColor}
        strokeWidth="2.0"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* 4. Central Arête Ridge (The Crux Pass Divide) */}
      <path
        d="M 50,33 Q 46,50 51,64 Q 54,73 48,85"
        stroke={ridgeColor}
        strokeWidth="2.0"
        strokeLinecap="round"
      />

      {/* 5. Left & Right Mountain Ridges & Facets */}
      <polyline
        points="22,74 34,61 48,51"
        stroke={ridgeColor}
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <polyline
        points="78,74 66,61 52,65"
        stroke={ridgeColor}
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* 6. Crux Valley / Alpine Route */}
      <path
        d="M 51,64 Q 45,71 39,85"
        stroke={ridgeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* 7. Intertwined 'C' Monogram: Architectural Luxury Ribbon */}
      <path
        d="M 66,35 C 66,22 55,16 44,18 C 28,22 19,36 19,53 C 19,70 29,82 46,82 C 58,82 67,73 66,63 C 65,58 60,56 56,59 C 52,63 48,67 42,67 C 32,67 27,58 27,49 C 27,38 33,27 45,24 C 52,23 57,26 59,34 Z"
        fill={monogramFill}
        stroke={monogramStroke}
        strokeWidth="0.6"
      />
    </svg>
  );
}
