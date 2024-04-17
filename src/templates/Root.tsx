import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import FooterTop from "./footerTop/FooterTop";
import Header from "./header/Header";

export default function () {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <FooterTop />
      <Footer />
    </div>
  );
}
