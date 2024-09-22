import clsx from "clsx";
import { Header } from "./Header";
import { Education } from "./Education";
import { Experience } from "./Experience";

function CurriculumVitaeContainer({
	cvData,
	cvFont,
	cvAccentColor,
	cvLanguage,
	educationData,
	experienceData,
}) {
	return (
		<div
			className={clsx(
				"flex min-h-[29.7cm] min-w-[21cm] flex-col gap-10 bg-white px-8 pt-6 shadow-lg",
				cvFont,
			)}
		>
			<Header cvData={cvData} cvFont={cvFont} cvAccentColor={cvAccentColor} />
			<Experience
				cvAccentColor={cvAccentColor}
				cvLanguage={cvLanguage}
				experienceData={experienceData}
			/>
			<Education
				cvAccentColor={cvAccentColor}
				cvLanguage={cvLanguage}
				educationData={educationData}
			/>
		</div>
	);
}

export { CurriculumVitaeContainer };
