"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";

interface CarouselProps {
  images: StaticImageData[];
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [nextSlide, interval, isPaused]);

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), interval);
  };

  return (
    <div className="flex-1 relative w-full  overflow-hidden rounded-t-lg">
      <div
        className="h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full relative">
            {
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            }
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-50">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleIndicatorClick(idx)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === idx
                ? "bg-primary"
                : "bg-secondary border border-primary"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
