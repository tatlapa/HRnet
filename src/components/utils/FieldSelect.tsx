type Item = { name: string } | string;

interface Props {
  label: string;
  array: Item[];
}

const FieldSelect = (props: Props) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold">{props.label}</label>
      <select name="state" className="border-2 p-2 bg-gray-100">
        {props.array.map((item, index) => (
          <option key={index}>
            {typeof item === "string" ? item : item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FieldSelect;
