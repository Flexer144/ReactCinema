import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MoviesCard from '../Movies/MoviesCard';
import SearchMovieCard from '../Movies/SearchMovieCard';

function ShowFilteredSearch(){
  const { filteredMovie } = useSelector(store => store.movies);
  const [searchOpenRemote, setSearchOpenRemote] = useState(false);

  useEffect(() => {
    function handler(e) {
      const { open } = e.detail || {};
      setSearchOpenRemote(Boolean(open));
    }
    document.addEventListener('search-open-change', handler);
    return () => document.removeEventListener('search-open-change', handler);
  }, []);

  const shouldBeOpen = searchOpenRemote && Array.isArray(filteredMovie) && filteredMovie.length > 0;

  return(
    <div className={`show-filtered-movie__container ${shouldBeOpen ? 'open' : ''}`}>
      <div className="show-filtered-movie">
        {
            filteredMovie.map((value, index) => <SearchMovieCard key={index} {...value}/>)
        }
      </div>
    </div>
  )
}

export default ShowFilteredSearch;
