"use client";

import React, { useState } from "react";
import Logo from "@/public/images/global/app-logo.png";
import Image from "next/image";
import Button from "../box/button";
import Paragraph from "../text/paragpraph";
import { HiChevronUp } from "react-icons/hi";

export default function NavbarTopBarPreview() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [toggleProduct, setProductToggle] = useState(false);
  const [toggleResources, setResourcesToggle] = useState(false);

  return (
    <>
      {/*<!-- Header --> */}
      <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            <div className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1">
              <div className="w-32 h-10 relative">
                <Image src={Logo} alt="logo" fill objectFit="contain" />
              </div>
            </div>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center items-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li
                className="flex flex-col items-start lg:flex-row lg:items-center mx-2 w-24 relative group lg:overflow-hidden lg:hover:overflow-visible duration-300"
                onClick={() => setProductToggle(!toggleProduct)}
              >
                <Paragraph className="inline-block">Products</Paragraph>
                <span
                  className={`text-typ-primary font-semibold pl-0.5 lg:rotate-180 lg:group-hover:rotate-0 duration-300 absolute right-0 lg:static ${
                    toggleProduct ? "rotate-0" : "rotate-180"
                  }`}
                >
                  <HiChevronUp />
                </span>
                <div
                  className={`lg:absolute lg:block lg:opacity-0 -bottom-[120%] lg:group-hover:opacity-100 w-max mb-2 lg:mb-0 rounded lg:bg-box-low-white px-3 py-2 duration-300 space-y-2 lg:shadow-navbar-dropdown ${
                    toggleProduct ? "block" : "hidden"
                  }`}
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
                <Paragraph>Pricing</Paragraph>
              </li>
              <li
                className="flex flex-col items-start lg:flex-row lg:items-center mx-2 w-24 relative group lg:overflow-hidden lg:hover:overflow-visible duration-300"
                onClick={() => setResourcesToggle(!toggleResources)}
              >
                <Paragraph className="inline-block">Resources</Paragraph>
                <span
                  className={`text-typ-primary font-semibold pl-0.5 lg:rotate-180 lg:group-hover:rotate-0 duration-300 absolute right-0 lg:static ${
                    toggleResources ? "rotate-0" : "rotate-180"
                  }`}
                >
                  <HiChevronUp />
                </span>
                <div
                  className={`lg:absolute lg:block lg:opacity-0 -bottom-2/4 lg:group-hover:opacity-100 w-max mb-2 lg:mb-0 lg:bg-box-low-white px-3 rounded py-2 duration-300 space-y-2 lg:shadow-navbar-dropdown ${
                    toggleResources ? "block" : "hidden"
                  }`}
                >
                  <Paragraph color="text-typ-gray">Blog</Paragraph>
                  <Paragraph color="text-typ-gray">Customer Support</Paragraph>
                </div>
              </li>
            </ul>
            {/*      <!-- Actions --> */}
            <div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
              <Button backgroundVariant="primary">
                <Paragraph
                  color="text-white"
                  className="inline-block whitespace-nowrap font-medium"
                >
                  Coba Gratis
                </Paragraph>
              </Button>
            </div>
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with Topbar--> */}
    </>
  );
}
