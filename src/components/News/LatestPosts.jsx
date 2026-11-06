import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import postsData from './Posts.json';
import postImage8 from '../posts/post-8.jpg';
import postImage9 from '../posts/post-9.jpg';
import postImage10 from '../posts/post-10.jpg';

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const sortedPosts = [...postsData.posts].sort(
      (a, b) => new Date(b.datePublished) - new Date(a.datePublished)
    );
    setPosts(sortedPosts.slice(0, 3));
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8 pb-4 border-b border-stone-300 text-left">
        <span className="ty-kicker text-indigo-800 block mb-1">
          01 — Lead Dispatches
        </span>
        <h2 className="ty-subheading text-stone-900">
          Recent Announcements
        </h2>
      </div>

      {posts.length === 0 ? (
        <p className="text-center ty-body text-stone-600">No posts available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 border border-stone-300 divide-y md:divide-y-0 md:divide-x divide-stone-300 bg-white">
          {posts.map((post) => (
            <Link
              key={post.postId}
              to={`/post/${post.postId}`}
              className="group p-6 sm:p-7 flex flex-col justify-between hover:bg-[#FAF9F6] transition-colors duration-200 text-left"
            >
              <div>
                <p className="ty-support text-stone-500 mb-3">
                  {new Date(post.datePublished).toLocaleDateString()}
                </p>
                <div className="h-48 overflow-hidden border border-stone-200 mb-5 bg-stone-100">
                  <img
                    src={images[post.postId]}
                    alt={post.heading}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h2 className="ty-card-heading mb-2.5 text-stone-900 group-hover:text-indigo-800 transition-colors">
                  {post.heading}
                </h2>
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
      )}
    </div>
  );
};

export default LatestPosts;
