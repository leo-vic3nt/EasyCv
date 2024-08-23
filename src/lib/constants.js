const EDITOR_MODES = Object.freeze({
	contentEditor: 1,
	customize: 2,
});

const DUMMY_DATA = {
	fullName: "John Doe",
	phoneNumber: "+55 85 994567732",
	email: "john.doe@email.com",
	location: "São Paulo, Brazil",
	github: "github.com/leo-vic3nt",
	linkedin: "linkedin.com/in/leonardo-vic3nte/",
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
