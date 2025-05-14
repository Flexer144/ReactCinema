import logo from '../../assets/icons/pngwing.com.png'
import heart from '../../assets/icons/icons8-червы-100.png'
import {Link} from "react-router-dom"
 
export default function Header(){

  return(
    <header>
      <Link className ="header__logo-flex" to="/">
          <img src={logo} alt="logo"></img>
          <div className ="header__logo-flex_sitename">
              <p>REACT</p>
              <p>CINEMA</p>
          </div>
      </Link>
      <ul className="header__navbar-flex">
          <Link to="/">Главная</Link>
          <Link to="/favorites">Избранное</Link>
          <a href="#categoryes">Фильмы</a>
          <a href="#categoryes">FAQ</a>
          <a href="#categoryes">Помощь</a>
      </ul>
      <div className="header__auth-flex">
          <div className="favorites__movies">
              <img src={heart} alt="" />
              <p>0</p>
          </div>
          <a href="./favorites.html">Account</a>
      </div>
    </header>
  )
}