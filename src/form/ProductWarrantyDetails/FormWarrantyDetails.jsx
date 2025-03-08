import InputField from "../../reusable/inputField/InputField.jsx";
import PropTypes from "prop-types";
import Btn from "../../reusable/btn/Btn.jsx";
import H1Heading from "../../reusable/H1/H1Heading.jsx";

const FormWarrantyDetails = ({ onclick }) => {
  return (
    <div>
      <form className="max-w-sm mx-auto mt-10">
        <div>
          <H1Heading heading="Warranty Details" />
        </div>
        <InputField id="name" type="text" label="Warranty Period" />
        <InputField id="quantity" type="text" label="Warranty Start Date" />
        <InputField id="price" type="text" label="Warranty End Date" />
        <div className="flex justify-between">
          <Btn func={onclick} btnName="Back" />
          <Btn func={onclick} btnName="ADD" />
        </div>
      </form>
    </div>
  );
};
FormWarrantyDetails.propTypes = {
  onclick: PropTypes.func.isRequired,
};
export default FormWarrantyDetails;
