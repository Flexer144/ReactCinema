import { useEffect, useRef, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { searchSelectedMovie } from '../../Redux/slices/movieSlice';
import { searchFavoriteMovie } from '../../Redux/slices/favoriteSlice';
import { useLocation } from 'react-router-dom';

export default function FilterSearch(bul){
  const [searchOpen, setSearchOpen] = useState(false)
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermF, setSearchTermF] = useState("");
  const { filteredMovie } = useSelector(store => store.movies)
  const location = useLocation()
  const containerRef = useRef(null)

  const toggleSearch = () => setSearchOpen(prev => !prev)
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setSearchOpen(false)
      }
    }
    if (searchOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [searchOpen])

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
      <div className='filter__search' ref={containerRef}>
        {
          location.pathname === '/favorites' 
          ? (<input className={`search-input ${searchOpen ? 'open' : ''}`} type="text" value={searchTermF} onChange={e => setSearchTermF(e.target.value)} placeholder="Введите название фильма" />)
          : (<input className={`search-input ${searchOpen ? 'open' : ''}`} type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Введите название фильма" />)
        }
        <i onClick={toggleSearch} className="fa fa-search"></i>
      </div>
    </>
  )
}