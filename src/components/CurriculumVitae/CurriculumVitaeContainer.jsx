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
				"flex h-[29.7cm] w-[21cm] min-w-96 flex-col gap-10 bg-white px-8 pt-6 shadow-lg",
				cvFont,
			)}
		>
			<Header
				cvData={cvData}
				cvFont={cvFont}
				cvAccentColor={cvAccentColor}
			/>
			<Education cvAccentColor={cvAccentColor} cvLanguage={cvLanguage} />
		</div>
	);
}

export { CurriculumVitaeContainer };
