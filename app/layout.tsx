import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Krishna Pet Speciality Clinic | Expert Veterinary Care in Chennai",
  description:
    "Dr. Vairamuthu provides compassionate, specialist veterinary care for dogs, cats, birds and exotic pets in Perambur, Chennai. 4.5★ rated with 280+ reviews.",
  keywords:
    "vet clinic Chennai, pet doctor Perambur, veterinary care, Dr Vairamuthu, pet hospital Chennai",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%230D6E6E' rx='20'/><g fill='white'><ellipse cx='35' cy='30' rx='7' ry='11' transform='rotate(-20 35 30)'/><ellipse cx='50' cy='25' rx='7' ry='11'/><ellipse cx='65' cy='30' rx='7' ry='11' transform='rotate(20 65 30)'/><ellipse cx='50' cy='55' rx='18' ry='20'/></g></svg>",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
