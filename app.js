alert("Click on the movie name to see the Trailer");

function randomPick() {
  const movies = [
    "The Dark Knight",
    "Avengers: Infinity War",
    "The Matrix"
  ];

  const randomIndex = Math.floor(Math.random() * movies.length);
  alert(" Random Pick: " + movies[randomIndex]);
}
