import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';
import useCountUp from './useCountUp';
import bgHome from '../assets/bg-home.png';
import learningClassroom from '../assets/learning.png';
import GridImg1 from '../assets/GridImg-1.jpg';
import GridImg2 from '../assets/GridImg-2.jpg';
import './animation.css';
import LatestNews from './LatestNews';
import Slideshow from './Slideshow';
import Testimonal from './Testimonial/Testimonal';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const startValues = [0, 0, 0, 0];
  const endValues = [91, 83, 50, 2134];
  const duration = 3;

  useCountUp(startValues, endValues, duration);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScrollToGallery = () => {
    const gallerySection = document.getElementById('gallery-section');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToStats = () => {
    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const truncateText = (text) => {
    const words = text.split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className="bg-[#FAF9F6] text-stone-900">
      {/* FULL-SCREEN HERO SECTION (100svh minus 4rem Navbar) */}
      <section className="min-h-[calc(100svh-4rem)] grid grid-cols-1 lg:grid-cols-12 border-b border-stone-300">
        {/* Left Architectural Column: Signature Yellow Identity Block */}
        <div className="order-2 lg:order-1 lg:col-span-7 bg-yellow-400 text-stone-950 flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 border-t lg:border-t-0 lg:border-r border-stone-900/15">
          {/* Top Institutional Ledger Line */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-stone-900/20 ty-support font-medium text-stone-900 hero-enter-1">
            <span>St. Joseph’s English Academy</span>
            <span>Established 1999</span>
          </div>

          {/* Main Hero Editorial Content */}
          <div className={`my-auto py-8 lg:py-10 max-w-2xl text-left ${isMobile ? 'animate-scale' : ''}`}>
            <p className="ty-kicker text-indigo-950 mb-3 hero-enter-1">
              Academic Excellence &amp; Character Formation
            </p>
            <h1 className="ty-hero text-stone-950 mb-6 hero-enter-2">
              Be a part of our journey to{' '}
              <span className="italic font-semibold">Success</span> and enjoy the learning experience
            </h1>
            <p className="ty-body-lead text-stone-900/90 max-w-xl mb-8 hero-enter-2">
              Serving students and families since 1999 with a balanced academic curriculum, dedicated mentorship, and a vibrant community life across arts, sciences, and athletics.
            </p>

            {/* Call-to-Action Row */}
            <div className="flex flex-wrap items-center gap-6 hero-enter-3">
              <button
                onClick={handleScrollToGallery}
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-indigo-950 text-white font-semibold text-[15px] border border-indigo-950 hover:bg-white hover:text-stone-950 transition-colors duration-300"
              >
                <span>Explore</span>
                <FaArrowRight className="text-xs" />
              </button>
              <Link
                to="/about"
                className="editorial-link text-[15px] font-medium text-stone-950 py-2"
              >
                <span>About Our School</span>
                <FaArrowRight className="ml-2 text-xs" />
              </Link>
            </div>
          </div>

          {/* Bottom Scroll Indicator & Quick Metadata */}
          <div className="pt-4 border-t border-stone-900/20 flex items-center justify-between gap-4 hero-enter-3">
            <button
              onClick={handleScrollToStats}
              className="group inline-flex items-center gap-2.5 ty-support font-medium text-stone-950 hover:text-indigo-900 transition-colors focus:outline-none"
            >
              <span className="w-7 h-7 border border-stone-950/40 group-hover:border-indigo-900 flex items-center justify-center transition-transform duration-300 group-hover:translate-y-0.5">
                <FaArrowDown className="text-[10px]" />
              </span>
              <span>Scroll to explore</span>
            </button>
            <span className="hidden sm:inline ty-support font-light text-stone-900">
              Grades I – X • Full Day Session
            </span>
          </div>
        </div>

        {/* Right Visual Column: Split Campus Photography + Original Student Illustration */}
        <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col bg-stone-900">
          {/* Upper Photography Frame */}
          <div className="relative flex-grow min-h-[260px] sm:min-h-[340px] lg:min-h-0 overflow-hidden">
            <img
              src={learningClassroom}
              alt="Classroom seminar session at St. Joseph's Academy"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/15 to-transparent" />
            <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-white">
              <div className="text-left">
                <span className="block ty-support text-yellow-400 font-medium">
                  01 / Campus Environment
                </span>
                <p className="text-sm sm:text-base font-light text-stone-100 mt-0.5">
                  Small-group instruction &amp; seminar classrooms
                </p>
              </div>
            </div>
          </div>

          {/* Lower Community Panel featuring original bgHome asset */}
          <div className="bg-[#FAF9F6] border-t border-stone-300 p-5 sm:p-6 flex items-center justify-between gap-4">
            <div className="text-left max-w-xs">
              <span className="block ty-support text-indigo-800 font-medium">
                02 / Student Community
              </span>
              <p className="text-[15px] sm:text-base font-medium text-stone-900 mt-1 leading-snug">
                Inclusive environment fostering curiosity &amp; leadership
              </p>
              <Link
                to="/learning"
                className="editorial-link ty-support font-medium text-indigo-700 mt-2"
              >
                <span>View Academic Curriculum</span>
                <FaArrowRight className="ml-1.5 text-[10px]" />
              </Link>
            </div>
            <div
              className="w-28 sm:w-36 h-24 bg-center bg-no-repeat flex-shrink-0"
              style={{ backgroundImage: `url(${bgHome})`, backgroundSize: 'contain' }}
              role="img"
              aria-label="Student community illustration"
            />
          </div>
        </div>
      </section>

      {/* SECTION 01: ACADEMY AT A GLANCE (Architectural Ledger Layout) */}
      <section id="stats-section" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-5 border-b border-stone-300 gap-4 reveal-on-scroll">
            <div className="text-left">
              <span className="ty-kicker text-indigo-800 block mb-1.5">
                01 — Institutional Record
              </span>
              <h2 className="ty-section-heading text-stone-900">
                Academy at a Glance
              </h2>
            </div>
            <p className="ty-body text-stone-600 max-w-md text-left md:text-right">
              Key academic figures reflecting our faculty strength, curriculum breadth, and student body.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 border border-stone-300 divide-y sm:divide-y-0 divide-x divide-stone-300 bg-[#FAF9F6]">
            {[
              { index: '01', title: 'SEE Toppers', count: 91 },
              { index: '02', title: 'Qualified Staffs', count: 83 },
              { index: '03', title: 'Courses', count: 50 },
              { index: '04', title: 'Current Enrollment', count: 2034 },
            ].map((item, index) => (
              <div className="p-6 sm:p-8 text-left flex flex-col justify-between" key={index}>
                <span className="ty-support text-stone-400 font-medium">
                  /{item.index}
                </span>
                <h3
                  id={index.toString()}
                  className="my-3 text-4xl sm:text-5xl lg:text-[3.5rem] font-bold font-display text-indigo-900 tracking-tight leading-none"
                >
                  {item.count}
                </h3>
                <p className="ty-body font-medium text-stone-800 border-t border-stone-200 pt-3">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 02: MISSION & VISION AND ACHIEVEMENTS (Editorial Asymmetric Spread) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] border-b border-stone-200">
        <div className="max-w-7xl mx-auto space-y-20 md:space-y-28">
          {/* Spread 1: Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center reveal-on-scroll">
            <div className="lg:col-span-7">
              <div className="overflow-hidden border border-stone-300 bg-white">
                <img
                  src={GridImg1}
                  alt="Our History"
                  className="w-full h-72 sm:h-96 object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <p className="mt-2 ty-support text-stone-500 text-left">
                Fig 1.1 — Digital Literacy &amp; Computing Laboratory
              </p>
            </div>

            <div className="lg:col-span-5 group text-left lg:pl-4">
              <span className="ty-kicker text-indigo-800 block mb-2">
                02 — Educational Ethos
              </span>
              <h3 className="relative ty-section-heading text-indigo-950 mb-5 inline-block after:content-[''] after:block after:w-full after:h-0.5 after:bg-indigo-900 after:mt-2 after:transition-transform after:duration-500 after:ease-in-out after:scale-x-0 group-hover:after:scale-x-100 after:origin-left">
                Mission &amp; Vision
              </h3>
              <p className="ty-body-lead text-stone-700 mb-6 max-w-[60ch]">
                {isMobile
                  ? truncateText(
                      'Our mission is to provide a nurturing and inclusive learning environment where every student is empowered to reach their full potential.'
                    )
                  : 'Our mission is to provide a nurturing and inclusive learning environment where every student is empowered to reach their full potential.'}
              </p>
              <div className="pt-4 border-t border-stone-300">
                <Link
                  to="/about"
                  className="editorial-link ty-body font-medium text-indigo-900"
                >
                  <span>Read Our Full Philosophy</span>
                  <FaArrowRight className="ml-2 text-xs" />
                </Link>
              </div>
            </div>
          </div>

          {/* Spread 2: Achievements */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center reveal-on-scroll">
            <div className="lg:col-span-5 order-2 lg:order-1 group text-left lg:pr-4">
              <span className="ty-kicker text-indigo-800 block mb-2">
                03 — Student Distinction
              </span>
              <h3 className="relative ty-section-heading text-indigo-950 mb-5 inline-block after:content-[''] after:block after:w-full after:h-0.5 after:bg-indigo-900 after:mt-2 after:transition-transform after:duration-500 after:ease-in-out after:scale-x-0 group-hover:after:scale-x-100 after:origin-left">
                Achievements
              </h3>
              <p className="ty-body-lead text-stone-700 mb-6 max-w-[60ch]">
                {isMobile
                  ? truncateText(
                      'Our students consistently achieve outstanding results in sports, arts, and community service, garnering accolades at regional and national levels.'
                    )
                  : 'Renowned for our commitment to innovative teaching practices and rigorous academic standards, our students consistently achieve outstanding results in sports, arts, and community service, garnering accolades at regional and national levels.'}
              </p>
              <div className="pt-4 border-t border-stone-300">
                <Link
                  to="/learning"
                  className="editorial-link ty-body font-medium text-indigo-900"
                >
                  <span>Explore Student Programs</span>
                  <FaArrowRight className="ml-2 text-xs" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="overflow-hidden border border-stone-300 bg-white">
                <img
                  src={GridImg2}
                  alt="Community"
                  className="w-full h-72 sm:h-96 object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <p className="mt-2 ty-support text-stone-500 text-left">
                Fig 1.2 — Primary Scholars Demonstrating Core Learner Values
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: LATEST NEWS */}
      <div className="bg-white border-b border-stone-200">
        <LatestNews />
      </div>

      {/* SECTION 04: CAMPUS ARCHIVE GALLERY */}
      <section id="gallery-section" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-5 border-b border-stone-300 gap-4 reveal-on-scroll">
            <div className="text-left">
              <span className="ty-kicker text-indigo-800 block mb-1.5">
                05 — Visual Archive
              </span>
              <h2 className="ty-section-heading text-stone-900 font-custom">
                Moments saved in school
              </h2>
            </div>
            <p className="ty-body text-stone-600 text-left md:text-right">
              Take a glimpse into our vibrant community.
            </p>
          </div>
          <Slideshow />
        </div>
      </section>

      {/* SECTION 05: TESTIMONIAL PULL-QUOTE */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Testimonal />
        </div>
      </section>
    </div>
  );
};

export default Hero;
