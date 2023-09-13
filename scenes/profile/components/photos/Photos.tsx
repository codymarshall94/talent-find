import Image from "next/image";
import React from "react";

export default function Photo({ photo }: { photo: string }) {
  return (
    <div className="bg-gray-300 h-24 w-24 md:h-48 md:w-48 rounded-md border-4 relative overflow-hidden">
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
