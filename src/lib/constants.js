import { v4 as uuidv4 } from "uuid";

const EDITOR_MODES = Object.freeze({
	contentEditor: 1,
	customize: 2,
});

const DUMMY_DATA = {
	personalInfo: {
		fullName: "John Doe",
		phoneNumber: "+55 85 994567732",
		email: "john.doe@email.com",
		location: "São Paulo, Brazil",
		github: "github.com/leo-vic3nt",
		linkedin: "linkedin.com/in/leonardo-vic3nte/",
	},

	educationData: [
		{
			id: uuidv4(),
			school: "Universidade de Fortaleza",
			degree: "Bachelor in Computer Science",
			startDate: "08/2022",
			endDate: "Present",
			location: "Fortaleza, Brazil",
			additionalInfo: ["GPA: 3.4/4.0"],
		},
	],

	experienceData: [
		{
			id: uuidv4(),
			companyName: "Umbrella Inc.",
			role: "Junior Software Developer",
			location: "Fortaleza, Brazil",
			startDate: "01/2021",
			endDate: "Present",
			additionalInfo: [
				"Responsible for an increase of 45% in code output on the main project during my stay",
			],
		},
	],
};

const DATAITEM_TYPES = {
	school: "school",
	workExperience: "workExperience",
};

// Using tailwind classes
const CV_FONTS = {
	sans: "font-sans",
	serif: "font-serif",
	mono: "font-mono",
};

const CV_LANGUAGES = {
	pt: "pt",
	en: "en",
};

export { DATAITEM_TYPES, DUMMY_DATA, EDITOR_MODES, CV_FONTS, CV_LANGUAGES };
