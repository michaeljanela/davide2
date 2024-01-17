import { Roboto, Montserrat, Lora, Great_Vibes } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300"],
  variable: "--font-roboto",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-montserrat",
});

export const lora = Lora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-lora",
});

export const great_Vibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great_Vibes",
});
