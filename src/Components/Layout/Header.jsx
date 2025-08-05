import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/pngwing.com.png'
import heart from '../../assets/icons/icons8-червы-100.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const lastScrollY = useRef(0)

  // toggle бургер
  const toggleMenu = () => setMenuOpen(prev => !prev)

  // эффект для скролла
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      // если вниз — прячем, если вверх — показываем
      setShowHeader(currentY < lastScrollY.current || currentY < 50)
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
          <ul className="header__navbar-flex">
            <Link to="/home">Главная</Link>
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

        {/* ваш бургер-меню дальше */}
      </div>
    </>
  )
}
