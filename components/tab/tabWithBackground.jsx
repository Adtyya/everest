import { useState } from "react";
import Button from "../box/button";
import Paragraph from "../text/paragpraph";

export default function TabWithBackground({ categories, setActive }) {
  const [tab, setTab] = useState(categories[0]?.name || "");

  return (
    <div className="flex justify-between items-center p-2 overflow-auto space-x-5 bg-box-low-white rounded-2xl">
      {categories.map((item, index) => {
        return (
          <Button
            backgroundVariant={tab === item.name ? "primary" : "transparent"}
            className="duration-100"
            key={index}
            onClick={() => {
              setTab(item.name);
              setActive(item.name);
            }}
          >
            <Paragraph
              color={tab === item.name ? "text-white" : "text-typ-gray"}
              className="font-medium whitespace-nowrap"
            >
              {item.name}
            </Paragraph>
          </Button>
        );
      })}
    </div>
  );
}
