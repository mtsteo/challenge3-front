import React from "react";
import Banner from "./banner/Banner";
import BrowseTheRange from "./BrowseTheRange/BrowseTheRange";
import OurProduct from "./OurProduct/OurProduct";
import GoToTop from "../../utils/GotoTop";

export default function Home () {
  return (
    
    <div>
      <Banner />
      <BrowseTheRange />
      <OurProduct />
      <GoToTop />

    </div>
  );
}
