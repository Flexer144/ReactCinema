import { useDispatch, useSelector } from 'react-redux'
import star from '../../assets/icons/star.png'
import {Link} from "react-router-dom"
import { useState } from 'react'
import { postAddFavorite } from '../../Redux/slices/favoriteSlice'

export default function SearchMovieCard(value){
    const [isLike, setIsLike] = useState(false)
    const dispatch = useDispatch()
    const favoriteMovie = useSelector(store => store.favorite.favoriteMovie)
console.log(value)
    const isLiked = Array.isArray(favoriteMovie) && favoriteMovie.some(f => f.id === value.id);

    let ratingColor
    if(value.rating <= 5.5){
        ratingColor = 'red-rating'
    } else if(value.rating > 5.5 && value.rating <= 8.5){
        ratingColor = 'green-rating'
    } else if(value.rating >= 8.5){
        ratingColor = 'legend-rating'
    }
  return(
    
    <div className='movie-wrapper'>
    <Link className="movies__card" to={`/movie/${value.id}`}>
        <div className='div__movie-card-image'>
            <div className={`movies__card-rating ${ratingColor}`}>{value.rating}</div>
                <img src={value.cardImageUrl} className='movie-img' alt="" />
                <div className='shadov-movie'></div>
        </div>
    </Link>

    <div className="movie-info">
        <h1 title={value.title} className="movie-title">{value.title}</h1>
        <p title={value.description} className="movie-desc">{value.description}</p>
        {/* любые кнопки, метаданные и т.д. */}
    </div>

    <button className="favorite-add-search" onClick={()=>dispatch(postAddFavorite(value))}>
        { isLiked
        ? (<img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png" alt="liked"/>)
        : (<img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/like--v1.png" alt="like"/>)
        }
    </button>
    </div>
  )
}