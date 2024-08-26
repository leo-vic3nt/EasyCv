/* eslint-disable react/prop-types */
import { EducationData } from "./EducationData";
import { PersonalDetailsForm } from "./PersonalDetailsForm";

function ContentEditor({
	personalDetailsData,
	setPersonalsDetailsData,
	educationData,
	setEducationData,
}) {
	return (
		<>
			<PersonalDetailsForm
				personalDetailsData={personalDetailsData}
				setPersonalsDetailsData={setPersonalsDetailsData}
			/>
			<EducationData
				cvData={educationData}
				setPersonalsDetailsData={setEducationData}
			/>
		</>
	);
}

export { ContentEditor };
