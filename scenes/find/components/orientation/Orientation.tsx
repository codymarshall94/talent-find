import { faList, faTh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  orientation: string;
  setOrientation: React.Dispatch<React.SetStateAction<string>>;
}

export default function Orientation({ orientation, setOrientation }: Props) {
  return (
    <div className="flex justify-start space-x-2 mt-4">
      <button
        className={`group flex items-center justify-center rounded hover:bg-blue-100 hover:text-blue-500 p-2 ${
          orientation === "grid" ? "bg-blue-100 text-blue-500" : "text-gray-500"
        }`}
        onClick={() => setOrientation("grid")}
      >
        <FontAwesomeIcon icon={faTh} className="mr-2" />
        <span className="font-bold">Grid</span>
      </button>
      <button
        className={`group flex items-center justify-center rounded hover:bg-blue-100 hover:text-blue-500 p-2 ${
          orientation === "list" ? "bg-blue-100 text-blue-500" : "text-gray-500"
        }`}
        onClick={() => setOrientation("list")}
      >
        <FontAwesomeIcon icon={faList} className="mr-2" />
        <span className="font-bold">List</span>
      </button>
    </div>
  );
}
