import clsx from "clsx";
import { Header } from "./Header";
import { Education } from "./Education";

function CurriculumVitaeContainer({
	cvData,
	cvFont,
	cvAccentColor,
	cvLanguage,
}) {
	return (
		<div
			className={clsx(
				"flex min-h-[29.7cm] min-w-[21cm] flex-col gap-10 bg-white px-8 pt-6 shadow-lg",
				cvFont,
			)}
		>
			<Header cvData={cvData} cvFont={cvFont} cvAccentColor={cvAccentColor} />
			<Education cvAccentColor={cvAccentColor} cvLanguage={cvLanguage} />
		</div>
	);
}

export { CurriculumVitaeContainer };
