import { useState } from "react"

export default function FilterCategoryes(){

  const [status, setStatus] = useState('Popular')
  let filterCategory = ['Popular', 'Novelty', 'Featured', 'Short films']

  return(
    <>
      <div id="categoryes" className="filter__categoryes anchor">
          <div className="filter__categoryes-flex">
              {
                  filterCategory.map((value, index) => (
                      <div key={index} onClick={() => setStatus(value)} className={`filter__categoryes-item ${value === status ? 'active-category' : ''}`}>
                          <p>{value}</p>
                          <span></span>
                      </div>
                  ))
              }
          </div>
          <span></span>
      </div>
    </>
  )
}