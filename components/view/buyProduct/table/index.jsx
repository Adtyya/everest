/* eslint-disable @next/next/no-img-element */
import Paragraph from "@/components/text/paragpraph";
import Button from "@/components/box/button";

export default function TableBuyProduct() {
  return (
    <div className="overflow-auto">
      <table id="table" className="mt-8 w-full table-fixed">
        <thead className="bg-box-header-table rounded-2xl">
          <tr>
            <th className="py-3.5 px-3 mx-2">
              <Paragraph
                className="!uppercase font-semibold text-"
                color="text-typ-gray"
              >
                Outlet
              </Paragraph>
            </th>
            <th>
              <Paragraph
                className="!uppercase font-semibold whitespace-nowrap"
                color="text-typ-gray"
              >
                Status Langganan
              </Paragraph>
            </th>
            <th>
              <Paragraph
                className="!uppercase font-semibold whitespace-nowrap"
                color="text-typ-gray"
              >
                Group Pembayaran
              </Paragraph>
            </th>
            <th>
              <Paragraph
                className="!uppercase font-semibold whitespace-nowrap"
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
        <tbody>
          <tr className="border-b-[1px] border-box-input pt-2">
            <td className="text-center py-3.5">
              <Paragraph color="text-typ-gray">Cafe ABC</Paragraph>
              <Button
                backgroundVariant="outline-primary"
                className="text-xs !py-1 !px-3 text-typ-primary whitespace-nowrap"
              >
                Oulet Utama
              </Button>
            </td>
            <td className="text-center py-3.5">
              <Paragraph color="text-typ-gray">
                Kadaluwarsa pada{" "}
                <span className="font-semibold">28 Jan 2024</span>
              </Paragraph>
            </td>
            <td className="text-center py-3.5">-</td>
            <td className="text-center py-3.5">
              Estimasi hingga <span className="font-semibold">28 Feb 2024</span>
            </td>
            <td className="text-center py-3.5">
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
  );
}
