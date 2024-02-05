import Container from "@/components/box/container";
import GradientCard from "@/components/box/gradientCard";
import Image from "next/image";
import BlogHeroImage from "@/public/images/tips/bg-tips.png";
import Paragraph from "@/components/text/paragpraph";
import { HeadingOne } from "@/components/text/heading";
import ButtonDemo from "@/components/box/buttonDemo";
import ButtonTryApp from "@/components/box/buttonTry";
import Eve from "@/public/images/home/eve.png";

export default function Hero() {
  return (
    <Container>
      <br />
      <GradientCard className="overflow-hidden">
        <div className="grid grid-cols-12 relative h-max lg:h-max lg:py-8 lg:px-7">
          <div className="hidden lg:block absolute right-10 h-full py-1.5">
            <div className="w-80 relative rounded-2xl h-full">
              <Image
                src={BlogHeroImage}
                alt="cashier-illust"
                fill
                className="object-cover scale-150 z-10"
                quality={100}
                fetchPriority="high"
              />
            </div>
          </div>
          <div className="hidden lg:block absolute right-0 w-2/5 top-0 h-full">
            <div className="h-72 w-72 relative scale-150">
              <Image
                src={Eve}
                alt="eve-illust"
                fill
                objectFit="contain"
                className="opacity-50"
              />
            </div>
          </div>

          <div className="col-span-full lg:col-span-9 w-full h-full flex flex-col justify-center items-start space-y-4">
            <HeadingOne className="text-typ-heading font-bold !leading-tight">
              Empowering Merchants to <br /> Sell and Grow
            </HeadingOne>
            <Paragraph color="text-typ-gray" className="font-medium">
              Dapatkan berbagai E-book, artikel, dan insight menarik tentang{" "}
              <br /> bisnis, usaha, keuangan, dan aplikasi kasir Everest
            </Paragraph>
            <div className="flex space-x-3 lg:space-x-8">
              <ButtonDemo></ButtonDemo>
              <ButtonTryApp></ButtonTryApp>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-3"></div>
        </div>
      </GradientCard>
    </Container>
  );
}
