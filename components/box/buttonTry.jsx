import Button from "./button";
import Paragraph from "../text/paragpraph";
import Link from "next/link";

export default function ButtonTryApp() {
  return (
    <Link href="/request-demo">
      <Button backgroundVariant="secondary">
        <Paragraph color="text-typ-gray" className="!text-sm font-medium">
          Coba Gratis selama 14 hari
        </Paragraph>
      </Button>
    </Link>
  );
}
