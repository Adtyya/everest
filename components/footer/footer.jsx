import Container from "../box/container";
import FooterCard from "../box/footerCard";
import ChefFooter from "@/public/images/global/footer-icon.png";
import Image from "next/image";
import Paragraph from "../text/paragpraph";
import Facebook from "@/public/images/social/facebook.png";
import Instagram from "@/public/images/social/instagram.png";
import Linkedin from "@/public/images/social/linkedin.png";
import Link from "next/link";

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
  // {
  //   name: "sales statistic",
  // },
  {
    name: "customer support",
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="fixed bottom-5 lg:bottom-10 right-5 lg:right-10 z-10">
        <button className="w-20 h-20 relative">
          <Image
            src="/images/global/cs.png"
            alt="cs"
            fill
            objectFit="contain"
          />
        </button>
      </div>
      <Container className="pb-5 pt-20">
        <FooterCard>
          <div className="grid grid-cols-1 lg:grid-cols-2 relative mt-3.5">
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
          <div className="mt-8 flex justify-between items-center">
            <div>
              <select className="bg-transparent border-2 border-box-line text-typ-gray focus:outline-box-line rounded-lg">
                <option>English</option>
                <option>Indonesia</option>
              </select>
            </div>
            <div className="flex space-x-5">
              <Link href="#">
                <Image src={Linkedin} alt="linkedin" height={28} width={28} />
              </Link>
              <Link href="#">
                <Image src={Facebook} alt="Facebook" height={28} width={28} />
              </Link>
              <Link href="#">
                <Image src={Instagram} alt="linkedin" height={28} width={28} />
              </Link>
            </div>
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
