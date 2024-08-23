import { Colors } from "./Color";
import { Fonts } from "./Fonts";
import { Languages } from "./Language";

function StyleEditor({
	cvFont,
	setCvFont,
	cvAccentColor,
	setCvAccentColor,
	cvLanguage,
	setCvLanguage,
}) {
	return (
		<>
			<Fonts cvFont={cvFont} setCvFont={setCvFont} />
			<Colors
				setCvAccentColor={setCvAccentColor}
				cvAccentColor={cvAccentColor}
			/>
			<Languages cvLanguage={cvLanguage} setCvLanguage={setCvLanguage} />
		</>
	);
}

export { StyleEditor };
