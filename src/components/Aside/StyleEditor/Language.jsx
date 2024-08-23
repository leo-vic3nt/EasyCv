import clsx from "clsx";
import { SideCard } from "../SideCard";
import { LanguageIcon } from "@heroicons/react/24/outline";
import { CV_LANGUAGES } from "../../../lib/constants";

function LanguageBtn({ setCvLanguage, languageToSet, isActive }) {
	return (
		<button
			type="button"
			className={clsx(
				"min-w-16 rounded-lg border-0 py-2 active:border-0",
				isActive && "bg-gray-200",
			)}
			onClick={() => setCvLanguage(languageToSet)}
		>
			<p className="font-semibold text-xl">
				{languageToSet.slice(0, 2).toUpperCase()}
			</p>
		</button>
	);
}

function Languages({ cvLanguage, setCvLanguage }) {
	return (
		<SideCard
			title={"Language"}
			icon={<LanguageIcon className="stroke-1" />}
		>
			<div className="flex gap-5 px-3">
				<LanguageBtn
					languageToSet={"en"}
					setCvLanguage={setCvLanguage}
					isActive={cvLanguage === CV_LANGUAGES.en}
				/>
				<LanguageBtn
					languageToSet={"pt"}
					setCvLanguage={setCvLanguage}
					isActive={cvLanguage === CV_LANGUAGES.pt}
				/>
			</div>
		</SideCard>
	);
}

export { Languages };
