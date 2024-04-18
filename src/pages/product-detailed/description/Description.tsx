import React from "react";

export default function Description() {
  return (
    <section className="mt-20 border-t-2 ">
      <div className="flex flex-row justify-center items-center gap-10 mt-10">
        <button className="text-2xl font-semibold">Description</button>
        <button className="text-2xl  text-gray-400">
          Addictional Information
        </button>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="flex flex-col w-[70%]">
          <p className="text-gray-400">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.{" "}
            <br />
            <br />
            <br />
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
      </div>
    </section>
  );
}
