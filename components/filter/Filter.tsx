"use client";

import React, { useState } from "react";
import {
  gender,
  unionStatus,
  hairColor,
  eyeColor,
  ethnicity,
} from "@/constants/form";
import Range from "./components/range/Range";
import Element from "./components/element/Element";
import Select from "./components/select/Select";

export default function Filter() {
  const [ageRange, setAgeRange] = useState([18, 100]);
  const [heightRange, setHeightRange] = useState([48, 84]);

  const handleRangeChange = (newRange: number[]) => {
    setAgeRange(newRange);
  };

  const handleHeightChange = (newHeight: number[]) => {
    setHeightRange(newHeight);
  };

  const formatHeight = (height: number) => {
    const feet = Math.floor(height / 12);
    const inches = height % 12;
    return `${feet}'${inches}"`;
  };

  return (
    <div className="flex flex-col space-y-4 bg-gray-100 p-4 rounded-md border border-gray-200">
      <Element title="Gender">
        <Select array={gender} />
      </Element>
      <Element title={`Age Range: ${ageRange[0]} - ${ageRange[1]}`}>
        <Range
          min={18}
          max={100}
          onChange={handleRangeChange}
          ageRange={ageRange}
        />
      </Element>
      <Element
        title={`Height Range: ${formatHeight(heightRange[0])} - ${formatHeight(
          heightRange[1]
        )}`}
      >
        <Range
          min={48}
          max={84}
          onChange={handleHeightChange}
          ageRange={heightRange}
        />
      </Element>
      <Element title="Union Status">
        <Select array={unionStatus} />
      </Element>
      <Element title="Hair Color">
        <Select array={hairColor} />
      </Element>
      <Element title="Eye Color">
        <Select array={eyeColor} />
      </Element>
      <Element title="Ethnicity">
        <Select array={ethnicity} />
      </Element>
    </div>
  );
}
