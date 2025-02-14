import PropTypes from "prop-types";

function RatingButton({ value, totalRatings, onClick }) {
  // Renders a single rating button with the given value
  return (
    <button
      className="rating-button"
      aria-label={`Rate ${value} out of ${totalRatings}`}
      onClick={onClick} // click event to update rating
    >
      {value}
    </button>
  );
}

// Validate props
RatingButton.propTypes = {
  // Ensures 'value' and `total Ratings` is a required number
  value: PropTypes.number.isRequired,
  totalRatings: PropTypes.number.isRequired,
  // Ensures 'onClick' is a function
  onClick: PropTypes.func.isRequired,
};

export default RatingButton;
