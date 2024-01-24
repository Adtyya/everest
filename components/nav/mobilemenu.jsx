import React from "react";
import Paragraph from "../text/paragpraph";
import Link from "next/link";

export default function MobileMenu({ menu, toggle, setToggle }) {
  return (
    <ul
      role="menubar"
      aria-label="Select page"
      className={`absolute top-0 left-0 z-[-1] h-max w-full justify-center items-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-4 pb-5 pt-24 font-medium space-y-1.5 transition-[opacity,visibility] duration-300 ${
        toggle ? "visible opacity-100 backdrop-blur-sm" : "invisible opacity-0"
      }`}
    >
      {menu.map((item, index) => {
        return (
          <li
            key={index}
            className="flex flex-col items-start lg:flex-row lg:items-center mx-2 w-24 relative group duration-300"
          >
            <Link href={item.path} onClick={() => setToggle(false)}>
              <Paragraph className="inline-block">{item.name}</Paragraph>
            </Link>
            {item.subpath.length > 0 ? (
              <div className="pl-2.5">
                {item.subpath.map((a, b) => {
                  return (
                    <Link
                      href={a.path}
                      key={b}
                      onClick={() => setToggle(false)}
                    >
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
