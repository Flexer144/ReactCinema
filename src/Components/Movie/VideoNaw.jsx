import { useState } from "react"
import searchParam from "../../tools/searchParam.js";
import { useDispatch, useSelector } from "react-redux";
import { postAddFavorite } from "../../Redux/slices/favoriteSlice.js";

export default function VideoNaw({value}){

  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [isLike, setIsLike] = useState(false)
  const dispatch = useDispatch()

  const openPlayer = (url) => {
    setVideoUrl(url);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePlayer = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
    setVideoUrl('');
  };

  const trailerURL = searchParam(value.film.trailerUrl)
  const dataMovie = value.film
  
  const favoriteMovie = useSelector(store => store.favorite.favoriteMovie)
  const isLiked = Array.isArray(favoriteMovie) &&
                favoriteMovie.some(f => f.id === value.film.id);
 
  return(
    <>
      <div className='main__nav-button'>
        <button className="play-cinema" onClick={() => openPlayer('https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1')}>
          <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/play--v1.png"/>
          Смотреть фильм
        </button>
        <button className="trailer-cinema" onClick={() => openPlayer(`https://www.youtube.com/embed/${trailerURL}?autoplay=1`)}>Трейлер</button>
        <button className="favorite-add" onClick={()=>dispatch(postAddFavorite(dataMovie))}>
          {
            isLiked
            ? (<img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png" alt="like--v1"/>)
            : (<img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/like--v1.png" alt="like--v1"/>)
          }
        </button>
      </div>

      {isOpen && (
        <div className="player-overlay" onClick={(e) => e.target === e.currentTarget && closePlayer()}>
          <div className="player-container">
            <button className="close-button" onClick={closePlayer}>×</button>
            <iframe
              className="video-iframe"
              src={videoUrl}
              title="Video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  )
}