import "./globals.css";
import EditBar from "../Components/EditBar";
import ReduxProvider from "./_redux/ReduxProvider";
import dynamic from "next/dynamic";
import Navbar from "../Components/Navbar";
const Footer = dynamic(() => import('../Components/Footer'))
import Script from "next/script";
import { fetchData } from "../utils/apiHelper";

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
            <div className="elfsight-app-096cb500-3365-4391-bfe5-2c160faa9495"></div>
            {children}
            <Footer footerData={footerData} />
          </div>
        </ReduxProvider>
        <Script src="https://kit.fontawesome.com/ca347752a7.js" async crossOrigin="anonymous" />
        <Script src="https://static.elfsight.com/platform/platform.js" async crossOrigin="anonymous" strategy="lazyOnload" />
      </body>
    </html >
  );
}