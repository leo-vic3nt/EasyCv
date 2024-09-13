import { PencilSquareIcon, MinusCircleIcon } from "@heroicons/react/24/outline";

function DataItem({ data, type, setEducationData }) {
	if (type === "school") {
		return (
			<div className="flex items-center justify-between border-gray-400 border-y-2 p-2">
				<h3 className="font-semibold">{data.school}</h3>
				<div className="flex gap-2">
					<button type="button">
						<PencilSquareIcon className="size-6 stroke-1" />
					</button>
					<button
						type="button"
                        // @todo this removes the education item correctly, but better name it and make it so that it don't empty it all
						onClick={() => {
							setEducationData((x) => x.filter((item) => item.id !== data.id));
						}}
					>
						<MinusCircleIcon className="size-6 stroke-1" />
					</button>
				</div>
			</div>
		);
	}
}

export { DataItem };
