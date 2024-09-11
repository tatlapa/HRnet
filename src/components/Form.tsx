import FieldInput from "./utils/FieldInput";
import FieldSelect from "./utils/FieldSelect";

import React from "react";

interface FormProps {
  states: string[];
  departments: string[];
}

const Form: React.FC<FormProps> = (props) => {
  return (
    <div className="flex flex-col gap-3">
      <FieldInput label="First Name" />
      <FieldInput label="Last Name" />
      <FieldInput label="Date of Birth" />
      <FieldInput label="Start Date" />
      <fieldset className="px-3 py-2 border-2 border-black flex flex-col gap-3">
        <legend>Address</legend>
        <FieldInput label="Street" />
        <FieldInput label="City" />
        <FieldSelect label="State" array={props.states} />
        <FieldInput label="Zip Code" />
      </fieldset>
      <FieldSelect label="Department" array={props.departments} />
      <button className="bg-gray-500 text-white rounded-md w-1/2 self-center p-1.5">
        Submit
      </button>
    </div>
  );
};
export default Form;
