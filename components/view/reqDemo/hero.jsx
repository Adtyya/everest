/* eslint-disable @next/next/no-img-element */
import Container from "@/components/box/container";
import GradientCard from "@/components/box/gradientCard";
import Image from "next/image";
import Chef from "@/public/images/demo/chef.png";
import Paragraph from "@/components/text/paragpraph";
import Facebook from "@/public/images/social/facebook.png";
import Instagram from "@/public/images/social/instagram.png";
import Linkedin from "@/public/images/social/linkedin.png";
import Link from "next/link";
import { HeadingOne } from "@/components/text/heading";

export default function Hero() {
  return (
    <Container>
      <br />
      <GradientCard className="overflow-hidden">
        <div className="grid grid-cols-12 relative h-max lg:h-80">
          <div className="hidden lg:block absolute left-8 -bottom-5 overflow-hidden h-full">
            <div className="h-80 w-80 relative scale-125">
              <Image
                src={Chef}
                alt="chef-illust"
                fill
                objectFit="contain"
                quality={100}
                fetchPriority="high"
                // className="animate-up-down"
              />
            </div>
          </div>
          {/* <div className="hidden lg:block absolute right-3 -top-5 h-full">
            <div className="h-52 w-52 relative scale-150">
              <Image
                src={Eve}
                alt="eve-illust"
                fill
                objectFit="contain"
                className="opacity-50"
              />
            </div>
          </div> */}
          <div className="hidden lg:block lg:col-span-4"></div>
          <div className="col-span-full lg:col-span-8 w-full h-full flex flex-col justify-center items-start space-y-4">
            <HeadingOne className="text-typ-heading font-bold">
              Hubungi Kami
            </HeadingOne>
            <Paragraph color="text-typ-gray" className="font-medium">
              Dapatkan jawaban dari setiap pertanyaan mu mengenai Everest POS
            </Paragraph>
            <Paragraph
              color="text-typ-primary"
              className="font-medium !text-lg"
            >
              Layanan Customer Support
            </Paragraph>
            <div className="flex space-y-1.5 md:space-y-0 md:space-x-5 bg-box-low-white flex-col md:flex-row space-x-0 rounded-xl py-1.5 px-5">
              <div className="flex space-x-1.5 items-center">
                <img
                  alt="phone"
                  src="/images/global/phonegreen.png"
                  height={20}
                  width={20}
                  className="object-contain"
                />
                <Paragraph color="text-typ-gray" className="font-semibold">
                  08xxxxxxxxx
                </Paragraph>
              </div>
              <a
                href="mailto:everestposindonesia@gmail.com"
                className="flex space-x-1.5"
                target="_blank"
              >
                <img
                  alt="phone"
                  src="/images/global/mailcolorful.png"
                  className="object-contain"
                  width={20}
                  height={20}
                />
                <Paragraph
                  color="text-typ-gray"
                  className="font-semibold !normal-case"
                >
                  everestposindonesia@gmail.com
                </Paragraph>
              </a>
            </div>
            <div className="flex justify-between items-center px-2">
              <div className="flex space-x-5">
                <Link href="#">
                  <Image src={Linkedin} alt="linkedin" height={28} width={28} />
                </Link>
                <Link href="#">
                  <Image src={Facebook} alt="Facebook" height={28} width={28} />
                </Link>
                <Link href="#">
                  <Image
                    src={Instagram}
                    alt="linkedin"
                    height={28}
                    width={28}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </GradientCard>
    </Container>
  );
}
