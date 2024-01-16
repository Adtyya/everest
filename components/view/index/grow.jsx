import Container from "@/components/box/container";
import { HeadingTwo } from "@/components/text/heading";
import Image from "next/image";

export default function GrowPotential() {
  return (
    <Container className="my-5">
      <div className="flex flex-col items-center justify-center space-y-10">
        <div>
          <HeadingTwo className="text-typ-gray text-center">
            Kembangkan potensi maksimal dari restoran anda dengan layanan kami
            yang luar biasa.
          </HeadingTwo>
        </div>
        <div className="flex space-x-5 items-center justify-center">
          <div className="w-44 lg:w-64 h-52 lg:h-64 relative">
            <Image
              src="/images/global/cs-24.png"
              alt="cs"
              fill
              objectFit="contain"
            />
          </div>
          <div className="hidden lg:block w-5"></div>
          <div className="w-44 lg:w-64 h-52 lg:h-64 relative">
            <Image
              src="/images/global/product-training.png"
              alt="product-traingin"
              fill
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
