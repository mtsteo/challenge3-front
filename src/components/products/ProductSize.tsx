import React from "react";

export default function ProductSize(props: any) {
  return (
    <button className="flex justify-center items-center bg-filterBg w-10 h-10 rounded-lg font-medium">
      {props.size}
    </button>
  );
}
