import { SideCard } from "../SideCard";
import { Colors } from "./Color";
import { Fonts } from "./Fonts";

function StyleEditor({ cvFont, setCvFont, cvAccentColor, setCvAccentColor }) {
	return (
		<>
			<Fonts cvFont={cvFont} setCvFont={setCvFont} />
			<Colors
				setCvAccentColor={setCvAccentColor}
				cvAccentColor={cvAccentColor}
			/>
		</>
	);
}

export { StyleEditor };
