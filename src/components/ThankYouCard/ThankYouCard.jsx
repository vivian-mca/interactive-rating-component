import { illustration } from "../../assets";
import styles from "./ThankYouCard.module.css";
import PropTypes from "prop-types";

function ThankYou({ value, totalRatings }) {
  return (
    <div className="[ stack ] [ card margin-inline padding-top-md padding-btm-md padding-inline text-center ]">
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
      <p className="stack--exception-lg">
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
