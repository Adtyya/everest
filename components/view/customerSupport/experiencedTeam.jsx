import Container from "@/components/box/container";
import { HeadingTwo } from "@/components/text/heading";
import PricingCard from "@/components/box/pricingCard";

export default function ExperiencedTeam() {
  return (
    <Container className="py-12">
      <div className="flex justify-center items-center">
        <HeadingTwo className="w-3/4 text-center text-typ-gray">
          Tim Berpengalaman Tersedia untuk Mendampingi Pelanggan Baru
        </HeadingTwo>
      </div>
    </Container>
  );
}
