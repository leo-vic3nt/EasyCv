import { PencilSquareIcon, MinusCircleIcon } from "@heroicons/react/24/outline";
import { DATAITEM_TYPES } from "../../../lib/constants";

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
					stateUpdater((data) => {
						if (data.length === 1) {
							alert("You must have at least one item");
							return data;
						}
						return data.filter((item) => item.id !== data.id);
					});
				}}
			>
				<MinusCircleIcon className="size-6 stroke-1" />
			</button>
		</div>
	);
}

function DataItem({ type, data, setFormActive, stateUpdater, setIdForEdit }) {
	return (
		<div className="flex items-center justify-between border-gray-600 border-b-2 p-2">
			<h3 className="font-semibold">
				{type === DATAITEM_TYPES.school ? data.school : data.companyName}
			</h3>
			<Controls
				stateUpdater={stateUpdater}
				setIdForEdit={setIdForEdit}
				setFormActive={setFormActive}
				data={data}
			/>
		</div>
	);
}

export { DataItem };
