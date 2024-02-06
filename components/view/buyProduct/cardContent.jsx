/* eslint-disable @next/next/no-img-element */
"use client";
import Container from "@/components/box/container";
import { HeadingThree } from "@/components/text/heading";
import Paragraph from "@/components/text/paragpraph";
import Button from "@/components/box/button";
import TableBuyProduct from "./table";
import DataTable from "react-data-table-component";

const tableCustomStyles = {
  headRow: {
    style: {
      fontSize: "1rem",
      fontWeight: "semibold",
      paddingLeft: "0 8px",
      justifyContent: "center",
      backgroundColor: "#768EE21A",
      borderBottomWidth: "0px",
      borderRadius: "18px",
    },
  },
  rows: {
    style: {
      color: "black",
      fontSize: "1rem",
      fontWeight: "medium",
      borderBottom: "1px solid #D8D8D8",
    },
  },
};
const payment = ["Auto Debit", "E-Wallet", "Bank Transfer"];
const columns = [
  {
    name: "Outlet",
    selector: (row) => row.name,
  },
  {
    name: "Status Langganan",
    selector: (row) => row.subscriptionStatus,
  },
  {
    name: "Group Pembayaran",
    selector: (row) => row.paymentGroup,
  },
  {
    name: "Masa berlangganan",
    selector: (row) => row.subscriptionPeriode,
  },
  {
    name: "Action",
    cell: () => {
      return (
        <button>
          <img
            src="/images/global/trash-icon.png"
            alt="trash-icon"
            width={25}
            height={30}
          />
        </button>
      );
    },
  },
];

const fakeData = [
  {
    name: "Cafe ABC",
    isMainOutlet: true,
    subscriptionStatus: "28 Jan 2024",
    paymentGroup: "-",
    subscriptionPeriode: "28 Feb 2024",
  },
];

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
        <div className="my-5">
          <DataTable
            customStyles={tableCustomStyles}
            columns={columns}
            data={fakeData}
          />
        </div>
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
                <input
                  id={index}
                  type="radio"
                  name="payment-method"
                  value={item}
                />
                <label
                  htmlFor={index}
                  className="capitalzie text-base text-typ-gray"
                >
                  {item}
                </label>
              </div>
            );
          })}
          <div className="flex space-x-2.5 mt-3.5">
            <input id="term" type="checkbox" />
            <label
              htmlFor="term"
              className="text-typ-gray capitalize text-base"
            >
              Saya telah membaca dan menyetujui{" "}
              <span className="cursor-pointer text-typ-primary font-semibold">
                Syarat & Ketentuan
              </span>{" "}
              Everest sebelum melanjutkan pembayaran.
            </label>
          </div>
          <div className="w-full flex items-center justify-center mt-5 mb-3 space-x-7">
            <Button
              backgroundVariant="secondary"
              className="text-typ-gray font-semibold text-base"
            >
              Batal
            </Button>
            <Button
              backgroundVariant="primary"
              className="text-white font-semibold text-base"
            >
              Beli
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
