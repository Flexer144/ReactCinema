import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchSelectedMovie } from '../../Redux/slices/movieSlice';
import { searchFavoriteMovie } from '../../Redux/slices/favoriteSlice';
import { useLocation } from 'react-router-dom';

export default function FilterSearch(bul){
  const [searchOpen, setSearchOpen] = useState(false);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermF, setSearchTermF] = useState("");
  const { filteredMovie } = useSelector(store => store.movies);
  const location = useLocation();
  const containerRef = useRef(null);

  const emitOpenEvent = (open) => {
    document.dispatchEvent(new CustomEvent('search-open-change', { detail: { open } }));
  };

  const toggleSearch = () => {
    setSearchOpen(prev => {
      const next = !prev;
      // эмитим событие сразу (можно и в useEffect, но тут проще)
      emitOpenEvent(next);
      return next;
    });
  };

  useEffect(() => {
    function handleClickOutside(event) {
      const target = event.target;
      const resultsContainer = document.querySelector('.show-filtered-movie__container');

      const clickedInsideSearch = containerRef.current && containerRef.current.contains(target);
      const clickedInsideResults = resultsContainer && resultsContainer.contains(target);

      // если клик не в инпуте/иконке и не в контейнере результатов — закрываем оба
      if (!clickedInsideSearch && !clickedInsideResults) {
        if (searchOpen) {
          setSearchOpen(false);
          emitOpenEvent(false);
        }
      }
    }

    if (searchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [searchOpen]);

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
    <div className='filter__search' ref={containerRef}>
      {
        location.pathname === '/favorites'
        ? (<input
            className={`search-input ${searchOpen ? 'open' : ''}`}
            type="text"
            value={searchTermF}
            onChange={e => setSearchTermF(e.target.value)}
            placeholder="Введите название фильма"
          />)
        : (<input
            className={`search-input ${searchOpen ? 'open' : ''}`}
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Введите название фильма"
          />)
      }
      <i onClick={toggleSearch} className="fa fa-search" aria-hidden="true" />
    </div>
  )
}
