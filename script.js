// Set up event listener for when the user selects a genre
document.getElementById("genre").addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = document.getElementById("genre").value;
  let movieList = [];

  // Add movies to the movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    movieList.push("Superbad", "The Mask", "Mean Girls", "Step Brothers");
    console.log("You selected 'Comedy'");
  } else if (selectedGenre === "Action") {
    movieList.push("Mad Max: Fury Road", "John Wick", "Die Hard", "Black Panther");
    console.log("You selected 'Action'");
  } else if (selectedGenre === "Drama") {
    movieList.push("The Pursuit of Happyness", "Forrest Gump", "The Shawshank Redemption", "The Green Mile");
    console.log("You selected 'Drama'");
  } else if (selectedGenre === "Sci-Fi") {
    movieList.push("Interstellar", "The Matrix", "Inception", "Arrival");
    console.log("You selected 'Sci-Fi'");
  }

  // Display the list of movies on the page
  document.getElementById("movieRecommendations").innerText = `Enjoy: ${movieList.join(", ")}!`;
});
