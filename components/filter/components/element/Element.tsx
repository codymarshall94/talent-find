import React from "react";

export default function Element({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <h3 className="font-semibold">{title}</h3>
      {children}
    </div>
  );
}
