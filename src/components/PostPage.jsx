import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaShareAlt, FaCheck } from 'react-icons/fa';
import postsData from './News/Posts.json';

import postImage1 from './posts/post-1.jpg';
import postImage2 from './posts/post-2.jpg';
import postImage3 from './posts/post-3.jpg';
import postImage4 from './posts/post-4.jpg';
import postImage5 from './posts/post-5.jpg';
import postImage6 from './posts/post-6.jpg';
import postImage7 from './posts/post-7.jpg';
import postImage8 from './posts/post-8.jpg';
import postImage9 from './posts/post-9.jpg';
import postImage10 from './posts/post-10.jpg';
import JohnDoeImage from '../assets/John Doe.jpg';
import AliceJohnsonImage from '../assets/Alice Johnson.jpg';

const images = {
  '1': postImage1,
  '2': postImage2,
  '3': postImage3,
  '4': postImage4,
  '5': postImage5,
  '6': postImage6,
  '7': postImage7,
  '8': postImage8,
  '9': postImage9,
  '10': postImage10,
};

const authors = {
  'John Doe': JohnDoeImage,
  'Alice Johnson': AliceJohnsonImage,
};

const formatText = (text) => {
  text = text.replace(/\*\*\*(.*?)\*\*\*/g, '<strong>$1</strong>');
  text = text.replace(/\*i\*(.*?)\*i\*/g, '<em>$1</em>');
  text = text.replace(/\*u\*(.*?)\*u\*/g, '<u>$1</u>');
  text = text.replace(/\n/g, '<br>');

  return text;
};

const PostPage = () => {
  let { postId } = useParams();
  const [copied, setCopied] = useState(false);
  const postIndex = postsData.posts.findIndex((p) => p.postId === postId);
  const post = postsData.posts[postIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
    setCopied(false);
  }, [postId]);

  if (!post) {
    return <div className="py-20 text-center ty-body text-stone-700">Post not found</div>;
  }

  const authorImage = authors[post.author.name];
  const formattedBody = formatText(post.body);
  const wordCount = post.body ? post.body.split(/\s+/).length : 0;
  const readingMinutes = Math.max(1, Math.ceil(wordCount / 180));

  const prevPost = postIndex > 0 ? postsData.posts[postIndex - 1] : null;
  const nextPost = postIndex < postsData.posts.length - 1 ? postsData.posts[postIndex + 1] : null;

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="bg-[#FAF9F6] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl bg-white border border-stone-300 p-6 sm:p-10 text-left">
        <div className="pb-5 mb-6 border-b border-stone-200 flex items-center justify-between">
          <Link
            to="/news"
            className="editorial-link ty-support font-semibold text-indigo-900"
          >
            <FaArrowLeft className="mr-2 text-[10px]" />
            <span>Back to News</span>
          </Link>
          <span className="ty-support text-stone-500">
            {readingMinutes} min read • {new Date(post.datePublished).toLocaleDateString()}
          </span>
        </div>

        <h1 className="ty-section-heading mb-6 text-stone-900">
          {post.heading}
        </h1>

        <div className="flex items-center justify-between mb-6 pb-6 border-b border-stone-200 gap-4">
          <div className="flex items-center">
            {authorImage && (
              <div className="flex-shrink-0">
                <img
                  src={authorImage}
                  alt={post.author.name}
                  className="w-12 h-12 object-cover rounded-full border border-stone-300"
                />
              </div>
            )}
            <div className="ml-4">
              <p className="text-sm font-semibold text-stone-900">{post.author.name}</p>
              <p className="ty-support text-stone-500">
                Published {new Date(post.datePublished).toLocaleDateString()}
              </p>
            </div>
          </div>

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 px-3.5 py-2 border border-stone-300 text-xs font-medium text-stone-700 hover:border-indigo-900 hover:text-indigo-900 transition-colors"
          >
            {copied ? <FaCheck className="text-green-600" /> : <FaShareAlt />}
            <span>{copied ? 'Link Copied' : 'Share Article'}</span>
          </button>
        </div>

        <div className="mb-8 border border-stone-200 bg-stone-100">
          <img
            src={images[post.postId]}
            alt={post.heading}
            className="w-full h-72 sm:h-96 object-cover"
          />
        </div>

        {post.description && (
          <p className="ty-body-lead font-medium text-stone-800 border-l-4 border-indigo-900 pl-4 mb-6">
            {post.description}
          </p>
        )}

        <p
          className="ty-body-lead text-stone-700"
          dangerouslySetInnerHTML={{ __html: formattedBody }}
        />

        {/* Prev / Next Article Navigation */}
        <div className="mt-12 pt-6 border-t border-stone-300 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevPost ? (
            <Link
              to={`/post/${prevPost.postId}`}
              className="p-4 border border-stone-200 hover:border-indigo-900 transition-colors text-left group"
            >
              <span className="ty-support text-stone-500 flex items-center gap-1.5 mb-1">
                <FaArrowLeft className="text-[10px]" /> Previous Dispatch
              </span>
              <p className="text-sm font-semibold text-stone-900 group-hover:text-indigo-800 line-clamp-1">
                {prevPost.heading}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {nextPost && (
            <Link
              to={`/post/${nextPost.postId}`}
              className="p-4 border border-stone-200 hover:border-indigo-900 transition-colors text-left sm:text-right group"
            >
              <span className="ty-support text-stone-500 flex items-center sm:justify-end gap-1.5 mb-1">
                Next Dispatch <FaArrowRight className="text-[10px]" />
              </span>
              <p className="text-sm font-semibold text-stone-900 group-hover:text-indigo-800 line-clamp-1">
                {nextPost.heading}
              </p>
            </Link>
          )}
        </div>
      </article>
    </div>
  );
};

export default PostPage;
