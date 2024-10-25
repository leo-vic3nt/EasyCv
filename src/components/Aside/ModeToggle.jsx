/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { clsx } from "clsx";
import { DocumentTextIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { EDITOR_MODES } from "../../lib/constants";

function Container({ children }) {
  return (
    <div className="my-0 flex h-fit w-2/3 flex-col rounded-2xl bg-white p-2 shadow-md shadow-slate-300">
      {children}
    </div>
  );
}

function ToggleButton({ children, isActive, onClick }) {
  return (
    <button
      className={clsx(
        "flex w-full flex-col items-center rounded-xl border-solid py-1 font-medium transition-colors duration-150 ease-in-out active:scale-95",
        isActive && "bg-gray-200 !font-semibold text-indigo-950",
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

function ModeToggle({ setMode }) {
  const [activeButton, setActiveButton] = useState("content");

  return (
    <Container>
      <ToggleButton
        isActive={activeButton === "content"}
        onClick={() => {
          setMode(EDITOR_MODES.contentEditor);
          setActiveButton("content");
        }}
      >
        <DocumentTextIcon className="size-6" />
        Content
      </ToggleButton>
      <ToggleButton
        isActive={activeButton === "customize"}
        onClick={() => {
          setMode(EDITOR_MODES.customize);
          setActiveButton("customize");
        }}
      >
        <PencilSquareIcon className="size-6" />
        Customize
      </ToggleButton>
    </Container>
  );
}

export { ModeToggle };
