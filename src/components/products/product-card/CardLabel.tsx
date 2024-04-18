import React from "react";

export default function CardLabel(props: any) {
  return (
    <div className= {`absolute right-5 top-5 flex items-center justify-center rounded-full w-12 h-12 ${props.color} text-white font-medium`}>{props.text}</div>
  );
}
