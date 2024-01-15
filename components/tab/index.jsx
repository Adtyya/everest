import { useState } from "react";
import Button from "../box/button";
import Paragraph from "../text/paragpraph";

export default function Tab({ categories, setActive }) {
  const [tab, setTab] = useState(categories[0]?.name || "");

  return (
    <div className="flex justify-between items-center p-2 overflow-auto space-x-5">
      {categories.map((item, index) => {
        return (
          <Button
            backgroundVariant={tab === item.name ? "secondary" : "transparent"}
            className="duration-200"
            key={index}
            onClick={() => {
              setTab(item.name);
              setActive(item.name);
            }}
          >
            <Paragraph
              color={tab === item.name ? "text-typ-gray" : "text-typ-primary"}
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
