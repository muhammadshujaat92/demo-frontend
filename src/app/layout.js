import "./globals.css";
import Navbar from "./_(Component)/Navbar";
import ReduxProvider from "./_redux/ReduxProvider";
import Footer from "./_(Component)/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`antialiased`}
      >
        <ReduxProvider>
          <div>
            <Navbar />
            {children}
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html >
  );
}