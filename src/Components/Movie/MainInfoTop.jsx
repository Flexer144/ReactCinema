import SkeletonMovie from "../Skeletons/SkeletonMovie";
import Rating from "./Rating";

export default function MainInfoTop(props){
  const dataFilm = props.value.film

  return(
    <>
      <div className="main__info-left">
        <div className="main__info-left-title">
            <p title={dataFilm.title}>{dataFilm.title}</p>
        </div>
        <div className="main__info-left-categoryes">
            <div className="category-movie">
              {
                dataFilm.categoryes.map((value, index)=>(
                  <p title={value} key={index}>{value}</p>
                ))
              }
            </div>
            <Rating />
        </div>
        <div title={dataFilm.description} className="main__info-left-about">
            <p>Описание</p>
            <p>{dataFilm.description}</p>
        </div>
    </div>
    </>
  )
}