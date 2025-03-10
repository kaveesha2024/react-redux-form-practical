import InputField from "../../reusable/inputField/InputField.jsx";
import PropTypes from "prop-types";
import Btn from "../../reusable/btn/Btn.jsx";
import H1Heading from "../../reusable/H1/H1Heading.jsx";
import { useDispatch, useSelector } from "react-redux";
import {resetFormInputFieldAreas, storeProductBasicDetails} from "../../features/slice/formSlice.js";
import { useEffect, useState } from "react";

const FormBasicProductDetails = ({
  formChanger,
  setProductBasicDetails,
  productBasicDetails,
}) => {
  const dispatch = useDispatch();
  const [
    existingDetailsOfProductBasicForm,
    setExistingDetailsOfProductBasicForm,
  ] = useState({});
  const alreadyAddedBasicProductDetails = useSelector(
    (state) => state.value.product.basicProductDetails,
  );
  useEffect(() => {
    setExistingDetailsOfProductBasicForm(alreadyAddedBasicProductDetails);
  }, [alreadyAddedBasicProductDetails]);

  const inputFieldDataHandler = (event) => {
    const { name, value } = event.target;
    setProductBasicDetails((prevState) => ({ ...prevState, [name]: value }));
  };
  const uploadBasicProductDetails = (event) => {
    event.preventDefault();
    if (productBasicDetails.name !== '') {
      dispatch(storeProductBasicDetails(productBasicDetails));
      formChanger();
      return
    }
    dispatch(storeProductBasicDetails(existingDetailsOfProductBasicForm));
    formChanger();

  };
  const resetButton = () => {dispatch(resetFormInputFieldAreas())};
  return (
    <div>
      <form
        className="max-w-sm mx-auto mt-10"
        onSubmit={uploadBasicProductDetails}
      >
        <div>
          <H1Heading heading="Product Basic Details" />
        </div>
        <InputField
          id="name"
          type="text"
          label="Enter Product Name"
          onChange={inputFieldDataHandler}
          defaultValue={existingDetailsOfProductBasicForm.name}
        />
        <InputField
          id="quantity"
          type="number"
          label="Product Quantity"
          defaultValue={existingDetailsOfProductBasicForm.quantity}
          onChange={inputFieldDataHandler}
        />
        <InputField
          id="price"
          type="number"
          label="Product Price"
          defaultValue={existingDetailsOfProductBasicForm.price}
          onChange={inputFieldDataHandler}
        />
        <div className="flex justify-between">
          <Btn func={resetButton} btnName="reset" type="button" />
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
