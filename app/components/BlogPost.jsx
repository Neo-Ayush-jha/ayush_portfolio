'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FiEye } from "react-icons/fi";
import { HiArrowUpRight } from "react-icons/hi2";
import { BiMessageRoundedDetail } from "react-icons/bi";

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

const BlogPost = ({ post, views = 0, onOpen }) => {
  const { id, title, published, url } = post;
  const [wordLimit, setWordLimit] = useState(50); // Default word limit
  const postImage = extractFirstImage(post.content);
  const postSnippet = extractTextSnippet(post.content, wordLimit);
  const truncatedTitle = truncateText(title, 40);
  const commentCount = Number(post?.replies?.totalItems ?? 0);
  const viewLabel = views > 0 ? `${Intl.NumberFormat().format(views)} views` : "Be first to read";

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
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full w-full"
      onClick={() => onOpen?.(id)}
    >
      <div className="group relative flex h-full min-h-[470px] w-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#13284c] via-[#0f2243] to-[#0a1831] p-5 shadow-[0_24px_70px_rgba(2,12,27,0.36)] transition-all duration-300 hover:-translate-y-3 hover:border-textGreen/40 lg:max-w-[390px]">
        <div className="pointer-events-none absolute -right-10 top-0 h-28 w-28 rounded-full bg-textGreen/12 blur-3xl"></div>
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%,transparent)]"></div>
        <div className="relative z-10 flex flex-1 flex-col gap-4">
          <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.25em] text-textGreen/80">
            <span className="rounded-full border border-textGreen/30 bg-textGreen/10 px-3 py-1 font-semibold">
              Latest Post
            </span>
            <span className="text-textLight/45">
              {new Date(published).toLocaleDateString()}
            </span>
          </div>
          <div className="h-[210px] w-full overflow-hidden rounded-[18px] border border-white/10 bg-[#0b162d]">
            <Image
              src={postImage}
              alt="Blog post thumbnail"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              width={420}
              height={220}
              layout="intrinsic"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <h2 className="text-2xl font-titleFont font-semibold leading-snug tracking-wide text-textLight transition-colors duration-300 group-hover:text-textGreen">
              {truncatedTitle}
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-textDark">
              <span
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 whitespace-nowrap"
                title="Tracked from this portfolio"
              >
                <FiEye className="text-sm text-textGreen" />
                {viewLabel}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 whitespace-nowrap">
                <BiMessageRoundedDetail className="text-sm text-textGreen" />
                {commentCount} comments
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-textDark">
              {postSnippet}
            </p>
            <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-sm font-medium text-textLight/80">
                Read full article
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-textGreen/30 bg-textGreen/10 text-textGreen transition-transform duration-300 group-hover:translate-x-1">
                <HiArrowUpRight className="text-lg" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogPost;
