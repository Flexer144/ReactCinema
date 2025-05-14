import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { searchCategoryFilms } from "../../Redux/slices/movieSlice.js";

export default function FilterButtons(){

  const [status, setStatus] = useState('All')
  const {categoryButtons} = useSelector(state => state.movies)
  const dispatch = useDispatch()

  return(
    <>
      <div className="filter__buttons">
        <button onClick={() => {setStatus('All'); dispatch(searchCategoryFilms('All'))}} className={status === "All" ? "active" : ""}>All</button>
        {categoryButtons.map((value, index) => (
          <button key={index} onClick={() => {setStatus(value); dispatch(searchCategoryFilms(value))}} className={value === status ? 'active' : ''}>
            {value}
          </button>
        ))}
      </div>
    </>
  )
}