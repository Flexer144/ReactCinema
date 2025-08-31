import Banner from '../Components/Home/Banner.jsx'
import Filter from '../Components/Filter/Filter.jsx'
import MoviesList from '../Components/Movies/MoviesList.jsx'
import MoviesScroll from '../Components/Movies/MoviesScroll.jsx'
import MoviesCarousel from '../Components/Movies/MoviesCarousel.jsx'
import { useSelector } from 'react-redux'
import FilterCategoryes from '../Components/Filter/FilterCategoryes.jsx'

export default function Home(){
  const {films} = useSelector((state)=>state.movies)
  console.log(films)
  const bestComedies = films.filter(f => f.category.includes("Drama"));

  return (
    <>
      <Banner />
      <div className="container">
        <Filter />
        <MoviesList/>
        <MoviesCarousel title="ЛЮБИМЫЕ КОМЕДИИ" films={bestComedies} />
        <MoviesScroll />
      </div>
    </>
)
} 