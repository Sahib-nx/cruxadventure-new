import { X, MapPin } from 'lucide-react';

interface ImageLightboxModalProps {
  image: {
    url: string;
    title: string;
    badge?: string;
  } | null;
  onClose: () => void;
}

export default function ImageLightboxModal({ image, onClose }: ImageLightboxModalProps) {
  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-lg animate-fade-in cursor-zoom-out"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 sm:-top-12 sm:right-0 z-20 w-11 h-11 rounded-full bg-black/60 sm:bg-white/10 hover:bg-black/80 sm:hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
          aria-label="Close image preview"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative overflow-hidden rounded-xl border border-white/20 shadow-2xl bg-black max-h-[82vh]">
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
            {image.badge && (
              <span className="font-manrope text-[0.7rem] tracking-[0.2em] uppercase font-bold text-[#e9c176] block mb-1">
                {image.badge}
              </span>
            )}
            <h3 className="font-playfair text-2xl font-normal text-white">
              {image.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
