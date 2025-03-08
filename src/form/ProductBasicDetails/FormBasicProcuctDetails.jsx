import InputField from "../../reusable/inputField/InputField.jsx";
import PropTypes from "prop-types";

const FormBasicProductDetails = ({ onclick }) => {
  return (
    <div>
      <form className="max-w-sm mx-auto mt-10">
        <div>
          <h1 className="font-bold text-lg mb-5 flex justify-center">
            Product Basic Details
          </h1>
        </div>
        <InputField id="name" type="text" label="Enter Product Name" />
        <InputField id="quantity" type="number" label="Product Quantity" />
        <InputField id="price" type="number" label="Product Price" />
        <div className="flex justify-end">
          <button type="button" className="blue-btn" onClick={onclick}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

FormBasicProductDetails.propTypes = {
  onclick: PropTypes.func.isRequired,
};
export default FormBasicProductDetails;
