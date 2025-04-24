// components/Movie.js
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();

  // Simulate fetching the movie data
  const movie = {
    1: {
      title: "Doctor Strange",
      time: 115,
      genres: ["Action", "Adventure", "Fantasy"]
    }
  }[id] || { title: "Unknown", time: 0, genres: [] };

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
    </div>
  );
}

export default Movie;
