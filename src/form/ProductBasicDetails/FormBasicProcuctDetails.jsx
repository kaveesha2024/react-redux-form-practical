import InputField from "../../reusable/inputField/InputField.jsx";
import PropTypes from "prop-types";
import Btn from "../../reusable/btn/Btn.jsx";
import H1Heading from "../../reusable/H1/H1Heading.jsx";

const FormBasicProductDetails = ({ onclick }) => {
  return (
    <div>
      <form className="max-w-sm mx-auto mt-10">
        <div>
          <H1Heading heading="Product Basic Details" />
        </div>
        <InputField id="name" type="text" label="Enter Product Name" />
        <InputField id="quantity" type="number" label="Product Quantity" />
        <InputField id="price" type="number" label="Product Price" />
        <div className="flex justify-end">
          <Btn func={onclick} btnName="Next" />
        </div>
      </form>
    </div>
  );
};

FormBasicProductDetails.propTypes = {
  onclick: PropTypes.func.isRequired,
};
export default FormBasicProductDetails;
