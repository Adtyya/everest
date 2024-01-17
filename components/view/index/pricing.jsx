import Container from "@/components/box/container";
import PricingCard from "@/components/box/pricingCard";
import Image from "next/image";
import { HeadingThree, HeadingTwo } from "@/components/text/heading";
import Paragraph from "@/components/text/paragpraph";
import Button from "@/components/box/button";

const pricing = [
  {
    title: "Dasar",
    isRecomend: false,
    listFeatures: [
      {
        name: "Dasbor",
      },
      {
        name: "POS Kasir",
      },
      {
        name: "gerai tunggal",
      },
      {
        name: "laporan penjualan",
      },
      {
        name: "promosi penjualan",
      },
    ],
    paymentFrequency: "monthly",
    price: 130000,
  },
  {
    title: "lanjutan",
    isRecomend: true,
    listFeatures: [
      {
        name: "semua fitur dalam basic",
      },
      {
        name: "Buat kode QR untuk pesanan mandiri",
      },
      {
        name: "Pesan Mandiri (Mobile)",
      },
      {
        name: "Reservasi",
      },
    ],
    paymentFrequency: "monthly",
    price: 190000,
  },
  {
    title: "profesional",
    isRecomend: false,
    listFeatures: [
      {
        name: "semua fitur dalam lanjutan",
      },
      {
        name: "Laporan Keungan lebih lengkap",
      },
      {
        name: "Lebih dari 1 gerai (maks. 8)",
      },
    ],
    paymentFrequency: "monthly",
    price: 250000,
  },
];

export default function Pricing() {
  return (
    <Container>
      <div className="w-full text-center">
        <HeadingTwo className="text-typ-gray">
          Solusi langganan yang dibuat khusus untuk kebutuhan Anda
        </HeadingTwo>
      </div>
      <br />
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-7 mt-2">
        {pricing.map((item, index) => {
          return (
            <PricingCard key={index}>
              <div
                className={`bg-typ-heading px-3.5 py-0.5 rounded-full w-max ${
                  item.isRecomend ? "visible" : "invisible"
                }`}
              >
                <Paragraph color="text-white">Recomended</Paragraph>
              </div>
              <HeadingThree className="text-typ-gray text-center capitalize">
                {item.title}
              </HeadingThree>
              <div className="border border-box-low-white my-1.5 px-2.5 py-2 h-48 max-h-48 rounded bg-box-pricing relative">
                {item.listFeatures.map((i, idx) => {
                  return (
                    <div
                      key={idx}
                      className="flex space-x-2.5 mb-2.5 items-center"
                    >
                      <div className="w-5 h-5 relative">
                        <Image
                          src="/images/global/checklist.png"
                          alt="checklist"
                          objectFit="contain"
                          fetchPriority="low"
                          fill
                        />
                      </div>
                      <Paragraph color="text-typ-gray">{i.name}</Paragraph>
                    </div>
                  );
                })}
                <div className="mt-2.5"></div>
                <div className="absolute -bottom-3 w-full">
                  <div className="flex justify-center items-center">
                    <button className="bg-white outline rounded-full outline-1 outline-typ-primary">
                      <Paragraph
                        color="text-typ-gray"
                        className="!text-sm py-1 px-2.5"
                      >
                        Tampilkan lebih banyak
                      </Paragraph>
                    </button>
                  </div>
                </div>
              </div>
              <br />
              <div className="flex justify-center items-center mb-2">
                <div className="px-4 py-1.5 bg-box-gray rounded-xl">
                  <p className="capitalize text-typ-gray">
                    Pay {item.paymentFrequency}
                  </p>
                </div>
              </div>
              <h3 className="text-center text-2xl lg:text-3xl font-semibold text-typ-gray mt-3">
                Rp. {item.price}
              </h3>
              <h5 className="capitalize text-center text-base lg:text-lg text-typ-gray my-3.5">
                Outlets per month
              </h5>
              <div className="flex justify-center items-center">
                <Button backgroundVariant="primary">
                  <Paragraph color="text-white" className="font-medium">
                    Buy Now
                  </Paragraph>
                </Button>
              </div>
            </PricingCard>
          );
        })}
      </div>
    </Container>
  );
}
