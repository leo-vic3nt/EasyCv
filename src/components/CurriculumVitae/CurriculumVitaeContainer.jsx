import clsx from "clsx";
import { Header } from "./Header";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Projects } from "./Projects";

function CurriculumVitaeContainer({
	cvData,
	cvFont,
	cvAccentColor,
	cvLanguage,
	educationData,
	experienceData,
	projectsData,
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
			<Projects
				cvAccentColor={cvAccentColor}
				cvLanguage={cvLanguage}
				projectData={projectsData}
			/>
		</div>
	);
}

export { CurriculumVitaeContainer };
