'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { galleryData, type GalleryImage } from '@/lib/gallery.data';
import SectionHeader from '@/components/ui/SectionHeader';
import CallToAction from '@/components/ui/CallToAction';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const GalleryItem = ({ item, index, onClick }: { item: GalleryImage, index: number, onClick: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div 
      onClick={onClick}
      className="relative aspect-[4/3] group overflow-hidden rounded-2xl shadow-md cursor-pointer bg-gray-100"
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-400 text-sm font-medium animate-pulse">Loading image...</span>
        </div>
      )}
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className={`object-cover group-hover:scale-110 transition-all duration-700 ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onLoad={() => setIsLoading(false)}
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default function GalleryClient() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % galleryData.length : null));
  };

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + galleryData.length) % galleryData.length : null));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <>
      <section className="pt-32 pb-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            badge="📸 Gallery"
            title="Impact in Pictures"
            highlightedWord="Pictures"
            description="Visual stories of hope, resilience, and transformation."
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryData.map((item, index) => (
              <GalleryItem 
                key={item.id} 
                item={item} 
                index={index} 
                onClick={() => openLightbox(index)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
        >
          {/* Close Button */}
          <button className="absolute top-6 right-6 text-white/70 hover:text-white z-50 p-2">
            <FaTimes className="w-8 h-8" />
          </button>

          {/* Navigation Buttons */}
          <button 
            onClick={showPrev}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white p-3 md:p-4 rounded-full bg-black/20 hover:bg-black/40 transition-colors z-50"
          >
            <FaChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <button 
            onClick={showNext}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white p-3 md:p-4 rounded-full bg-black/20 hover:bg-black/40 transition-colors z-50"
          >
            <FaChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Image Container */}
          <div 
            className="relative w-full max-w-5xl max-h-[85vh] aspect-[16/9] md:aspect-[3/2]"
            onClick={(e) => e.stopPropagation()} 
          >
             <Image
                src={galleryData[selectedIndex].src}
                alt={galleryData[selectedIndex].alt}
                fill
                className="object-contain"
                priority
             />
             {/* <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                <span className="bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                    {galleryData[selectedIndex].alt}
                </span>
             </div> */}
          </div>
        </div>
      )}

      <CallToAction />
    </>
  );
}
