/* eslint-disable react/prop-types */
import React from "react";

function EducationItem({
  school,
  degree,
  startDate,
  endDate,
  location,
  additionalInfo = [],
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-sm">
        <div>
          <p className="font-bold">{degree}</p>
          <p>{school}</p>
        </div>
        <div className="text-right">
          <p className="font-bold">{`${startDate} - ${endDate}`}</p>
          <p>{location}</p>
        </div>
      </div>
      <ul className="-ml-8 flex list-disc flex-wrap px-6 text-sm">
        {additionalInfo.map((item, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <li className="ml-8" key={index}>
            {item}
          </li>
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
      {cvLanguage === "en" ? "education" : "formação acadêmica"}
    </h1>
  );
}

function Education({ cvAccentColor, cvLanguage, educationData }) {
  return (
    <div className="flex flex-col gap-3">
      <Header cvAccentColor={cvAccentColor} cvLanguage={cvLanguage} />
      <div className="flex flex-col gap-3">
        {educationData.map((item) => (
          <EducationItem
            key={item.id}
            school={item.school}
            degree={item.degree}
            startDate={item.startDate}
            endDate={item.endDate}
            location={item.location}
            additionalInfo={item.additionalInfo}
          />
        ))}
      </div>
    </div>
  );
}

export { Education };
