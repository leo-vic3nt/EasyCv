/* eslint-disable react/prop-types */
import { useState } from "react";
import { clsx } from "clsx";
import {
  DocumentTextIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

function Container({ children }) {
  return (
    <div className="flex h-fit w-full flex-col rounded-2xl bg-white p-2 shadow-md shadow-slate-300">
      {children}
    </div>
  );
}

function ToggleButton({ children, isActive, onClick }) {
  return (
    <button
      className={clsx(
        "flex w-full flex-col items-center rounded-xl border-solid px-2 py-3 font-normal transition-colors duration-150 ease-in-out active:scale-95",
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
    <Container>
      <ToggleButton
        isActive={activeButton === "content"}
        onClick={() => setActiveButton("content")}
      >
        <DocumentTextIcon className="size-8" />
        Content
      </ToggleButton>
      <ToggleButton
        isActive={activeButton === "customize"}
        onClick={() => setActiveButton("customize")}
      >
        <WrenchScrewdriverIcon className="size-8" />
        Customize
      </ToggleButton>
    </Container>
  );
}

export default FormModeToggle;
