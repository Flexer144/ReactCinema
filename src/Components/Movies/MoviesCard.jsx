import star from '../../assets/icons/star.png'
import {Link} from "react-router-dom"

export default function MoviesCard(value){
  return(
    <Link className="movies__card" to={`/movie/${value.id}`}>
      <div className="movies__card-rating">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
      </div>
      <img src={value.cardImageUrl} alt="" />
    </Link>
  )
}