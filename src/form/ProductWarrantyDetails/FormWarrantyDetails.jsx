import InputField from "../../reusable/inputField/InputField.jsx";
import PropTypes from "prop-types";

const FormWarrantyDetails = ({ onclick }) => {
  return (
    <div>
      <form className="max-w-sm mx-auto mt-10">
        <div>
          <h1 className="font-bold text-lg mb-5 flex justify-center">
            Product Warranty Details
          </h1>
        </div>
        <InputField id="name" type="text" label="Warranty Period" />
        <InputField id="quantity" type="text" label="Warranty Start Date" />
        <InputField id="price" type="text" label="Warranty End Date" />
        <div className="flex justify-between">
          <button type="button" className="blue-btn" onClick={onclick}>
            Back
          </button>
          <button type="button" className="blue-btn tra">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
FormWarrantyDetails.propTypes = {
  onclick: PropTypes.func.isRequired,
};
export default FormWarrantyDetails;
