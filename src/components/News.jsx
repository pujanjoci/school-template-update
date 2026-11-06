import SchoolEvents from './News/SchoolsEvents';
import NewsPosts from './News/NewsPosts';
import LatestPosts from './News/LatestPosts';

const News = () => {
  return (
    <div className="bg-[#FAF9F6] text-stone-900 min-h-screen">
      {/* Newspaper-Style Editorial Masthead */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-stone-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between border-b border-stone-300 pb-3 mb-6 ty-support font-medium text-stone-500">
            <span>The Academy Gazette</span>
            <span>News, Dispatches &amp; Calendar</span>
          </div>
          <h1 className="ty-section-heading text-stone-900 text-left">
            News &amp; Events
          </h1>
        </div>
      </section>

      <div className="py-12 md:py-16 border-b border-stone-300">
        <LatestPosts />
      </div>

      <div className="py-12 md:py-16 bg-white border-b border-stone-300">
        <NewsPosts />
      </div>

      <div className="py-12 md:py-20">
        <SchoolEvents />
      </div>
    </div>
  );
};

export default News;
