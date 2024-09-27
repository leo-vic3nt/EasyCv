/* eslint-disable react/prop-types */
import { EducationData } from "./EducationData";
import { ExperienceData } from "./ExperienceData";
import { PersonalDetailsForm } from "./PersonalDetailsForm";

function ContentEditor({
	personalDetailsData,
	setPersonalsDetailsData,
	educationData,
	setEducationData,
	experienceData,
	setExperienceData,
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
		</>
	);
}

export { ContentEditor };
