import React from "react";

export default function Collapsible({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`overflow-hidden transition-max-h duration-500 ease-in-out ${
        open ? "max-h-screen" : "max-h-0"
      }`}
    >
      {children}
    </div>
  );
}
