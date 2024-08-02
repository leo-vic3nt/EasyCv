/* eslint-disable react/prop-types */
import CurriculumVitae from "./components/CurriculumVitae";
import FormControls from "./components/FormControls";
import FormModeToggle from "./components/FormModeToggle";
import PersonalDetails from "./components/PersonalDetails";
import SideControls from "./components/SideControls";

function Container({ children }) {
  return (
    <div className="m-auto flex min-h-full w-full max-w-screen-2xl justify-center gap-4 lg:gap-16 bg-gray-200 px-4 py-4 lg:py-7">
      {children}
    </div>
  );
}

function App() {
  return (
    <Container>
      <SideControls>
        <FormControls />
        <FormModeToggle />
        <PersonalDetails/>
      </SideControls>

      <CurriculumVitae />
    </Container>
  );
}

export default App;
