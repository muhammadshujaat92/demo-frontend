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
            <div className="elfsight-app-383cb11d-c84a-4b91-a0c2-96395a1db35c" data-elfsight-app-lazy></div>
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