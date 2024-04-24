import React from "react";

export default function DescriptionDetail({data} : any) {
  return (
    <div className="w-[70%]">
      <h1 className="font-medium">
        {data[0].large_description}
      </h1>
    </div>
  );
}
