"use client";
/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import Container from "@/components/box/container";
import {
  ArrowNavigationLeft,
  ArrowNavigationRight,
} from "@/components/nav/arrowNavigation";
import { HeadingThree, HeadingTwo } from "@/components/text/heading";
import Paragraph from "@/components/text/paragpraph";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ArticleCard from "@/components/box/articleCard";

export default function ListArticles() {
  const slider = useRef();

  return (
    <Container className="border border-box-low-white h-full rounded-2xl bg-box-pricing py-7 lg:px-5  relative">
      <div className="flex mx-3 items-center">
        <div className="mr-5 hidden lg:block">
          <HeadingTwo className="text-typ-gray font-medium whitespace-nowrap">
            Cari Artikel
          </HeadingTwo>
        </div>
        <div className="w-full outline outline-1 outline-box-input rounded-xl bg-white flex">
          <button className="pl-3">
            <img
              src="/images/global/search.png"
              alt="search"
              className="object-contain w-5 h-5"
            />
          </button>
          <input
            type="search"
            placeholder="search"
            className="w-full pl-1.5 pr-3 py-1.5 focus:outline-none text-typ-gray"
          />
        </div>
      </div>
      <div className="py-1.5"></div>
      <div className="m-3 flex flex-col-reverse lg:flex-row">
        <div className="w-full h-full">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              540: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            onSwiper={(it) => (slider.current = it)}
            modules={[Navigation]}
            className="h-full"
          >
            <SwiperSlide>
              <ArticleCard height="h-96"></ArticleCard>
            </SwiperSlide>
            <SwiperSlide>
              <ArticleCard height="h-96"></ArticleCard>
            </SwiperSlide>
            <SwiperSlide>
              <ArticleCard height="h-96"></ArticleCard>
            </SwiperSlide>
            <SwiperSlide>
              <ArticleCard height="h-96"></ArticleCard>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex mt-5 w-full justify-end px-3">
        <div className="space-x-8">
          <ArrowNavigationLeft
            width="w-9"
            height="h-9"
            onClick={() => {
              slider.current?.slidePrev();
            }}
          ></ArrowNavigationLeft>
          <ArrowNavigationRight
            width="w-9"
            height="h-9"
            onClick={() => {
              slider.current?.slideNext();
            }}
          ></ArrowNavigationRight>
        </div>
      </div>
    </Container>
  );
}
