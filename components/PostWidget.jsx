/* eslint-disable @next/next/no-img-element */
import moment from 'moment';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  console.log(relatedPosts);

  return (
    <div className="bg-white shadow-lg rounded-lg px-4 py-8 md:p-8 mb-8 ">
      <h3 className="text-xl mb-8  font-semibold border-b pb-4">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div className="flex items-center w-full my-4" key={post.title}>
          <div className="w-16 flex-none">
            <img
              src={post.featuredimage.url}
              alt={post.title}
              className="align-middle rounded-full object-cover"
              style={{ height: '49px', width: '49px' }}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format('MMM DD, YYY')}
            </p>
            <Link
              href={`/post/${post.slug}`}
              key={post.title}
              className="text-md"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
