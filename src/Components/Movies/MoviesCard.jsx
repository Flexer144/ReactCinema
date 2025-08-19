import star from '../../assets/icons/star.png'
import {Link} from "react-router-dom"

export default function MoviesCard(value){
  let ratingColor
    if(value.rating <= 6){
        ratingColor = 'red-rating'
    } else if(value.rating > 6 && value.rating <= 8.5){
        ratingColor = 'green-rating'
    } else if(value.rating >= 8.5){
        ratingColor = 'legend-rating'
    }
  return(
    <Link className="movies__card" to={`/movie/${value.id}`}>
      <div className='div__movie-card-image'>
        <div className={`movies__card-rating ${ratingColor}`}>
          {value.rating}
        </div>
        <img src={value.cardImageUrl} className='movie-img' alt="" />
    </div>
    </Link>
  )
}