import useMediaQuery from "../../hooks/useMediaQuery";
import PropTypes from "prop-types";

import { illustration } from "../../assets";
import styles from "./ThankYouCard.module.css";

function ThankYou({ value, totalRatings }) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="[ stack ] [ card padding-top-md padding-btm-md padding-inline text-center ]">
      <img
        className="center-img"
        src={illustration}
        alt=""
        aria-hidden="true"
      />
      <p className={styles.displayResult}>
        You selected {value} out of {totalRatings}
      </p>
      <h1>Thank you!</h1>
      <p className={isDesktop ? styles.thankYouMessage : "stack--exception-lg"}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

ThankYou.propTypes = {
  value: PropTypes.number,
  totalRatings: PropTypes.number.isRequired,
};

export default ThankYou;
