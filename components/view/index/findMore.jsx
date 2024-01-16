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
    <Container className="border border-box-low-white h-full rounded bg-box-pricing relative">
      <div className="m-3 flex">
        <div className="w-1/4 flex items-center flex-col space-y-7 mr-0 lg:mr-3">
          <HeadingThree className="text-typ-gray font-medium">
            Temukan Lebih Banyak Atikel
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
        <div className="w-3/4 h-full">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
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
