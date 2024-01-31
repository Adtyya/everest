import Container from "@/components/box/container";
import { HeadingTwo } from "@/components/text/heading";
import Paragraph from "@/components/text/paragpraph";
import ProductTraining from "@/public/images/home/product-training.png";
import CustomerService from "@/public/images/home/customer-service.png";
import Image from "next/image";

export default function GrowPotential() {
  return (
    <div className="w-full bg-box-low-white py-8">
      <Container className="my-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          <div className="col-auto lg:col-span-7">
            <HeadingTwo className="text-typ-gray">
              Maksimalkan potensi restoran Anda dengan layanan luar biasa kami!
            </HeadingTwo>
            <br />
            <Paragraph color="text-typ-gray">
              Optimalkan restoran Anda dengan layanan luar biasa kami, termasuk
              customer service 24 jam dan product training untuk tim Anda.
              Pastikan setiap tamu merasakan pengalaman kuliner terbaik dan
              tingkatkan potensi bisnis Anda sekarang!
            </Paragraph>
          </div>
          <div className="col-auto lg:col-span-5 h-60 flex">
            <div className="w-2/4 h-full relative">
              <Image
                src={ProductTraining}
                alt="product-training"
                fill
                className="object-contain"
                quality={100}
                fetchPriority="low"
              />
            </div>
            <div className="w-2/4 h-full relative">
              <Image
                src={CustomerService}
                alt="customer-service"
                fill
                className="object-contain"
                quality={100}
                fetchPriority="low"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
