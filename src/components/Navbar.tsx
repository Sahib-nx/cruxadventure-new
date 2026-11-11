import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Service', href: '#experiences' },
    { label: 'About Us', href: '#destinations' },
    { label: 'Contact Us', href: '#packages', isAction: true },
  ];

  return (
    <>
      {/* Liquid-Glass Navigation Header */}
      <header className="w-full flex items-center justify-between" id="cruxadventure-navbar">
        {/* Logo (Instrument Serif, italic) */}
        <div className="flex items-center">
          <a
            href="#hero"
            id="cruxadventure-brand-logo"
            className="text-white italic text-xl sm:text-2xl md:text-3xl font-serif tracking-normal cursor-pointer hover:opacity-90 transition-opacity whitespace-nowrap drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]"
          >
            cruxadventure
          </a>
        </div>

        {/* Desktop & Tablet Navigation Pill (md+) */}
        <nav
          id="desktop-navigation"
          className="hidden md:flex items-center gap-1.5 pl-5 sm:pl-6 pr-2 py-1.5 rounded-full liquid-glass shadow-md"
        >
          <div className="flex items-center gap-4 lg:gap-6 mr-3 lg:mr-4 font-sans-ui text-xs lg:text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.isAction) {
                    e.preventDefault();
                    onOpenInquiry();
                  }
                }}
                className="text-white/90 hover:text-white transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            id="desktop-book-yours-btn"
            type="button"
            onClick={onOpenInquiry}
            className="bg-white text-black font-sans-ui text-xs lg:text-sm font-medium px-3.5 lg:px-4 py-1.5 rounded-full hover:bg-white/90 transition-all duration-200 cursor-pointer shadow-sm active:scale-95 whitespace-nowrap"
          >
            Book Yours
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle-btn"
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden liquid-glass w-11 h-11 rounded-full flex items-center justify-center text-white cursor-pointer relative shadow-md active:scale-95 transition-transform"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu-overlay"
        >
          <Menu
            className={`w-5 h-5 transition-all duration-300 ease-in-out ${
              mobileMenuOpen
                ? 'opacity-0 rotate-90 scale-75'
                : 'opacity-100 rotate-0 scale-100'
            }`}
          />
          <X
            className={`w-5 h-5 absolute transition-all duration-300 ease-in-out ${
              mobileMenuOpen
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 -rotate-90 scale-75'
            }`}
          />
        </button>
      </header>

      {/* Mobile Backdrop Overlay (Tap to dismiss outside area) */}
      <div
        id="mobile-menu-backdrop"
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-[140] bg-black/45 backdrop-blur-[2px] transition-opacity duration-300 ease-out md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Mobile Glassmorphic 50% Width Drawer (Slides in from right) */}
      <div
        id="mobile-menu-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        style={{ position: 'fixed' }}
        className={`fixed top-0 right-0 bottom-0 z-[150] md:hidden w-[75vw] sm:w-[50vw] max-w-[340px] min-w-[240px] h-full liquid-glass bg-black/55 backdrop-blur-2xl border-l border-white/20 shadow-[-15px_0_40px_rgba(0,0,0,0.5)] flex flex-col justify-between p-5 sm:p-6 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen
            ? 'translate-x-0 pointer-events-auto'
            : 'translate-x-full pointer-events-none'
        }`}
      >
        {/* Top bar inside mobile drawer */}
        <div className="flex items-center justify-between w-full pb-3 border-b border-white/10">
          <span className="text-white italic text-base sm:text-lg font-serif drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            cruxadventure
          </span>
          <button
            id="mobile-overlay-close-btn"
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="liquid-glass w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white cursor-pointer active:scale-95 transition-transform"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Staggered Navigation Links */}
        <div className="flex flex-col items-start gap-4 sm:gap-5 my-auto w-full px-1 font-sans-ui">
          {navLinks.map((link, index) => {
            const delays = ['60ms', '100ms', '140ms', '180ms'];
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.isAction) {
                    e.preventDefault();
                    onOpenInquiry();
                  }
                }}
                style={{
                  transitionDelay: mobileMenuOpen ? delays[index] : '0ms',
                }}
                className={`text-white/95 text-sm sm:text-base font-light tracking-wide transition-all duration-300 ease-out hover:text-[#E9C176] py-0.5 ${
                  mobileMenuOpen
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-2'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Bottom CTA Button in mobile drawer */}
        <div
          className="flex flex-col items-center justify-center w-full pt-2"
          style={{
            transitionDelay: mobileMenuOpen ? '200ms' : '0ms',
          }}
        >
          <button
            id="mobile-menu-book-yours-btn"
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry();
            }}
            className={`w-full bg-white text-black font-sans-ui text-xs sm:text-sm font-medium py-2.5 sm:py-3 rounded-full flex items-center justify-center gap-1.5 shadow-md hover:bg-white/90 transition-all duration-300 ease-out active:scale-95 ${
              mobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <span>Book Yours</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </>
  );
}
