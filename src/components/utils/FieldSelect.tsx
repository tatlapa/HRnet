import React from "react";
import Select from "react-select";

type Item = { name: string } | string;

interface Props {
  label: string;
  array: Item[];
  onChange: (option: { label: string }) => void;
}

const FieldSelect: React.FC<Props> = ({ label, array, onChange }) => {
  const options = array.map((item) => ({
    value: typeof item === "string" ? item : item.name,
    label: typeof item === "string" ? item : item.name,
  }));

  return (
    <div className="flex flex-col">
      <label className="font-semibold">{label}</label>
      <Select
        options={options}
        onChange={(selectedOption) =>
          onChange(selectedOption as { label: string })
        }
        className="border-2 border-gray-100"
      />
    </div>
  );
};

export default FieldSelect;
