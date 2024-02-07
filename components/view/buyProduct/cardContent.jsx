/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Container from "@/components/box/container";
import { HeadingThree } from "@/components/text/heading";
import Paragraph from "@/components/text/paragpraph";
import Button from "@/components/box/button";
import DataTable from "react-data-table-component";
import Modal from "@/components/modal/modal";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import { DateRange } from "react-date-range";

const tableCustomStyles = {
  headRow: {
    style: {
      fontSize: "1rem",
      fontWeight: "bold",
      paddingLeft: "0 8px",
      justifyContent: "center",
      backgroundColor: "#768EE21A",
      color: "#404952",
      borderBottomWidth: "0px",
      borderRadius: "18px",
      textTransform: "uppercase",
    },
  },
  rows: {
    style: {
      color: "#404952",
      fontSize: "1rem",
      fontWeight: "500",
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

const columnsOutlet = [
  {
    name: "Outlet",
    selector: (row) => row.name,
  },
  {
    name: "manager",
    selector: (row) => row.manager,
  },
  {
    name: "Group Pembayaran",
    selector: (row) => row.paymentGroup,
  },
  {
    name: "Masa Berlangganan Aktif",
    selector: (row) => row.subscriptionPeriode,
  },
  {
    name: "Masa berlangganan (Tahunan)",
    cell: () => {
      return (
        <div className="w-full flex items-center justify-center space-x-5">
          <Button
            backgroundVariant="secondary"
            className="text-typ-gray font-semibold !px-2 !py-2 text-sm"
          >
            <HiOutlineMinus className="font-bold"></HiOutlineMinus>
          </Button>
          <p>0</p>
          <Button
            backgroundVariant="primary"
            className="text-white font-semibold !px-2 !py-2 text-sm"
          >
            <HiOutlinePlus className="font-bold"></HiOutlinePlus>
          </Button>
        </div>
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

const getLastDayOfMonth = (date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

export default function CardContent() {
  const [open, setOpen] = useState(false);
  const [selectDate, setSelectDate] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: getLastDayOfMonth(new Date()),
      key: "selection",
    },
  ]);

  const formatDate = (date) => {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <Container>
        <div className="w-full h-max rounded-2xl shadow-pricing px-5 py-4">
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
                onClick={() => setOpen(true)}
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
      <Modal isOpen={open} closeModal={() => setOpen(false)}>
        <div className="w-full flex justify-between items-center">
          <HeadingThree className="text-typ-gray">
            Atur Perpanjangan Outlet
          </HeadingThree>
          <button
            onClick={() => setOpen(false)}
            className="hover:rotate-180 duration-300"
          >
            <img
              src="/images/global/close.png"
              alt="close-btn"
              width={20}
              height={20}
            />
          </button>
        </div>
        <div className="my-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-5">
            <div>
              <form
                // onSubmit={onSubmitSearch}
                className="w-full outline outline-1 outline-box-input rounded-xl bg-white flex"
              >
                <button className="pl-3">
                  <img
                    src="/images/global/search.png"
                    alt="search"
                    className="object-contain w-5 h-5"
                  />
                </button>
                <input
                  type="search"
                  placeholder="search"
                  name="search"
                  className="w-full pl-1.5 pr-3 py-1.5 focus:outline-none text-typ-gray"
                  // onChange={(event) => setQuery(event.target.value)}
                />
              </form>
            </div>
            <div>
              <div className="flex items-center space-x-2.5">
                <input id="term" type="checkbox" />
                <label
                  htmlFor="term"
                  className="text-typ-gray capitalize text-base"
                >
                  Aktifkan filter tanggal kedaluwarsa
                </label>
              </div>
            </div>
            <div className="relative w-full py-2 px-4 bg-box-gray rounded-2xl flex space-x-3 items-center">
              <img src="/images/global/calendar.png" alt="calendar" />
              <input
                type="text"
                value={`${formatDate(state[0].startDate)} - ${formatDate(
                  state[0].endDate
                )}`}
                className="focus:outline-none text-[#AEB0B2] font-semibold bg-transparent cursor-pointer"
                onClick={() => setSelectDate(!selectDate)}
              />
              <div
                className={`${
                  selectDate ? "visible opacity-100" : "invisible opacity-0"
                } absolute left-0 top-[110%] z-10 duration-300`}
              >
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => {
                    setState([item.selection]);
                    setSelectDate(false);
                  }}
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                />
              </div>
            </div>
          </div>
        </div>
        <DataTable
          columns={columnsOutlet}
          data={fakeData}
          customStyles={tableCustomStyles}
          selectableRows
        />
        <div className="w-full flex items-center justify-center mt-7 mb-2 space-x-7">
          <Button
            backgroundVariant="secondary"
            className="text-typ-gray font-semibold text-base"
            onClick={() => setOpen(false)}
          >
            Batal
          </Button>
          <Button
            backgroundVariant="primary"
            className="text-white font-semibold text-base"
            onClick={() => setOpen(false)}
          >
            Beli
          </Button>
        </div>
      </Modal>
    </>
  );
}
