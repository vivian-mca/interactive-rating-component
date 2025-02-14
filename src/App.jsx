import { useState } from "react";
import { Card, SubmitButton, ThankYouCard } from "./components";
import { RatingGroup } from "./container";

function App() {
  const [selectedRating, setSelectedRating] = useState(null); // Stores chosen rating
  const [isSubmitted, setIsSubmitted] = useState(false); // Tracks form submission
  // An array representing the available rating options
  // Modify this array to change the number of rating choices
  const ratings = [1, 2, 3, 4, 5];

  const handleSubmit = () => {
    if (!selectedRating) {
      alert("Please select a rating first!");
      return;
    }
    setIsSubmitted(true);
  }

  return (
    <div>
      {!isSubmitted ? ( // If not submitted, show rating options
        <>
          <Card />
          <RatingGroup ratings={ratings} setSelectedRating={setSelectedRating} />
          <SubmitButton onSubmit={handleSubmit} />
        </>
      ) : (
        // If submitted, show Thank You display message
        <ThankYouCard value={selectedRating} totalRatings={ratings.length} /> // Shows chosen rating
      )}
    </div>
  );
}

export default App;
