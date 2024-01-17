import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "swiper/css";
import Navbar from "@/components/nav/navbar";
import Footer from "@/components/footer/footer";
import NextTopLoader from "nextjs-toploader";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NextTopLoader color="#768EE2" />
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
