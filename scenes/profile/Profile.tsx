"use client";

import Icon from "@/components/icons/Icon";
import { useState } from "react";
import SlideOver from "@/scenes/profile/components/slide-over/SlideOver";
import React from "react";
import About from "@/scenes/profile/components/about/About";
import { TEST } from "@/data/test";
import Stats from "./components/stats/Stats";
import Image from "next/image";
import Photo from "./components/photos/Photos";
import Skills from "./components/skills/Skills";
import Credits from "./components/credits/Credits";

type Tab = "about" | "skills" | "credits";

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("about");
  const user = TEST;
  const stats = {
    film: user.credits.film.length || 0,
    tv: user.credits.tv.length || 0,
    commercial: user.credits.commercial.length || 0,
  };

  const openSheet = () => {
    setIsOpen(true);
  };

  const closeSheet = () => {
    setIsOpen(false);
  };

  const changeTab = (tab: Tab) => {
    setTab(tab);
  };

  return (
    <div className="flex flex-col items-center justify-between">
      {/* Color background */}
      <div className="bg-blue-500 h-48 w-full relative flex flex-col items-center justify-center">
        {/* Avatar */}
        <div className="bg-gray-300 h-32 w-32 rounded-full border-4 border-white absolute -bottom-16 left-1/2 transform -translate-x-1/2 shadow-2xl overflow-hidden">
          <Image src={user.avatar} alt="Avatar" fill sizes="100%" priority />
        </div>
      </div>

      {/* Name */}
      <div className="flex flex-col items-center justify-center mt-24 mb-8">
        <h3 className="text-2xl font-bold">
          {user.first_name} {user.last_name}
        </h3>
        {/* Title */}
        <h4 className="text-muted">{user.user_title}</h4>
      </div>
      <Stats {...stats} />
      {/* Contact Button, Save Profile */}
      <div className="flex flex-row">
        <button className="border-2 border-blue-500 h-12 w-32 rounded-md text-blue-500">
          Contact
        </button>
        <button
          className="bg-blue-500 h-12 w-32 rounded-md text-white ml-4"
          onClick={openSheet}
        >
          About
        </button>
      </div>
      <div className="flex flex-row items-center justify-center my-8">
        {/* Media Links Icon*/}
        <Icon size={48} color="black">
          <path
            className="st0"
            d="M87.2,33.6c-3.1,0-5.6,2.5-5.6,5.6c0,3.1,2.5,5.6,5.6,5.6c3.1,0,5.6-2.5,5.6-5.6   C92.8,36.1,90.3,33.6,87.2,33.6z M62.2,40.8c-13,0-23.6,10.6-23.6,23.6s10.6,23.6,23.6,23.6s23.6-10.6,23.6-23.6   S75.2,40.8,62.2,40.8z M62.2,79.6c-8.4,0-15.1-6.8-15.1-15.1c0-8.4,6.8-15.1,15.1-15.1c8.4,0,15.1,6.8,15.1,15.1   C77.3,72.8,70.5,79.6,62.2,79.6z M109.9,44.8c0-15.9-12.9-28.8-28.8-28.8H43c-15.9,0-28.8,12.9-28.8,28.8v38.1   c0,15.9,12.9,28.8,28.8,28.8H81c15.9,0,28.8-12.9,28.8-28.8V44.8z M100.8,82.8c0,10.9-8.9,19.8-19.8,19.8H43   c-10.9,0-19.8-8.9-19.8-19.8V44.8C23.2,33.8,32,25,43,25H81c10.9,0,19.8,8.9,19.8,19.8V82.8z"
            id="XMLID_42_"
          />
        </Icon>
        <Icon size={48} color="black">
          <path
            className="cls-1"
            d="M64,16A47.5,47.5,0,1,1,16.5,63.5,47.55,47.55,0,0,1,64,16m0-6.5a54,54,0,1,0,54,54,54,54,0,0,0-54-54Z"
          />
          <path
            className="cls-1"
            d="M65.08,16c2.09,0,5.78,3.66,8.93,11.69,3.71,9.46,5.75,22.18,5.75,35.81s-2,26.35-5.75,35.81c-3.15,8-6.83,11.69-8.93,11.69s-5.78-3.66-8.93-11.69C52.45,89.85,50.4,77.13,50.4,63.5s2-26.35,5.75-35.81C59.31,19.65,63,16,65.08,16m0-6.5c-11.7,0-21.18,24.18-21.18,54s9.48,54,21.18,54,21.18-24.18,21.18-54-9.48-54-21.18-54Z"
          />
        </Icon>
      </div>
      {/* Photos */}
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="text-2xl mb-4 w-full">
          <h3 className="font-bold">Photos</h3>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 md:gap-4">
          {user.photos.map((photo, index) => (
            <Photo photo={photo} key={index} />
          ))}
        </div>
      </div>
      <SlideOver
        isOpen={isOpen}
        onClose={closeSheet}
        tab={tab}
        changeTab={changeTab}
      >
        {tab === "about" && <About user={user} />}
        {tab === "skills" && <Skills skills={user.skills} />}
        {tab === "credits" && <Credits credits={user.credits} />}
      </SlideOver>
    </div>
  );
}
