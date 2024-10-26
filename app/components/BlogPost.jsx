'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegFolder } from 'react-icons/fa';
import { RxOpenInNewWindow } from 'react-icons/rx';

// Function to extract the first image from post content
const extractFirstImage = (htmlContent) => {
  const imgMatch = htmlContent.match(/<img [^>]*src="([^"]+)"[^>]*>/);
  return imgMatch ? imgMatch[1] : '/default-image.jpg'; // Use a default image if no image found
};

// Function to extract a snippet of text from post content
const extractTextSnippet = (htmlContent, wordLimit = 50) => {
  const textContent = htmlContent.replace(/<[^>]+>/g, ''); // Remove HTML tags
  return textContent.split(' ').slice(0, wordLimit).join(' ') + '...';
};
const truncateText = (text, charLimit = 40) => {
  return text.length > charLimit ? text.substring(0, charLimit) + '...' : text;
};
const BlogPost = ({ post }) => {
  const { title, published, url } = post;
  const postImage = extractFirstImage(post.content);
  const postSnippet = extractTextSnippet(post.content);
  const truncatedTitle = truncateText(title, 40);

  return (
    <Link href={url} target="_blank" className="mx-xl h-[500px]">
      <div className="w-full rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex flex-col gap-4 items-center">
          <Image
            src={postImage}
            alt="Blog post thumbnail"
            className="rounded-md object-cover"
            width={250} // Specify the exact width
            height={280} // Specify the exact height
            layout="fixed" // Ensures it respects the specified dimensions
          />
          <div>
            <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
              {truncatedTitle}
            </h2>
            <p className="text-xs text-textDark">Published on {new Date(published).toLocaleDateString()}</p>
            <p className="text-sm mt-2">{postSnippet}</p>
          </div>
        </div>
       
      </div>
    </Link>
  );
};

export default BlogPost;
