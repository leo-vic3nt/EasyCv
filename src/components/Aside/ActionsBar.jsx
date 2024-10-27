/* eslint-disable react/prop-types */
import {
  ArrowDownOnSquareIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";

function Container({ children }) {
  return (
    <div className="flex w-2/3 flex-col items-center gap-2 rounded-xl bg-white px-2 py-2 shadow-md shadow-slate-300">
      {children}
    </div>
  );
}

function ControlButton({ children, customStyle = null, handleCLick }) {
  return (
    <button
      type="button"
      className={clsx(
        "flex w-full items-center justify-center gap-1 rounded-xl px-1 py-3 font-bold capitalize hover:bg-gray-200 active:scale-95",
        customStyle,
      )}
      onClick={handleCLick}
    >
      {children}
    </button>
  );
}

function ActionsBar({ restoreDefaults }) {
  return (
    <Container>
      <ControlButton handleCLick={restoreDefaults}>
        <ArrowUturnLeftIcon className="size-5 min-w-8" />
        defaults
      </ControlButton>
      <ControlButton>
        <ArrowDownOnSquareIcon className="size-5 min-w-8" />
        download
      </ControlButton>
    </Container>
  );
}

export { ActionsBar };
