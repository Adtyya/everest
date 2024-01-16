import Eminence from "@/components/view/index/eminence";
import GrowPotential from "@/components/view/index/grow";
import Hero from "@/components/view/index/hero";
import Pricing from "@/components/view/index/pricing";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <br></br>
      <Eminence></Eminence>
      <br></br>
      <Pricing></Pricing>
      <br></br>
      <GrowPotential></GrowPotential>
      <br></br>
    </main>
  );
}
