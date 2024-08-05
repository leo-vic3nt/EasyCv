/* eslint-disable react/prop-types */
import PersonalDetailsForm from "./PersonalDetailsForm";

function ContentEditor({ cvData, setCvData }) {
  return (
    <>
      <PersonalDetailsForm cvData={cvData} setCvData={setCvData} />
    </>
  );
}

export default ContentEditor;
