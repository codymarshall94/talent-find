import React from "react";

export default function Pill({
  label,
  onClick,
}: {
  label: string;
  onClick: any;
}) {
  return (
    <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md">
      <span className="font-semibold">{label}</span>
      <button onClick={onClick} className="text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
