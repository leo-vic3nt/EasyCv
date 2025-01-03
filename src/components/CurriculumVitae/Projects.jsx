/* eslint-disable react/prop-types */
import React from "react";

function ProjectItem({ title, startDate, endDate, additionalInfo = [] }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-sm">
        <div>
          <p className="font-bold">{title}</p>
        </div>
        <div className="text-right min-w-fit">
          <p className="font-bold">{`${startDate} - ${endDate}`}</p>
        </div>
      </div>
      <ul className="list-disc px-6 text-sm">
        {additionalInfo.map((item, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Header({ cvAccentColor, cvLanguage }) {
  return (
    <h1
      className="border-black border-b-2 font-extrabold text-lg uppercase"
      style={{ color: cvAccentColor, borderColor: cvAccentColor }}
    >
      {cvLanguage === "en" ? "Notable Projects" : "Projetos Notáveis"}
    </h1>
  );
}

function Projects({ cvAccentColor, cvLanguage, projectData }) {
  return (
    <div className="flex flex-col gap-3">
      <Header cvAccentColor={cvAccentColor} cvLanguage={cvLanguage} />
      <div className="flex flex-col gap-3">
        {projectData.map((item) => (
          <ProjectItem
            key={item.id}
            title={item.title}
            startDate={item.startDate}
            endDate={item.endDate}
            additionalInfo={item.additionalInfo}
          />
        ))}
      </div>
    </div>
  );
}

export { Projects };
