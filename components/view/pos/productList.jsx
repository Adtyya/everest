import Container from "@/components/box/container";
import Paragraph from "@/components/text/paragpraph";
import CardProduct from "@/components/box/reservation/cardProduct";
import { listProduct } from "./content/productList";

export default function ProductList() {
  return (
    <Container className="mt-7 lg:mt-16 space-y-10">
      {listProduct.map((item, index) => {
        return (
          <CardProduct
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            rtl={item.rtl}
            key={index}
            showContactUsBtn={true}
          />
        );
      })}
    </Container>
  );
}
