import { SideCard } from "../SideCard";
import { v4 as uuidv4 } from "uuid";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { useState, useRef } from "react";
import { AddDataBtn } from "./AddDataBtn";
import { DataItem } from "./DataItem";
import { DATAITEM_TYPES } from "../../../lib/constants";

function FormInput({
  name,
  label,
  value,
  onChange,
  type,
  required = false,
  idForEdit,
  setExperienceData,
}) {
  const inputRef = useRef(null);

  return (
    <div className="mb-4 w-full">
      <label
        htmlFor={name}
        className="mb-2 block font-medium text-gray-700 capitalize"
      >
        {label}
      </label>
      <div className="flex gap-3">
        <input
          className="w-full appearance-none rounded-xl bg-gray-100 px-3 py-2 leading-tight focus:shadow-outline focus:outline-none"
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          ref={inputRef}
        />
        {name === "aditionalInfo" && (
          <>
            <button
              className="rounded-lg bg-slate-400 px-2 py-1 text-white transition-all duration-200 active:translate-y-1"
              type="button"
              onClick={() => {
                const inputValue = inputRef.current.value;
                setExperienceData((prevData) =>
                  prevData.map((item) =>
                    item.id === idForEdit
                      ? {
                          ...item,
                          additionalInfo: [...item.additionalInfo, inputValue],
                        }
                      : item,
                  ),
                );
              }}
            >
              Add
            </button>
            <button
              className="rounded-lg bg-red-400 px-2 py-1 text-white transition-all duration-200 active:translate-y-1"
              type="button"
              onClick={() => {
                setExperienceData((prevData) =>
                  prevData.map((item) =>
                    item.id === idForEdit
                      ? {
                          ...item,
                          additionalInfo: item.additionalInfo.slice(0, -1),
                        }
                      : item,
                  ),
                );
              }}
            >
              Clear
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function DataForm({
  setFormActive,
  idForEdit,
  experienceData,
  setExperienceData,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    setFormActive(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    e.target.value = value;

    setExperienceData((prevData) =>
      prevData.map((item) =>
        item.id === idForEdit ? { ...item, [name]: value } : item,
      ),
    );
  }

  const currentData = experienceData.find((item) => item.id === idForEdit);

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        name="companyName"
        label="Company / Institution"
        type="text"
        required={true}
        value={currentData.companyName}
        onChange={handleChange}
      />
      <FormInput
        name="role"
        label="Role"
        type="text"
        value={currentData.role}
        required={true}
        onChange={handleChange}
      />
      <div className="flex flex-col gap-2 xl:flex-row">
        <FormInput
          name="startDate"
          label="Start Date"
          type="text"
          value={currentData.startDate}
          required={true}
          onChange={handleChange}
        />
        <FormInput
          name="endDate"
          label="End Date"
          type="text"
          value={currentData.endDate}
          required={true}
          onChange={handleChange}
        />
      </div>
      <FormInput
        name="location"
        label="location"
        type="text"
        value={currentData.location}
        required={true}
        onChange={handleChange}
      />

      <FormInput
        name="aditionalInfo"
        label="aditional information"
        idForEdit={idForEdit}
        setExperienceData={setExperienceData}
      />

      <div className="flex gap-3">
        <button
          className="rounded-lg bg-blue-500 px-3 py-1 text-white transition-all duration-200 active:translate-y-1"
          type="submit"
        >
          Save
        </button>

        <button
          className="rounded-lg bg-gray-200 px-3 py-1 transition-all duration-200 active:translate-y-1"
          type="button"
          onClick={() => {
            if (
              experienceData[experienceData.length - 1].id === idForEdit &&
              experienceData.length > 1
            ) {
              setExperienceData((ed) =>
                ed.filter((item) => item.id !== idForEdit),
              );
            }
            setFormActive(false);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

function ExperienceData({ experienceData, setExperienceData }) {
  const [formActive, setFormActive] = useState(false);
  const [idForEdit, setIdForEdit] = useState(null);

  return (
    <SideCard
      title={"Experience"}
      icon={<BuildingOffice2Icon className="stroke-1" />}
    >
      {formActive ? (
        <DataForm
          experienceData={experienceData}
          setExperienceData={setExperienceData}
          setFormActive={setFormActive}
          idForEdit={idForEdit}
        />
      ) : (
        <ul>
          {experienceData.map((item) => (
            <DataItem
              data={item}
              setFormActive={setFormActive}
              setIdForEdit={setIdForEdit}
              type={DATAITEM_TYPES.workExperience}
              stateUpdater={setExperienceData}
              key={item.id}
            />
          ))}
          <AddDataBtn
            onCLick={() => {
              const newid = uuidv4();
              setExperienceData((wk) => [
                ...wk,
                {
                  id: newid,
                  companyName: "Company Name",
                  role: "Intern",
                  startDate: "01/2000",
                  endDate: "Present",
                  location: "Place",
                  additionalInfo: [],
                },
              ]);
              setIdForEdit(newid);
              setFormActive(true);
            }}
          />
        </ul>
      )}
    </SideCard>
  );
}

export { ExperienceData };
