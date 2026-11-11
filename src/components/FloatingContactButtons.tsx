import { useState } from 'react';
import { Phone, AlertCircle } from 'lucide-react';
import { getWhatsAppUrl, getPhoneUrl, isNumberConfigured, CONTACT_CONFIG } from '../config/contact';

export default function FloatingContactButtons() {
  const [notice, setNotice] = useState<string | null>(null);

  const whatsappUrl = getWhatsAppUrl();
  const phoneUrl = getPhoneUrl();

  const isWhatsAppReady = isNumberConfigured(CONTACT_CONFIG.whatsappNumber);
  const isPhoneReady = isNumberConfigured(CONTACT_CONFIG.phoneNumber);

  const showNotice = (message: string) => {
    setNotice(message);
    setTimeout(() => {
      setNotice((prev) => (prev === message ? null : prev));
    }, 4000);
  };

  return (
    <>
      {/* Toast Notice when contact number is pending configuration */}
      {notice && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-28 right-4 sm:right-6 z-50 max-w-xs bg-[#1C1C1A]/95 backdrop-blur-md text-white text-xs font-manrope px-4 py-3 rounded-xl border border-[#C5A059]/40 shadow-2xl animate-fade-in flex items-start gap-2.5"
        >
          <AlertCircle className="w-4 h-4 text-[#E9C176] shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="leading-snug text-white/90">{notice}</p>
          </div>
          <button
            type="button"
            onClick={() => setNotice(null)}
            className="text-white/60 hover:text-white text-xs font-bold pl-1"
            aria-label="Dismiss notice"
          >
            ×
          </button>
        </div>
      )}

      {/* Floating Buttons Container */}
      <aside
        aria-label="Contact channels"
        className="fixed z-40 flex flex-col items-end gap-3 pointer-events-none select-none"
        style={{
          bottom: 'max(1.25rem, calc(env(safe-area-inset-bottom, 0px) + 1.25rem))',
          right: 'max(1rem, calc(env(safe-area-inset-right, 0px) + 1rem))',
        }}
      >
        {/* 1. WhatsApp Button (Stacked above Phone) */}
        <div className="relative group pointer-events-auto flex items-center justify-end">
          {/* Desktop Hover Tooltip */}
          <span
            id="whatsapp-tooltip"
            role="tooltip"
            className="hidden sm:inline-block absolute right-full mr-3.5 px-3 py-1.5 rounded-lg text-xs font-manrope font-medium text-white bg-[#1C1C1A]/90 backdrop-blur-sm border border-white/10 shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none"
          >
            {isWhatsAppReady ? 'Chat on WhatsApp' : 'WhatsApp (Setup Pending)'}
          </span>

          {isWhatsAppReady && whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Crux Adventure on WhatsApp (opens in new tab)"
              aria-describedby="whatsapp-tooltip"
              className="w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#FCF9F5] cursor-pointer"
            >
              <WhatsAppIcon />
            </a>
          ) : (
            <button
              type="button"
              onClick={() =>
                showNotice(
                  'WhatsApp direct contact awaiting number configuration in src/config/contact.ts. Please use our booking inquiry form.'
                )
              }
              aria-label="WhatsApp contact (Number awaiting configuration)"
              aria-describedby="whatsapp-tooltip"
              className="w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#FCF9F5] cursor-pointer opacity-95"
            >
              <WhatsAppIcon />
            </button>
          )}
        </div>

        {/* 2. Phone Call Button */}
        <div className="relative group pointer-events-auto flex items-center justify-end">
          {/* Desktop Hover Tooltip */}
          <span
            id="phone-tooltip"
            role="tooltip"
            className="hidden sm:inline-block absolute right-full mr-3.5 px-3 py-1.5 rounded-lg text-xs font-manrope font-medium text-white bg-[#1C1C1A]/90 backdrop-blur-sm border border-white/10 shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none"
          >
            {isPhoneReady ? 'Call Concierge Desk' : 'Call Concierge (Setup Pending)'}
          </span>

          {isPhoneReady && phoneUrl ? (
            <a
              href={phoneUrl}
              aria-label="Call Crux Adventure Concierge desk directly"
              aria-describedby="phone-tooltip"
              className="w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-full bg-[#18231C] hover:bg-[#223328] text-white border border-[#C5A059]/40 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:ring-offset-2 focus:ring-offset-[#FCF9F5] cursor-pointer"
            >
              <Phone className="w-5 h-5 text-white" />
            </a>
          ) : (
            <button
              type="button"
              onClick={() =>
                showNotice(
                  'Telephone direct line awaiting number configuration in src/config/contact.ts. Please use our booking inquiry form.'
                )
              }
              aria-label="Call Concierge (Number awaiting configuration)"
              aria-describedby="phone-tooltip"
              className="w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-full bg-[#18231C] hover:bg-[#223328] text-white border border-[#C5A059]/40 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:ring-offset-2 focus:ring-offset-[#FCF9F5] cursor-pointer opacity-95"
            >
              <Phone className="w-5 h-5 text-white" />
            </button>
          )}
        </div>
      </aside>
    </>
  );
}

/**
 * Official WhatsApp Vector Icon
 */
function WhatsAppIcon() {
  return (
    <svg
      className="w-6 h-6 fill-current"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
    </svg>
  );
}
