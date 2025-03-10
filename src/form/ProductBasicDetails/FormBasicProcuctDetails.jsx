import InputField from "../../reusable/inputField/InputField.jsx";
import PropTypes from "prop-types";
import Btn from "../../reusable/btn/Btn.jsx";
import H1Heading from "../../reusable/H1/H1Heading.jsx";
import {useDispatch} from "react-redux";
import {storeProductBasicDetails} from "../../features/slice/formSlice.js";

const FormBasicProductDetails = ({ formChanger, setProductBasicDetails, productBasicDetails }) => {
  const dispatch = useDispatch();
  const inputFieldDataHandler = (event) => {
    const {name, value} = event.target;
    setProductBasicDetails((prevState) => ({ ...prevState, [name]: value }));
  };
const uploadBasicProductDetails = (event) => {
  event.preventDefault();
  dispatch(storeProductBasicDetails(productBasicDetails))
  formChanger()
}
  return (
    <div>
      <form className="max-w-sm mx-auto mt-10" onSubmit={uploadBasicProductDetails}>
        <div>
          <H1Heading heading="Product Basic Details" />
        </div>
        <InputField
          id="name"
          type="text"
          label="Enter Product Name"
          onChange={inputFieldDataHandler}
        />
        <InputField
          id="quantity"
          type="number"
          label="Product Quantity"
          onChange={inputFieldDataHandler}
        />
        <InputField
          id="price"
          type="number"
          label="Product Price"
          onChange={inputFieldDataHandler}
        />
        <div className="flex justify-end">
          <Btn btnName="Next" type="submit" />
        </div>
      </form>
    </div>
  );
};

FormBasicProductDetails.propTypes = {
  formChanger: PropTypes.func.isRequired,
  setProductBasicDetails: PropTypes.func.isRequired,
  productBasicDetails: PropTypes.object.isRequired,
};
export default FormBasicProductDetails;
