import React, { useState, useContext } from "react";
import FieldInput from "./utils/FieldInput";
import FieldSelect from "./utils/FieldSelect";
import FieldDate from "./utils/FieldDate";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmployeesContext from "../contexts/employee.context";

interface FormProps {
  states: { name: string; abbreviation: string }[];
  departments: string[];
}

const Form: React.FC<FormProps> = (props) => {
  const employeeContext = useContext(EmployeesContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState<number | null>(null);
  const [department, setDepartment] = useState("");

  const notify = () => toast("Employee Created!");

  const handleSubmit = () => {
    if (employeeContext) {
      const employee = {
        firstName,
        lastName,
        startDate: startDate.toLocaleDateString("en-US"),
        department,
        birthDate: birthDate.toLocaleDateString("en-US"),
        street,
        city,
        state,
        zip: zip !== null ? zip : 0,
      };
      employeeContext.addEmployee(employee);
      notify();
    } else {
      console.error("EmployeeContext is null");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <FieldInput
        label="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <FieldInput
        label="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <FieldDate
        label="Date of Birth"
        selected={birthDate}
        onChange={(date) => setBirthDate(date)}
      />
      <FieldDate
        label="Start Date"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <fieldset className="px-3 py-2 border-2 border-black flex flex-col gap-3">
        <legend>Address</legend>
        <FieldInput
          label="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <FieldInput
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <FieldSelect
          label="State"
          array={props.states}
          onChange={(option) => setState(option.value || "")}
        />
        <FieldInput
          label="Zip Code"
          value={zip !== null ? zip : ""}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "" || /^[0-9\b]+$/.test(value)) {
              setZip(value === "" ? null : parseInt(value));
            }
          }}
        />
      </fieldset>
      <FieldSelect
        label="Department"
        array={props.departments}
        onChange={(option) => setDepartment(option.label)}
      />
      <button
        onClick={handleSubmit}
        className="bg-gray-500 text-white rounded-md w-1/2 self-center p-1.5"
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
