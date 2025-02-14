import { illustration } from "../../assets";
import PropTypes from "prop-types";

function ThankYou({ value, totalRatings }) {
  return (
    <>
      <img src={illustration} alt="" aria-hidden="true" />
      <p>
        You selected {value} out of {totalRatings}
      </p>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </>
  );
}

ThankYou.propTypes = {
  value: PropTypes.number,
  totalRatings: PropTypes.number.isRequired,
};

export default ThankYou;
