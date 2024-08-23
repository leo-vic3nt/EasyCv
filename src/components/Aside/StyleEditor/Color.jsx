import { SideCard } from "../SideCard";
import { PaintBrushIcon } from "@heroicons/react/24/outline";

function Colors({ setCvAccentColor, cvAccentColor }) {
	const handleColorChange = (event) => {
		setCvAccentColor(event.target.value);
	};

	return (
		<SideCard title={"Color"} icon={<PaintBrushIcon className="stroke-1" />}>
			<label htmlFor="accentColor" className="flex items-center gap-3 text-lg">
				Accent Color
				<input
					type="color"
					value={cvAccentColor}
					onChange={handleColorChange}
					className="cursor-pointer"
				/>
			</label>
		</SideCard>
	);
}

export { Colors };
