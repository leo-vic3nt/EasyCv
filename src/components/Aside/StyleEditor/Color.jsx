import { SideCard } from "../SideCard";
import {
  PaintBrushIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/outline";

function Colors({ setCvAccentColor, cvAccentColor }) {
  const handleColorChange = (event) => {
    setCvAccentColor(event.target.value);
  };

  return (
    <SideCard title={"Color"} icon={<PaintBrushIcon className="stroke-1" />}>
      <div className="flex">
        <label
          htmlFor="accentColor"
          className="flex items-center gap-3 px-3 text-lg"
        >
          Accent Color
          <input
            type="color"
            value={cvAccentColor}
            onChange={handleColorChange}
            className="cursor-pointer"
          />
        </label>
        <button
          className="w-6"
          type="button"
          onClick={() => setCvAccentColor("#000000")}
        >
          <ArrowUturnLeftIcon />
        </button>
      </div>
    </SideCard>
  );
}

export { Colors };
