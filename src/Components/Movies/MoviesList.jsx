import MoviesCard from "./MoviesCard.jsx"
import { useSelector } from "react-redux";
import SkeletonFilms from "../Skeletons/SkeletonFilms.jsx";
import { useLocation } from "react-router-dom";
import FavoriteMovieList from "./FavoriteMovieList.jsx";
import SkeletonMovieList from "./SkeletonMovieList.jsx";
import MainMovieCard from "./MainMovieCard.jsx";

export default function MoviesList(){

  const location = useLocation()
  const {films, status, filteredMovie, filteredMovieByCategory} = useSelector((state)=>state.movies)
  const {favoriteMovie, filteredFavoriteMovie} = useSelector((state)=> state.favorite)
  console.log(films)
  return(
    <div id="movies" className="movies anchor">
      {
        location.pathname === '/favorites'
        ? status === "loading"
          ? (<SkeletonMovieList films={films} favoriteMovie={favoriteMovie}/>)
          : (<FavoriteMovieList favorites={{favoriteMovie, filteredFavoriteMovie, filteredMovieByCategory}}/>)
        : status === "loading"
          ? (<SkeletonMovieList films={films} favoriteMovie={favoriteMovie} />) 
          : (<MainMovieCard films={{films, filteredMovie, filteredMovieByCategory}}/>)
      }
    </div>
  )
}






// location.pathname === '/' 
//         ? (
//           status === 'loading' ? (
//             [... new Array(19)].map((value, index)=><SkeletonFilms key={index}/>)
//           ) : (
//             films.map((value, index) => <MoviesCard key={index} {...value}/>)
//           )
//         )
//         : (
//           statusFavorite === 'loading' ? (
//             [... new Array(19)].map((value, index)=><SkeletonFilms key={index}/>)
//           ) : (
//             favoriteMovie.length> 0 
//             ? (favoriteMovie.map((value, index) => <MoviesCard key={index} {...value}/>))
//             : <p className="favorite-text">У Вас не избранных фильмов</p>
//           )
//         )











// const dispatch = useDispatch()
//   const films = useSelector((state)=>{
//     return state.movies.films;
//   })
//   useEffect(()=>{
//     dispatch(fetchMovie())
//   },[])