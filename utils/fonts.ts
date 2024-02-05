import { Inter, Nunito, Urbanist } from "next/font/google";

export const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export const nunito = Nunito({
  subsets: ["latin"],
  weight: "500",
});
