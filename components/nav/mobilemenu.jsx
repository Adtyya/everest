import React from "react";
import Paragraph from "../text/paragpraph";
import Link from "next/link";

export default function MobileMenu({ toggle }) {
  return (
    <ul
      role="menubar"
      aria-label="Select page"
      className={`absolute top-0 left-0 z-[-1] h-max w-full justify-center items-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-4 pb-5 pt-24 font-medium space-y-1.5 transition-[opacity,visibility] duration-300 ${
        toggle ? "visible opacity-100 backdrop-blur-sm" : "invisible opacity-0"
      }`}
    >
      <li className="flex flex-col items-start lg:flex-row lg:items-center mx-2 w-24 relative group duration-300">
        <Paragraph className="inline-block">Products</Paragraph>
        <div className="pl-2.5">
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

        <div className="pl-2.5">
          <Paragraph color="text-typ-gray">Blog</Paragraph>
          <Paragraph color="text-typ-gray">Customer Support</Paragraph>
        </div>
      </li>
    </ul>
  );
}
