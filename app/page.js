import Eminence from "@/components/view/index/eminence";
import FindMoreArticles from "@/components/view/index/findMore";
import GrowPotential from "@/components/view/index/grow";
import Hero from "@/components/view/index/hero";
import Pricing from "@/components/view/index/pricing";
import ScheduleDemo from "@/components/view/index/scheduleDemo";

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
      <FindMoreArticles></FindMoreArticles>
      <br></br>
      <ScheduleDemo></ScheduleDemo>
      <br></br>
    </main>
  );
}
