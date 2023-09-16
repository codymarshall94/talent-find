import Image from "next/image";
import React from "react";

export default function Photo({ photo }: { photo: string }) {
  return (
    <div className="bg-gray-300 h-32 w-32 md:h-48 md:w-48 rounded-md border-white border relative overflow-hidden">
      <Image
        src={photo}
        alt="Photo"
        fill
        style={{ objectFit: "contain" }}
        sizes="100%"
        priority
      />
    </div>
  );
}
