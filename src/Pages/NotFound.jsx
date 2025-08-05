import iconHome from '../assets/icons/Home.svg'
import {Link} from "react-router-dom"

export default function NotFound(){

  return(
    <>
      <div className="not-found__content">
        <div className="not-found__left">
          <h2>Упс!</h2>
          <h2>Похоже, вы заблудились!</h2>
          <p>
            Похоже, вы пытаетесь получить доступ к странице, 
            которая раннее была удаленой или даже никогда не 
            существовала.
          </p>
          <Link to="/home"><button> <img src={iconHome}/> На главную</button></Link>
        </div>
        <div className="not-found__right">
          <h1>404</h1>
        </div>
      </div>
    </>
  )
}