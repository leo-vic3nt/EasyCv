/* eslint-disable react/prop-types */
import { EducationData } from "./EducationData";
import { ExperienceData } from "./ExperienceData";
import { PersonalDetailsForm } from "./PersonalDetailsForm";
import { ProjectsData } from "./ProjectsData";
import React from "react";
import SkillsData from "./SkillsData.jsx";

function ContentEditor({
  personalDetailsData,
  setPersonalsDetailsData,
  educationData,
  setEducationData,
  experienceData,
  setExperienceData,
  projectsData,
  setProjectsData,
  skillsData,
  setSkillsData,
}) {
  return (
    <>
      <PersonalDetailsForm
        personalDetailsData={personalDetailsData}
        setPersonalsDetailsData={setPersonalsDetailsData}
      />
      <ExperienceData
        experienceData={experienceData}
        setExperienceData={setExperienceData}
      />
      <EducationData
        educationData={educationData}
        setEducationData={setEducationData}
      />
      <ProjectsData
        projectsData={projectsData}
        setProjectsData={setProjectsData}
      />

      <SkillsData skillsData={skillsData} setSkillsData={setSkillsData} />
    </>
  );
}

export { ContentEditor };
