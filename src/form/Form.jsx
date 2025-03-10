import FormBasicProductDetails from "./ProductBasicDetails/FormBasicProcuctDetails.jsx";
import FormWarrantyDetails from "./ProductWarrantyDetails/FormWarrantyDetails.jsx";
import { useState } from "react";

const Form = () => {
  const [formNumber, setFormNumber] = useState(1);
  const [productBasicDetails, setProductBasicDetails] = useState({
    name: "",
    quantity: 0,
    price: 0,
  });

  const changeFormToNext = () => {
    setFormNumber((prevState) => prevState + 1);
  };
  const changeFormBack = () => {
    setFormNumber((prevState) => prevState - 1);
  };
  const productFormMapper = {
    1: (
      <FormBasicProductDetails
        formChanger={changeFormToNext}
        setProductBasicDetails={setProductBasicDetails}
        productBasicDetails={productBasicDetails}
      />
    ),
    2: <FormWarrantyDetails formChanger={changeFormBack} />,
  };
  const formRenderer = () => {
    return productFormMapper[formNumber];
  };
  return <div>{formRenderer()}</div>;
};
export default Form;
