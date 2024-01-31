"use client";

import { useState, useMemo, useRef } from "react";
import Container from "@/components/box/container";
import { HeadingTwo } from "@/components/text/heading";
import { Input, Select, Textarea } from "@/components/input";
import RegionJson from "@/components/other/region.json";
import Button from "@/components/box/button";
import Paragraph from "@/components/text/paragpraph";
import Image from "next/image";
import WoodenHand from "@/public/images/demo/wooden-hand.png";
import emailjs from "@emailjs/browser";

export default function FormDemo() {
  const form = useRef();
  const [province, setProvince] = useState("Aceh");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const getCities = useMemo(() => {
    return (
      RegionJson?.filter((val) => val.provinsi === province)[0]?.kota || []
    );
  }, [province]);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_tg0sgil",
        "template_24w3z4d",
        form.current,
        "e9Vt_DxZxgIS4-yFB"
      )
      .then(
        () => {
          setLoading(false);
          window.scrollTo(0, 0);
          setSuccess(true);
        },
        (err) => alert("An error occured when trying to send message.")
      );
  }

  return (
    <Container>
      <div className="shadow-form rounded-2xl bg-white px-4 pt-4 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <HeadingTwo className="text-typ-gray">Form Pengajuan</HeadingTwo>
        </div>
        {success ? (
          <div className="py-1 text-center bg-green-200 my-3 rounded-md">
            <Paragraph color="text-typ-gray" className="font-medium">
              Pesan kamu berhasil dikirim. Tim kami akan segera hubungin kamu!
            </Paragraph>
          </div>
        ) : null}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full px-2">
          <form className="space-y-4 pb-4" ref={form} onSubmit={handleSubmit}>
            <Select label="Pilih Topik" name="main_topic">
              <option>Demo</option>
              <option>Kerja Sama</option>
            </Select>
            <Select
              label="Pilih Yang Menggambarkan Bisnis Anda"
              name="business_type"
            >
              <option>Restaurant</option>
              <option>Cafe</option>
              <option>Fast Food</option>
              <option>Fine Dining</option>
              <option>Family Restaurant</option>
              <option>Lainnya</option>
            </Select>
            <Input label="Nama" name="name" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
              <Input label="Nomor Telepon" name="phone_number" />
              <Input label="Email" type="email" name="email" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
              <Select
                label="Provinsi"
                onChange={(val) => setProvince(val.target.value)}
                name="province"
              >
                {RegionJson?.map((item, i) => {
                  return (
                    <option key={i} value={item.provinsi}>
                      {item.provinsi}
                    </option>
                  );
                })}
              </Select>
              <Select label="Kota" name="city">
                {getCities?.map((item, i) => {
                  return (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  );
                })}
              </Select>
            </div>
            <Textarea label="Tulis Pesanmu Di Sini" name="message" rows={5} />
            <Button backgroundVariant="primary" disabled={loading}>
              <Paragraph color="text-white" className="font-medium">
                {loading ? "Loading..." : "Submit"}
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
