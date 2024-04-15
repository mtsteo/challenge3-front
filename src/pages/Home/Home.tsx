import React from "react";
import banner from '../../assets/images/banner.jpg'

export default function () {
  return <div>
    <section className="relative">
      <img className="h-[100vh] w-[100vw] " src={banner} alt="" />
      <div className="absolute rounded bg-bannerD w-2/6 h-96 right-20 top-[50%] flex items-center p-10 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, tempore deserunt facilis, consectetur deleniti impedit officiis mollitia dignissimos labore repellendus autem quas culpa repellat ut distinctio dolore eius iusto quisquam.
      </div>
    </section>
    <section>Browse The Range</section>
    <section>Our Products</section>
  </div>;
}
