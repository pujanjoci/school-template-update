import { useState, useEffect } from 'react';
import testimonials from './Testimonal.json';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const initialIndex = Math.floor(Math.random() * testimonials.length);
    setCurrentIndex(initialIndex);

    const changeTestimonial = () => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const intervalId = setInterval(changeTestimonial, 15000);

    return () => clearInterval(intervalId);
  }, []);

  const randomTestimonial = testimonials[currentIndex];

  if (!randomTestimonial) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="border-y border-stone-300 py-12 px-4 sm:px-10 text-center bg-[#FAF9F6]">
      <span className="ty-kicker text-stone-500 block mb-5">
        Voices from Our School Community
      </span>

      <div className="flex items-start justify-center gap-3 sm:gap-4 mb-5 max-w-2xl mx-auto min-h-[84px]">
        <ImQuotesLeft className="text-xl sm:text-2xl text-green-600 flex-shrink-0 mt-1" />
        <p className="text-xl sm:text-2xl md:text-3xl italic font-display text-stone-800 leading-relaxed">
          {randomTestimonial.comment}
        </p>
        <ImQuotesRight className="text-xl sm:text-2xl text-green-600 flex-shrink-0 self-end mb-1" />
      </div>

      <div className="mb-6">
        <p className="text-stone-900 font-body text-base font-semibold">
          - {randomTestimonial.name}
        </p>
        {randomTestimonial.role && (
          <p className="ty-support text-stone-500 mt-0.5">{randomTestimonial.role}</p>
        )}
      </div>

      {/* Interactive Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="w-8 h-8 border border-stone-300 bg-white hover:border-indigo-900 text-stone-700 hover:text-indigo-900 flex items-center justify-center transition-colors"
        >
          <FaChevronLeft className="text-xs" />
        </button>

        <div className="flex items-center gap-1.5">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Select testimonial ${idx + 1}`}
              className={`h-1.5 transition-all ${
                idx === currentIndex ? 'w-6 bg-indigo-900' : 'w-1.5 bg-stone-300 hover:bg-stone-500'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next testimonial"
          className="w-8 h-8 border border-stone-300 bg-white hover:border-indigo-900 text-stone-700 hover:text-indigo-900 flex items-center justify-center transition-colors"
        >
          <FaChevronRight className="text-xs" />
        </button>
      </div>
    </div>
  );
};

export default Testimonal;
