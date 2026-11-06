import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Auth from './components/Auth';
import About from './components/About';
import Learning from './components/Learning';
import Parent from './components/Parent';
import News from './components/News';
import Safety from './components/Parent/Safety';
import Support from './components/Support';
import PostPage from './components/PostPage';

const ScrollRevealManager = () => {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-visible)');
      if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        elements.forEach((el) => el.classList.add('is-visible'));
        return null;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
      );

      elements.forEach((el) => observer.observe(el));
      return observer;
    };

    const observer = observeElements();

    return () => {
      if (observer) observer.disconnect();
    };
  }, [location.pathname]);

  return null;
};

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 450);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-indigo-950 text-yellow-400 border border-stone-700 hover:bg-yellow-400 hover:text-stone-950 transition-colors duration-200 flex items-center justify-center shadow-md"
    >
      <FaArrowUp className="text-sm" />
    </button>
  );
};

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollRevealManager />
      <div className="App min-h-screen flex flex-col bg-[#FAF9F6] text-stone-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/about" element={<About />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/parent" element={<Parent />} />
            <Route path="/news" element={<News />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/support" element={<Support />} />
            <Route path="/post/:postId" element={<PostPage />} />
          </Routes>
        </main>
        <BackToTopButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
