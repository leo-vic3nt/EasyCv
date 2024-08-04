/* eslint-disable react/prop-types */
import { useState } from "react";
import CurriculumVitae from "./components/CurriculumVitae";
import ActionsBar from "./components/ActionsBar";
import ModeToggle from "./components/ModeToggle";
import SideControls from "./components/SideControls";
import ContentEditor from "./components/ContentEditor";

function Container({ children }) {
  return (
    <div className="m-auto flex min-h-full w-full max-w-screen-2xl justify-center gap-4 bg-gray-200 px-4 py-4 lg:gap-16 lg:py-7">
      {children}
    </div>
  );
}

const MODES = Object.freeze({
  content: 1,
  customize: 2,
});

function App() {
  const [currentMode, setCurrentMode] = useState(MODES.content);

  return (
    <Container>
      <SideControls>
        <ActionsBar />
        <ModeToggle />
        {currentMode === MODES.content ? <ContentEditor /> : <h1>heeey</h1>}
      </SideControls>

      <CurriculumVitae />
    </Container>
  );
}

export default App;
