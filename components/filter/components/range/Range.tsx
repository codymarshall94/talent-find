import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface RangeProps {
  min: number;
  max: number;
  onChange: any;
  ageRange: number[];
}

export default function Range({
  min,
  max,
  onChange,
  ageRange,
}: RangeProps) {
  return (
    <div className="flex flex-col space-y-4 bg-gray-100 p-4 rounded-md w-full">
      <Slider
        min={min}
        max={max}
        range
        value={[ageRange[0], ageRange[1]]}
        onChange={(value) => onChange(value)}
      />
    </div>
  );
}
