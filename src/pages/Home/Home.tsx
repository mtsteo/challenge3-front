import React from "react";
import Banner from "../../components/home/banner/Banner";
import BrowseTheRange from "../../components/home/BrowseTheRange/BrowseTheRange";
import OurProduct from "../../components/home/OurProduct/OurProduct";
import GoToTop from "../../utils/GotoTop";

export default function () {
  return (
    <div>
      <Banner />
      <BrowseTheRange />
      <OurProduct />
      <GoToTop />

    </div>
  );
}
