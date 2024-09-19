import localFont from "next/font/local";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { SearchProvider } from './Components/SerchContext.jsx';
import Head from 'next/head'; // Import the Head component

export const metadata = {
  title: "onlinegameforyou!",
  description: "Your ultimate gaming app experience with amazing features and gameplay!",
};

export default function RootLayout({ children }) {
  return (
    <SearchProvider>
      <html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" /> {/* Link to your favicon */}
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </Head>
        <body>
          <Header />
          <div>{children}</div>
          <Footer />
        </body>
      </html>
    </SearchProvider>
  );
}
