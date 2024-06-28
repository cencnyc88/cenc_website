import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Copyright from "./components/Copyright";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CENCNYC",
  description: "The Chinatown East Neighborhood Council (CENC) is organized by a group of community activists, business entrepreneurs, and community leaders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/logoFavicon.png" type="image/x-icon"/>
      <body className={inter.className }>
        <Navbar />
        {children}
        <Copyright />
        </body>
    </html>
  );
}
