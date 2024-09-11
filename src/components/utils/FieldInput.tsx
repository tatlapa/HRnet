const FieldInput = (props) => (
    <div className="flex flex-col">
      <label className="font-semibold">{props.label}</label>
      <input type="text" className="border-2 border-black rounded-sm px-1 py-0.5" />
    </div>
  );
  
  export default FieldInput;