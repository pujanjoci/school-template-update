import { Link } from 'react-router-dom';
import PrincipalImage from '../assets/principal.png';

const PrincipalMessage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 border border-stone-300 bg-white items-center">
      {/* Image Section */}
      <div className="md:col-span-4 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-stone-200 flex justify-center bg-[#FAF9F6]">
        <img
          src={PrincipalImage}
          alt="Principal"
          className="w-48 h-48 sm:w-56 sm:h-56 object-cover border border-stone-300"
        />
      </div>

      {/* Text Section */}
      <div className="md:col-span-8 p-8 sm:p-10 text-left">
        <span className="ty-kicker text-green-700 block mb-2">
          03 — Institutional Welcome
        </span>
        <h2 className="ty-section-heading text-stone-900 mb-3">
          Message From The Principal
        </h2>
        <div className="h-0.5 w-12 bg-green-600 mb-5"></div>
        <p className="ty-body text-stone-700 mb-4 max-w-[65ch]">
          Welcome to St. Joseph’s English Academy. We are serving in education sector at local level base since 1999. We are very pleased to be part of this community and enjoy the close relationships that we have with our locality in serving students.
        </p>
        <p className="ty-body text-stone-700 mb-6 max-w-[65ch]">
          Our school continues to garner recognition for the individual work we are accomplishing with students daily with the many options we provide.
        </p>
        <Link
          to="/about"
          className="editorial-link text-green-700 hover:text-green-900 font-semibold text-sm"
        >
          Know More About Us →
        </Link>
      </div>
    </div>
  );
};

export default PrincipalMessage;
