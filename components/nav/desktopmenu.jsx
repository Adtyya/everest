import React from "react";
import Paragraph from "../text/paragpraph";
import { HiChevronUp } from "react-icons/hi";
import Link from "next/link";

export default function DesktopMenu({ menu, toggle }) {
  return (
    <ul
      role="menubar"
      aria-label="Select page"
      className={`hidden absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center items-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
        toggle ? "visible opacity-100 backdrop-blur-sm" : "invisible opacity-0"
      }`}
    >
      {menu.map((item, index) => {
        return (
          <li
            key={index}
            className="flex flex-col items-start lg:flex-row lg:items-center mx-2 w-24 relative group duration-300"
          >
            <div
              className={`flex items-center ${
                item.name === "Products"
                  ? "bg-box-low-white shadow-navbar-dropdown"
                  : null
              } px-2 py-1.5 rounded-lg`}
            >
              <Link href={item.path}>
                <Paragraph className="inline-block">{item.name}</Paragraph>
              </Link>
              {item.subpath.length > 0 ? (
                <span
                  className={`text-typ-primary font-semibold pl-0.5 lg:rotate-180 lg:group-hover:rotate-0 duration-300 absolute right-0 lg:static`}
                >
                  <HiChevronUp />
                </span>
              ) : null}
            </div>
            {item.subpath.length > 0 ? (
              <div
                className={`lg:absolute lg:block lg:invisible lg:opacity-0 lg:group-hover:opacity-100  ${
                  item.name === "Resources" ? "-bottom-2/4" : "-bottom-[110%]"
                } duration-300 lg:group-hover:visible w-max mb-2 lg:mb-0 rounded lg:bg-box-low-white px-3 py-2 space-y-2 h-max lg:shadow-navbar-dropdown`}
              >
                {item.subpath.map((a, b) => {
                  return (
                    <Link key={b} href={a.path}>
                      <Paragraph color="text-typ-gray">{a.name}</Paragraph>
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
