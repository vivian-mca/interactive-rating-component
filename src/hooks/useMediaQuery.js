import { useState, useEffect } from "react";

// Checks if the current screen size matches a given media query.

function useMediaQuery(query) {
  // Tracks whether the media query matches or not
  const [matches, setMatches] = useState(() => {
    return window.matchMedia(query).matches; // Initialize state based on current match status (to avoid hydration mismatches in SSR)
  });

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query); // Create a media query list object
    const updateMatch = (event) => setMatches(event.matches); // Update state when the media query match status changes

    mediaQueryList.addEventListener("change", updateMatch); // Attach the event listener
    return () => {
      mediaQueryList.removeEventListener("change", updateMatch); // Cleanup function to remove the event listener when the component unmounts
    };
  }, [query]); // Runs only when the query changes

  return matches; // Return the boolean value indicating if the query matches
}

export default useMediaQuery;
