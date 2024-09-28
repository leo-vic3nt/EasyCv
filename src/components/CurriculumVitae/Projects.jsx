function ProjectItem({ title, startDate, endDate, additionalInfo = [] }) {
	return (
		<div>
			<div className="flex justify-between px-2 text-lg">
				<div>
					<p className="font-bold">{title}</p>

					<ul className="list-disc px-6 text-sm">
						{additionalInfo.map((item, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
				<div className="text-center min-w-fit">
					<p className="font-bold">{`${startDate} - ${endDate}`}</p>
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
			{cvLanguage === "en" ? "Notable Projects" : "Projetos Notáveis"}
		</h1>
	);
}

function Projects({ cvAccentColor, cvLanguage, projectData }) {
	return (
		<div>
			<Header cvAccentColor={cvAccentColor} cvLanguage={cvLanguage} />
			<div className="flex flex-col gap-3">
				{projectData.map((item) => (
					<ProjectItem
						key={item.id}
						title={item.title}
						startDate={item.startDate}
						endDate={item.endDate}
						additionalInfo={item.additionalInfo}
					/>
				))}
			</div>
		</div>
	);
}

export { Projects };
