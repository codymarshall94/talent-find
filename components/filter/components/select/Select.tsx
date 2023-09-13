import React from "react";

export default function Select({ array }: { array: any[] }) {
  return (
    <select className="w-full mt-2">
      {array.map((item) => (
        <option key={item.label} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
