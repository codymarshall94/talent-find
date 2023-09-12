import React from "react";

export default function Stats({
  film,
  tv,
  commercial,
}: {
  film: number;
  tv: number;
  commercial: number;
}) {
  return (
    <div className="flex flex-row items-center justify-center mb-8">
      <div className="flex flex-col items-center justify-center px-8">
        <h3 className="text-2xl font-bold">{film}</h3>
        <h4 className="text-slate-400">Film</h4>
      </div>
      <div className="bg-gray-300 h-12 w-1"></div>
      <div className="flex flex-col items-center justify-center px-8">
        <h3 className="text-2xl font-bold">{tv}</h3>
        <h4 className="text-slate-400">TV</h4>
      </div>
      <div className="bg-gray-300 h-12 w-1"></div>
      <div className="flex flex-col items-center justify-center px-8">
        <h3 className="text-2xl font-bold">{commercial}</h3>
        <h4 className="text-slate-400">Commercial</h4>
      </div>
    </div>
  );
}
