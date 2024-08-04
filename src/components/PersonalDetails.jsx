/* eslint-disable react/prop-types */
import { useCallback, useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { defaultData } from "../lib/constants";

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
        className="focus:shadow-outline w-full appearance-none rounded-xl border bg-gray-200 px-3 py-2 leading-tight focus:outline-none"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}

function DataForm() {
  const [fullName, setFullName] = useState("John Doe");
  const [phone, setPhone] = useState("+55 85 994567732");
  const [email, setEmail] = useState("john.doe@email.com");
  const [location, setLocation] = useState("São Paulo, Brazil");

  const handleBlur = useCallback((e) => {
    const { id, value } = e.target;
    if (value === "") {
      switch (id) {
        case "fullName":
          setFullName(defaultData.fullName);
          break;
        case "phoneNumber":
          setPhone(defaultData.phoneNumber);
          break;
        case "email":
          setEmail(defaultData.email);
          break;
        case "location":
          setLocation(defaultData.location);
          break;
        default:
          break;
      }
    }
  }, []);

  return (
    <form>
      <FormInput
        name="fullName"
        label="full name"
        onBlur={handleBlur}
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        type="text"
      />

      <FormInput
        name="phoneNumber"
        label="phone number"
        onBlur={handleBlur}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="tel"
      />

      <FormInput
        name="email"
        label="email"
        onBlur={handleBlur}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />

      <FormInput
        name="location"
        label="location"
        onBlur={handleBlur}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        type="text"
      />
    </form>
  );
}

function PersonalDetails() {
  return (
    <Container>
      <h3 className="flex items-center gap-1 text-2xl font-bold">
        <UserCircleIcon className="size-7" />
        Personal Details
      </h3>
      <DataForm />
    </Container>
  );
}

export default PersonalDetails;
