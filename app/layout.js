import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Deciudadanias",
  description:
    "Descubra Ciudadanías, su socio experto en la gestión de ciudadanías española e italiana y tramitación de visados para Estados Unidos. Ofrecemos un servicio eficiente y prolijo, ideal para atletas y viajeros internacionales. Nuestro equipo profesional garantiza un proceso rápido y personalizado, eliminando barreras burocráticas y facilitando el acceso a oportunidades globales. Con Ciudadanías, obtenga seguridad y estabilidad para usted y su familia, maximice sus oportunidades deportivas y disfrute de la facilidad de viajar a nivel mundial. Contacte con nosotros para comenzar su viaje hacia nuevas fronteras.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
