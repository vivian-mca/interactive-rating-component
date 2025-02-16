import styles from "./SubmitButton.module.css";

import PropTypes from "prop-types";

function SubmitButton({ onSubmit }) {
  return (
    <button className={styles.submitButton} type="button" onClick={onSubmit}>
      SUBMIT
    </button>
  );
}

// Validates prop
SubmitButton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SubmitButton;
