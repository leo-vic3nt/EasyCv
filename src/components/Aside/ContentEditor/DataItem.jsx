/* eslint-disable react/prop-types */
import { MinusCircleIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { DATAITEM_TYPES } from "../../../lib/constants";
import React from "react";

function Controls({ data, type, setFormActive, stateUpdater, setIdForEdit }) {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => {
          setIdForEdit(data.id);
          setFormActive(true);
        }}
      >
        <PencilSquareIcon className="size-6 stroke-1" />
      </button>

      <button
        type="button"
        onClick={() => {
          stateUpdater((stateData) => {
            if (
              stateData.length <= 1 &&
              (type === DATAITEM_TYPES.school ||
                type === DATAITEM_TYPES.workExperience)
            ) {
              alert("You must have at least one item");
              return stateData;
            }
            return stateData.filter((item) => item.id !== data.id);
          });
        }}
      >
        <MinusCircleIcon className="size-6 stroke-1" />
      </button>
    </div>
  );
}

function DataItem({ type, data, setFormActive, stateUpdater, setIdForEdit }) {
  function getTitle(type) {
    switch (type) {
      case DATAITEM_TYPES.school:
        return data.degree;

      case DATAITEM_TYPES.workExperience:
        return data.role;

      case DATAITEM_TYPES.projects:
        return data.title;
    }
  }

  return (
    <div className="flex items-center justify-between border-gray-600 border-b-2 p-2">
      <h3 className="font-semibold">{getTitle(type)}</h3>
      <Controls
        stateUpdater={stateUpdater}
        setIdForEdit={setIdForEdit}
        setFormActive={setFormActive}
        data={data}
        type={type}
      />
    </div>
  );
}

export { DataItem };
