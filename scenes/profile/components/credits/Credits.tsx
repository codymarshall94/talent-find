import React from "react";

export default function Credits({ credits }: { credits: any }) {
  const creditCategories = Object.keys(credits);

  const renderCredits = (category: string) => {
    if (!credits[category].length) {
      return <div className="text-sm">None</div>;
    }
    return credits[category].map((credit: any, index: number) => (
      <div key={index} className="bg-gray-100 p-2 rounded-md mb-2">
        <h5 className="font-semibold">{credit.media}</h5>
        <p className="text-sm">Role: {credit.role}</p>
        <p className="text-sm">Reference: {credit.reference}</p>
      </div>
    ));
  };

  return (
    <div>
      {creditCategories.map((category) => (
        <div key={category} className="mb-4">
          <h4 className="font-semibold">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h4>
          <div className="h-px bg-gray-300 my-2"></div>
          <div className="gap-4">{renderCredits(category)}</div>
        </div>
      ))}
    </div>
  );
}
