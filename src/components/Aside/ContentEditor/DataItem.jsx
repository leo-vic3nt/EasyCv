import { PencilSquareIcon, MinusCircleIcon } from "@heroicons/react/24/outline";

function Controls({ data, setFormActive, stateUpdater, setIdForEdit }) {
	return (
		<div className="flex gap-2">
			<button
				type="button"
				onClick={() => {
					setIdForEdit(data.id);
					setFormActive(true);
				}}
			>
				<PencilSquareIcon className="size-6 stroke-1" />
			</button>
			<button
				type="button"
				onClick={() => {
					stateUpdater((educationData) => {
						if (educationData.length === 1) {
							alert("You must have at least one education item");
							return educationData;
						}
						return educationData.filter((item) => item.id !== data.id);
					});
				}}
			>
				<MinusCircleIcon className="size-6 stroke-1" />
			</button>
		</div>
	);
}

function DataItem({
	type,
	data,
	setFormActive,
	setEducationData,
	setIdForEdit,
}) {
	if (type === "school") {
		return (
			<div className="flex items-center justify-between border-gray-600 border-b-2 p-2">
				<h3 className="font-semibold">{data.school}</h3>
				<Controls
					stateUpdater={setEducationData}
					setIdForEdit={setIdForEdit}
					setFormActive={setFormActive}
					data={data}
				/>
			</div>
		);
	}
}

export { DataItem };
