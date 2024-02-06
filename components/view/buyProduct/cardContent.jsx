import Container from "@/components/box/container";
import { HeadingThree } from "@/components/text/heading";
import Paragraph from "@/components/text/paragpraph";
import Button from "@/components/box/button";

export default function CardContent() {
  return (
    <Container>
      <div className="w-full h-max rounded-2xl shadow-pricing px-3 py-4">
        <div className="w-full text-center">
          <HeadingThree className="text-typ-gray">Title</HeadingThree>
        </div>
        <div className="grid grid-cols-2 mt-4 gap-4 items-center">
          <div>
            <Paragraph color="text-typ-gray" className="font-medium">
              Gunakan Kupon
            </Paragraph>
          </div>
          <div className="flex justify-end">
            <Button
              backgroundVariant="primary"
              className="capitalize text-sm font-medium text-white w-32"
              disabled
            >
              Kupon
            </Button>
          </div>
          <div>
            <Paragraph color="text-typ-gray" className="font-medium">
              Outlet
            </Paragraph>
          </div>
          <div className="flex justify-end">
            <Button
              backgroundVariant="primary"
              className="capitalize text-sm font-medium text-white w-32 whitespace-nowrap"
            >
              Atur Outlet
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
