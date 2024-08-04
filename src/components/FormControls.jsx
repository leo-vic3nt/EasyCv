/* eslint-disable react/prop-types */
import { TrashIcon, ArrowUturnLeftIcon, ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

function Container({ children }) {
  return (
    <div className="flex gap-2 rounded-xl bg-white px-2 py-2 shadow-md shadow-slate-300">
      {children}
    </div>
  );
}

function ControlButton({ children, customStyle = null }) {
  return (
    <button
      className={clsx(
        "flex w-1/2 items-center justify-center gap-1 rounded-xl px-1 py-3 font-bold capitalize hover:bg-gray-200 active:scale-95",
        customStyle,
      )}
    >
      {children}
    </button>
  );
}

function FormControls() {
  return (
    <Container>
      <ControlButton customStyle={"text-red-600"}>
        <TrashIcon className="size-5 text-red-600" />
        clear data
      </ControlButton>
      <ControlButton>
        <ArrowUturnLeftIcon className="size-5" />
        defaults
      </ControlButton>
      <ControlButton>
        <ArrowDownOnSquareIcon className="size-5" />
        download
      </ControlButton>
    </Container>
  );
}

export default FormControls;
