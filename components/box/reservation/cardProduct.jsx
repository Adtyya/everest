import Image from "next/image";
import { HeadingThree } from "@/components/text/heading";
import Paragraph from "@/components/text/paragpraph";
import Button from "../button";

export default function CardProduct({ image, title, subtitle, rtl }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
      <div
        className={`${
          rtl ? "md:order-last" : "md:order-first"
        } order-first flex items-center justify-center relative h-80 group`}
      >
        <Image
          src={image}
          alt="example"
          fill
          objectFit="contain"
          quality={100}
          fetchPriority="low"
          className="z-10"
        />
        <div className="absolute top-0 left-10 group-hover:h-10 group-hover:w-10 duration-300 h-14 w-14 rounded-full bg-dot-gradient"></div>
        <div className="absolute bottom-0 right-10 h-10 w-10 group-hover:w-14 group-hover:h-14 duration-300 rounded-full bg-dot-gradient z-10"></div>
        <div className="w-72 h-72 bg-gradient-card rounded-full group-hover:w-80 group-hover:h-80 group-hover:skew-x-6 duration-300"></div>
      </div>
      <div className="space-y-5">
        <HeadingThree className="text-typ-gray">{title}</HeadingThree>
        <Paragraph color="text-typ-gray">{subtitle}</Paragraph>
        <Button backgroundVariant="secondary">
          <Paragraph color="text-typ-gray" className="font-semibold">
            Jadwalkan demo
          </Paragraph>
        </Button>
      </div>
    </div>
  );
}
