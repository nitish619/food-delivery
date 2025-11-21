// src/app/fonts.ts
import { Inter } from "next/font/google";

import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"], // add weights you need
  display: "swap",
});

export const montserratBold = localFont({
  src: "../fonts/Montserrat-Bold.woff2",
  variable: "--font-montserratBold",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const montserratRegular = localFont({
  src: "../fonts/Montserrat-Regular.woff2",
  variable: "--font-montserratRegular",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const montserratSemiBold = localFont({
  src: "../fonts/Montserrat-SemiBold.woff2",
  variable: "--font-montserratSemiBold",
  weight: "400",
  style: "normal",
  display: "swap",
});

// Group them for easier import
export const allFonts = [
  montserratBold.variable,
  montserratRegular.variable,
  montserratSemiBold.variable,
  inter.variable,
].join(" ");
