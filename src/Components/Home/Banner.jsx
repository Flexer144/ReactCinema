import video from '../../assets/videos/Титаник (1997) «Titanic» - Трейлер (Trailer) - Что посмотреть_ (1080p, h264).mp4'
import background from '../../assets/background.jpg'
import {Link} from "react-router-dom"

export default function Banner(){
const test='https://kinoflex.ru/media/backdrops/uzhasaiushchii3-15275f62b07911ef8c05ac1f6bb935e8.jpg'
  return(
    <div className="header__banner">
          <div className='banner-button'>
            <div className="baner-button-play">
              <img className='play-img' width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/play--v1.png"/>
              <Link to="/favorites" className='favorites-button'><button>Смотреть фильм</button></Link>
            </div>
            <a className='movies-button' href="#categoryes">О фильме</a>
          </div>
      <img src={test} alt="" />

    </div>
  )
}