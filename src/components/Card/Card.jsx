import { star } from "../../assets";

function Card() {
  return (
    <>
      <img src={star} alt="" aria-hidden="true" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </>
  );
}

export default Card;
