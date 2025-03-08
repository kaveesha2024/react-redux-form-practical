import PropTypes from "prop-types";

const Btn = ({ func, btnName }) => {
  return (
    <div>
      <button type="button" className="blue-btn" onClick={func}>
        {btnName}
      </button>
    </div>
  );
};

Btn.propTypes = {
  func: PropTypes.func.isRequired,
  btnName: PropTypes.string.isRequired,
};
export default Btn;
