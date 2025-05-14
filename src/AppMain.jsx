import './App.css'
import Header from './Components/Layout/Header.jsx'
import Footer from './Components/Layout/Footer.jsx'
import Home from './Pages/Home.jsx'
import Favorites from './Pages/Favorites.jsx'
import Movie from './Pages/Movie.jsx'
import NotFound from './Pages/NotFound.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchFilm } from './Redux/slices/movieSlice.js'

function AppMain() { 
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchFilm())
  },[])

  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/favorites' element={<Favorites />} />
              <Route path='/movie/:id' element={<Movie />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default AppMain
