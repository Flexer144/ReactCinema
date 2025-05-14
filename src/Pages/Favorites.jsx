import Filter from "../Components/Filter/Filter";
import MoviesList from "../Components/Movies/MoviesList";
import MoviesScroll from "../Components/Movies/MoviesScroll";
import FavoritesList from "../Components/Favorites/FavoritesList";
import FavoritesBanner from "../Components/Favorites/FavoritesBanner";

export default function Favorites(){

  return(
  <>
    <FavoritesBanner />
    <div className="container">
        <Filter />
        <div className="favorites_movies">
            <FavoritesList />
            <MoviesList />
        </div>
        <MoviesScroll />
    </div>
  </>
  )
}