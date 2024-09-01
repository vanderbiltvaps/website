import Navbar from "@/components/Navbar";
import "./styles/globals.css";
import { Playfair_Display, Roboto_Flex } from "next/font/google";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`bg-gray-50`}>
        <Navbar />
        <main
          className={`min-h-screen ${playfair.variable} ${robotoFlex.variable}`}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
