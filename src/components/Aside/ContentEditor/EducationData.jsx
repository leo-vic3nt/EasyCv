import { SideCard } from "../SideCard";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { AddDataBtn } from "./AddDataBtn";

// @todo add education list item and form for add data

function FormInput({ name, label, value, onChange, type }) {
	return (
		<div className="mb-4 w-full">
			<label
				htmlFor={name}
				className="mb-2 block font-medium text-gray-700 capitalize"
			>
				{label}
			</label>
			<input
				type={type}
				id={name}
				className="w-full appearance-none rounded-xl bg-gray-100 px-3 py-2 leading-tight focus:shadow-outline focus:outline-none"
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}

1;

function DataForm({ educationData, setEducationData, setFormActive }) {
	function handleSubmit(event) {
		event.preventDefault();
		setFormActive(false);
	}

	return (
		<form>
			<FormInput name="school" label="School / Institution" type="text" />
			<FormInput name="degree" label="Degree" type="text" />

			<div className="flex flex-col gap-2 xl:flex-row">
				<FormInput name="startDate" label="Start Date" type="text" />
				<FormInput name="endDate" label="End Date" type="text1" />
			</div>

			<FormInput name="location" label="location" />

			<div className="flex gap-3">
				<button
					className="rounded-lg bg-blue-500 px-3 py-1 text-white transition-all duration-200 active:translate-y-1"
					type="submit"
					onClick={handleSubmit}
				>
					Save
				</button>
				<button
					className="rounded-lg bg-gray-200 px-3 py-1 transition-all duration-200 active:translate-y-1"
					type="button"
					onClick={() => setFormActive(false)}
				>
					Cancel
				</button>
			</div>
		</form>
	);
}

function DataList({ children }) {
	return <div>{children}</div>;
}

function EducationData({ educationData, setEducationData }) {
	const [formActive, setFormActive] = useState(false);

	return (
		<SideCard
			title={"Education"}
			icon={<AcademicCapIcon className="stroke-1" />}
		>
			{formActive ? (
				<DataForm
					setEducationData={setEducationData}
					setFormActive={setFormActive}
				/>
			) : (
				<DataList>
					<h1>Hey</h1> <AddDataBtn onCLick={() => setFormActive(true)} />
				</DataList>
			)}
		</SideCard>
	);
}

export { EducationData };
