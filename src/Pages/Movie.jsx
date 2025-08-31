import { useParams } from 'react-router-dom'
import movieImage from '../assets/Blade Runner 2049(2).jpg'
import MainInfoBottom from '../Components/Movie/MainInfoBottom'
import MainInfoTop from '../Components/Movie/MainInfoTop'
import VideoNaw from '../Components/Movie/VideoNaw'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { searchMovieInState } from '../Redux/slices/movieSlice'
import SkeletonMovie from '../Components/Skeletons/SkeletonMovie'


export default function Movie(){
  const {id} = useParams()
  const dispatch = useDispatch()

  const searchFilm = useSelector(store => store.movies.searchFilm)   
  const status = useSelector(store => store.movies.status) 

  useEffect(()=>{
    if(status === 'fulfilled'){
      dispatch(searchMovieInState(id))
    }
  },[dispatch, status]) 

  // const test='https://images-s.kinorium.com/movie/poster/9827236/w1500_54691969.jpg'

  return(
    <>
        <div className="image-wrapper">
          {
            searchFilm.status === 'loading' ? (<p>Loading...</p>) : (
              <img src={searchFilm.film.mainImageUrl} alt="" />)
              
          }
        </div>
      <main>
        <div className="main__info">
            {
              searchFilm.status === 'loading'
              ? (<SkeletonMovie />) 
              : (
                <>
                  <MainInfoTop value={{...searchFilm}}/>
                  <VideoNaw value={{...searchFilm}}/>
                  <MainInfoBottom value={{...searchFilm}}/>
                </>
              )
            }
        </div>
      </main>
    </>
  )
}