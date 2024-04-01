import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { metadata } from "./page";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <header className="bg-base-100 shadow-2xl">
          <Navbar />
        </header>
        <Toaster position="top-right" reverseOrder={false} />
        <main>
          <section>{children}</section>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
