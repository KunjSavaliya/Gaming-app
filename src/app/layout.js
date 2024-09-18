import localFont from "next/font/local";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {SearchProvider} from './Components/SerchContext.jsx'
export const metadata = {
  title: "Gaming App",
  description: "Your ultimate gaming app experience with amazing features and gameplay!",
};

export default function RootLayout({ children }) {
  return (
    <SearchProvider>
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
    </SearchProvider>
  );
}
