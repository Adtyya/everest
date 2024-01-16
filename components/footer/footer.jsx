import Container from "../box/container";
import FooterCard from "../box/footerCard";
import ChefFooter from "@/public/images/global/footer-icon.png";
import Image from "next/image";
import Paragraph from "../text/paragpraph";

const company = [
  {
    name: "About",
  },
  {
    name: "Blog",
  },
  {
    name: "Career",
  },
  {
    name: "Comunity",
  },
  {
    name: "Media",
  },
];

const products = [
  {
    name: "Point of Sales",
  },
  {
    name: "online ordering",
  },
  {
    name: "reservation",
  },
];

const features = [
  {
    name: "dashboard",
  },
  {
    name: "floor plan",
  },
  {
    name: "marketing",
  },
  {
    name: "payment method",
  },
  {
    name: "menu management",
  },
  {
    name: "mobile order",
  },
  {
    name: "sales report",
  },
  {
    name: "sales statistic",
  },
  {
    name: "customer support",
  },
];

export default function Footer() {
  return (
    <footer>
      <Container className="pb-5 pt-20">
        <FooterCard>
          <div className="grid grid-cols-1 lg:grid-cols-2 relative">
            <div className="hidden lg:block absolute left-0 -top-2/4">
              <div className="relative w-96 h-96">
                <Image
                  src={ChefFooter}
                  alt="ilust-chef"
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
            <div></div>
            <div className="grid grid-cols-2 gap-y-5 lg:gap-0 lg:grid-cols-3">
              <div>
                <Paragraph
                  color="text-typ-gray"
                  className="font-semibold mb-2.5"
                >
                  Company
                </Paragraph>
                {company.map((item, index) => {
                  return (
                    <Paragraph
                      key={index}
                      color="text-typ-gray"
                      className="leading-relaxed"
                    >
                      {item.name}
                    </Paragraph>
                  );
                })}
              </div>
              <div>
                <Paragraph
                  color="text-typ-gray"
                  className="font-semibold mb-2.5"
                >
                  Products
                </Paragraph>
                {products.map((item, index) => {
                  return (
                    <Paragraph
                      key={index}
                      color="text-typ-gray"
                      className="leading-relaxed"
                    >
                      {item.name}
                    </Paragraph>
                  );
                })}
              </div>
              <div>
                <Paragraph
                  color="text-typ-gray"
                  className="font-semibold mb-2.5"
                >
                  Features
                </Paragraph>
                {features.map((item, index) => {
                  return (
                    <Paragraph
                      key={index}
                      color="text-typ-gray"
                      className="leading-relaxed"
                    >
                      {item.name}
                    </Paragraph>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-3.5 flex justify-between items-center">
            <div>Select</div>
            <div>Social</div>
          </div>
          <br />
          <div className="h-[1px] w-full bg-box-line my-2.5"></div>
          <div className="w-full text-center">
            <Paragraph color="text-typ-gray" className="font-medium">
              &copy; 2023 Evetech Solution. all right reserve
            </Paragraph>
          </div>
        </FooterCard>
      </Container>
    </footer>
  );
}
