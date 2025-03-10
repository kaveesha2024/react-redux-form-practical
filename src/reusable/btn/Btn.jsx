import PropTypes from "prop-types";

const Btn = ({ func, btnName, type }) => {
  return (
    <div>
      <button type={type} className="blue-btn" onClick={func}>
        {btnName}
      </button>
    </div>
  );
};

Btn.propTypes = {
  func: PropTypes.func,
  btnName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default Btn;
