import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TEST } from "@/data/test";

export default function ProfileItem() {
  const user = TEST;

  return (
    <div className="flex flex-col border border-gray-300 rounded-lg overflow-hidden w-64">
      <div className="flex flex-col justify-center items-center relative overflow-hidden bg-gray-800 h-64">
        <Image
          src={user.avatar}
          alt="avatar"
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 33vw, 23vw"
        />
      </div>

      <div className="flex flex-col bg-black py-2">
        <h3 className="text-xl font-bold text-white px-2">
          {user.first_name} {user.last_name}
        </h3>
      </div>
      <div className="flex flex-col items-start bg-gray-100 p-2">
        {/* location */}
        <p className="">{user.location.country}</p>
        {/* age */}
        <p className="">{user.attributes.age_range}</p>
        {/* height */}
        <p className="">{user.attributes.height}</p>
        {/* union */}
        <p className="">{user.union_affiliations}</p>
      </div>
      <div className="bg-gray-300 p-4 flex">
        <Link
          href="/profile"
          className="text-sm font-bold text-white bg-blue-500 p-2 rounded-lg w-full text-center"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
