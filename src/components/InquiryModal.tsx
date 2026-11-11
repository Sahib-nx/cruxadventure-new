import { useState, type FormEvent } from 'react';
import { X, CheckCircle2, Calendar, MapPin, Users, Send } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: string;
}

export default function InquiryModal({ isOpen, onClose, selectedPackage }: InquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2 Guests',
    season: 'Autumn (Saffron & Gold)',
    destination: selectedPackage || 'The Royal Valley Explorer (7D/6N)',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Private Expedition Inquiry"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-fade-in"
    >
      <div
        className="relative w-full max-w-2xl bg-[#FCF9F5] border border-[#C5A059]/30 rounded-2xl p-5 sm:p-8 md:p-10 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative accent line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C5A059] via-[#E9C176] to-[#C5A059]" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-11 h-11 rounded-full bg-[#E5E2DE]/60 hover:bg-[#E5E2DE] flex items-center justify-center text-[#1C1C1A] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 sm:py-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#C5A059]/15 border border-[#C5A059] flex items-center justify-center text-[#C5A059] mb-6 animate-scale-in">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-playfair text-2xl sm:text-3xl text-[#1C1C1A] mb-3">
              Your Expedition Request Is Received
            </h3>
            <p className="font-manrope text-sm text-[#4E4639] max-w-md leading-relaxed mb-6">
              Our Senior Travel Curator has received your preferences and will contact you directly within 4 hours to arrange your bespoke Kashmir itinerary.
            </p>
            <span className="font-manrope text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
              CRUX ADVENTURE CONCIERGE DESK
            </span>
          </div>
        ) : (
          <div>
            <div className="mb-5 sm:mb-6 pr-8">
              <span className="font-manrope text-[0.7rem] font-bold tracking-[0.2em] text-[#C5A059] uppercase block mb-1">
                PRIVATE EXPEDITION INQUIRY
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl text-[#1C1C1A] font-normal">
                Curate Your <span className="italic">Kashmir Journey</span>
              </h2>
              <p className="font-manrope text-xs sm:text-sm text-[#4E4639] mt-1.5 leading-relaxed">
                Every journey is custom-tailored with private Mercedes transit, reserved cedar houseboats, and 24/7 dedicated concierges.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-manrope text-xs font-semibold text-[#1C1C1A] uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-[#D1C5B4] focus:border-[#C5A059] outline-none rounded-lg px-3.5 py-2.5 font-manrope text-base sm:text-sm text-[#1C1C1A] placeholder:text-[#A0988A] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-manrope text-xs font-semibold text-[#1C1C1A] uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="voyager@atelier.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#D1C5B4] focus:border-[#C5A059] outline-none rounded-lg px-3.5 py-2.5 font-manrope text-base sm:text-sm text-[#1C1C1A] placeholder:text-[#A0988A] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-manrope text-xs font-semibold text-[#1C1C1A] uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+44 20 7946 0912"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-[#D1C5B4] focus:border-[#C5A059] outline-none rounded-lg px-3.5 py-2.5 font-manrope text-base sm:text-sm text-[#1C1C1A] placeholder:text-[#A0988A] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-manrope text-xs font-semibold text-[#1C1C1A] uppercase tracking-wider mb-1.5">
                    Party Size
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-white border border-[#D1C5B4] focus:border-[#C5A059] outline-none rounded-lg px-3.5 py-2.5 font-manrope text-base sm:text-sm text-[#1C1C1A] transition-colors"
                  >
                    <option>1 Voyager (Solo)</option>
                    <option>2 Guests (Couple)</option>
                    <option>3 - 4 Guests (Private Clan)</option>
                    <option>5+ Guests (Estate Charter)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-manrope text-xs font-semibold text-[#1C1C1A] uppercase tracking-wider mb-1.5">
                    Preferred Season
                  </label>
                  <select
                    value={formData.season}
                    onChange={(e) => setFormData({ ...formData, season: e.target.value })}
                    className="w-full bg-white border border-[#D1C5B4] focus:border-[#C5A059] outline-none rounded-lg px-3.5 py-2.5 font-manrope text-base sm:text-sm text-[#1C1C1A] transition-colors"
                  >
                    <option>Spring (Tulips & Almonds)</option>
                    <option>Summer (Alpine Glades)</option>
                    <option>Autumn (Saffron & Gold)</option>
                    <option>Winter (Deep Powder Ski)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-manrope text-xs font-semibold text-[#1C1C1A] uppercase tracking-wider mb-1.5">
                  Itinerary or Destination Interest
                </label>
                <input
                  type="text"
                  placeholder="e.g. Royal Valley Explorer, Gulmarg Heli-Ski, or Private Houseboat"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full bg-white border border-[#D1C5B4] focus:border-[#C5A059] outline-none rounded-lg px-3.5 py-2.5 font-manrope text-base sm:text-sm text-[#1C1C1A] placeholder:text-[#A0988A] transition-colors"
                />
              </div>

              <div>
                <label className="block font-manrope text-xs font-semibold text-[#1C1C1A] uppercase tracking-wider mb-1.5">
                  Curatorial Desires & Dietary Preferences
                </label>
                <textarea
                  rows={3}
                  placeholder="Private shikara photography, high-altitude ski guides, Wazwan vegetarian preferences..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white border border-[#D1C5B4] focus:border-[#C5A059] outline-none rounded-lg px-3.5 py-2.5 font-manrope text-base sm:text-sm text-[#1C1C1A] placeholder:text-[#A0988A] transition-colors resize-none"
                />
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <span className="font-manrope text-xs text-[#7F7667]">
                  All communications strictly confidential.
                </span>
                <button
                  type="submit"
                  className="min-h-[48px] flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#D8B46E] text-[#1C1C1A] font-manrope font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#E9C176]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT EXPEDITION INQUIRY</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
