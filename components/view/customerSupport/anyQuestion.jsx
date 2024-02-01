/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Button from "@/components/box/button";
import Container from "@/components/box/container";
import GradientCard from "@/components/box/gradientCard";
import { HeadingThree, HeadingTwo } from "@/components/text/heading";
import Paragraph from "@/components/text/paragpraph";
import Link from "next/link";
import SmileCS from "@/public/images/customerSupport/cs-smile.png";

export default function AnyQuestion() {
  return (
    <Container className="mb-5 mt-28">
      <div className="w-full h-full rounded-2xl grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        <div className="col-span-4 hidden lg:block">
          <div className="w-full h-full relative">
            <Image src={SmileCS} alt="" fill className="object-cover" />
            <div className="absolute w-20 h-full bg-cs-gradient right-0"></div>
          </div>
        </div>
        <div className="bg-gradient-card col-span-8 px-5 py-8">
          <HeadingTwo className="text-typ-gray">
            Punya Pertanyaan? Kami Siap Membantu 24 Jam
          </HeadingTwo>
          <Paragraph color="text-typ-gray" className="font-medium mt-4">
            Dapatkan Informasi lebih lengkap tentang aplikasi Everest!
          </Paragraph>
          <div className="w-full h-max flex items-center justify-start space-x-8 mt-4">
            <Link href="/request-demo">
              <Button backgroundVariant="primary">
                <Paragraph color="text-white" className="font-medium">
                  Jadwalkan Demo
                </Paragraph>
              </Button>
            </Link>
            <Link href="/request-demo">
              <Button backgroundVariant="secondary">
                <Paragraph
                  color="text-typ-gray"
                  className="font-medium flex items-center space-x-3"
                >
                  <span>Hubungi Kami</span>
                </Paragraph>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* <GradientCard className="py-8">
        <div className="text-center">
          <HeadingTwo className="text-typ-gray">
            Mulailah mengembangkan bisnis Anda dengan <br /> mencoba Everest!
          </HeadingTwo>
          <Paragraph color="text-typ-gray" className="font-medium mt-2 mb-1.5">
            Ikuti demo perangkat lunak restoran hari ini!
          </Paragraph>
        </div>
        <div className="w-full h-max flex items-center justify-center space-x-8 mt-4">
          <Link href="/request-demo">
            <Button backgroundVariant="primary">
              <Paragraph color="text-white" className="font-medium">
                Jadwalkan Demo
              </Paragraph>
            </Button>
          </Link>
          <Link href="/request-demo">
            <Button backgroundVariant="secondary">
              <Paragraph
                color="text-typ-gray"
                className="font-medium flex items-center space-x-3"
              >
                <span>Jadwalkan Demo</span>
                <span>
                  <img
                    src="/images/global/arrow-tail.png"
                    alt="arrow-tail"
                    className="w-3/4"
                  />
                </span>
              </Paragraph>
            </Button>
          </Link>
        </div>
      </GradientCard> */}
    </Container>
  );
}
