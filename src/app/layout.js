import "./globals.css";
import Navbar from "../Components/Navbar";
import ReduxProvider from "./_redux/ReduxProvider";
import Footer from "../Components/Footer";
import EditBar from "@/Components/EditBar";
import Script from "next/script";
import { fetchData } from "@/utils/apiHelper";

export default async function RootLayout({ children }) {
  const navBarData = await fetchData("navbars/?populate=*");
  const footerData = await fetchData("footers/?populate=*")
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`antialiased`}
      >
        <ReduxProvider>
          <div>
            <EditBar />
            <Navbar navBarData={navBarData} />
            {children}
            <Footer footerData={footerData} />
          </div>
        </ReduxProvider>
        <Script src="https://kit.fontawesome.com/ca347752a7.js" crossOrigin="anonymous"></Script>
      </body>
    </html >
  );
}