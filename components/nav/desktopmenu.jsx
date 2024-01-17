import React from "react";
import Paragraph from "../text/paragpraph";
import { HiChevronUp } from "react-icons/hi";
import Link from "next/link";

export default function DesktopMenu({ toggle }) {
  return (
    <ul
      role="menubar"
      aria-label="Select page"
      className={`hidden absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center items-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
        toggle ? "visible opacity-100 backdrop-blur-sm" : "invisible opacity-0"
      }`}
    >
      <li className="flex flex-col items-start lg:flex-row lg:items-center mx-2 w-24 relative group duration-300">
        <Paragraph className="inline-block">Products</Paragraph>
        <span
          className={`text-typ-primary font-semibold pl-0.5 lg:rotate-180 lg:group-hover:rotate-0 duration-300 absolute right-0 lg:static`}
        >
          <HiChevronUp />
        </span>
        <div
          className={`lg:absolute lg:block lg:invisible lg:opacity-0 lg:group-hover:opacity-100 -bottom-[120%] duration-300 lg:group-hover:visible w-max mb-2 lg:mb-0 rounded lg:bg-box-low-white px-3 py-2 space-y-2 lg:shadow-navbar-dropdown`}
        >
          <Paragraph color="text-typ-gray">POS</Paragraph>
          <Paragraph color="text-typ-gray">Reservation</Paragraph>
          <Paragraph color="text-typ-gray">Mobile Order</Paragraph>
          <Paragraph color="text-typ-gray">Delivery</Paragraph>
        </div>
      </li>
      <li className="flex items-center mx-2 w-24">
        <Paragraph>Features</Paragraph>
      </li>
      <li className="flex items-center mx-2 w-24">
        <Link href="/pricing">
          <Paragraph>Pricing</Paragraph>
        </Link>
      </li>
      <li className="flex flex-col items-start lg:flex-row lg:items-center mx-2 w-24 relative group  duration-300">
        <Paragraph className="inline-block">Resources</Paragraph>
        <span
          className={`text-typ-primary font-semibold pl-0.5 lg:rotate-180 lg:group-hover:rotate-0 duration-300 absolute right-0 lg:static`}
        >
          <HiChevronUp />
        </span>
        <div
          className={`lg:absolute lg:block lg:invisible lg:opacity-0 lg:group-hover:opacity-100 duration-300 -bottom-2/4 lg:group-hover:visible w-max mb-2 lg:mb-0 lg:bg-box-low-white px-3 rounded py-2 space-y-2 lg:shadow-navbar-dropdown`}
        >
          <Paragraph color="text-typ-gray">Blog</Paragraph>
          <Paragraph color="text-typ-gray">Customer Support</Paragraph>
        </div>
      </li>
    </ul>
  );
}
