/* eslint-disable react/prop-types */
import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

function Container({ children }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-white px-5 py-3 shadow-md shadow-slate-300">
      {children}
    </div>
  );
}

function FormInput({ name, label, value, onChange, type }) {
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
      />
    </div>
  );
}

function DataForm() {
  const [fullName, setFullName] = useState("John Doe");
  const [phone, setPhone] = useState("+55 85 991232312");
  const [email, setEmail] = useState("john.doe@email.com");
  const [location, setLocation] = useState("São Paulo, Brazil");

  return (
    <form>
      <FormInput
        name="fullName"
        label="full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        type="text"
      />

      <FormInput
        name="phone"
        label="phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="tel"
      />

      <FormInput
        name="email"
        label="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />

      <FormInput
        name="location"
        label="location"
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
      <h3 className="flex gap-1 items-center text-2xl font-bold">
        <UserCircleIcon className="size-7"/>
        Personal Details
      </h3>
      <DataForm />
    </Container>
  );
}

export default PersonalDetails;
