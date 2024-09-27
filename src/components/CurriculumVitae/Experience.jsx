function ExperienceItem({
	companyName,
	role,
	startDate,
	endDate,
	location,
	additionalInfo = [],
}) {
	return (
		<div>
			<div className="flex justify-between px-2 text-lg">
				<div>
					<p className="font-bold">{role}</p>
					<p>{companyName}</p>
					<ul className="list-disc px-6 text-sm">
						{additionalInfo.map((item, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
				<div className="text-center min-w-fit">
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
			{cvLanguage === "en" ? "experience" : "experiência profissional"}
		</h1>
	);
}

function Experience({ cvAccentColor, cvLanguage, experienceData }) {
	return (
		<div>
			<Header cvAccentColor={cvAccentColor} cvLanguage={cvLanguage} />
			<div className="flex flex-col gap-3">
				{experienceData.map((item) => (
					<ExperienceItem
						key={item.id}
						companyName={item.companyName}
						role={item.role}
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

export { Experience };