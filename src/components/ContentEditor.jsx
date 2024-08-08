/* eslint-disable react/prop-types */
import { EducationData } from "./EducationData";
import { PersonalDetailsForm } from "./PersonalDetailsForm";

function ContentEditor({ cvData, setCvData }) {
	return (
		<>
			<PersonalDetailsForm cvData={cvData} setCvData={setCvData} />
			<EducationData cvData={cvData} setCvData={setCvData} />
		</>
	);
}

export { ContentEditor };
