/* eslint-disable react/prop-types */
import ExpandableCard from "./ExpandableCard";
import PersonalDetailsForm from "./PersonalDetailsForm";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

function ContentEditor({ cvData, setCvData }) {
  return (
    <>
      <PersonalDetailsForm cvData={cvData} setCvData={setCvData} />
      <ExpandableCard
        title={"education"}
        icon={<AcademicCapIcon />}
      ></ExpandableCard>
    </>
  );
}

export default ContentEditor;
