"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogPost from "./BlogPost";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import SectionTitle from "./SectionTitle";

SwiperCore.use([EffectCoverflow, Pagination]);

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/blogger/v3/blogs/${process.env.NEXT_PUBLIC_BLOGGER_BLOG_ID}/posts?key=${process.env.NEXT_PUBLIC_BLOGGER_API_KEY}`
        );
        setPosts(response.data.items || []);
        console.log(response.data.items);
      } catch (error) {
        console.log("Error fetching blog posts: ", error);
      }
    };
    fetchData();
  }, []);

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
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={24}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          style={{ marginTop: "24px" }}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 8 }, // Extra small screens
            640: { slidesPerView: 1.2, spaceBetween: 12 }, // Small screens
            768: { slidesPerView: 1.5, spaceBetween: 16 }, // Medium screens
            1024: { slidesPerView: 2, spaceBetween: 24 }, // Large screens
          }}
        >
          {posts.map((post) => (
            <SwiperSlide
              key={post.id}
              className="flex justify-center items-center"
              style={{
                width: "100%", // Adjust width for responsive sizing
                height: "365px",
                padding: "4px 8px",
                transition: "all 0.3s ease",
              }}
            >
              <BlogPost post={post} />
              <p>{post.content}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No blog posts available.</p>
      )}


    </section>
  );
}
