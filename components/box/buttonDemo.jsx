import Button from "./button";
import Paragraph from "../text/paragpraph";
import Link from "next/link";

export default function ButtonDemo() {
  return (
    <Link href="/request-demo">
      <Button backgroundVariant="primary">
        <Paragraph color="text-white" className="!text-sm font-medium">
          jadwalkan demo
        </Paragraph>
      </Button>
    </Link>
  );
}
