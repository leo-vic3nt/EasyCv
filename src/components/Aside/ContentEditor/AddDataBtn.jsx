/* eslint-disable react/prop-types */
import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

function AddDataBtn({ onCLick }) {
  return (
    <button
      onClick={onCLick}
      type="button"
      className="mx-auto mt-4 flex w-fit items-center rounded-lg border-2 border-gray-300 px-2 py-1 font-semibold hover:border-gray-200 hover:bg-gray-200"
    >
      Add <PlusIcon className="size-5 stroke-1" />
    </button>
  );
}

export { AddDataBtn };
