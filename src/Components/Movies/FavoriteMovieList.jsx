import MoviesCard from "./MoviesCard"

const FavoriteMovieList = ({ favorites }) => {
  
  let movieShow = []
  let filteredCategory = favorites.filteredMovieByCategory

  if(favorites.favoriteMovie.length > 0){
     if(favorites.filteredFavoriteMovie.length > 0){
        movieShow = favorites.filteredFavoriteMovie
      } else {
        if(filteredCategory.length > 0){
          movieShow = filteredCategory.filter(movie => { return favorites.favoriteMovie.some(movieTitle => movieTitle.title === movie.title)})
          if(movieShow.length === 0){
            return <p className="favorite-text">У вас нет фильмов выбраной категории</p>
          }
        } else {
          movieShow = favorites.favoriteMovie
        }
      } 
    return movieShow.map((value, index) => <MoviesCard key={index} {...value}/>)
  }else{
    return <p className="favorite-text">У вас нет избранных фильмов</p>
  }
}

export default FavoriteMovieList
