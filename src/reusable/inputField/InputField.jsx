import PropTypes from "prop-types";
const InputField = ({ type, id, label }) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input type={type} id={id} name={id} className="input-field" required />
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default InputField;
