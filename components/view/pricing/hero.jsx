/* eslint-disable @next/next/no-img-element */
import Container from "@/components/box/container";
import GradientCard from "@/components/box/gradientCard";
import Image from "next/image";
import HeroDevice from "@/public/images/pricing/hero-pricing.png";
import Paragraph from "@/components/text/paragpraph";
import Button from "@/components/box/button";
import { HeadingOne } from "@/components/text/heading";
import Link from "next/link";

export default function Hero() {
  return (
    <Container>
      <br />
      <GradientCard>
        <div className="grid grid-cols-1 relative h-full lg:h-max px-8 py-7 gap-5">
          <div className="space-y-4">
            <HeadingOne className="text-typ-heading font-bold hidden lg:block">
              Satu Aplikasi Dengan Fitur Lengkap Tanpa Biaya Tambahan
            </HeadingOne>
            <h1 className="text-typ-heading font-bold text-4xl block lg:hidden">
              Satu Aplikasi Dengan Fitur Lengkap Tanpa Biaya Tambahan
            </h1>
            <Paragraph color="text-typ-gray" className="font-medium">
              Temukan paket yang paling tepat untuk memajuan bisnismu dengan
              berbagai pilihan harga terbaik.
            </Paragraph>
            <Link href="/pricing#price-list">
              <Button backgroundVariant="secondary">
                <Paragraph
                  color="text-typ-gray"
                  className="font-medium flex items-center space-x-3"
                >
                  <span className="whitespace-nowrap">
                    Lihat Rincian Harga Paket
                  </span>
                  <span>
                    <img
                      src="/images/global/arrow-tail-gray.png"
                      alt="arrow-tail"
                      className="w-3/4"
                    />
                  </span>
                </Paragraph>
              </Button>
            </Link>
          </div>
          <div className="hidden lg:block w-full h-52 relative">
            <Image
              src={HeroDevice}
              alt="device-list"
              fill
              objectFit="cover"
              quality={100}
              fetchPriority="low"
            />
          </div>
        </div>
      </GradientCard>
    </Container>
  );
}
