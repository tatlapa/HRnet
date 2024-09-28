import React from "react";

interface FieldInputProps {
  label: string;
  value: string | number | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FieldInput: React.FC<FieldInputProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="font-semibold">
        {label}
      </label>
      <input
        aria-label="input"
        id={label}
        type="text"
        value={value ?? ""}
        onChange={onChange}
        className="border-2 border-black rounded-sm px-1 py-0.5"
      />
    </div>
  );
};

export default FieldInput;
