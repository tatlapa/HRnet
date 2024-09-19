import React from "react";
import Select from "react-select";

type Item = { name: string; abbreviation: string } | string;

interface Props {
  label: string;
  array: Item[];
  onChange: (option: { label: string; value?: string }) => void;
}

const FieldSelect: React.FC<Props> = ({ label, array, onChange }) => {
  
  const options = array.map((item) => ({
    label: typeof item === "string" ? item : item.name,
    value: typeof item === "string" ? item : item.abbreviation,
  }));
  
  return (
    <div className="flex flex-col">
      <label className="font-semibold">{label}</label>
      <Select
        options={options}
        onChange={(selectedOption) =>
          onChange(selectedOption as { label: string; value?: string })
        }
        className="border-2 border-gray-100"
      />
    </div>
  );
};

export default FieldSelect;