import { SideCard } from "./SideCard";
import { AcademicCapIcon } from "@heroicons/react/24/outline";


// @todo Implement each item component, form to add item component


function AddForm({ cvData, setCvData }) {
	return <div />;
}

function EducationData({ cvData, setCvData }) {
	return (
		<SideCard title={"Education"} icon={<AcademicCapIcon />}>
			<button type="button">Add</button>
		</SideCard>
	);
}

export { EducationData };
