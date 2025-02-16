import useMediaQuery from "../../hooks/useMediaQuery";
import { RatingGroup } from "../../containers";
import { SubmitButton } from "../../components";
import PropTypes from "prop-types";

import styles from "./Card.module.css";
import { star } from "../../assets";

function Card({ ratings, selectedRating, setSelectedRating, handleSubmit }) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div
      className={`[ ${
        isDesktop ? "" : "stack"
      } ] [ card padding-top-sm padding-btm-sm padding-inline ]`}
    >
      <div className={styles.container__icon}>
        <img className={styles.icon} src={star} alt="" aria-hidden="true" />
      </div>
      <h1 className={`${styles.header} stack--exception-md`}>How did we do?</h1>
      <p className={`${styles.body} stack--exception-lg`}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RatingGroup
        ratings={ratings}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
      />
      <SubmitButton onSubmit={handleSubmit} />
    </div>
  );
}

// Validate props
Card.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectedRating: PropTypes.number,
  setSelectedRating: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Card;
