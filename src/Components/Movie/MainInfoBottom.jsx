export default function MainInfoBottom(props){
  const dataFilm = props.value.film
  return(
    <>
      <div className="main__info-right">
          <p>About</p>
          <div className="main__info-rigth-info">
            <div>
              <div>
                  <p>Тип:</p>
                  <p>
                    {
                      dataFilm.aboutInfo[0] === 'Movie' ? 'Фильм' : ''
                    }
                  </p>
              </div>
              <div>
                  <p>Директор:</p>
                  <p>{dataFilm.aboutInfo[1]}</p>
              </div>
            </div>
            <div>
              <div>
                  <p>Дата выхода:</p>
                  <p>{dataFilm.aboutInfo[2]}</p>
              </div>
              <div>
                  <p>Продолжительность:</p>
                  <p>{dataFilm.aboutInfo[3]} минут</p>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}