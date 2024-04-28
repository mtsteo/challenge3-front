import React from "react";
import homeBanner from "../../../assets/images/banner.jpg";

export default function Banner() {
  return (
    <section className="max-md:hidden">
      <div className="relative">
        <img  src={homeBanner} alt="" />
        <div className="absolute rounded bg-bannerD w-2/6 h-96 right-20 top-[50%] flex items-center p-10 text-lg max-[1735px]:top-[20%] max-[1100px]:hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          tempore deserunt facilis, consectetur deleniti impedit officiis
          mollitia dignissimos labore repellendus autem quas culpa repellat ut
          distinctio dolore eius iusto quisquam.
        </div>
      </div>
    </section>
  );
}
