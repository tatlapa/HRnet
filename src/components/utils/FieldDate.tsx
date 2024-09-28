import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FieldDateProps {
  label: string;
  selected: Date;
  onChange: (date: Date) => void;
}

const FieldDate: React.FC<FieldDateProps> = ({ label, selected, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold" htmlFor={label}>{label}</label>
      <DatePicker
        id={label}
        selected={selected}
        onChange={(date) => onChange(date as Date)}
        className="border-2 border-black rounded-sm px-1 py-0.5 w-full"
        isClearable
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        ariaLabelClose="Close"
      />
    </div>
  );
};

export default FieldDate;
