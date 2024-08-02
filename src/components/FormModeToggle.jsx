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
        "flex min-w-32 flex-col items-center rounded-xl border-solid p-4 text-lg font-medium transition-colors duration-150 ease-in-out",
        isActive && "bg-gray-200 font-bold text-indigo-950",
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
    <div className="flex h-fit flex-col gap-4 rounded-2xl bg-white px-2 py-3 shadow-md shadow-slate-300">
      <ToggleButton
        isActive={activeButton === "content"}
        onClick={() => setActiveButton("content")}
      >
        <DocumentTextIcon className="size-9" />
        Content
      </ToggleButton>
      <ToggleButton
        isActive={activeButton === "customize"}
        onClick={() => setActiveButton("customize")}
      >
        <WrenchScrewdriverIcon className="size-9" />
        Customize
      </ToggleButton>
    </div>
  );
}

export default FormModeToggle;
