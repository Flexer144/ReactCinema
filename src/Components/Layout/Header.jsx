import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/pngwing.com.png'
import heart from '../../assets/icons/icons8-червы-100.png'
import FilterSearch from '../Filter/FilterSearch'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const lastY = useRef(window.scrollY)
  const timeoutRef = useRef(null)

  const toggleMenu = () => setMenuOpen(prev => !prev)
  
 useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const isScrollingUp = currentY < lastY.current
      const isNearTop = currentY < 50
      if (isScrollingUp || isNearTop) {
        setShowHeader(true)
      } else {
        setShowHeader(false)
      }
      lastY.current = currentY
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        setShowHeader(true)
      }, 1500)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <>
      <div className="burger__menu">
        <button
          className={`header-burger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className={`body__wrapper ${menuOpen ? 'open' : ''}`}>
        <header className={showHeader ? 'header' : 'header header--hidden'}>
          <div className="gradient__overlay-header"></div>
          <Link className="header__logo-flex" to="/home">
            <img src={logo} alt="logo" />
            <div className="header__logo-flex_sitename">
              <p>REACT</p>
              <p>CINEMA</p>
            </div>
          </Link>
          <div className="header__navbar-flex">
            <Link to="/home">Главная</Link>
            <Link to="/favorites">Избранное</Link>
            <FilterSearch bul={false}/>
            <a href="#categoryes">Фильмы</a>
            <a href="#categoryes">Помощь</a>
          </div>
          <div className="header__auth-flex">
            <div className="favorites__movies">
              <img src={heart} alt="" />
              <p>0</p>
            </div>
            <a href="./favorites.html">Account</a>
          </div>
        </header>

        <div className="div-menu">
          <div className="content-menu">
            <div className="header__auth-flex-burgerMenu">
              <div className="favorites__movies">
                  <img src={heart} alt="" />
                  <p>0</p>
              </div>
              <a href="./favorites.html">Account</a>
            </div>

            <div className="block1">
              <ul className="header__navbar-flex-burgerMenu">
                <Link to="/home"><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/home.png" alt="home"/>Главная</Link>
                <Link to="/favorites"><img width="20" height="20" src="https://img.icons8.com/ios-filled/30/FFFFFF/like--v1.png" alt="like--v1"/>Избранное</Link>
                <a href="#categoryes"><img width="22" height="22" src="https://img.icons8.com/forma-regular-filled/24/FFFFFF/movie-projector.png" alt="movie-projector"/>Фильмы</a>
                <a href="#categoryes"><img width="23" height="23" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/questions.png" alt="questions"/>FAQ</a>
                <a href="#categoryes"><img width="22" height="22" src="https://img.icons8.com/forma-bold-filled/24/FFFFFF/online-support.png" alt="online-support"/>Помощь</a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
