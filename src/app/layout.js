import "./globals.css";
import { roboto, montserrat, lora, great_Vibes } from "@/fonts";
import Header from "@/componentes/Header/Header";
import Footer from "@/componentes/Footer/Footer";

export const metadata = {
  title: "Janela - churrasqueira",
  description: "Grillade au feu de bois",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${roboto.variable} ${lora.variable} ${great_Vibes.variable}`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
