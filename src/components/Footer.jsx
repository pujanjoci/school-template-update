import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import schoolLogo from '../assets/school.png';

const Footer = () => {
  return (
    <footer className="bg-stone-100 border-t border-stone-300 text-stone-800 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left pb-10 border-b border-stone-300">
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <h2 className="text-xl font-display text-stone-900 font-semibold mb-2">
              School Name or Academy Name
            </h2>
            <p className="ty-body text-stone-600">Location of the school</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="ty-card-heading mb-2 text-stone-900">
              Opening Hours
            </h2>
            <p className="ty-support text-stone-700">Mon - Fri: 8:00 AM - 5:00 PM</p>
            <p className="ty-support text-stone-700">Sat - Sun: Closed</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="ty-card-heading mb-2 text-stone-900">
              Contact Us
            </h2>
            <p className="ty-support text-stone-700">Phone: (123) 456-7890</p>
            <p className="ty-support text-stone-700">Email: info@schoolname.com</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left py-10 border-b border-stone-300 items-start">
          <div className="hidden md:flex flex-col items-start">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img src={schoolLogo} alt="School Logo" className="w-9 h-9 object-contain" />
              <div>
                <h2 className="text-base font-display font-semibold text-stone-900">School Logo</h2>
                <p className="ty-support text-stone-600">St. Joseph’s Academy</p>
              </div>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="ty-card-heading mb-3 text-stone-900">
              Some Useful Navigations
            </h2>
            <div className="grid grid-cols-2 gap-10 ty-support">
              <ul className="space-y-1.5">
                <li>
                  <Link to="/" className="hover:text-yellow-600 text-stone-700 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-yellow-600 text-stone-700 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="hover:text-yellow-600 text-stone-700 transition-colors">
                    News
                  </Link>
                </li>
              </ul>
              <ul className="space-y-1.5">
                <li>
                  <Link to="/learning" className="hover:text-yellow-600 text-stone-700 transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="hover:text-yellow-600 text-stone-700 transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="/parent" className="hover:text-yellow-600 text-stone-700 transition-colors">
                    Parents
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h2 className="ty-card-heading mb-3 text-stone-900">
              Follow Us
            </h2>
            <div className="flex space-x-6 mt-1 text-xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-yellow-600 text-stone-700 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-yellow-600 text-stone-700 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-yellow-600 text-stone-700 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-yellow-600 text-stone-700 transition-colors"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center ty-support text-stone-600">
          <p>School Name &copy; 2024 - Friends and Co.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
