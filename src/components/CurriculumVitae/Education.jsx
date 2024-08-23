function Education({ cvAccentColor, cvLanguage }) {
	return (
		<div>
			<h1
				className="border-black border-b-2 font-extrabold text-2xl uppercase"
				style={{ color: cvAccentColor, borderColor: cvAccentColor }}
			>
				{cvLanguage === "en" ? "education" : "formação acadêmica"}
			</h1>
		</div>
	);
}

export { Education };
