import PropTypes from "prop-types";
import styles from "./RatingButton.module.css";

function RatingButton({ value, totalRatings, selectedRating, onClick }) {
  const isSelected = selectedRating === value;
  
  // Renders a single rating button with the given value
  return (
    <button
      className={`${styles.ratingButton} ${isSelected ? styles.selected : ""}`}
      aria-label={`Rate ${value} out of ${totalRatings}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
}

// Validate props
RatingButton.propTypes = {
  // Ensures props is a required number
  value: PropTypes.number.isRequired,
  totalRatings: PropTypes.number.isRequired,
  selectedRating: PropTypes.number,
  // Ensures 'onClick' is a function
  onClick: PropTypes.func.isRequired,
};

export default RatingButton;
