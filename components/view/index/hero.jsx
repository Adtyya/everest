import Container from "@/components/box/container";
import GradientCard from "@/components/box/gradientCard";
import Image from "next/image";
import Cashier from "@/public/images/home/cashier.png";
import Eve from "@/public/images/home/eve.png";
import Paragraph from "@/components/text/paragpraph";
import Button from "@/components/box/button";
import { HeadingOne } from "@/components/text/heading";

const sample = [
  {
    path: "/images/home/trusted/1.png",
    alt: "1",
  },
  {
    path: "/images/home/trusted/2.png",
    alt: "2",
  },
  {
    path: "/images/home/trusted/3.png",
    alt: "3",
  },
  {
    path: "/images/home/trusted/4.png",
    alt: "4",
  },
  {
    path: "/images/home/trusted/5.png",
    alt: "5",
  },
  {
    path: "/images/home/trusted/6.png",
    alt: "6",
  },
  {
    path: "/images/home/trusted/7.png",
    alt: "7",
  },
  {
    path: "/images/home/trusted/5.png",
    alt: "5",
  },
  {
    path: "/images/home/trusted/6.png",
    alt: "6",
  },
  {
    path: "/images/home/trusted/7.png",
    alt: "7",
  },
];

export default function Hero() {
  return (
    <Container>
      <br />
      <GradientCard>
        <div className="grid grid-cols-12 relative h-max lg:h-80">
          <div className="hidden lg:block absolute -left-20 h-full">
            <div className="h-80 w-80 relative scale-125">
              <Image
                src={Cashier}
                alt="cashier-illust"
                fill
                objectFit="contain"
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
          <div className="hidden lg:block lg:col-span-3"></div>
          <div className="col-span-full lg:col-span-9 w-full h-full flex flex-col justify-center items-start space-y-4">
            <HeadingOne className="text-typ-heading">
              Everest <br /> The all-in-one POS
            </HeadingOne>
            <Paragraph color="text-typ-gray" className="font-medium">
              Tinggalkan kerumitan perhitungan manual dan nikmati kemudahan
              serta efisiensi dengan Everestaurant. Segera bergabung dengan kami
              dan saksikan transformasi luar biasa dalam bisnis anda.
            </Paragraph>
            <div className="flex space-x-3 lg:space-x-8">
              <Button backgroundVariant="primary">
                <Paragraph color="text-white" className="!text-sm font-medium">
                  jadwalkan demo
                </Paragraph>
              </Button>
              <Button backgroundVariant="secondary">
                <Paragraph
                  color="text-typ-gray"
                  className="!text-sm font-medium"
                >
                  Coba Gratis selama 14 hari
                </Paragraph>
              </Button>
            </div>
          </div>
        </div>
      </GradientCard>
      <br />
      <GradientCard>
        <div className="w-full text-center">
          <Paragraph color="text-typ-gray" className="font-medium">
            Dipercaya oleh lebih dari 100+ restoran
          </Paragraph>
        </div>
        <br />
        <div className="flex flex-wrap justify-center lg:justify-between gap-3 lg:space-x-7">
          {sample.map((item, index) => {
            return (
              <div key={index} className="w-16 h-16 relative">
                <Image
                  alt={item.alt}
                  src={item.path}
                  fill
                  fetchPriority="low"
                />
              </div>
            );
          })}
        </div>
      </GradientCard>
    </Container>
  );
}
