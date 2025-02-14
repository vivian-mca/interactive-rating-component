import { RatingButton } from "../../components";
import PropTypes from "prop-types";

function RatingGroup({ ratings, setSelectedRating }) {
  return (
    <>
      {/* Loop through the ratings array and render a RatingOption component for each value */}
      {ratings.map((num) => (
        <RatingButton
          key={num}
          value={num}
          totalRatings={ratings.length}
          onClick={() => setSelectedRating(num)} // On click, it stores the chosen rating
        />
      ))}
    </>
  );
}

// Validate props
RatingGroup.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.number).isRequired, // Ensures prop is an array of numbers
  setSelectedRating: PropTypes.func.isRequired, // Ensures prop is a function
};

export default RatingGroup;
