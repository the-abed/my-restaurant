import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CartProvider from "@/context/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Dynamic Metadata
export const metadata = {
  title: {
    default: "My Restaurant",
    template: "%s | My Restaurant",
  },
  description: "Get your favorite foods",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <CartProvider>
          <header>
            <Navbar></Navbar>
          </header>
          <main className="container mx-auto px-5 py-10">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
