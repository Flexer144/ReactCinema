import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import userPhoto from '../../assets/userPhoto.png'
import logo from '../../assets/icons/pngwing.com.png'
import heart from '../../assets/icons/icons8-червы-100.png'
import FilterSearch from '../Filter/FilterSearch'
import { useSelector } from 'react-redux'
import ShowFilteredSearch from '../Filter/ShowFilteredSearch'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [atTop, setAtTop] = useState(true)
  const lastY = useRef(0)
  const timeoutRef = useRef(null)
  const TOP_THRESHOLD = 10                          

  const {favoriteMovie} = useSelector((state)=> state.favorite)

  const toggleMenu = () => setMenuOpen(prev => !prev)

  useEffect(() => {
 
    const initY = window.scrollY || window.pageYOffset || 0
    lastY.current = initY
    setAtTop(initY <= TOP_THRESHOLD)

    const handleScroll = () => {
      const currentY = window.scrollY || window.pageYOffset || 0
      const isNearTop = currentY <= TOP_THRESHOLD
      const isScrollingUp = currentY < lastY.current

      setAtTop(isNearTop)

      if (!isNearTop && !isScrollingUp) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }

      lastY.current = currentY

      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setShowHeader(true), 1500)
    }
    handleScroll()

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
        <header
          className={`header ${showHeader ? '' : 'header--hidden'} ${atTop ? 'header--transparent' : 'header--dark'}`}
        >
          <Link className="header__logo-flex" to="/home">
            <img src={logo} alt="logo" />
            <div className="header__logo-flex_sitename">
              <p>REACT</p>
              <p>CINEMA</p>
            </div>
          </Link>
          <div className="header__navbar-flex-wrapper">
            <div className="header__navbar-flex">
              <Link to="/home">Главная</Link>
              <Link to="/favorites">Избранное</Link>
              <FilterSearch bul={false} />
              <ShowFilteredSearch />
              <a href="#categoryes">Фильмы</a>
              <a href="#categoryes">Помощь</a>
            </div>
          </div>
          <div className="header__auth-flex">
            <div className="favorites__movies">
              <img src={heart} alt="" />
              <p>{favoriteMovie.length}</p>
            </div>
            <div className='user-profile'>
              <div className='photo-outline'>
                <img className='user-photo' src={userPhoto} alt="user-photo" />
              </div>
            </div>
          </div>
        </header>

        <div className="div-menu">
          <div className="content-menu">
            <div className="header__auth-flex-burgerMenu">
              <div className="favorites__movies">
                <img src={heart} alt="" />
                <p>{favoriteMovie.length}</p>
              </div>
              <a href="./favorites.html">Account</a>
            </div>

            <div className="block1">
              <ul className="header__navbar-flex-burgerMenu">
                <Link to="/home"><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/home.png" alt="home" />Главная</Link>
                <Link to="/favorites"><img width="20" height="20" src="https://img.icons8.com/ios-filled/30/FFFFFF/like--v1.png" alt="like--v1" />Избранное</Link>
                <a href="#categoryes"><img width="22" height="22" src="https://img.icons8.com/forma-regular-filled/24/FFFFFF/movie-projector.png" alt="movie-projector" />Фильмы</a>
                <a href="#categoryes"><img width="23" height="23" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/questions.png" alt="questions" />FAQ</a>
                <a href="#categoryes"><img width="22" height="22" src="https://img.icons8.com/forma-bold-filled/24/FFFFFF/online-support.png" alt="online-support" />Помощь</a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
