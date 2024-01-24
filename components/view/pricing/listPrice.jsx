"use client";

import Button from "@/components/box/button";
import Container from "@/components/box/container";
import PricingCard from "@/components/box/pricingCard";
import TabWithBackground from "@/components/tab/tabWithBackground";
import { HeadingThree } from "@/components/text/heading";
import Paragraph from "@/components/text/paragpraph";
import { useState } from "react";
import Image from "next/image";
import { pricingList } from "./content/pricing";

const categories = [
  {
    name: "software only",
  },
  {
    name: "include hardware",
  },
];

export default function ListPrice() {
  const [active, setActive] = useState(categories[0].name);

  return (
    <div id="price-list">
      <Container className="mt-8 mb-5">
        <div className="flex items-center justify-center">
          <div className="w-max">
            <TabWithBackground categories={categories} setActive={setActive} />
          </div>
        </div>
        <br />
        <div
          id="pricing-list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {pricingList.map((item, index) => {
            return (
              <div key={index}>
                <PricingCard className="space-y-4 h-max relative">
                  <div
                    className={`bg-typ-heading px-3.5 py-0.5 rounded-full w-max ${
                      item.isRecomended ? "visible" : "invisible"
                    }`}
                  >
                    <Paragraph color="text-white">Recomended</Paragraph>
                  </div>
                  <HeadingThree className="text-typ-gray text-center">
                    {item.name}
                  </HeadingThree>
                  <h3 className="text-center text-2xl lg:text-3xl font-semibold text-typ-gray">
                    Rp. {item.price}
                  </h3>
                  <h5 className="capitalize text-center text-base lg:text-lg text-typ-gray font-medium">
                    Outlets per month
                  </h5>
                  <Paragraph color="text-typ-gray" className="text-center">
                    {item.description}
                  </Paragraph>
                  <div className="w-full items-center flex justify-center">
                    <Button backgroundVariant="primary">
                      <Paragraph color="text-white" className="font-medium">
                        Schedule Demo
                      </Paragraph>
                    </Button>
                  </div>
                </PricingCard>
                <br />
                <div className="mt-4 w-full bg-box-low-white py-1.5 rounded-2xl text-center mb-3">
                  <Paragraph color="text-typ-gray" className="font-semibold">
                    Coba Gratis 14 hari
                  </Paragraph>
                </div>
                {item.features.map((feature, id) => {
                  return (
                    <div
                      key={id}
                      className="flex space-x-2.5 mb-2.5 items-center justify-start w-full px-5"
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
                      <Paragraph color="text-typ-gray">
                        {feature.name}
                      </Paragraph>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
