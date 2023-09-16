import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col p-4 mx-auto w-full">
      <div className="bg-blue-600 h-3/4 w-full md:w-3/4 rounded-md p-8 md:p-14 flex flex-col justify-between">
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-2xl md:text-4xl text-white font-semibold text-center">
            Join Stuntlink today, and find your next stunt job!
          </h1>
          <p className="text-white text-center text-sm md:text-xl pt-4 md:w-3/4 mx-auto">
            Stuntlink is the #1 place for stunt professionals to find work. We
            have the largest database of stunt professionals in the world, and
            we're growing every day.
          </p>
          <div className="flex flex-row justify-center items-center mt-4">
            <button className="bg-black text-white rounded-md px-4 py-2 mx-auto block">
              Link Up!
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between items-start">
          <div className="flex flex-row justify-center items-center mt-4">
            <div className="flex flex-col">
              <h3 className="text-white font-bold md:text-xl">Recruiting</h3>
              <p className="text-white text-sm">
                Looking for a specific look?
              </p>
            </div>
            <Link
              href="find"
              className=" break-keep text-black font-bold border border-black rounded-md px-2 py-2 mx-auto block ml-2 text-xs md:text-xl"
            >
              Find your Look
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
