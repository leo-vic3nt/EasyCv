/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import { CurriculumVitaeContainer } from "./components/CurriculumVitae/CurriculumVitaeContainer";
import { ActionsBar } from "./components/Aside/ActionsBar";
import { ModeToggle } from "./components/Aside/ModeToggle";
import { SideContainer } from "./components/Aside/SideContainer";
import { ContentEditor } from "./components/Aside/ContentEditor/ContentEditor";
import {
  CV_FONTS,
  CV_LANGUAGES,
  DUMMY_DATA,
  EDITOR_MODES,
} from "./lib/constants";
import { StyleEditor } from "./components/Aside/StyleEditor/StyleEditor";
import { useReactToPrint } from "react-to-print";

function Container({ children }) {
  return (
    <div className="m-auto flex w-full max-w-screen-2xl justify-center gap-4 bg-gray-200 px-4 py-4 lg:gap-16 lg:py-7">
      {children}
    </div>
  );
}

function App() {
  const [currentMode, setMode] = useState(EDITOR_MODES.contentEditor);
  const [personalDetailsData, setPersonalsDetailsData] = useState(
    DUMMY_DATA.personalInfo,
  );
  const [educationData, setEducationData] = useState(DUMMY_DATA.educationData);
  const [experienceData, setExperienceData] = useState(
    DUMMY_DATA.experienceData,
  );
  const [projectsData, setProjectsData] = useState(DUMMY_DATA.projects);
  const [skillsData, setSkillsData] = useState(DUMMY_DATA.skills);
  const [cvFont, setCvFont] = useState(CV_FONTS.sans);
  const [cvAccentColor, setCvAccentColor] = useState("#000000");
  const [cvLanguage, setCvLanguage] = useState(CV_LANGUAGES.en);
  const cvRef = useRef(null);

  function restoreDefaults() {
    setPersonalsDetailsData(DUMMY_DATA.personalInfo);
    setEducationData(DUMMY_DATA.educationData);
    setExperienceData(DUMMY_DATA.experienceData);
    setProjectsData(DUMMY_DATA.projects);
    setSkillsData(DUMMY_DATA.skills);
    setCvFont(CV_FONTS.sans);
    setCvAccentColor("#000000");
  }

  const printCvFn = useReactToPrint({
    contentRef: cvRef,
    documentTitle: `curriculum`,
    suppressErrors: true,
  });

  return (
    <Container>
      <SideContainer>
        <ActionsBar restoreDefaults={restoreDefaults} printCvFn={printCvFn} />
        <ModeToggle setMode={setMode} />
        {currentMode === EDITOR_MODES.contentEditor ? (
          <ContentEditor
            personalDetailsData={personalDetailsData}
            setPersonalsDetailsData={setPersonalsDetailsData}
            educationData={educationData}
            setEducationData={setEducationData}
            experienceData={experienceData}
            setExperienceData={setExperienceData}
            projectsData={projectsData}
            setProjectsData={setProjectsData}
            skillsData={skillsData}
            setSkillsData={setSkillsData}
          />
        ) : (
          <StyleEditor
            setCvFont={setCvFont}
            cvFont={cvFont}
            setCvAccentColor={setCvAccentColor}
            cvAccentColor={cvAccentColor}
            cvLanguage={cvLanguage}
            setCvLanguage={setCvLanguage}
          />
        )}
      </SideContainer>

      <CurriculumVitaeContainer
        cvData={personalDetailsData}
        cvFont={cvFont}
        cvAccentColor={cvAccentColor}
        cvLanguage={cvLanguage}
        educationData={educationData}
        experienceData={experienceData}
        projectsData={projectsData}
        skillsData={skillsData}
        ref={cvRef}
      />
    </Container>
  );
}

export { App };
