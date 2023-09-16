import React from "react";

export default function Element({
  title,
  children,
  gridSpan,
}: {
  title: string;
  children: React.ReactNode;
  gridSpan?: number;
}) {
  return (
    <div
      className={`bg-gray-200 p-2 rounded-md w-full col-span-1 md:col-span-${gridSpan}`}
    >
      <h3 className="font-semibold text-sm">{title}:</h3>
      {children}
    </div>
  );
}
