import PropTypes from "prop-types";

const H1Heading = ({heading}) => {
    return (
        <h1 className="font-bold text-lg mb-5 flex justify-center">
            {heading}
        </h1>
    );
};

H1Heading.propType = {
    heading: PropTypes.string.isRequired
}
export default H1Heading;