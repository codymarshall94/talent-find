import React from "react";

const tabs = ["about", "skills", "credits"];
type Tab = "about" | "skills" | "credits";

export default function SlideOver({
  isOpen,
  onClose,
  children,
  tab,
  changeTab,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  tab: "about" | "skills" | "credits";
  changeTab: (tab: "about" | "skills" | "credits") => void;
}) {
  return (
    <div
      className={`fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-end items-center px-4 py-2 text-white">
        <button
          onClick={onClose}
          className="text-black hover:text-gray-200 focus:outline-none"
        >
          Close
        </button>
      </div>
      <div className="flex flex-row justify-between px-4 py-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => changeTab(t as Tab)}
            className={`text-sm font-semibold ${
              tab === t
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500"
            } hover:text-blue-500 focus:outline-none`}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="p-4 overflow-y-auto">{children}</div>
    </div>
  );
}
