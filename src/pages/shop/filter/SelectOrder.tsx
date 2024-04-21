import * as React from "react";

export default function SelectOrder() {
  return (
    <div>
      <select className="w-28 h-12 text-gray-400" defaultValue="default"  >
      <option value="default">Default</option>
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
    </div>
  );
}
