import "./globals.css";
import Navbar from "./_(Component)/Navbar";
import ReduxProvider from "./_redux/ReduxProvider";
import Footer from "./_(Component)/Footer";
import EditBar from "./_(Component)/EditBar";
import Script from "next/script";
import { fetchData } from "@/utils/apiHelper";

export async function generateMetadata() {
  try {
    const blogData = await fetchData("home-pages");
    const { Tabtitle, metaDescription } = blogData?.[0]?.attributes || {};

    return {
      title: Tabtitle || 'Default Title',
      description: metaDescription || 'Default Description',
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: 'Default Title',
      description: 'Default Description'
    };
  }
}

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