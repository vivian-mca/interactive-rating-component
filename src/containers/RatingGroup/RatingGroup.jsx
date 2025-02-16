import { RatingButton } from "../../components";
import PropTypes from "prop-types";

import styles from "./RatingGroup.module.css";
function RatingGroup({ ratings, selectedRating, setSelectedRating }) {
  return (
    <div className={`${styles.ratingGroup} space-between`}>
      {/* Loop through the ratings array and render a RatingOption component for each value */}
      {ratings.map((num) => (
        <RatingButton
          key={num}
          value={num}
          totalRatings={ratings.length}
          selectedRating={selectedRating}
          onClick={setSelectedRating} // On click, it stores the chosen rating
        />
      ))}
    </div>
  );
}

// Validate props
RatingGroup.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.number).isRequired, // Ensures prop is an array of numbers
  selectedRating: PropTypes.number, // Ensures prop is a number
  setSelectedRating: PropTypes.func.isRequired, // Ensures prop is a function
};

export default RatingGroup;
