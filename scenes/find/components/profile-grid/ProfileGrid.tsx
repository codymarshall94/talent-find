import React from "react";
import ProfileItem from "./components/ProfileItem";

export default function ProfileGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <ProfileItem />
    </div>
  );
}
