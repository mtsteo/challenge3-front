import React from "react";

export default function CategoryItem(props : any) {
  return (
    <div>
      <img className="rounded-lg hover:scale-95 transition duration-500 cursor-pointer" src={props.imageLink} alt="dinner" />
      <h1 className="text-center text-2xl mt-8 font-semibold">{props.name}</h1>
    </div>
  );
}
