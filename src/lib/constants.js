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

export { DUMMY_DATA, EDITOR_MODES, CV_FONTS, CV_LANGUAGES };
