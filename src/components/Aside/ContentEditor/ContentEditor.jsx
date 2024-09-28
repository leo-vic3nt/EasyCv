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
			<EducationData
				educationData={educationData}
				setEducationData={setEducationData}
			/>
			<ExperienceData
				experienceData={experienceData}
				setExperienceData={setExperienceData}
			/>
			<ProjectsData
				projectsData={projectsData}
				setProjectsData={setProjectsData}
			/>
		</>
	);
}

export { ContentEditor };
