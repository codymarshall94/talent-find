"use client";

import React, { useState } from "react";
import {
  gender,
  unionStatus,
  hairColor,
  eyeColor,
  ethnicity,
  physique,
  skillTypes,
} from "@/constants/form";
import Range from "./components/range/Range";
import Element from "./components/element/Element";
import Select from "./components/select/Select";
import Collapsible from "./components/collapsible/Collapsible";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface FormState {
  gender: string;
  ethnicity: string;
  hairColor: string;
  eyeColor: string;
  unionStatus: string;
  physique: string;
  skill: string;
}

const initialFormState: FormState = {
  gender: "",
  ethnicity: "",
  hairColor: "",
  eyeColor: "",
  unionStatus: "",
  physique: "",
  skill: "",
};

export default function Filter() {
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const [ageRange, setAgeRange] = useState<number[]>([18, 100]);
  const [heightRange, setHeightRange] = useState<number[]>([48, 84]);
  const [filterForm, setFilterForm] = useState(initialFormState);

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setFilterForm({ ...filterForm, [name]: value });
  };

  console.log(filterForm);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = { ...filterForm, ageRange, heightRange };
    console.log(form);
    setShowFilter(false);
  };

  const clearForm = (e: any) => {
    setFilterForm(initialFormState);
    setAgeRange([18, 100]);
    setHeightRange([48, 84]);
  };

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
    <div
      className={`bg-gray-100 p-4 rounded-md border border-gray-200`}
    >
      <div
        className="flex justify-between cursor-pointer group"
        onClick={() => setShowFilter(!showFilter)}
      >
        <h3 className="font-semibold text-lg group-hover:text-blue-500">
          Filter Results
        </h3>
        <div>
          {showFilter ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </div>
      </div>
      <Collapsible open={showFilter}>
        <form
          className="grid md:grid-cols-2 gap-2 mt-2"
          onSubmit={handleSubmit}
        >
          <div className="col-span-1 md:col-span-3 border-b border-gray-200"></div>
          <Element title="Gender">
            <Select
              array={gender}
              handleChange={handleFormChange}
              name="gender"
              value={filterForm.gender}
            />
          </Element>
          <Element
            title={`Age Range: ${ageRange[0]} - ${ageRange[1]}`}
            gridSpan={2}
          >
            <Range
              min={18}
              max={100}
              onChange={handleRangeChange}
              ageRange={ageRange}
            />
          </Element>
          <Element title="Ethnicity">
            <Select
              array={ethnicity}
              handleChange={handleFormChange}
              name="ethnicity"
              value={filterForm.ethnicity}
            />
          </Element>
          <Element
            title={`Height Range: ${formatHeight(
              heightRange[0]
            )} - ${formatHeight(heightRange[1])}`}
            gridSpan={2}
          >
            <Range
              min={48}
              max={84}
              onChange={handleHeightChange}
              ageRange={heightRange}
            />
          </Element>

          <Element title="Hair Color">
            <Select
              array={hairColor}
              handleChange={handleFormChange}
              name="hairColor"
              value={filterForm.hairColor}
            />
          </Element>
          <Element title="Eye Color">
            <Select
              array={eyeColor}
              handleChange={handleFormChange}
              name="eyeColor"
              value={filterForm.eyeColor}
            />
          </Element>
          <Element title="Union Status">
            <Select
              array={unionStatus}
              handleChange={handleFormChange}
              name="unionStatus"
              value={filterForm.unionStatus}
            />
          </Element>
          <Element title="Physique">
            <Select
              array={physique}
              handleChange={handleFormChange}
              name="physique"
              value={filterForm.physique}
            />
          </Element>
          <Element title="Skills" gridSpan={2}>
            <select
              id="skillSelect"
              name="skill"
              onChange={handleFormChange}
              className="w-full mt-2 p-2 rounded-md bg-gray-100"
              value={filterForm.skill}
            >
              <option value="" disabled>
                Select a category
              </option>
              {Object.entries(skillTypes).map(([category, skills]) => (
                <optgroup label={category.toUpperCase()} key={category}>
                  {skills.map((skill: any) => (
                    <option value={skill.value} key={skill.value}>
                      {skill.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </Element>
          <div className="md:col-span-3 flex flex-row justify-end">
            <button
              className="w-24 bg-gray-200 text-gray-500 p-2 rounded-md hover:bg-gray-300"
              onClick={clearForm}
            >
              Clear
            </button>
            <button
              className="w-24 bg-blue-500 text-white p-2 rounded-md ml-2 hover:bg-blue-600"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </Collapsible>
    </div>
  );
}
