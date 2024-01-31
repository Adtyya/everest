"use client";

import Container from "@/components/box/container";
import Tab from "@/components/tab";
import { HeadingTwo } from "@/components/text/heading";
import Paragraph from "@/components/text/paragpraph";
import { useState } from "react";
import Image from "next/image";
import GradientCard from "@/components/box/gradientCard";
import Button from "@/components/box/button";

const categories = [
  {
    name: "menu management",
  },
  {
    name: "payment",
  },
  {
    name: "dashboard",
  },
  {
    name: "floor plan",
  },
  {
    name: "security",
  },
  {
    name: "marketing",
  },
  {
    name: "integrated data",
  },
];

export default function Eminence() {
  const [active, setActive] = useState("menu management");

  return (
    <Container className="pb-8">
      <br />
      <div className="w-full text-center">
        <HeadingTwo className="text-typ-gray">Keunggulan Everest</HeadingTwo>
      </div>
      <br />
      <Tab categories={categories} setActive={setActive} />
      <br />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="order-last lg:order-1 pl-10">
          <Paragraph color="text-typ-gray" className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            architecto debitis eos aspernatur sunt blanditiis dolor officia, rem
            sit asperiores. Aliquid ex voluptate officiis ad incidunt dolor vel
            doloribus inventore impedit! Iure totam magnam, nesciunt itaque.
            <br />
            expedita modi at ducimus, alias commodi fugit ea quasi, recusandae
            accusamus aut ratione delectus corporis velit libero? Dicta
            obcaecati cum consequuntur iure, repudiandae similique porro ipsum
            accusantium inventore sit! Reprehenderit similique laudantium
            obcaecati voluptatum officia quam laboriosam vero velit soluta
            aliquid, ex a repellat veniam saepe ipsam asperiores! Rem eveniet
            eos quam enim accusantium provident laboriosam magni, repellat
            deleniti tempore, atque nesciunt unde? Officiis!
          </Paragraph>
        </div>
        <div className="order-1 lg:order-last h-80 w-full relative">
          <Image
            alt="sample"
            src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            objectFit="cover"
            fetchPriority="low"
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="py-12"></div>
      <GradientCard className="relative py-10">
        <div className="hidden lg:block absolute -left-10 h-full bottom-[58%]">
          <div className="h-full">
            <Image
              alt="chef"
              src="/images/home/eminence/chef.png"
              width={230}
              height={230}
            />
          </div>
        </div>
        <div className="lg:pl-40 lg:pr-8 flex flex-col lg:flex-row items-center justify-between space-y-3.5 lg:space-y-0">
          <Paragraph
            color="text-typ-gray"
            className="font-medium text-center lg:text-start !text-lg"
          >
            Mengelola bisnis restoran di berbagai lokasi memang menantang.
            <br />
            Temukan bagaimana Everest dapat membantu anda mengatasi rintangan
            ini.
          </Paragraph>
          <Button backgroundVariant="secondary">
            <Paragraph
              color="text-typ-gray"
              className="font-medium whitespace-nowrap"
            >
              Get Started
            </Paragraph>
          </Button>
        </div>
      </GradientCard>
    </Container>
  );
}
