"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogPost from "./BlogPost";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import SectionTitle from "./SectionTitle";

const LOCAL_VIEW_COUNTS_KEY = "ayush-portfolio-blog-views";

const readStoredViewCounts = () => {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const rawValue = window.localStorage.getItem(LOCAL_VIEW_COUNTS_KEY);
    return rawValue ? JSON.parse(rawValue) : {};
  } catch (error) {
    console.error("Failed to read stored blog view counts:", error);
    return {};
  }
};

const persistViewCounts = (counts) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(LOCAL_VIEW_COUNTS_KEY, JSON.stringify(counts));
  } catch (error) {
    console.error("Failed to store blog view counts:", error);
  }
};

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [viewCounts, setViewCounts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/blogger/v3/blogs/${process.env.NEXT_PUBLIC_BLOGGER_BLOG_ID}/posts?key=${process.env.NEXT_PUBLIC_BLOGGER_API_KEY}`
        );
        const fetchedPosts = response.data.items || [];

        setPosts(fetchedPosts);

        if (!fetchedPosts.length) {
          setViewCounts({});
          return;
        }

        const countsResponse = await axios.get("/api/blog-views", {
          params: {
            postIds: fetchedPosts.map((post) => post.id).join(","),
          },
        });

        const storedCounts = readStoredViewCounts();
        const mergedCounts = fetchedPosts.reduce((accumulator, post) => {
          const remoteCount = Number(countsResponse.data.counts?.[post.id] ?? 0);
          const localCount = Number(storedCounts[post.id] ?? 0);

          accumulator[post.id] = Math.max(remoteCount, localCount);
          return accumulator;
        }, {});

        setViewCounts(mergedCounts);
        persistViewCounts(mergedCounts);
      } catch (error) {
        console.log("Error fetching blog posts: ", error);
      }
    };
    fetchData();
  }, []);

  const handlePostOpen = (postId) => {
    setViewCounts((previousCounts) => {
      const nextCounts = {
        ...previousCounts,
        [postId]: Number(previousCounts[postId] ?? 0) + 1,
      };

      persistViewCounts(nextCounts);
      return nextCounts;
    });

    fetch(`/api/blog-views/${postId}`, {
      method: "POST",
      keepalive: true,
      cache: "no-store",
    }).catch((error) => {
      console.error(`Failed to update blog view count for ${postId}:`, error);
    });
  };

  return (
    <section className="max-w-container mx-auto lgl:px-20" id="blog">
      <SectionTitle title="Explore my latest blog posts" title_no="06" />

      <div className="w-full flex flex-col items-center ">
        <h2 className="text-3xl font-titleFont font-semibold">My Blog</h2>
        <p className="text-sm font-titleFont text-textGreen ">
          Explore my latest blog posts
        </p>
      </div>
      {posts.length > 0 ? (
        <Swiper
          modules={[Pagination]}
          centeredSlides={true}
          grabCursor={true}
          spaceBetween={18}
          loop={posts.length > 3}
          pagination={{ clickable: true }}
          style={{ marginTop: "32px", paddingBottom: "48px" }}
          className="blog-swiper !overflow-visible"
          breakpoints={{
            320: { slidesPerView: 1.05, spaceBetween: 12 },
            640: { slidesPerView: 1.2, spaceBetween: 16 },
            768: { slidesPerView: 1.45, spaceBetween: 18 },
            1024: { slidesPerView: 1.9, spaceBetween: 22 },
            1280: { slidesPerView: 2.2, spaceBetween: 26 },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide
              key={post.id}
              className="!h-auto flex justify-center items-stretch py-2"
              style={{
                width: "100%",
                transition: "all 0.3s ease",
              }}
            >
              <BlogPost
                post={post}
                views={viewCounts[post.id] ?? 0}
                onOpen={handlePostOpen}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No blog posts available.</p>
      )}


    </section>
  );
}
