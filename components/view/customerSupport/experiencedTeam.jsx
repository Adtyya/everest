import Container from "@/components/box/container";
import { HeadingThree, HeadingTwo } from "@/components/text/heading";
import PricingCard from "@/components/box/pricingCard";
import Installation from "@/public/images/customerSupport/installation.png";
import Support from "@/public/images/customerSupport/support.png";
import Training from "@/public/images/customerSupport/training.png";
import Image from "next/image";
import Paragraph from "@/components/text/paragpraph";

const content = [
  {
    image: Installation,
    title: "Instalasi bagi Pelanggan Baru",
    subtitle:
      "Layanan tanpa biaya untuk setiap pelanggan yang berlangganan lebih dari 6 bulan",
  },
  {
    image: Support,
    title:
      "Layanan tanpa biaya untuk setiap pelanggan yang berlangganan lebih dari 6 bulan",
    subtitle:
      "Layanan tanpa biaya untuk setiap pelanggan yang berlangganan lebih dari 6 bulan",
  },
  {
    image: Training,
    title: "Training Lanjutan",
    subtitle:
      "Sesi pelatihan tambahan secara langsung atau via online untuk lebih mendalami dan memahami fitur",
  },
];

export default function ExperiencedTeam() {
  return (
    <Container className="py-12">
      <div className="flex justify-center items-center">
        <HeadingTwo className="w-3/4 text-center text-typ-gray">
          Tim Berpengalaman Tersedia untuk Mendampingi Pelanggan Baru
        </HeadingTwo>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12 mb-4 h-auto">
        {content.map((item, idx) => {
          return (
            <PricingCard
              key={idx}
              className="!pt-0 !px-0 overflow-hidden h-[450px] lg:h-[480px] bg-red-500"
            >
              <div className="w-full h-2/4 relative">
                <Image src={item.image} alt="" fill className="object-cover" />
                <div className="absolute h-10 w-full bottom-0 bg-cover-gradient z-10"></div>
              </div>
              <div className="py-5 px-3.5">
                <HeadingThree className="text-typ-gray">
                  {item.title}
                </HeadingThree>
                <Paragraph
                  color="text-typ-gray"
                  className="line-clamp-5 mt-3.5 font-medium"
                >
                  {item.subtitle}
                </Paragraph>
              </div>
            </PricingCard>
          );
        })}
      </div>
    </Container>
  );
}
