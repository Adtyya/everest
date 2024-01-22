import Container from "@/components/box/container";
import GradientCard from "@/components/box/gradientCard";
import Image from "next/image";
import SwapMachine from "@/public/images/pos/swip-machine.png";
import Paragraph from "@/components/text/paragpraph";
import Button from "@/components/box/button";
import { HeadingOne } from "@/components/text/heading";
import ButtonDemo from "@/components/box/buttonDemo";
import ButtonTryApp from "@/components/box/buttonTry";

export default function Hero() {
  return (
    <Container>
      <br />
      <GradientCard>
        <div className="grid grid-cols-12 relative h-max lg:h-max lg:py-8 lg:px-7">
          <div className="hidden lg:block absolute right-5 h-full">
            <div className="h-80 w-80 relative scale-125">
              <Image
                src={SwapMachine}
                alt="cashier-illust"
                fill
                objectFit="contain"
                className="animate-up-down"
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

          <div className="col-span-full lg:col-span-9 w-full h-full flex flex-col justify-center items-start space-y-4">
            <HeadingOne className="text-typ-heading font-bold">
              Solusi manajemen restoran yang lengkap dalam satu platform kasir
            </HeadingOne>
            <Paragraph color="text-typ-gray" className="font-medium">
              Tingkatkan efisiensi dan profitabilitas restoran anda dengan
              Everest POS, platform yang kuat dan ramah pengguna yang dirancang
              khusus untuk anda.
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
