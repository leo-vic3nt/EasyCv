import clsx from "clsx";
import { Header } from "./Header";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

function CurriculumVitaeContainer({
  cvData,
  cvFont,
  cvAccentColor,
  cvLanguage,
  educationData,
  experienceData,
  projectsData,
  skillsData,
}) {
  return (
    <div
      className={clsx(
        "flex h-[29.7cm] w-[21cm] shrink-0 flex-col gap-3 bg-white px-8 pt-6 shadow-lg",
        cvFont,
      )}
    >
      <Header cvData={cvData} cvFont={cvFont} cvAccentColor={cvAccentColor} />
      <Experience
        cvAccentColor={cvAccentColor}
        cvLanguage={cvLanguage}
        experienceData={experienceData}
      />
      <Education
        cvAccentColor={cvAccentColor}
        cvLanguage={cvLanguage}
        educationData={educationData}
      />
      {projectsData.length > 0 && (
        <Projects
          cvAccentColor={cvAccentColor}
          cvLanguage={cvLanguage}
          projectData={projectsData}
        />
      )}

      {(skillsData.languages.length > 0 || skillsData.tools.length > 0) && (
        <Skills cvAccentColor={cvAccentColor} skillsData={skillsData} />
      )}
    </div>
  );
}

export { CurriculumVitaeContainer };
