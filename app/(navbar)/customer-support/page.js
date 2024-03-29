import AnyQuestion from "@/components/view/customerSupport/anyQuestion";
import ExperiencedTeam from "@/components/view/customerSupport/experiencedTeam";
import Hero from "@/components/view/customerSupport/hero";

export default function CustomerSupportPage() {
  return (
    <main>
      <Hero></Hero>
      <br></br>
      <ExperiencedTeam></ExperiencedTeam>
      <br></br>
      <AnyQuestion></AnyQuestion>
      <br></br>
    </main>
  );
}
