import { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import schoolLogo from '../assets/school.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const [scrollY, setScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 12);

      if (currentScrollY <= 48) {
        setShowNav(true);
      } else if (currentScrollY > scrollY && !menuOpen) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY, menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    const handleClickOutside = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    setActivePath(path);
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const isPathActive = (path) => {
    if (path === '/') return activePath === '/';
    return activePath.startsWith(path);
  };

  const getNavClass = (path) =>
    isPathActive(path)
      ? 'border-b-2 border-indigo-600 text-stone-950 inline-flex items-center px-1 h-16 ty-nav font-semibold cursor-pointer transition-colors duration-200'
      : 'border-b-2 border-transparent text-stone-600 hover:border-stone-400 hover:text-stone-950 transition-colors duration-200 inline-flex items-center px-1 h-16 ty-nav cursor-pointer';

  return (
    <header
      ref={navRef}
      className={`bg-white sticky top-0 z-50 transition-transform duration-300 border-b border-stone-200 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      } ${scrolled ? 'shadow-sm' : ''}`}
    >
      {/* Top Institutional Utility Bar (Desktop) */}
      <div className="hidden md:block bg-stone-900 text-stone-300 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-4">
            <span className="text-yellow-400 font-medium">Admissions Open 2026–27</span>
            <span className="text-stone-600">|</span>
            <span>Mon – Fri: 8:00 AM – 5:00 PM</span>
          </div>
          <div className="flex items-center space-x-5">
            <button
              onClick={() => handleNavigation('/safety')}
              className="hover:text-yellow-400 transition-colors"
            >
              Safety Policies
            </button>
            <button
              onClick={() => handleNavigation('/support')}
              className="hover:text-yellow-400 transition-colors"
            >
              Support &amp; FAQ
            </button>
            <button
              onClick={() => handleNavigation('/login')}
              className="text-yellow-400 hover:text-white font-medium transition-colors"
            >
              Portal Login →
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 h-16 items-center relative">
          {/* First grid: Logo */}
          <div className="flex items-center">
            <div
              onClick={() => handleNavigation('/')}
              className="inline-flex items-center gap-2.5 cursor-pointer group"
            >
              <img
                src={schoolLogo}
                alt="School Emblem"
                className="w-8 h-8 object-contain"
              />
              <div className="flex flex-col text-left leading-tight">
                <span className="text-lg md:text-xl font-semibold font-display tracking-tight text-stone-950 group-hover:text-indigo-700 transition-colors">
                  School-Logo
                </span>
                <span className="text-xs font-body font-normal text-stone-500">
                  St. Joseph’s Academy
                </span>
              </div>
            </div>
          </div>

          {/* Second grid: Navigation */}
          <nav className="hidden sm:flex justify-center items-center" aria-label="Primary">
            <div className="flex space-x-7 md:space-x-10 lg:space-x-12">
              <span onClick={() => handleNavigation('/')} className={getNavClass('/')}>
                Home
              </span>
              <span onClick={() => handleNavigation('/about')} className={getNavClass('/about')}>
                About
              </span>
              <span onClick={() => handleNavigation('/learning')} className={getNavClass('/learning')}>
                Learning
              </span>
              <span onClick={() => handleNavigation('/news')} className={getNavClass('/news')}>
                News
              </span>
              <span
                onClick={() => handleNavigation('/parent')}
                className={getNavClass('/parent')}
                style={{ zIndex: '10' }}
              >
                Parent
              </span>
            </div>
          </nav>

          {/* Third grid: Hamburger Menu on Mobile */}
          <div className="flex justify-end items-center sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="p-2 text-stone-700 hover:text-stone-950 focus:outline-none"
            >
              <svg className="h-7 w-7" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Third grid: Social Links (Visible on larger screens) */}
          <div className="hidden sm:flex justify-end items-center space-x-5">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-indigo-600 hover:text-stone-900 transition-colors"
            >
              <FaFacebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-pink-700 hover:text-stone-900 transition-colors"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-stone-900 hover:text-indigo-600 transition-colors"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav
            className="sm:hidden absolute top-16 left-0 right-0 z-50 bg-white border-b border-stone-300 shadow-lg"
            aria-label="Mobile"
          >
            <div className="px-6 py-5 divide-y divide-stone-200 flex flex-col">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Learning', path: '/learning' },
                { label: 'News', path: '/news' },
                { label: 'Parent', path: '/parent' },
                { label: 'Support & FAQ', path: '/support' },
                { label: 'Portal Login', path: '/login' },
              ].map((item) => (
                <span
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`py-3 text-base cursor-pointer flex items-center justify-between ${
                    isPathActive(item.path)
                      ? 'font-semibold text-indigo-700'
                      : 'font-medium text-stone-800 hover:text-indigo-700'
                  }`}
                >
                  <span>{item.label}</span>
                  {isPathActive(item.path) && (
                    <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                  )}
                </span>
              ))}
              <div className="pt-5 flex items-center space-x-8">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-indigo-600 hover:text-stone-800"
                >
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-pink-700 hover:text-stone-800"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-stone-900 hover:text-stone-700"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
