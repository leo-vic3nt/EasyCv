/* eslint-disable react/prop-types */
import { useState } from "react";
import { CurriculumVitae } from "./components/CurriculumVitae/CurriculumVitae";
import { ActionsBar } from "./components/Aside/ActionsBar";
import { ModeToggle } from "./components/Aside/ModeToggle";
import { SideContainer } from "./components/Aside/SideContainer";
import { ContentEditor } from "./components/Aside/ContentEditor";
import { DUMMY_DATA, EDITOR_MODES } from "./lib/constants";

function Container({ children }) {
	return (
		<div className="m-auto flex min-h-full w-full max-w-screen-2xl justify-center gap-4 bg-gray-200 px-4 py-4 lg:gap-16 lg:py-7">
			{children}
		</div>
	);
}

function App() {
	const [currentMode, setMode] = useState(EDITOR_MODES.contentEditor);
	const [cvData, setCvData] = useState(DUMMY_DATA);

	return (
		<Container>
			<SideContainer>
				<ActionsBar />
				<ModeToggle setMode={setMode} />
				{currentMode === EDITOR_MODES.contentEditor ? (
					<ContentEditor cvData={cvData} setCvData={setCvData} />
				) : (
					<h1>heeey</h1>
				)}
			</SideContainer>

			<CurriculumVitae />
		</Container>
	);
}

export { App };
