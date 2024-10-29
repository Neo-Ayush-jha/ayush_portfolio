'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const extractFirstImage = (htmlContent) => {
  const imgMatch = htmlContent.match(/<img [^>]*src="([^"]+)"[^>]*>/);
  return imgMatch ? imgMatch[1] : '/default-image.jpg';
};

const extractTextSnippet = (htmlContent, wordLimit = 50) => {
  const textContent = htmlContent.replace(/<[^>]+>/g, ''); // Remove HTML tags
  return textContent.split(' ').slice(0, wordLimit).join(' ') + '...';
};

const truncateText = (text, charLimit = 40) => {
  return text.length > charLimit ? text.substring(0, charLimit) + '...' : text;
};

const BlogPost = ({ post }) => {
  const { title, published, url } = post;
  const [wordLimit, setWordLimit] = useState(50); // Default word limit
  const postImage = extractFirstImage(post.content);
  const postSnippet = extractTextSnippet(post.content, wordLimit);
  const truncatedTitle = truncateText(title, 40);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setWordLimit(20); // Smaller limit for small screens
      } else if (window.innerWidth < 1024) {
        setWordLimit(35); // Medium limit for medium screens
      } else {
        setWordLimit(50); // Default limit for larger screens
      }
    };

    handleResize(); // Set initial word limit based on screen size
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Link href={url} target="_blank" className="mx-xl h-[500px]">
      <div className="w-full rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex flex-col gap-4 items-center">
          <div className="w-[180px] h-[160px] overflow-hidden rounded-md">
            <Image
              src={postImage}
              alt="Blog post thumbnail"
              className="object-cover w-full h-full"
              width={180}
              height={150}
              layout="intrinsic"
            />
          </div>
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
