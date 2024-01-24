/* eslint-disable @next/next/no-img-element */
import Button from "@/components/box/button";
import Container from "@/components/box/container";
import GradientCard from "@/components/box/gradientCard";
import { HeadingTwo } from "@/components/text/heading";
import Paragraph from "@/components/text/paragpraph";

export default function ScheduleDemo() {
  return (
    <Container className="mb-5 mt-28">
      <GradientCard className="py-8">
        <div className="text-center">
          <HeadingTwo className="text-typ-gray">
            Mulailah mengembangkan bisnis Anda dengan <br /> mencoba Everest!
          </HeadingTwo>
          <Paragraph color="text-typ-gray" className="font-medium mt-2 mb-1.5">
            Ikuti demo perangkat lunak restoran hari ini!
          </Paragraph>
        </div>
        <div className="w-full h-max flex items-center justify-center space-x-8 mt-4">
          <Button backgroundVariant="primary">
            <Paragraph color="text-white" className="font-medium">
              Jadwalkan Demo
            </Paragraph>
          </Button>
          <Button backgroundVariant="secondary">
            <Paragraph
              color="text-typ-gray"
              className="font-medium flex items-center space-x-3"
            >
              <span>Jadwalkan Demo</span>
              <span>
                <img
                  src="/images/global/arrow-tail.png"
                  alt="arrow-tail"
                  className="w-3/4"
                />
              </span>
            </Paragraph>
          </Button>
        </div>
      </GradientCard>
    </Container>
  );
}
