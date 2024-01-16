import Container from "@/components/box/container";
import PricingCard from "@/components/box/pricingCard";
import { HeadingTwo } from "@/components/text/heading";

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
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-7">
        <PricingCard>Halo</PricingCard>
        <PricingCard>Halo</PricingCard>
        <PricingCard>Halo</PricingCard>
      </div>
    </Container>
  );
}
