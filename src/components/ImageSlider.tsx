import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage1 from "@/assets/gallery6.jpg";
import heroImage2 from "@/assets/home8.jpg";
import heroImage3 from "@/assets/home7.png";
import heroImage4 from "@/assets/gallery14.jpg";
import heroImage5 from "@/assets/gallery19.jpg";
import heroImage6 from "@/assets/gallery23.jpg";
import aboutImage from "@/assets/home5.jpg";
import blogsImage from "@/assets/home1.jpg";
import aboutImage1 from "@/assets/blog2.jpg";
import aboutImage2 from "@/assets/blog1.jpg";
import galleryimage from "@/assets/gallery9.jpg"

const images = [
  {
    src: blogsImage,
    alt: "Educational Programs"
  },
  {
    src: heroImage2,
    alt: "MDS Foundation Community Work"
  },
  {
    src: heroImage1,
    alt: "MDS Foundation Community Work"
  },
  {
    src: heroImage3,
    alt: "MDS Foundation Community Work"
  },
  {
    src: heroImage4,
    alt: "MDS Foundation Community Work"
  },
  {
    src: heroImage5,
    alt: "MDS Foundation Community Work"
  },
  {
    src: heroImage6,
    alt: "MDS Foundation Community Work"
  },
  {
    src: aboutImage,
    alt: "Democracy and Human Rights"
  },
  {
    src: aboutImage1,
    alt: "Democracy and Human Rights"
  },
  {
    src: galleryimage,
    alt: "Democracy and Human Rights"
  },
  {
    src: aboutImage2,
    alt: "Democracy and Human Rights"
  }
];

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg shadow-card-foundation">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};