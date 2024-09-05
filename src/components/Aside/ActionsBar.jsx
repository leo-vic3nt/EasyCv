/* eslint-disable react/prop-types */
import {
	TrashIcon,
	ArrowUturnLeftIcon,
	ArrowDownOnSquareIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

function Container({ children }) {
	return (
		<div className="flex w-2/3 flex-col items-center gap-2 rounded-xl bg-white px-2 py-2 shadow-md shadow-slate-300">
			{children}
		</div>
	);
}

function ControlButton({ children, customStyle = null }) {
	return (
		<button
			type="button"
			className={clsx(
				"flex w-full items-center justify-center gap-1 rounded-xl px-1 py-3 font-bold capitalize hover:bg-gray-200 active:scale-95",
				customStyle,
			)}
		>
			{children}
		</button>
	);
}

function ActionsBar() {
	return (
		<Container>
			<ControlButton customStyle={"text-red-600"}>
				<TrashIcon className="size-5 min-w-8 text-red-600" />
				clear data
			</ControlButton>
			<ControlButton>
				<ArrowUturnLeftIcon className="size-5 min-w-8" />
				defaults
			</ControlButton>
			<ControlButton>
				<ArrowDownOnSquareIcon className="size-5 min-w-8" />
				download
			</ControlButton>
		</Container>
	);
}

export { ActionsBar };
