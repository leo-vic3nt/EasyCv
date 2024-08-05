/* eslint-disable react/prop-types */
import { useCallback } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { DUMMY_DATA } from "../lib/constants";

function Container({ children }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-white px-5 py-3 shadow-md shadow-slate-300">
      {children}
    </div>
  );
}

function FormInput({ name, label, value, onChange, onBlur, type }) {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="mb-2 block font-medium capitalize text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        className="focus:shadow-outline w-full appearance-none rounded-xl bg-gray-100 px-3 py-2 leading-tight focus:outline-none"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}

function Header() {
  return (
    <div className="flex justify-between">
      <h3 className="text-2xl font-bold">Personal Details</h3>
      <UserCircleIcon className="mt-1 size-7 text-gray-800" />
    </div>
  );
}

function DataForm({ cvData, setCvData }) {
  const handleBlur = useCallback(
    (e) => {
      const { id, value } = e.target;
      if (value === "") {
        switch (id) {
          case "fullName":
            setCvData((data) => ({ ...data, fullName: DUMMY_DATA.fullName }));
            break;
          case "phoneNumber":
            setCvData((data) => ({
              ...data,
              phoneNumber: DUMMY_DATA.phoneNumber,
            }));
            break;
          case "email":
            setCvData((data) => ({ ...data, email: DUMMY_DATA.email }));
            break;
          case "location":
            setCvData((data) => ({ ...data, location: DUMMY_DATA.location }));
            break;
          default:
            break;
        }
      }
    },
    [setCvData],
  );

  return (
    <form>
      <FormInput
        name="fullName"
        label="full name"
        onBlur={handleBlur}
        value={cvData.fullName}
        onChange={(e) =>
          setCvData((data) => ({ ...data, fullName: e.target.value }))
        }
        type="text"
      />

      <FormInput
        name="phoneNumber"
        label="phone number"
        onBlur={handleBlur}
        value={cvData.phoneNumber}
        onChange={(e) =>
          setCvData((data) => ({ ...data, phoneNumber: e.target.value }))
        }
        type="tel"
      />

      <FormInput
        name="email"
        label="email"
        onBlur={handleBlur}
        value={cvData.email}
        onChange={(e) =>
          setCvData((data) => ({ ...data, email: e.target.value }))
        }
        type="email"
      />

      <FormInput
        name="location"
        label="location"
        onBlur={handleBlur}
        value={cvData.location}
        onChange={(e) =>
          setCvData((data) => ({ ...data, location: e.target.value }))
        }
        type="text"
      />
    </form>
  );
}

function PersonalDetailsForm({ cvData, setCvData }) {
  return (
    <Container>
      <Header />
      <DataForm cvData={cvData} setCvData={setCvData} />
    </Container>
  );
}

export default PersonalDetailsForm;
