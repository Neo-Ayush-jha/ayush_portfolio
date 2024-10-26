'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogPost from './BlogPost';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import SectionTitle from './SectionTitle';

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
            } catch (error) {
                console.log("Error fetching blog posts: ", error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className='max-w-container mx-auto lgl:px-20' id="blog">
            <SectionTitle title="Explore my latest blog posts" title_no="06" />

            <div className="w-full flex flex-col items-center ">
                <h2 className="text-3xl font-titleFont font-semibold">My Blog</h2>
                <p className="text-sm font-titleFont text-textGreen ">Explore my latest blog posts</p>
            </div>
            {posts.length > 0 ? (
                <Swiper
                    initialSlide={0}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={2} 
                    spaceBetween={24} 
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    style={{marginTop:'24px'}}
                    pagination={{ clickable: true }}
                    className="mySwiper"
                >
                    {posts.map((post) => (
                        <SwiperSlide key={post.id} style={{
                            width: '600px',
                            height: '365px', 
                            transition: 'width 0.3s ease, opacity 0.3s ease', 
                            padding: '4px 8px 4px 4px',
                        }}>
                            <BlogPost post={post} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <p>No blog posts available.</p>
            )}
        </section>
    );
}
