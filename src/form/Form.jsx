import InputField from "../reusable/inputField/InputField.jsx";

const Form = () => {
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
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Form;
