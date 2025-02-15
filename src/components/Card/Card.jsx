import { RatingGroup } from "../../containers";
import { SubmitButton } from "../../components";
import PropTypes from "prop-types";

import styles from "./Card.module.css";
import { star } from "../../assets";

function Card({ ratings, setSelectedRating, handleSubmit }) {
  return (
    <div className={`${styles.card} margin-inline-sm padding-sm`}>
      <div className={styles.container__icon}>
        <img src={star} alt="" aria-hidden="true" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RatingGroup ratings={ratings} setSelectedRating={setSelectedRating} />
      <SubmitButton onSubmit={handleSubmit} />
    </div>
  );
}

// Validate props
Card.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.number).isRequired,
  setSelectedRating: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Card;
