import { useState } from 'react';
import { Link } from 'react-router-dom';
import postsData from './Posts.json';
import postImage1 from '../posts/post-1.jpg';
import postImage2 from '../posts/post-2.jpg';
import postImage3 from '../posts/post-3.jpg';
import postImage4 from '../posts/post-4.jpg';
import postImage5 from '../posts/post-5.jpg';
import postImage6 from '../posts/post-6.jpg';
import postImage7 from '../posts/post-7.jpg';

const NewsPosts = () => {
  const sortedPosts = [...postsData.posts].sort(
    (a, b) => new Date(b.datePublished) - new Date(a.datePublished)
  );

  const baseArchivePosts = sortedPosts.slice(3);

  const images = {
    '1': postImage1,
    '2': postImage2,
    '3': postImage3,
    '4': postImage4,
    '5': postImage5,
    '6': postImage6,
    '7': postImage7,
  };

  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 14) {
      return words.slice(0, 14).join(' ') + '...';
    }
    return description;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })}`;
  };

  const [visiblePosts, setVisiblePosts] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('All');

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const filteredPosts = baseArchivePosts.filter((post) => {
    const matchesAuthor = selectedAuthor === 'All' || post.author?.name === selectedAuthor;
    const matchesSearch =
      !searchQuery.trim() ||
      post.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesAuthor && matchesSearch;
  });

  const handleViewMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + (isMobile ? 2 : 3));
  };

  const handleViewAll = () => {
    setVisiblePosts(filteredPosts.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8 pb-4 border-b border-stone-300 flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
        <div>
          <span className="ty-kicker text-indigo-800 block mb-1">
            02 — Past Publications
          </span>
          <h2 className="ty-subheading text-stone-900">
            Archive
          </h2>
        </div>

        {/* Search & Author Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="px-3.5 py-2 border border-stone-300 bg-[#FAF9F6] focus:bg-white text-sm focus:outline-none focus:border-indigo-900"
          />
          <div className="flex items-center gap-1.5">
            {['All', 'John Doe', 'Alice Johnson'].map((author) => (
              <button
                key={author}
                onClick={() => setSelectedAuthor(author)}
                className={`px-3 py-2 text-xs font-medium border transition-colors ${
                  selectedAuthor === author
                    ? 'bg-indigo-950 text-white border-indigo-950'
                    : 'bg-white text-stone-700 border-stone-300 hover:border-stone-500'
                }`}
              >
                {author}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="py-12 text-center bg-[#FAF9F6] border border-stone-300">
          <p className="ty-body text-stone-600 mb-3">No matching articles found.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedAuthor('All');
            }}
            className="text-sm font-semibold text-indigo-900 underline"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.slice(0, visiblePosts).map((post) => (
            <Link
              key={post.postId}
              to={`/post/${post.postId}`}
              className="group border border-stone-300 bg-[#FAF9F6] hover:bg-white transition-colors duration-200 flex flex-col justify-between text-left"
            >
              <div>
                <div className="h-48 overflow-hidden border-b border-stone-300 bg-stone-100">
                  <img
                    src={images[post.postId]}
                    alt={post.heading}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between ty-support text-stone-500 mb-2">
                    <span>{formatDate(post.datePublished)}</span>
                    <span>{post.author?.name}</span>
                  </div>
                  <h2 className="ty-card-heading mb-2 text-stone-900 group-hover:text-indigo-800 transition-colors">
                    {post.heading}
                  </h2>
                  <p className="ty-body text-stone-600">
                    {truncateDescription(post.description)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {visiblePosts < filteredPosts.length && (
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <button
            onClick={handleViewMore}
            className="border border-indigo-900 bg-indigo-900 text-white font-semibold text-sm py-2.5 px-7 hover:bg-white hover:text-indigo-900 transition-colors duration-300"
          >
            View More
          </button>

          {visiblePosts >= filteredPosts.length / 2 && (
            <button
              onClick={handleViewAll}
              className="border border-green-700 bg-green-700 text-white font-semibold text-sm py-2.5 px-7 hover:bg-white hover:text-green-700 transition-colors duration-300"
            >
              View All
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsPosts;
