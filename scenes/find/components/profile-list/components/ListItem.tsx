import React from "react";
import { TEST } from "@/data/test";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ListItem() {
  const user = TEST;
  return (
    <div className="flex flex-row items-center w-full bg-white rounded-md border p-4">
      <div className="h-16 w-16 rounded-full overflow-hidden relative">
        <Image src={user.avatar} alt="profile image" fill />
      </div>
      <div className="flex flex-col items-start justify-center ml-4">
        <div className="flex flex-row  items-baseline justify-center ml-4">
          <h1 className="text-black font-bold text-md">
            {user.first_name} {user.last_name}
          </h1>
          <FontAwesomeIcon
            icon={faLocationPin}
            className="text-gray-500 ml-2"
          />
          <p className="text-gray-500 text-sm ml-2">{user.location.country}</p>
        </div>
        <div className="flex flex-row items-center justify-center ml-4">
          <p>{user.attributes.height}</p>
          <div className="w-px h-4 bg-gray-500 mx-2"></div>
          <p>{user.attributes.weight}</p>
          <div className="w-px h-4 bg-gray-500 mx-2"></div>
          <p>{user.attributes.hair_color}</p>
          <div className="w-px h-4 bg-gray-500 mx-2"></div>
          <p>{user.attributes.eye_color}</p>
        </div>
      </div>
      <div className="flex items-center justify-center ml-auto">
        <Link
          href={`/profile`}
          className="flex items-center justify-center bg-blue-500 rounded-md text-white px-4 py-2"
        >
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </div>
  );
}
