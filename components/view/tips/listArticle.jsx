"use client";
/* eslint-disable @next/next/no-img-element */
import { useCallback, useRef } from "react";
import Container from "@/components/box/container";
import {
  ArrowNavigationLeft,
  ArrowNavigationRight,
} from "@/components/nav/arrowNavigation";
import { HeadingTwo } from "@/components/text/heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ArticleCard from "@/components/box/articleCard";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ListArticles({ lists }) {
  const slider = useRef();
  const search = useSearchParams();
  const path = usePathname();
  const router = useRouter();

  const [query, setQuery] = useState("");

  const createQuery = useCallback(
    (name, value) => {
      const params = new URLSearchParams(search.toString());
      params.set(name, value);

      return params.toString();
    },
    [search]
  );

  const onSubmitSearch = (event) => {
    event.preventDefault();
    router.push(path + "?" + createQuery("search", query));
  };

  return (
    <Container className="border border-box-low-white h-full rounded-2xl bg-box-pricing py-7 lg:px-5  relative">
      <div className="flex mx-3 items-center">
        <div className="mr-5 hidden lg:block">
          <HeadingTwo className="text-typ-gray font-medium whitespace-nowrap">
            Cari Tips
          </HeadingTwo>
        </div>
        <form
          onSubmit={onSubmitSearch}
          className="w-full outline outline-1 outline-box-input rounded-xl bg-white flex"
        >
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
            name="search"
            className="w-full pl-1.5 pr-3 py-1.5 focus:outline-none text-typ-gray"
            onChange={(event) => setQuery(event.target.value)}
          />
        </form>
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
            {lists?.data?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <ArticleCard
                    height="h-96"
                    name={item.attributes.title}
                    image={item.attributes.cover.data.attributes?.url}
                  ></ArticleCard>
                </SwiperSlide>
              );
            })}
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
