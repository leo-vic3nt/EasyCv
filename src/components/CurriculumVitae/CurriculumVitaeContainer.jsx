import clsx from "clsx";
import { Header } from "./Header";

function CurriculumVitaeContainer({ cvData, cvFont }) {
	return (
		<div
			className={clsx(
				"flex h-[29.7cm] w-[21cm] min-w-96 flex-col bg-white px-3 pt-6 shadow-lg",
				cvFont,
			)}
		>
			<Header cvData={cvData} cvFont={cvFont} />
		</div>
	);
}

export { CurriculumVitaeContainer };
