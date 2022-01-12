/* eslint-disable @next/next/no-img-element */
import moment from 'moment';
import React from 'react';
import MarkDown from 'markdown-to-jsx';

const PostDetail = ({ post }) => (
  <div className="bg-white shadow-lg rounded lg:p-8 pb-12 mb-8">
    <div className="relative overflow-hidden shadow-md mb-6">
      <img
        src={post.featuredimage.url}
        alt={post.title}
        className="object-top h-full w-full lg:rounded-md rounded-t-md"
      />
    </div>
    <div className="px-3 lg:px-0">
      <div className="flex items-center mb-4 md:mb-8 w-full">
        <div className="flex items-center mb-4 lg:mb-0 w-auto mr-8">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
          />
          <p className="inline align-middle text-gray-800 ml-2 text-sm md:text-lg mr-1">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-800 w-full items-center mb-4 lg:mb-0 ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6 inline mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm md:text-lg">
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <h1 className="mb-8 text-2xl md:text-3xl font-semibold">{post.title}</h1>
      <div className="cms-content prose max-w-none prose-indigo font-sans">
        <MarkDown className="mt-100">{post.content.markdown}</MarkDown>
      </div>
    </div>
  </div>
);

export default PostDetail;
