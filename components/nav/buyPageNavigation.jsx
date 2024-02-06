/* eslint-disable @next/next/no-img-element */
"use client";

import Container from "../box/container";
import Logo from "@/public/images/global/app-logo.png";
import Image from "next/image";
import Paragraph from "../text/paragpraph";
import { useRouter } from "next/navigation";
import { HeadingThree } from "../text/heading";

export default function BuyPageNavigation() {
  const router = useRouter();

  return (
    <div className="w-full h-full bg-white drop-shadow-md">
      <div className="flex items-center justify-center">
        <div className="w-48 h-12 relative">
          <Image
            alt="logo"
            src={Logo}
            fill
            className="object-contain"
            quality={100}
          />
        </div>
      </div>
      <Container className="py-2">
        <div className="flex w-full justify-between items-center">
          <HeadingThree className="text-typ-gray">Halo</HeadingThree>
          <button
            onClick={() => router.back()}
            className="hover:rotate-180 duration-300"
          >
            <img
              src="/images/global/close.png"
              alt="close-btn"
              width={20}
              height={20}
            />
          </button>
        </div>
      </Container>
    </div>
  );
}
