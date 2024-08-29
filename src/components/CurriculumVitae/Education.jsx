import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function EducationItem({ school, degree, startDate, endDate, location }) {
	return (
		<div>
			<div className="flex gap-20 text-lg">
				<div className="flex w-fit flex-col items-center">
					<p className="font-bold">{`${startDate} - ${endDate}`}</p>
					<p>{location}</p>
				</div>
				<div>
					<p className="font-bold">{school}</p>
					<p>{degree}</p>
				</div>
			</div>
		</div>
	);
}

function Header({ cvAccentColor, cvLanguage }) {
	return (
		<h1
			className="border-black border-b-2 font-extrabold text-2xl uppercase"
			style={{ color: cvAccentColor, borderColor: cvAccentColor }}
		>
			{cvLanguage === "en" ? "education" : "formação acadêmica"}
		</h1>
	);
}

function Education({ cvAccentColor, cvLanguage, educationData }) {
	const [dataWithIds, setDataWithIds] = useState([]);

	useEffect(() => {
		const data = educationData.map((item) => ({
			...item,
			id: uuidv4(),
		}));
		setDataWithIds(data);
	}, [educationData]);

	return (
		<div>
			<Header cvAccentColor={cvAccentColor} cvLanguage={cvLanguage} />
			{dataWithIds.map((item) => (
				<EducationItem
					key={item.id}
					school={item.school}
					degree={item.degree}
					startDate={item.startDate}
					endDate={item.endDate}
					location={item.location}
				/>
			))}
		</div>
	);
}

export { Education };
