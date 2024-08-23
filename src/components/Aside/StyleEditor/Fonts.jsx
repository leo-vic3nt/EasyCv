import clsx from "clsx";
import { CV_FONTS } from "../../../lib/constants";

function FontBtn({ setCvFont, fontToSet, isActive }) {
	return (
		<button
			type="button"
			className={clsx(
				"min-w-16 rounded-lg border-[1px] border-black py-2 ",
				fontToSet ? `font-${fontToSet}` : "",
				isActive && "bg-gray-200",
			)}
			onClick={() => setCvFont((_) => CV_FONTS[fontToSet])}
		>
			<p
				className={clsx(
					"font-semibold",
					fontToSet === "serif" ? "text-3xl" : "text-2xl",
				)}
			>
				Aa
			</p>
			<p className="capitalize">{fontToSet}</p>
		</button>
	);
}

function Fonts({ cvFont, setCvFont }) {
	return (
		<div className="flex gap-5 px-3">
			<FontBtn
				fontToSet={"serif"}
				setCvFont={setCvFont}
				isActive={cvFont === CV_FONTS.serif}
			/>
			<FontBtn
				fontToSet={"sans"}
				setCvFont={setCvFont}
				isActive={cvFont === CV_FONTS.sans}
			/>
			<FontBtn
				fontToSet={"mono"}
				setCvFont={setCvFont}
				isActive={cvFont === CV_FONTS.mono}
			/>
		</div>
	);
}

export { Fonts };
