import { Outlet } from "react-router-dom";
import Footer from "../components/template/Footer";
import FooterTop from "../components/template/FooterTop";
import Header from "../components/template/header/Header";

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
