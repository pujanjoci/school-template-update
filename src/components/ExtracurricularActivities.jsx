import extra from '../assets/Basketball.jpg';

const ExtracurricularActivities = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 border border-stone-300 bg-white">
      {/* Image Section */}
      <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-stone-300">
        <img
          src={extra}
          alt="Extracurricular Activities"
          className="w-full h-72 sm:h-80 lg:h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="lg:col-span-7 p-8 sm:p-12 text-left flex flex-col justify-center">
        <span className="ty-kicker text-green-700 block mb-2">
          02 — Co-Curricular Life
        </span>
        <h2 className="ty-section-heading text-stone-900 mb-3">
          Our Extra-curricular Activities
        </h2>
        <div className="h-0.5 w-12 bg-green-600 mb-6"></div>

        <div className="divide-y divide-stone-200 border-t border-stone-200">
          <div className="py-4">
            <h3 className="ty-card-heading text-green-700 mb-1">Sports</h3>
            <p className="ty-body text-stone-700">
              Our students are passionate about sports and athletics and have the freedom to choose the one they like and wish to take up.
            </p>
          </div>
          <div className="py-4">
            <h3 className="ty-card-heading text-green-700 mb-1">Events</h3>
            <p className="ty-body text-stone-700">
              We have several writers who are encouraged to come up with creations that are regularly published in our in-house magazines.
            </p>
          </div>
          <div className="pt-4">
            <h3 className="ty-card-heading text-green-700 mb-1">Performing Arts &amp; Music</h3>
            <p className="ty-body text-stone-700">
              With professionals on board, we take pride in training our students in art forms like dance, drama, painting, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtracurricularActivities;
