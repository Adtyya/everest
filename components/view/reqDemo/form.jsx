"use client";

import { useState, useMemo } from "react";
import Container from "@/components/box/container";
import { HeadingTwo } from "@/components/text/heading";
import { Input, Select, Textarea } from "@/components/input";
import RegionJson from "@/components/other/region.json";
import Button from "@/components/box/button";
import Paragraph from "@/components/text/paragpraph";
import Image from "next/image";
import WoodenHand from "@/public/images/demo/wooden-hand.png";

export default function FormDemo() {
  const [province, setProvince] = useState("Aceh");

  const getCities = useMemo(() => {
    return (
      RegionJson?.filter((val) => val.provinsi === province)[0]?.kota || []
    );
  }, [province]);

  return (
    <Container>
      <div className="shadow-form rounded-2xl bg-white px-4 pt-4 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <HeadingTwo className="text-typ-gray">Form Pengajuan</HeadingTwo>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          <form className="space-y-4 pb-4">
            <Select label="Pilih Topik">
              <option>Demo</option>
              <option>Kerja Sama</option>
            </Select>
            <Select label="Pilih Yang Menggambarkan Bisnis Anda">
              <option>Restaurant</option>
              <option>Cafe</option>
              <option>Fast Food</option>
              <option>Fine Dining</option>
              <option>Family Restaurant</option>
              <option>Lainnya</option>
            </Select>
            <Input label="Nama" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
              <Input label="Nomor Telepon" />
              <Input label="Email" type="email" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
              <Select
                label="Provinsi"
                onChange={(val) => setProvince(val.target.value)}
              >
                {RegionJson?.map((item, i) => {
                  return (
                    <option key={i} value={item.provinsi}>
                      {item.provinsi}
                    </option>
                  );
                })}
              </Select>
              <Select label="Kota">
                {getCities?.map((item, i) => {
                  return (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  );
                })}
              </Select>
            </div>
            <Textarea label="Tulis Pesanmu Di Sini" rows={5} />
            <Button backgroundVariant="primary">
              <Paragraph color="text-white" className="font-medium">
                Submit
              </Paragraph>
            </Button>
          </form>
          <div className="w-full h-full relative hidden lg:block">
            <div className="absolute -right-24 h-full rounded-t-[35%] bg-[#E6BEF6] bg-opacity-20 blur-md w-3/4 -bottom-3"></div>
            <Image
              src={WoodenHand}
              alt="form-illust"
              fill
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
