import Banner from '../Components/Home/Banner.jsx'
import Filter from '../Components/Filter/Filter.jsx'
import MoviesList from '../Components/Movies/MoviesList.jsx'
import MoviesScroll from '../Components/Movies/MoviesScroll.jsx'

export default function Home(){

  return (
    <>
      <Banner />
      <div className="container">
        <Filter />
        <MoviesList />
        <MoviesScroll />
      </div>
    </>
)
} 