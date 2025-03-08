import FormBasicProductDetails from "./ProductBasicDetails/FormBasicProcuctDetails.jsx";
import FormWarrantyDetails from "./ProductWarrantyDetails/FormWarrantyDetails.jsx";
import { useState } from "react";

const Form = () => {
  const [formNumber, setFormNumber] = useState(1);
  const changeFormToNext = () => {
    setFormNumber(prevState => prevState + 1);
  };
  const changeFormBack = () => {
    setFormNumber(prevState => prevState - 1);
  };
  const productFormMapper = {
    1: <FormBasicProductDetails onclick={changeFormToNext} />,
    2: <FormWarrantyDetails onclick={changeFormBack} />,
  };
  const formRenderer = () => {
    return productFormMapper[formNumber];
  };
  return <div>{formRenderer()}</div>;
};
export default Form;
