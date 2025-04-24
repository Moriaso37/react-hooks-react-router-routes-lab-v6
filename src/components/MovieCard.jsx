
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      <div className="genres">
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
    </div>
  );
}

export default MovieCard;
