"use client";

import Filter from "@/components/filter/Filter";
import React from "react";
import ProfileGrid from "./components/profile-grid/ProfileGrid";
import Orientation from "./components/orientation/Orientation";
import ProfileList from "./components/profile-list/ProfileList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type Orientation = "grid" | "list";

export default function Find() {
  const [orientation, setOrientation] = React.useState<string>("grid");

  return (
    <div className="flex flex-col items-center justify-center px-4 pb-4">
      <div className="w-full h-32 md:h-64 bg-gray-800 rounded-md"></div>
      <div className="w-full xl:w-1/3">
        <h1 className="text-2xl font-bold text-black mt-4 mb-8">
          Find Talent For Your Next Project
        </h1>
        <Filter />
        <Orientation
          orientation={orientation}
          setOrientation={setOrientation}
        />
        <div className="flex flex-row bg-orange-200 w-full rounded-md my-4 p-2">
          <div className="flex flex-row items-center justify-center mr-4">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
          <div className="flex flex-row items-center justify-center">
            <p className="text-black text-sm">
              Showing <span className="font-bold">1</span> of <span className="font-bold">1</span> candidates within your
              search.
            </p>
          </div>
        </div>
        {orientation === "grid" ? <ProfileGrid /> : <ProfileList />}
      </div>
    </div>
  );
}
