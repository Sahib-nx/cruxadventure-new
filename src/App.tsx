import { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from './components/Navbar';
import DestinationsSection from './components/DestinationsSection';
import PhilosophySection from './components/PhilosophySection';
import ExperiencesSection from './components/ExperiencesSection';
import PackagesSection from './components/PackagesSection';
import CircuitSection from './components/CircuitSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';
import ImageLightboxModal from './components/ImageLightboxModal';
import FloatingContactButtons from './components/FloatingContactButtons';

interface VideoItem {
  id: string;
  url: string;
  label: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: 'golden-hour',
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081127_0992a171-d3c6-4978-8213-0ec5df8b6d63.mp4',
    label: 'Golden Hour',
  },
  {
    id: 'still-water',
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_092026_dd05b805-ea0f-40b2-8c52-332b88502592.mp4',
    label: 'Still Water',
  },
  {
    id: 'deep-woods',
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081042_df7202bf-bd80-4b2b-bbc6-1f09ba2870e9.mp4',
    label: 'Deep Woods',
  },
  {
    id: 'quiet-dawn',
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_080959_4cac5234-3573-464e-a5b7-76b94b8a7d61.mp4',
    label: 'Quiet Dawn',
  },
];

const STATS = [
  'Curated Kashmir Experiences',
  'Local Travel Expertise',
  '4.8 Guest Satisfaction',
  'Tailor-Made Journeys',
];

export default function App() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(undefined);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; badge?: string } | null>(null);
  const [isVideoTransitioning, setIsVideoTransitioning] = useState(false);
  const isInitialMount = useRef(true);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Automatically advance to the next video when the current view finishes
  const handleNextVideo = useCallback(() => {
    setActiveVideo((prev) => (prev + 1) % VIDEOS.length);
  }, []);

  const handleVideoSelect = (index: number) => {
    if (index === activeVideo) return;
    setActiveVideo(index);
  };

  // When activeVideo changes, ensure current video starts from 0 and plays, and trigger cinematic cross-fade blur
  useEffect(() => {
    const currentEl = videoRefs.current[activeVideo];
    if (currentEl) {
      currentEl.currentTime = 0;
      currentEl.play().catch(() => {});
    }

    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    setIsVideoTransitioning(true);
    const timer = setTimeout(() => {
      setIsVideoTransitioning(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [activeVideo]);

  // Font loading check using document.fonts API (Font Face Observer pattern)
  const [isNewsreaderLoaded, setIsNewsreaderLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    if (typeof document !== 'undefined' && 'fonts' in document) {
      // Check if Newsreader is already loaded in browser font cache
      if (document.fonts.check('1em Newsreader')) {
        setIsNewsreaderLoaded(true);
        return;
      }

      // Font Face Observer check for Newsreader font weights
      const newsreaderFonts = [
        '400 1em Newsreader',
        'italic 400 1em Newsreader',
        '600 1em Newsreader',
      ];

      Promise.all([
        ...newsreaderFonts.map((font) => document.fonts.load(font)),
        document.fonts.ready,
      ])
        .then(() => {
          if (isMounted) {
            setIsNewsreaderLoaded(true);
          }
        })
        .catch(() => {
          // Graceful fallback on network or font load error
          if (isMounted) {
            setIsNewsreaderLoaded(true);
          }
        });

      // Safety timeout to ensure headings transition even under high latency
      const timer = setTimeout(() => {
        if (isMounted) {
          setIsNewsreaderLoaded(true);
        }
      }, 1800);

      return () => {
        isMounted = false;
        clearTimeout(timer);
      };
    } else {
      // Fallback for browsers without FontFaceSet API support
      setIsNewsreaderLoaded(true);
    }
  }, []);

  const openInquiry = (pkgName?: string) => {
    setSelectedPackage(pkgName);
    setInquiryModalOpen(true);
  };

  return (
    <div
      className={`w-full min-h-screen bg-[#FCF9F5] text-[#1C1C1A] ${
        isNewsreaderLoaded ? 'font-loaded' : 'font-loading'
      }`}
    >
      {/* ================================================== */}
      {/* HERO SECTION — MOBILE, TABLET & DESKTOP OPTIMIZED  */}
      {/* ================================================== */}
      <section id="hero" className="relative w-full h-[100dvh] min-h-[580px] max-h-[1080px] overflow-hidden bg-black select-none">
        {/* Background Video Layer with Cinematic Cross-Fade Blur Transitions */}
        <div
          id="hero-video-container"
          className={`cinematic-video-container absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden ${
            isVideoTransitioning ? 'blur-[2px] scale-[1.01]' : 'blur-0 scale-100'
          }`}
        >
          {VIDEOS.map((vid, idx) => {
            const isActive = activeVideo === idx;
            return (
              <div
                key={vid.id}
                className={`cinematic-video-slide absolute inset-0 w-full h-full ${
                  isActive
                    ? 'opacity-100 blur-0 scale-100 z-10'
                    : 'opacity-0 blur-[4px] scale-[1.015] z-0'
                }`}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el;
                  }}
                  src={vid.url}
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  onEnded={() => {
                    if (idx === activeVideo) {
                      handleNextVideo();
                    }
                  }}
                  onTimeUpdate={(e) => {
                    const target = e.currentTarget;
                    if (
                      idx === activeVideo &&
                      target.duration > 0 &&
                      target.currentTime >= target.duration - 0.5
                    ) {
                      handleNextVideo();
                    }
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>

        {/* Original Atmospheric Train Window Overlay (Sized & arranged for visible wide window across mobile, tablet & desktop) */}
        <img
          src="https://soft-zoom-63098134.figma.site/_assets/v11/0b4a435b2df2747593c43d7a1c9b4578f7d8d90c.png"
          alt="Atmospheric Train Window Overlay"
          referrerPolicy="no-referrer"
          className="absolute top-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-[155%] sm:w-[135%] md:w-[120%] lg:w-full h-full object-fill lg:object-cover max-w-none pointer-events-none z-[1] animate-train-bob"
        />

        {/* Content Layer (z-index 2) - Flex Column Full Height */}
        <div className="relative z-[2] flex flex-col justify-between h-full w-full px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-7 lg:px-16 lg:py-8 pointer-events-auto">
          {/* Navigation (top) */}
          <Navbar onOpenInquiry={() => openInquiry('Bespoke Journey Consultation')} />

          {/* Hero Content (Centered) */}
          <main className="flex-1 flex flex-col items-center justify-center text-center px-3 py-1 sm:py-3 my-auto">
            {/* Badge */}
            <div
              id="hero-badge"
              className="liquid-glass rounded-full px-3.5 py-1.5 mb-3 sm:mb-5 font-sans-ui text-[0.7rem] sm:text-xs md:text-sm tracking-wide text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] max-w-[92%]"
            >
              A JOURNEY THROUGH THE HEART OF THE HIMALAYAS
            </div>

            {/* Heading with smooth Newsreader transition */}
            <h1
              id="hero-heading"
              className={`font-serif text-[2.1rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.2rem] leading-[1.1] max-w-4xl tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] transition-all duration-700 ease-out [text-wrap:balance] ${
                isNewsreaderLoaded
                  ? 'opacity-100 blur-0 translate-y-0'
                  : 'opacity-90 blur-[0.6px] translate-y-0.5'
              }`}
            >
              Somewhere between the mountains and the sky, there's Kashmir.
            </h1>

            {/* Subtext */}
            <p
              id="hero-subtext"
              className="font-sans-ui text-xs sm:text-sm md:text-base max-w-sm sm:max-w-md md:max-w-xl leading-relaxed mt-3 sm:mt-4 mb-5 sm:mb-8 px-2 text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]"
            >
              Discover quiet valleys, winding mountain roads and extraordinary landscapes through thoughtfully crafted journeys across Kashmir.
            </p>

            {/* Video Switcher with Responsive Flexible Grid Layout */}
            <div
              id="video-switcher"
              className="liquid-glass rounded-2xl min-[520px]:rounded-full p-1.5 grid grid-cols-2 min-[520px]:flex min-[520px]:flex-wrap min-[520px]:items-center min-[520px]:justify-center gap-1.5 shadow-md w-full max-w-[310px] min-[380px]:max-w-[340px] min-[520px]:w-auto min-[520px]:max-w-fit mx-auto transition-all duration-300"
            >
              {VIDEOS.map((vid, idx) => {
                const isActive = activeVideo === idx;
                return (
                  <button
                    key={vid.id}
                    id={`video-switcher-btn-${idx}`}
                    type="button"
                    onClick={() => handleVideoSelect(idx)}
                    className={`font-sans-ui font-medium text-xs sm:text-xs md:text-sm min-h-[44px] min-[520px]:min-h-[40px] px-3.5 sm:px-4 py-2.5 min-[520px]:py-2 rounded-xl min-[520px]:rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 active:scale-95 ring-1 ${
                      isActive
                        ? 'bg-white/25 text-white shadow-inner ring-white/35'
                        : 'text-white/75 hover:text-white hover:bg-white/10 ring-transparent'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`w-2 h-2 rounded-full shrink-0 transition-all duration-300 ${
                        isActive
                          ? 'bg-[#E9C176] shadow-[0_0_8px_rgba(233,193,118,0.9)] scale-100 opacity-100 animate-pulse'
                          : 'bg-white/30 scale-75 opacity-40'
                      }`}
                    />
                    <span className="truncate">{vid.label}</span>
                  </button>
                );
              })}
            </div>
          </main>

          {/* Bottom Stats (pushed to bottom) */}
          <footer
            id="hero-bottom-stats"
            className="w-full flex items-center justify-center py-2 sm:py-3 text-white/80 text-[0.68rem] sm:text-xs md:text-sm font-sans-ui px-4"
          >
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] text-center max-w-lg sm:max-w-none mx-auto">
              {STATS.map((stat, i) => (
                <div key={stat} className="flex items-center justify-center gap-2 sm:gap-4">
                  <span className="whitespace-normal sm:whitespace-nowrap">{stat}</span>
                  {i < STATS.length - 1 && (
                    <span className="hidden sm:inline-block text-white/40 select-none">·</span>
                  )}
                </div>
              ))}
            </div>
          </footer>
        </div>
      </section>

      {/* ================================================== */}
      {/* REST OF HOMEPAGE — ACCORDING TO SCREENSHOT & DESIGN */}
      {/* ================================================== */}

      {/* 1. Destinations: "Discover the Enclaves of Kashmir" */}
      <DestinationsSection
        onSelectDestination={(dest) => openInquiry(dest.name)}
      />

      {/* 2. Philosophy: "Some places are visited. Kashmir is experienced." */}
      <PhilosophySection
        onReserveSanctuary={() => openInquiry('Secluded Cedar Houseboat Sanctuary')}
      />

      {/* 3. Bespoke Experiences */}
      <ExperiencesSection
        onInquireExperience={(exp) => openInquiry(`Experience: ${exp.title}`)}
      />

      {/* 4. Packages: "Your Kashmir, Your Way" */}
      <PackagesSection
        onSelectPackage={(pkg) => openInquiry(`Package: ${pkg.title}`)}
      />

      {/* 5. Trans-Himalayan Circuit */}
      <CircuitSection />

      {/* 6. Atmospheric Impressions (Gallery) */}
      <GallerySection
        onOpenLightbox={(item) => setLightboxImage(item)}
      />

      {/* 7. Letters From Discerning Voyagers (Testimonials) */}
      <TestimonialsSection />

      {/* 8. Final CTA Banner: "Your Kashmir story starts here." */}
      <CtaSection
        onOpenInquiry={() => openInquiry('General Bespoke Expedition')}
      />

      {/* 9. Editorial Footer */}
      <Footer />

      {/* 10. Floating WhatsApp and Phone Contact Buttons */}
      <FloatingContactButtons />

      {/* ================================================== */}
      {/* MODALS & OVERLAYS                                  */}
      {/* ================================================== */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        selectedPackage={selectedPackage}
      />

      <ImageLightboxModal
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  );
}

