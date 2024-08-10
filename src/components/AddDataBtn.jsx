import { PlusIcon } from "@heroicons/react/24/outline";

function AddDataBtn({ onCLick }) {
	return (
		<button
			onClick={onCLick}
			type="button"
			className="mx-auto flex w-fit items-center rounded-lg border-2 font-semibold border-gray-300 px-2 py-1 hover:border-gray-200 hover:bg-gray-200"
		>
			Add <PlusIcon className="size-5" />
		</button>
	);
}

export { AddDataBtn };
