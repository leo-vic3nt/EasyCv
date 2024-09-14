function EducationItem({
	school,
	degree,
	startDate,
	endDate,
	location,
	additionalInfo = [],
}) {
	return (
		<div>
			<div className="flex justify-between px-2 text-lg">
				<div>
					<p className="font-bold">{degree}</p>
					<p>{school}</p>
					<ul className="list-disc px-6">
						{additionalInfo.map((item, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
				<div className="text-center">
					<p className="font-bold">{`${startDate} - ${endDate}`}</p>
					<p>{location}</p>
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
	return (
		<div>
			<Header cvAccentColor={cvAccentColor} cvLanguage={cvLanguage} />
			<div className="flex flex-col gap-3">
				{educationData.map((item) => (
					<EducationItem
						key={item.id}
						school={item.school}
						degree={item.degree}
						startDate={item.startDate}
						endDate={item.endDate}
						location={item.location}
						additionalInfo={item.additionalInfo}
					/>
				))}
			</div>
		</div>
	);
}

export { Education };
