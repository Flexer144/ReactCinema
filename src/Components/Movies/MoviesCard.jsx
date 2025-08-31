import { Link } from "react-router-dom";

export default function MoviesCard({ id, rating, cardImageUrl }) {
  let ratingColor = "";
  if (rating <= 6) ratingColor = "red-rating";
  else if (rating > 6 && rating <= 8.5) ratingColor = "green-rating";
  else if (rating >= 8.5) ratingColor = "legend-rating";

  return (
    <Link className="movies__card" to={`/movie/${id}`}>
      <div className="div__movie-card-image">
        <div className={`movies__card-rating ${ratingColor}`}>
          {rating}
        </div>
        <img src={cardImageUrl} className="movie-img" alt="" />
      </div>
    </Link>
  );
}