/* eslint-disable react/prop-types */
import { EducationData } from "./EducationData";
import { ExperienceData } from "./ExperienceData";
import { PersonalDetailsForm } from "./PersonalDetailsForm";
import { ProjectsData } from "./ProjectsData";

function ContentEditor({
  personalDetailsData,
  setPersonalsDetailsData,
  educationData,
  setEducationData,
  experienceData,
  setExperienceData,
  projectsData,
  setProjectsData,
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
    </>
  );
}

export { ContentEditor };
