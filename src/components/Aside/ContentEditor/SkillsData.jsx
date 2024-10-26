/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { CommandLineIcon } from "@heroicons/react/24/outline";
import { SideCard } from "../SideCard.jsx";
import { AddDataBtn } from "./AddDataBtn.jsx";
import { CheckIcon } from "@heroicons/react/24/outline";

function SkillInput({ title, skill, stateUpdater }) {
  const [inputValue, setInputValue] = useState("");

  function handleAddSkill() {
    if (inputValue === "") {
      return;
    }

    stateUpdater((state) => {
      const { languages, tools } = state;

      if (skill === "languages") {
        return { ...state, languages: [...languages, inputValue] };
      }

      return { ...state, tools: [...tools, inputValue] };
    });
  }

  function handleRemoveSkill() {
    stateUpdater((state) => {
      const { languages, tools } = state;

      if (skill === "languages") {
        if (languages.length === 0) return state;
        return { ...state, languages: languages.slice(0, -1) };
      }

      if (tools.length === 0) return state;
      return { ...state, tools: tools.slice(0, -1) };
    });
  }

  return (
    <div className="flex flex-col gap-1">
      <label className="text-lg" htmlFor={skill}>
        {title}
      </label>
      <div className="flex gap-3">
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          id={skill}
          type="text"
          className="w-full appearance-none rounded-xl bg-gray-100 px-3 py-2 leading-tight focus:shadow-outline focus:outline-none"
        />
        <div className="flex gap-2">
          <button
            onClick={() => {
              handleAddSkill();
            }}
            className="rounded-lg bg-slate-400 px-2 py-1 text-white transition-all duration-200 active:translate-y-1"
          >
            Add
          </button>
          <button
            onClick={() => {
              handleRemoveSkill();
            }}
            className="rounded-lg bg-red-400 px-2 py-1 text-white transition-all duration-200 active:translate-y-1"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

function AddSkillForm({ setFormActive, setSkillsData }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <SkillInput
          title="Programming Languages"
          skill="languages"
          stateUpdater={setSkillsData}
        />
        <SkillInput
          title="Technologies"
          skill="tools"
          stateUpdater={setSkillsData}
        />
      </div>

      <button
        onClick={() => {
          setFormActive(false);
        }}
        className="mx-auto mt-4 flex w-fit items-center rounded-lg border-2 border-gray-300 px-2 py-1 font-semibold hover:border-gray-200 hover:bg-gray-200"
      >
        Done
        <CheckIcon className="size-5 stroke-1" />
      </button>
    </>
  );
}

function SkillList({ skills, type }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-bold q">
        {type === "languages" ? "Programming languages" : "Technologies"}
      </h2>
      <ul className="flex gap-2 list-disc flex-wrap">
        {skills.map((skill, i) => (
          <li className="ml-5" key={i}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillsData({ skillsData, setSkillsData }) {
  const [formActive, setFormActive] = useState(false);
  const { languages, tools } = skillsData;

  return (
    <SideCard title={"Skills"} icon={<CommandLineIcon className="stroke-1" />}>
      {formActive ? (
        <AddSkillForm
          setFormActive={setFormActive}
          setSkillsData={setSkillsData}
        />
      ) : (
        <div className="flex flex-col gap-3 px-2">
          <SkillList skills={languages} type="languages" />
          <SkillList skills={tools} type="tools" />
        </div>
      )}
      {formActive === false && (
        <AddDataBtn onCLick={() => setFormActive(true)} />
      )}
    </SideCard>
  );
}

export default SkillsData;
