/* eslint-disable @next/next/no-img-element */
import Container from "@/components/box/container";
import { HeadingThree } from "@/components/text/heading";
import Paragraph from "@/components/text/paragpraph";
import Button from "@/components/box/button";
import TableBuyProduct from "./table";

const payment = ["Auto Debit", "E-Wallet", "Bank Transfer"];

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
        <TableBuyProduct></TableBuyProduct>
        <br />
        <Button
          backgroundVariant="secondary"
          className="w-full font-semibold text-typ-gray flex items-center justify-center"
        >
          <span>Tambah Outlet</span>
          <span className="pl-3">
            <img
              src="/images/global/plus-icon.png"
              alt="plus-icon"
              width={22}
              height={22}
            />
          </span>
        </Button>
        <br />
        <div id="details">
          <div className="grid grid-cols-2 items-center px-2 py-1">
            <div>
              <Paragraph color="text-typ-gray">Biaya Langganan</Paragraph>
            </div>
            <div className="text-end">
              <Paragraph color="text-typ-gray" className="font-semibold">
                Rp. 190.000
              </Paragraph>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center px-2 py-1">
            <div>
              <Paragraph color="text-typ-gray">Biaya Admin</Paragraph>
            </div>
            <div className="text-end">
              <Paragraph color="text-typ-gray" className="font-semibold">
                Rp. 10.000
              </Paragraph>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center px-2 py-1">
            <div>
              <Paragraph color="text-typ-gray">
                Gratis Tambahan 1 Bulan
              </Paragraph>
            </div>
            <div className="text-end">
              <Paragraph color="text-typ-gray" className="font-semibold">
                Rp. 0
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-box-input my-2"></div>
        <div className="grid grid-cols-2 items-center px-2">
          <div>
            <Paragraph
              color="text-typ-gray"
              className="font-semibold uppercase"
            >
              total tagihan
            </Paragraph>
          </div>
          <div className="text-end">
            <Paragraph color="text-typ-gray" className="font-semibold">
              Rp. 200.000
            </Paragraph>
          </div>
        </div>
        <div className="w-full h-[1px] bg-box-input my-2"></div>
        <div className="px-2">
          <Paragraph color="text-typ-gray" className="font-semibold">
            Metode Pembayaran:
          </Paragraph>
          {payment.map((item, index) => {
            return (
              <div key={index} className="flex space-x-2 items-center">
                <input type="radio" name="payment-method" value={item} />
                <Paragraph color="text-typ-gray">{item}</Paragraph>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
