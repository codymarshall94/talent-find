import React from "react";

export default function Skills({ skills }: { skills: any }) {
  const skillCategories = Object.keys(skills);

  const renderSkills = (category: keyof typeof skills) => {
    if (!skills[category].length) {
      return <div className="text-sm bg-gray-100 p-2 rounded-md">None</div>;
    }
    return skills[category].map((skill = "", index: number) => (
      <div key={index} className="text-sm bg-gray-100 p-2 rounded-md">
        {skill}
      </div>
    ));
  };
  return (
    <div>
      {skillCategories.map((category) => (
        <div key={category} className="mb-4">
          <h4 className="font-semibold">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h4>
          <div className="h-px bg-gray-300 my-2"></div>
          <div className="grid grid-cols-2 gap-4">{renderSkills(category)}</div>
        </div>
      ))}
    </div>
  );
}
