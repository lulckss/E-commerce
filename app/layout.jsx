import { Roboto } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";  // Importa o ThemeProvider

import FooterHeader from "../components/FooterHeader";
import Header from "../components/Header";
import SectionNav from "@/components/SectionNav";


// Font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "AllMart | E-commerce",
  description: "E-commerce",
  icons: {
    icon: "/icons/favicon-16x16.png",
    iconSizes: {
      "32x32": "/icons/favicon-32x32.png",
      "16x16": "/icons/favicon-16x16.png",
    }
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}> {/* Enable system theme */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
