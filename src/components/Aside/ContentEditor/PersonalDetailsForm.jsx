/* eslint-disable react/prop-types */
import React, { useCallback } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { DUMMY_DATA } from "../../../lib/constants";
import { SideCard } from "../SideCard";

function FormInput({ name, label, value, onChange, onBlur, type }) {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="mb-2 block font-medium text-gray-700 capitalize"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        className="w-full appearance-none rounded-xl bg-gray-100 px-3 py-2 leading-tight focus:shadow-outline focus:outline-none"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={label.toLowerCase() === "full name" ? 20 : 40}
      />
    </div>
  );
}

function DataForm({ personalDetailsData, setPersonalsDetailsData }) {
  const handleBlur = useCallback(
    (e) => {
      const { id, value } = e.target;
      if (value === "") {
        switch (id) {
          case "fullName":
            setPersonalsDetailsData((data) => ({
              ...data,
              fullName: DUMMY_DATA.personalInfo.fullName,
            }));
            break;
          case "phoneNumber":
            setPersonalsDetailsData((data) => ({
              ...data,
              phoneNumber: DUMMY_DATA.personalInfo.phoneNumber,
            }));
            break;
          case "email":
            setPersonalsDetailsData((data) => ({
              ...data,
              email: DUMMY_DATA.personalInfo.email,
            }));
            break;
          case "location":
            setPersonalsDetailsData((data) => ({
              ...data,
              location: DUMMY_DATA.personalInfo.location,
            }));
            break;
          case "github":
            setPersonalsDetailsData((data) => ({
              ...data,
              github: DUMMY_DATA.personalInfo.github,
            }));
            break;
          case "linkedin":
            setPersonalsDetailsData((data) => ({
              ...data,
              linkedin: DUMMY_DATA.personalInfo.linkedin,
            }));
            break;
          default:
            break;
        }
        return;
      }

      const cleanUrl = (url) => {
        return url.replace(/^(https?:\/\/)?(www\.)?/, "");
      };

      if (id === "github" || id === "linkedin") {
        setPersonalsDetailsData((data) => ({ ...data, [id]: cleanUrl(value) }));
      }
    },
    [setPersonalsDetailsData],
  );

  return (
    <form>
      <FormInput
        name="fullName"
        label="full name"
        onBlur={handleBlur}
        value={personalDetailsData.fullName}
        onChange={(e) =>
          setPersonalsDetailsData((data) => ({
            ...data,
            fullName: e.target.value,
          }))
        }
        type="text"
      />

      <FormInput
        name="phoneNumber"
        label="phone number"
        onBlur={handleBlur}
        value={personalDetailsData.phoneNumber}
        onChange={(e) =>
          setPersonalsDetailsData((data) => ({
            ...data,
            phoneNumber: e.target.value,
          }))
        }
        type="tel"
      />

      <FormInput
        name="email"
        label="email"
        onBlur={handleBlur}
        value={personalDetailsData.email}
        onChange={(e) =>
          setPersonalsDetailsData((data) => ({
            ...data,
            email: e.target.value,
          }))
        }
        type="email"
      />

      <FormInput
        name="location"
        label="location"
        onBlur={handleBlur}
        value={personalDetailsData.location}
        onChange={(e) =>
          setPersonalsDetailsData((data) => ({
            ...data,
            location: e.target.value,
          }))
        }
        type="text"
      />
      <FormInput
        name="github"
        label="github"
        onBlur={handleBlur}
        value={personalDetailsData.github}
        onChange={(e) =>
          setPersonalsDetailsData((data) => ({
            ...data,
            github: e.target.value,
          }))
        }
        type="text"
      />
      <FormInput
        name="linkedin"
        label="linkedin"
        onBlur={handleBlur}
        value={personalDetailsData.linkedin}
        onChange={(e) =>
          setPersonalsDetailsData((data) => ({
            ...data,
            linkedin: e.target.value,
          }))
        }
        type="text"
      />
    </form>
  );
}

function PersonalDetailsForm({ personalDetailsData, setPersonalsDetailsData }) {
  return (
    <SideCard
      title={"personal details"}
      icon={<UserCircleIcon className="stroke-1" />}
    >
      <DataForm
        personalDetailsData={personalDetailsData}
        setPersonalsDetailsData={setPersonalsDetailsData}
      />
    </SideCard>
  );
}

export { PersonalDetailsForm };
