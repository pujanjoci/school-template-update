import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import postImage8 from './posts/post-8.jpg';
import postImage9 from './posts/post-9.jpg';
import postImage10 from './posts/post-10.jpg';
import postsData from './News/Posts.json';

const LatestNews = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const sortedPosts = [...postsData.posts]
      .sort((a, b) => Number(b.postId) - Number(a.postId))
      .slice(0, 3);
    setPosts(sortedPosts);
  }, []);

  const images = {
    '8': postImage8,
    '9': postImage9,
    '10': postImage10,
  };

  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 14) {
      return words.slice(0, 14).join(' ') + '...';
    }
    return description;
  };

  const isNewsPage = location.pathname.toLowerCase().includes('/news');

  return (
    <div className="mx-auto max-w-7xl py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-5 border-b border-stone-300 gap-4 reveal-on-scroll">
        <div className="text-left">
          <span className="ty-kicker text-indigo-800 block mb-1.5">
            04 — Campus Dispatches
          </span>
          <h2 className="ty-section-heading text-stone-900">
            Latest News
          </h2>
        </div>
        {!isNewsPage && (
          <Link
            to="/news"
            className="inline-flex items-center gap-2 self-start sm:self-auto border border-indigo-900 bg-indigo-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-white hover:text-indigo-900 transition-colors duration-300"
          >
            <span>All News</span>
            <FaArrowRight className="text-xs" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border border-stone-300 divide-y md:divide-y-0 md:divide-x divide-stone-300 bg-[#FAF9F6]">
        {posts.map((post) => (
          <Link
            key={post.postId}
            to={`/post/${post.postId}`}
            className="group p-6 sm:p-7 flex flex-col justify-between bg-white hover:bg-[#FAF9F6] transition-colors duration-200 text-left"
          >
            <div>
              <div className="flex items-center justify-between ty-support text-stone-500 mb-3">
                <span>{new Date(post.datePublished).toLocaleDateString()}</span>
                <span>{post.author?.name}</span>
              </div>
              <div className="h-48 overflow-hidden border border-stone-200 mb-5 bg-stone-100">
                <img
                  src={images[post.postId]}
                  alt={post.heading}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="ty-card-heading text-stone-900 group-hover:text-indigo-800 transition-colors mb-2.5">
                {post.heading}
              </h3>
              <p className="ty-body text-stone-600">
                {truncateDescription(post.description)}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between ty-support font-semibold text-indigo-900">
              <span>Read Dispatch</span>
              <FaArrowRight className="transform group-hover:translate-x-1 transition-transform text-xs" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
