import { useState, useEffect } from "react";
import { Card, ThankYouCard } from "./components";

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
    window.history.pushState({}, "", "?submitted=true"); // Adds to browser history
    setIsSubmitted(true);
  };

  // Listen for browser back button
  useEffect(() => {
    const handlePopState = () => {
      setIsSubmitted(false); // Reset submission state
      setSelectedRating(null); // Reset rating selection
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div>
      {!isSubmitted ? ( // If not submitted, show rating options
        <Card
          ratings={ratings}
          setSelectedRating={setSelectedRating}
          handleSubmit={handleSubmit}
        />
      ) : (
        // If submitted, show Thank You display message
        <ThankYouCard value={selectedRating} totalRatings={ratings.length} /> // Shows chosen rating
      )}
    </div>
  );
}

export default App;
