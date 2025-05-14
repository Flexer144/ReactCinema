import { useLocation } from "react-router-dom"
import SkeletonFilms from "../Skeletons/SkeletonFilms"

const SkeletonMovieList = ({ films, favoriteMovie }) => {
  const location = useLocation();
  if (location.pathname === '/favorites') {
    return ([...new Array(favoriteMovie.length)].map((_, index) => <SkeletonFilms key={index}/>));
  } else {
    return ([...new Array(33)].map((_, index) => <SkeletonFilms key={index}/>));
  }
};

export default SkeletonMovieList