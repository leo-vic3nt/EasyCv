import { Header } from "./Header";

function CurriculumVitaeContainer({ cvData }) {
	return (
		<div className="h-[29.7cm] w-[21cm] min-w-96 bg-white shadow-lg">
			<Header cvData={cvData} />
		</div>
	);
}

export { CurriculumVitaeContainer };
