import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/AllData';

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="position-relative overflow-hidden w-100" style={{ minHeight: '440px', height: '60vh', maxHeight: '580px' }}>
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`position-absolute top-0 start-0 w-100 h-100 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100 z-1' : 'opacity-0 z-0'
          }`}
          style={{ backgroundColor: slide.bgColor }}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />

          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)' }}
          />

          {/* Slide Content */}
          <div className="container h-100 position-relative z-2 d-flex align-items-center">
            <div className="col-12 col-md-8 col-lg-6 text-white py-5">
              <span className="badge rounded-pill bg-white text-dark py-2 px-3 fs-xs fw-semibold mb-3 shadow-sm">
                {slide.tag}
              </span>
              <h1 className="display-5 display-md-4 fw-bold lh-sm mb-4">
                {slide.title}
              </h1>
              <a
                href="#"
                className="btn btn-outline-light btn-lg rounded-pill px-4 fs-sm fw-bold border-2 hover-white-btn"
              >
                {slide.ctaText}
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 z-3 d-flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrentSlide(i)}
            className={`border-0 rounded-pill transition-all ${
              currentSlide === i ? 'bg-white' : 'bg-white opacity-50'
            }`}
            style={{
              width: currentSlide === i ? '28px' : '10px',
              height: '8px',
              cursor: 'pointer',
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
export default HeroSlider;
