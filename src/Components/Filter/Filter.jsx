import FilterButtons from "./FilterButtons.jsx"
import FilterCategoryes from "./FilterCategoryes.jsx"
import FilterSearch from "./FilterSearch.jsx"

export default function Filter(){

  return(
    <div className="filter">
        <FilterCategoryes />
        <FilterButtons />
        <FilterSearch />
    </div>
  )
}