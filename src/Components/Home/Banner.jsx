import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState } from "react";
import AddFavorite from "../Favorites/AddFavorite";

const getRandomMovies = (arr, count) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function Banner(){
const test='https://kinoflex.ru/media/backdrops/uzhasaiushchii3-15275f62b07911ef8c05ac1f6bb935e8.jpg'
const {films} = useSelector((state)=>state.movies)
const [carouselMovies, setCarouselMovies] = useState([])

useEffect(()=>{
  if(films.length > 0){
    const random = getRandomMovies(films, 5);
    setCarouselMovies(random)
  }
},[films])

  return(
    <Swiper
      key={carouselMovies.length}
      modules={[Navigation, Pagination, Autoplay]}
      navigation={true}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      className="mySwiper"
      touchStartPreventDefault={false} 
    >
      {carouselMovies.map(movie => (
        <SwiperSlide key={movie.id}>
          <div className="header__banner">
            <img src={movie.mainImageUrl} alt={movie.title} className="banner-img" />
            
            <div className="banner-info">
              <div className="banner-info-text">
                <p className="banner-title">{movie.title}</p>
                <p title={movie.description} className="banner-description">{movie.description}</p>
              </div>

              <div className="banner-button">
                  <Link to={`/movie/${movie.id}`} className="favorites-button">
                    <button className="button-play">
                      Смотреть фильм
                      <img
                        className="play-img"
                        width="25"
                        height="25"
                        src="https://img.icons8.com/ios-filled/50/FFFFFF/play--v1.png"
                      />
                    </button>
                  </Link>
                <Link to={`/movie/${movie.id}`} className="movies-button">
                  О фильме
                </Link>
                <AddFavorite {...movie}/>
              </div>
            </div>
            <div className="gradient__overlay-main-banner"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    
  );
};
