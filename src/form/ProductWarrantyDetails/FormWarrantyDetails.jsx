import InputField from "../../reusable/inputField/InputField.jsx";
import PropTypes from "prop-types";
import Btn from "../../reusable/btn/Btn.jsx";
import H1Heading from "../../reusable/H1/H1Heading.jsx";

const FormWarrantyDetails = ({ formChanger }) => {
  const inputDataHandle = () => {};
  return (
    <div>
      <form className="max-w-sm mx-auto mt-10">
        <div>
          <H1Heading heading="Warranty Details" />
        </div>
        <InputField
          id="name"
          type="text"
          label="Warranty Period"
          onChange={inputDataHandle}
        />
        <InputField
          id="quantity"
          type="text"
          label="Warranty Start Date"
          onChange={inputDataHandle}
        />
        <InputField
          id="price"
          type="text"
          label="Warranty End Date"
          onChange={inputDataHandle}
        />
        <div className="flex justify-between">
          <Btn type="button" func={formChanger} btnName="Back" />
          <Btn type="button" func={formChanger} btnName="ADD" />
        </div>
      </form>
    </div>
  );
};
FormWarrantyDetails.propTypes = {
  formChanger: PropTypes.func.isRequired,
};
export default FormWarrantyDetails;
