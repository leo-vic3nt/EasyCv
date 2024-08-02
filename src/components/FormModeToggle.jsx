/* eslint-disable react/prop-types */
import { useState } from "react";
import { clsx } from "clsx";
import {
  DocumentTextIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

function ToggleButton({ children, isActive, onClick }) {
  return (
    <button
      className={clsx(
        "flex w-24 flex-col items-center rounded-xl border-solid p-2 font-normal transition-colors duration-150 ease-in-out active:scale-95",
        "lg:w-32 lg:p-4 lg:text-lg",
        isActive && "bg-gray-200 !font-bold text-indigo-950",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function FormModeToggle() {
  const [activeButton, setActiveButton] = useState("content");

  return (
    <div className="flex h-fit w-fit flex-col gap-4 rounded-2xl bg-white p-2 shadow-md shadow-slate-300 lg:w-full">
      <ToggleButton
        isActive={activeButton === "content"}
        onClick={() => setActiveButton("content")}
      >
        <DocumentTextIcon className="size-6 lg:size-9" />
        <p>Content</p>
      </ToggleButton>
      <ToggleButton
        isActive={activeButton === "customize"}
        onClick={() => setActiveButton("customize")}
      >
        <WrenchScrewdriverIcon className="size-6 lg:size-9" />
        <p>Customize</p>
      </ToggleButton>
    </div>
  );
}

export default FormModeToggle;
