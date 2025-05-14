import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { searchSelectedMovie } from '../../Redux/slices/movieSlice';
import { searchFavoriteMovie } from '../../Redux/slices/favoriteSlice';
import { useLocation } from 'react-router-dom';

export default function FilterSearch(){

  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermF, setSearchTermF] = useState("");
  const { filteredMovie } = useSelector(store => store.movies)
  const location = useLocation()

  //Поиск по основным фильмам
  useEffect(() => {
    const handler = setTimeout(()=>{
      dispatch(searchSelectedMovie(searchTerm))
    }, 500)
    return () => clearTimeout(handler)
  }, [searchTerm, dispatch])

  //Поиск по избранным фильмам
  useEffect(() => {
    const handler2 = setTimeout(()=>{
      dispatch(searchFavoriteMovie(searchTermF))
    }, 500)
    return () => clearTimeout(handler2)
  }, [searchTermF, dispatch])


  return(
    <>
      <div className="filter__search">
        {
          location.pathname === '/favorites' 
          ? (<input type="text" value={searchTermF} onChange={e => setSearchTermF(e.target.value)} placeholder="Search..." />)
          : (<input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search..." />)
        }
          <button>
              <i className="fa fa-search"></i>
          </button>
      </div>
    </>
  )
}