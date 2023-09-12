import React from "react";

export default function Icon({
  size = 24,
  color = "black",
  children,
}: {
  size?: number;
  color?: string;
  children?: React.ReactNode;
}) {
  return (
    <svg
      version="1.1"
      viewBox="0 0 124 124"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      fill={color}
    >
      {children}
    </svg>
  );
}
