import PropTypes from "prop-types";
const InputField = ({ type, id, label, onChange,defaultValue }) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input type={type} id={id} name={id} defaultValue={defaultValue || ""} className="input-field" required onChange={onChange}/>
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultValue: PropTypes.string.isRequired,
};
export default InputField;
