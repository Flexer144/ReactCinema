import MoviesCard from "./MoviesCard"

const MainMovieCard = ({ films }) => {
  let moviesToShow = []
  if(films.filteredMovie.length > 0){
    moviesToShow = films.filteredMovie
  } else if(films.filteredMovieByCategory.length > 0){
    moviesToShow = films.filteredMovieByCategory
  } else{
    moviesToShow = films.films
  }
  return moviesToShow.map((value, index) => <MoviesCard key={index} {...value}/>)
}

export default MainMovieCard