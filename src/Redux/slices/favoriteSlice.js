import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const saved = JSON.parse(localStorage.getItem('favoriteMovie'))

const initialState = {
  favoriteMovie: Array.isArray(saved) ? saved : [],
  status: "loading",
  filteredFavoriteMovie: []
}


const favoriteSlice = createSlice({
  name: 'favoriteMovie',
  initialState,
  reducers: {
    postAddFavorite: (state, action)=>{
      const favorite = action.payload
      const exists = state.favoriteMovie.find(f => f.id === favorite.id)

      if(!exists){
        state.favoriteMovie.push(favorite)
      }else{
        state.favoriteMovie = state.favoriteMovie.filter(f => f.id !== favorite.id)
      }
      localStorage.setItem('favoriteMovie', JSON.stringify(state.favoriteMovie))
    },

    searchFavoriteMovie: (state, action)=>{
      const searchTerm = action.payload.toLowerCase()
      if(searchTerm === ''){
        state.filteredFavoriteMovie = []
      } else {
        state.filteredFavoriteMovie = state.favoriteMovie.filter(m => m.title.toLowerCase().includes(searchTerm))
      }
    }

  }
})

export default favoriteSlice.reducer;
export const {postAddFavorite, searchFavoriteMovie} = favoriteSlice.actions
