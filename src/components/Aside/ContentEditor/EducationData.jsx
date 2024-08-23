import { SideCard } from "../SideCard";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { AddDataBtn } from "./AddDataBtn";

function FormInput({ name, label, value, onChange, type }) {
	return (
		<div className="mb-4">
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

function DataForm({ cvData, setCvData }) {
	return (
		<div className="">
			<h1>Teste</h1>
		</div>
	);
}

function DataList({ children }) {
	return <div>{children}</div>;
}

function EducationData({ cvData, setCvData }) {
	const [formActive, setFormActive] = useState(false);

	return (
		<SideCard
			title={"Education"}
			icon={<AcademicCapIcon className="stroke-1" />}
		>
			{formActive ? (
				<DataForm />
			) : (
				<DataList>
					<h1>Hey</h1> <AddDataBtn onCLick={() => setFormActive(true)} />
				</DataList>
			)}
		</SideCard>
	);
}

export { EducationData };
