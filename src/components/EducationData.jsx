import { SideCard } from "./SideCard";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";

// @todo Implement each item component, form to add item component

function AddForm({ cvData, setCvData }) {
	return <div />;
}

function EducationData({ cvData, setCvData }) {
	return (
		<SideCard title={"Education"} icon={<AcademicCapIcon />}>
			<button
				type="button"
				className="mx-auto flex w-fit items-center rounded-lg border-2 border-slate-600 px-2 py-1 hover:bg-gray-200"
			>
				Add <PlusIcon className="size-5" />
			</button>
		</SideCard>
	);
}

export { EducationData };
