/* eslint-disable react/prop-types */
import { useCallback } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { DUMMY_DATA } from "../../../lib/constants";
import { SideCard } from "../SideCard";

function FormInput({ name, label, value, onChange, onBlur, type }) {
	return (
		<div className="mb-4">
			<label
				htmlFor={name}
				className="mb-2 block font-medium capitalize text-gray-700"
			>
				{label}
			</label>
			<input
				type={type}
				id={name}
				className="focus:shadow-outline w-full appearance-none rounded-xl bg-gray-100 px-3 py-2 leading-tight focus:outline-none"
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
		</div>
	);
}

function DataForm({ cvData, setCvData }) {
	const handleBlur = useCallback(
		(e) => {
			const { id, value } = e.target;
			if (value === "") {
				switch (id) {
					case "fullName":
						setCvData((data) => ({
							...data,
							fullName: DUMMY_DATA.personalInfo.fullName,
						}));
						break;
					case "phoneNumber":
						setCvData((data) => ({
							...data,
							phoneNumber: DUMMY_DATA.personalInfo.phoneNumber,
						}));
						break;
					case "email":
						setCvData((data) => ({
							...data,
							email: DUMMY_DATA.personalInfo.email,
						}));
						break;
					case "location":
						setCvData((data) => ({
							...data,
							location: DUMMY_DATA.personalInfo.location,
						}));
						break;
					case "github":
						setCvData((data) => ({
							...data,
							github: DUMMY_DATA.personalInfo.github,
						}));
						break;
					case "linkedin":
						setCvData((data) => ({
							...data,
							linkedin: DUMMY_DATA.personalInfo.linkedin,
						}));
						break;
					default:
						break;
				}
				return;
			}

			const cleanUrl = (url) => {
				return url.replace(/^(https?:\/\/)?(www\.)?/, "");
			};

			if (id === "github" || id === "linkedin") {
				setCvData((data) => ({ ...data, [id]: cleanUrl(value) }));
			}
		},
		[setCvData],
	);

	return (
		<form>
			<FormInput
				name="fullName"
				label="full name"
				onBlur={handleBlur}
				value={cvData.fullName}
				onChange={(e) =>
					setCvData((data) => ({ ...data, fullName: e.target.value }))
				}
				type="text"
			/>

			<FormInput
				name="phoneNumber"
				label="phone number"
				onBlur={handleBlur}
				value={cvData.phoneNumber}
				onChange={(e) =>
					setCvData((data) => ({ ...data, phoneNumber: e.target.value }))
				}
				type="tel"
			/>

			<FormInput
				name="email"
				label="email"
				onBlur={handleBlur}
				value={cvData.email}
				onChange={(e) =>
					setCvData((data) => ({ ...data, email: e.target.value }))
				}
				type="email"
			/>

			<FormInput
				name="location"
				label="location"
				onBlur={handleBlur}
				value={cvData.location}
				onChange={(e) =>
					setCvData((data) => ({ ...data, location: e.target.value }))
				}
				type="text"
			/>
			<FormInput
				name="github"
				label="github"
				onBlur={handleBlur}
				value={cvData.github}
				onChange={(e) =>
					setCvData((data) => ({ ...data, github: e.target.value }))
				}
				type="text"
			/>
			<FormInput
				name="linkedin"
				label="linkedin"
				onBlur={handleBlur}
				value={cvData.linkedin}
				onChange={(e) =>
					setCvData((data) => ({ ...data, linkedin: e.target.value }))
				}
				type="text"
			/>
		</form>
	);
}

function PersonalDetailsForm({ cvData, setCvData }) {
	return (
		<SideCard
			title={"personal details"}
			icon={<UserCircleIcon className="stroke-1" />}
		>
			<DataForm cvData={cvData} setCvData={setCvData} />
		</SideCard>
	);
}

export { PersonalDetailsForm };
