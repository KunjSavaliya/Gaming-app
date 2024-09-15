import localFont from "next/font/local";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export const metadata = {
  title: "Gaming App",
  description: "Your ultimate gaming app experience with amazing features and gameplay!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Header />
        <div className=''>
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
