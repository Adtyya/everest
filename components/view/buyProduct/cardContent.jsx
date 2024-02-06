/* eslint-disable @next/next/no-img-element */
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
        <table id="table" className="mt-8 w-full">
          <thead className="bg-box-header-table rounded-2xl">
            <tr>
              <th className="py-3.5 px-3">
                <Paragraph
                  className="!uppercase font-semibold text-"
                  color="text-typ-gray"
                >
                  Outlet
                </Paragraph>
              </th>
              <th>
                <Paragraph
                  className="!uppercase font-semibold"
                  color="text-typ-gray"
                >
                  Status Langganan
                </Paragraph>
              </th>
              <th>
                <Paragraph
                  className="!uppercase font-semibold"
                  color="text-typ-gray"
                >
                  Group Pembayaran
                </Paragraph>
              </th>
              <th>
                <Paragraph
                  className="!uppercase font-semibold"
                  color="text-typ-gray"
                >
                  Masa Berlangganan
                </Paragraph>
              </th>
              <th>
                <Paragraph
                  className="!uppercase font-semibold"
                  color="text-typ-gray"
                >
                  Action
                </Paragraph>
              </th>
            </tr>
          </thead>
          <div className="py-1.5"></div>
          <tbody>
            <tr>
              <td className="text-center">
                <Paragraph color="text-typ-gray">Cafe ABC</Paragraph>
                <Button
                  backgroundVariant="outline-primary"
                  className="text-xs !py-1 !px-3 text-typ-primary"
                >
                  Oulet Utama
                </Button>
              </td>
              <td className="text-center">
                <Paragraph color="text-typ-gray">
                  Kadaluwarsa pada{" "}
                  <span className="font-semibold">28 Jan 2024</span>
                </Paragraph>
              </td>
              <td className="text-center">-</td>
              <td className="text-center">
                Estimasi hingga{" "}
                <span className="font-semibold">28 Feb 2024</span>
              </td>
              <td className="text-center">
                <button>
                  <img
                    src="/images/global/trash-icon.png"
                    alt="trash-icon"
                    width={25}
                    height={30}
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
}
