// MoviesCarousel.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import MoviesCard from "./MoviesCard";


export default function MoviesCarousel({ title, films }) {
  const [hovered, setHovered] = useState(null); // индекс наведённой карточки

  return (
    <div className="movies-carousel-wrapper">
      <h3 className="movies-carousel-title">{title}</h3>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
  slidesPerView={2}
  breakpoints={{
    640: { slidesPerView: 4 },
    1024: { slidesPerView: 8 }, 
    1920: {slidesPerView: 10 }
  }}
        navigation
        className="movies-swiper"
      >
        {films.map((film, index) => {
          // вычислим класс соседей
          let extraClass = "";
          if (hovered !== null) {
            if (hovered === index) extraClass = "hovered";
            else if (index === hovered - 1) extraClass = "adjacent-left";
            else if (index === hovered + 1) extraClass = "adjacent-right";
            else extraClass = "not-focused";
          }

          return (
            <SwiperSlide
              key={film.id ?? index}
              className={`swiper-slide-custom ${extraClass}`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <MoviesCard {...film} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
