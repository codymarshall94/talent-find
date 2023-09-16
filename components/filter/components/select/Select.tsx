import React from "react";

export default function Select({
  array,
  handleChange,
  name,
  value = "",
}: {
  array: any[];
  handleChange: (e: any) => void;
  name: string;
  value?: string;
}) {
  return (
    <select
      className="w-full mt-2 p-2 rounded-md bg-gray-100"
      onChange={handleChange}
      name={name}
      id={name}
      value={value}
    >
      <option value="" disabled>
        Select {name}
      </option>
      {array.map((item) => (
        <option
          key={item.label}
          value={item.value}
        >
          {item.label}
        </option>
      ))}
    </select>
  );
}
