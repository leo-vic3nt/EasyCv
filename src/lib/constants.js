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
			startDate: "01/2018",
			endDate: "06/2020",
			location: "Fortaleza, Brazil",
			additionalInfo: ["GPA: 3.4/4.0"],
		},
		{
			id: uuidv4(),
			school: "Universidade de Fortaleza",
			degree: "Master of Computer Science",
			startDate: "01/2022",
			endDate: "Present",
			location: "Fortaleza, Brazil",
			additionalInfo: [],
		},
	],

	experienceData: [
		{
			id: uuidv4(),
			companyName: "Umbrella Corporation",
			role: "Junior Software Engineer",
			location: "Fortaleza, Brazil",
			startDate: "01/2020",
			endDate: "08/2022",
			additionalInfo: [
				"Responsible for an increase of 45% in code output on the main project during my stay",
			],
		},
		{
			id: uuidv4(),
			companyName: "Black Mesa Labs",
			role: "Software Engineer",
			location: "Fortaleza, Brazil",
			startDate: "01/2021",
			endDate: "Present",
			additionalInfo: [
				"Led the migration of the company's primary application to a microservices architecture, resulting in a 30% reduction in deployment times.",
			],
		},
	],

	projects: [
		{
			id: uuidv4(),
			title: "RandoSite.com",
			startDate: "01/2020",
			endDate: "03/2021",
			additionalInfo: [
				"Developed a full stack web application using React for the frontend, Node.js and Express for the backend, and MongoDB for the database",
				"Implemented user authentication and authorization using JWT",

				"Utilized responsive design principles for optimal user experience across devices",
			],
		},
	],

	skills: {
		languages: ["Javascript", "Java", "C#"],
		tools: ["Git", "Linux", "React", "TailwindCss"],
	},
};

const DATAITEM_TYPES = {
	school: "school",
	workExperience: "workExperience",
	projects: "projects",
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
