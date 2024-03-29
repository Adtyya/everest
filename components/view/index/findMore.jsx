"use client";
/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import Container from "@/components/box/container";
import {
  ArrowNavigationLeft,
  ArrowNavigationRight,
} from "@/components/nav/arrowNavigation";
import { HeadingThree } from "@/components/text/heading";
import Paragraph from "@/components/text/paragpraph";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ArticleCard from "@/components/box/articleCard";

export default function FindMoreArticles() {
  const slider = useRef();

  return (
    <Container className="border border-box-low-white h-full rounded-2xl bg-box-pricing py-5 lg:py-10 relative">
      <div className="m-3 flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/4 flex items-center flex-col space-y-7 mr-0 lg:mr-3 mt-3.5 lg:mt-0">
          <HeadingThree className="text-typ-gray font-medium">
            Temukan Lebih Banyak Artikel
          </HeadingThree>
          <div className="space-x-8">
            <ArrowNavigationLeft
              onClick={() => {
                slider.current?.slidePrev();
              }}
            ></ArrowNavigationLeft>
            <ArrowNavigationRight
              onClick={() => {
                slider.current?.slideNext();
              }}
            ></ArrowNavigationRight>
          </div>
          <Link href="#">
            <Paragraph className="font-medium flex items-center space-x-3">
              <span>Lihat Blog Kami</span>
              <span>
                <img
                  src="/images/global/arrow-tail.png"
                  alt="arrow-tail"
                  className="w-3/4"
                />
              </span>
            </Paragraph>
          </Link>
        </div>
        <div className="w-full lg:w-3/4 h-full">
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
              <ArticleCard></ArticleCard>
            </SwiperSlide>
            <SwiperSlide>
              <ArticleCard></ArticleCard>
            </SwiperSlide>
            <SwiperSlide>
              <ArticleCard></ArticleCard>
            </SwiperSlide>
            <SwiperSlide>
              <ArticleCard></ArticleCard>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Container>
  );
}
