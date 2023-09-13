import React from "react";
import { User } from "@/types/user";

export default function About({ user }: { user: User }) {
  return (
    <div className="flex flex-col">
      {/* About */}
      <div className="flex flex-col justify-between">
        <h3 className="font-semibold my-1">About</h3>
        <p className="text-sm text-muted">{user.bio}</p>
      </div>
      {/* Age + Gender */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col justify-between">
          <h4 className="font-semibold my-1">Age</h4>
          <p className="text-sm text-muted">{user.attributes.age_range}yr</p>
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="font-semibold my-1">Gender</h3>
          <p className="text-sm text-muted">{user.attributes.gender}</p>
        </div>
      </div>
      <div className="h-px bg-gray-300 my-4"></div>
      <h3 className="text-lg mb-4 font-bold">Attributes</h3>

      {/* Body Atrributes */}
      <div className="flex flex-col justify-between">
        <h3 className="font-semibold my-1">Physique</h3>
        <p className="text-sm text-muted">{user.attributes.physique}</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-between">
            <h3 className="font-semibold my-1">Height</h3>
            <p className="text-sm text-muted">{user.attributes.height}</p>
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="font-semibold my-1">Weight</h3>
            <p className="text-sm text-muted">{user.attributes.weight}</p>
          </div>
        </div>
      </div>
      {/* Eye Color + Hair Color */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col justify-between">
          <h3 className="font-semibold my-1">Eye</h3>
          <p className="text-sm text-muted">{user.attributes.eye_color}</p>
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="font-semibold my-1">Hair</h3>
          <p className="text-sm text-muted">{user.attributes.hair_color}</p>
        </div>
      </div>
      <div className="h-px bg-gray-300 my-4"></div>
      {/* Body Measurements */}
      <div className="flex flex-col justify-between">
        <h3 className="text-lg mb-4 font-bold">Measurements</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-between">
            <h3 className="font-semibold my-1">Neck</h3>
            <p className="text-sm text-muted">{user.measurements.neck}</p>
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="font-semibold my-1">Chest</h3>
            <p className="text-sm text-muted">{user.measurements.chest}</p>
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="font-semibold my-1">Waist</h3>
            <p className="text-sm text-muted">{user.measurements.waist}</p>
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="font-semibold my-1">Inseam</h3>
            <p className="text-sm text-muted">{user.measurements.inseam}</p>
          </div>
        </div>
      </div>
      <div className="h-px bg-gray-300 my-4"></div>
      <h3 className="text-lg font-bold">Additional</h3>
      {/* Drivers License */}
      <div className="flex flex-col justify-between">
        <h3 className="font-semibold my-1">Drivers License</h3>
        <p className="text-sm text-muted">
          {user.driver_license ? "Yes" : "No"}
        </p>
      </div>
      <div className="flex flex-col justify-between">
        <h3 className="font-semibold my-1">Union</h3>
        <p className="text-sm text-muted">{user.union_affiliations}</p>
      </div>
    </div>
  );
}
