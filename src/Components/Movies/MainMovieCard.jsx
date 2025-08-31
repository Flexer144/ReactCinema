import MoviesCard from "./MoviesCard"

const MainMovieCard = ({ films }) => {
  let moviesToShow = []
  moviesToShow = films.films
  return moviesToShow.map((value, index) => <MoviesCard key={index} {...value}/>)
}

export default MainMovieCard


// if(films.filteredMovie.length > 0){
//     moviesToShow = films.filteredMovie
//   } else 

  //Для отображения по фильтру
  // if(films.filteredMovieByCategory.length > 0){
  //   moviesToShow = films.filteredMovieByCategory
  // } else{
  //   moviesToShow = films.films
  // }