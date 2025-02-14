import PropTypes from "prop-types";

function SubmitButton({ onSubmit }) {
  return (
    <button type="button" onClick={onSubmit}>
      SUBMIT
    </button>
  );
}

// Validates prop
SubmitButton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SubmitButton;
