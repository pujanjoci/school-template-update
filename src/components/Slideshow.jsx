import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes, FaPause, FaPlay } from 'react-icons/fa';
import GridImg1 from '../assets/GridImg-1.jpg';
import GridImg2 from '../assets/GridImg-2.jpg';
import Visit from '../assets/visit.jpg';
import Events from '../assets/events.jpg';
import Festival from '../assets/festival.jpg';
import Holi from '../assets/Holi.jpg';
import HoliChildren from '../assets/Holi-Children.jpg';
import Football from '../assets/Football.jpg';
import Basketball from '../assets/Basketball.jpg';
import Vollyball from '../assets/Vollyball.jpg';

const Slideshow = () => {
  const galleryItems = [
    { src: GridImg1, title: 'Computing & Media Lab', category: 'Academics' },
    { src: GridImg2, title: 'Classroom Collaboration', category: 'Academics' },
    { src: Visit, title: 'Heritage Field Study', category: 'Academics' },
    { src: Events, title: 'Annual Science & Club Exhibition', category: 'Culture & Events' },
    { src: Festival, title: 'Stage & Music Performance', category: 'Culture & Events' },
    { src: Holi, title: 'Spring Festival of Colors', category: 'Culture & Events' },
    { src: HoliChildren, title: 'Campus Courtyard Gathering', category: 'Culture & Events' },
    { src: Football, title: 'Inter-House Football Match', category: 'Athletics' },
    { src: Basketball, title: 'Outdoor Basketball Court', category: 'Athletics' },
    { src: Vollyball, title: 'Volleyball Championship', category: 'Athletics' },
  ];

  const categories = ['All', 'Academics', 'Culture & Events', 'Athletics'];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [displayedImages, setDisplayedImages] = useState(8);

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const images = filteredItems.map((item) => item.src);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setDisplayedImages((prev) => (prev > 8 ? prev : 6));
      } else {
        setDisplayedImages((prev) => (prev > 8 ? prev : 8));
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      let intervalId;
      if (!isPaused && images.length > 1) {
        intervalId = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3200);
      }

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsOpen(false);
        if (e.key === 'ArrowRight') {
          setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
        if (e.key === 'ArrowLeft') {
          setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        if (intervalId) clearInterval(intervalId);
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, isPaused, images.length]);

  const openSlideshow = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeSlideshow = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleViewMore = () => {
    setDisplayedImages(displayedImages + 6);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setActiveIndex(0);
  };

  return (
    <div className="w-full">
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => {
          const active = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium border transition-colors ${
                active
                  ? 'bg-indigo-950 text-white border-indigo-950'
                  : 'bg-white text-stone-700 border-stone-300 hover:border-stone-500'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {filteredItems.slice(0, displayedImages).map((item, index) => (
          <figure
            key={`${item.title}-${index}`}
            className="group cursor-pointer bg-white border border-stone-300 p-2.5 transition-colors hover:border-indigo-900"
            onClick={() => openSlideshow(index)}
          >
            <div className="relative overflow-hidden h-56 bg-stone-100">
              <img
                src={item.src}
                alt={`Grid ${index} - ${item.title}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2.5 left-2.5 bg-stone-950/80 text-yellow-400 text-[11px] font-medium px-2.5 py-0.5">
                {item.category}
              </span>
            </div>
            <figcaption className="pt-2.5 flex items-center justify-between ty-support text-stone-600">
              <span className="truncate pr-2 font-medium text-stone-800">{item.title}</span>
              <span className="text-stone-400 font-light">0{index + 1}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {filteredItems.length > displayedImages && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleViewMore}
            className="border border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white text-sm font-semibold px-7 py-2.5 transition-colors duration-200"
          >
            View More ({filteredItems.length - displayedImages} remaining)
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {isOpen && filteredItems[activeIndex] && (
        <div
          className="fixed inset-0 bg-stone-950/90 flex items-center justify-center z-50 p-4"
          onClick={closeSlideshow}
        >
          <div
            className="relative w-full max-w-4xl bg-stone-900 border border-stone-700 p-3 sm:p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-800 text-stone-200 ty-support">
              <div>
                <span className="text-yellow-400 font-semibold mr-2">
                  Plate {activeIndex + 1} of {filteredItems.length}
                </span>
                <span>— {filteredItems[activeIndex].title}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 px-3 py-1.5 text-xs flex items-center gap-1.5 transition-colors"
                  onClick={() => setIsPaused(!isPaused)}
                  aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
                >
                  {isPaused ? <FaPlay size={10} /> : <FaPause size={10} />}
                  <span>{isPaused ? 'Play' : 'Pause'}</span>
                </button>
                <button
                  className="text-white bg-red-600 hover:bg-red-700 p-2 transition-colors"
                  onClick={closeSlideshow}
                  aria-label="Close slideshow"
                >
                  <FaTimes size={16} />
                </button>
              </div>
            </div>

            <div className="relative flex items-center justify-center bg-black min-h-[260px] sm:min-h-[420px]">
              <img
                src={filteredItems[activeIndex].src}
                alt={`Slide ${activeIndex}`}
                className="w-full max-h-[68vh] object-contain"
              />

              <button
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white bg-stone-900/85 hover:bg-yellow-400 hover:text-stone-950 border border-stone-600 p-3 transition-colors"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <FaArrowLeft size={16} />
              </button>
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-stone-900/85 hover:bg-yellow-400 hover:text-stone-950 border border-stone-600 p-3 transition-colors"
                onClick={nextImage}
                aria-label="Next image"
              >
                <FaArrowRight size={16} />
              </button>
            </div>

            {/* Dot / Plate Selector */}
            <div className="pt-3 mt-3 border-t border-stone-800 flex items-center justify-center gap-2">
              {filteredItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`View image ${idx + 1}`}
                  className={`h-2 transition-all ${
                    idx === activeIndex ? 'w-6 bg-yellow-400' : 'w-2 bg-stone-600 hover:bg-stone-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slideshow;
