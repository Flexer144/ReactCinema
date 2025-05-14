import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
  films: [],
  status: 'loading',
  errors: null,
  searchFilm: {
    film: [],
    status: 'loading',
    errors: null
  },
  filteredMovie: [],
  categoryButtons: [],
  filteredMovieByCategory: []
}

export const fetchFilm = createAsyncThunk('movie/fetchfilm', ()=>{
  return axios.get('https://67f0f863c733555e24abc652.mockapi.io/movie/Cinema')
      .then((response)=>{
        return response.data
      })
      .catch((error)=>{
        let errorMessage = ''
        switch (error.status) {
          case 500:
            errorMessage = 'Произошла ошибка'
            break;
        }
        throw new Error(errorMessage)
      })
})


const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    searchMovieInState: (state, action)=>{
      const id = action.payload
      const searchFilm = state.films.find(find => find.id === id)
      state.searchFilm.film = searchFilm
      state.searchFilm.status = 'fulfilled'
    },
    searchSelectedMovie: (state, action)=>{
      if(action.payload === ''){
        state.filteredMovie = []
      } else {
        const searchTerm = action.payload.toLowerCase()
        state.filteredMovie = state.films.filter(m => m.title.toLowerCase().includes(searchTerm))
      }
      
    },
    searchCategoryFilms: (state, action) => {
      if(action.payload === 'All'){
        state.filteredMovieByCategory = []
      } else {
        const activeButton = action.payload
        state.filteredMovieByCategory = state.films.filter(m => m.category.includes(activeButton))
      }      
    }
  },
  extraReducers: (builder)=>{
    builder
        .addCase(fetchFilm.pending, (state)=>{
          state.status = 'loading'
        })
        .addCase(fetchFilm.fulfilled, (state, action)=>{
          state.status = 'fulfilled'
          state.films = action.payload
          state.categoryButtons = [...new Set(state.films.flatMap(films => films.category))]
        })
        .addCase(fetchFilm.rejected, (state, action)=>{
          state.status = 'loading'
          state.errors = action.error.message
          setTimeout(()=>{
            alert(action.error.message)
          }, 5000)
          console.log(action.error.message)
        })
  }
})

export default movieSlice.reducer;
export const {searchMovieInState, searchSelectedMovie, searchCategoryFilms} = movieSlice.actions



























// const initialState = {
//   films: [],
//   status: 'loading',
//   errors: null,
//   searchFilm: {
//     film: null,
//     status: 'loading',
//     error: null
//   }
// }

// export const fetchFilm = createAsyncThunk('movie/fetchfilm', ()=>{
//   return axios.get('https://67f0f863c733555e24abc652.mockapi.io/movie/Cinema')
//       .then((response)=>{
//         return response.data
//       })
//       .catch((error)=>{
//         let errorMessage = ''
//         switch (error.status) {
//           case 500:
//             errorMessage = 'Произошла непонятная ошибка'
//             break;
//         }
//         throw new Error(errorMessage)
//       })
// })

// const movieSlice = createSlice({
//   name: 'movie',
//   initialState,
//   reducers: {
//     searchMovieInState: (state, action)=>{
//       const id = action.payload
//       const searchFilm = state.films.find(film => film.id === id)
//       state.searchFilm.film = searchFilm
//       state.searchFilm.status = 'fulfilled'
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//         .addCase(fetchFilm.pending, (state)=>{
//           state.status = 'loading'
//         })
//         .addCase(fetchFilm.fulfilled, (state, action)=>{
//           state.status = 'fulfilled'
//           state.films = action.payload
//         })
//         .addCase(fetchFilm.rejected, (state, action)=>{
//           state.errors = action.error.message
//           setTimeout(()=>{
//             alert(action.error.message)
//           }, 5000)
//           state.status = 'loading'
//           console.error(action.error.message)
//         })
//   }
// })
// export default movieSlice.reducer;
// export const {searchMovieInState} = movieSlice.actions







































// const initialState = {
//   films: [],
//   status: null,
//   errors: null
// }

// export const fetchMovie = createAsyncThunk('movie/fetchmovie', async ()=>{
//   try {
//     const movies = await fetch('https://67f0f863c733555e24abc652.mockapi.io/movie/Cinema')
//     if(!movies.ok){
//       throw new Error("error on the server");
//     } else {
//       return movies.json()
//     }
//   } catch (error) {
//     console.error(error);
//     throw error
//   }
  
// })

// const movieSlice = createSlice({
//     name: "movie",
//     initialState,
//     reducers: {},

//     extraReducers: (builder)=>{
//       builder 
//           .addCase(fetchMovie.pending, (state)=>{
//               state.status = 'loading'
//           })
//           .addCase(fetchMovie.fulfilled, (state, action)=>{
//             state.films = action.payload
//             state.status = 'fulfilled'
//           })
//           .addCase(fetchMovie.rejected, (state, action)=>{
//             state.status = 'error'
//             state.errors = action.error.message;
//             console.error(action.error.message);
//           })
//     }
// })

// export default movieSlice.reducer;
// export const{changeValue} = movieSlice.actions;





















// const initialState = {
//   value: 5
// }

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     changeValue: (state)=>{
//       console.log(state.value)
//       state.value += 10;
//       console.log(state.value)
//     }
//   }
// })
// export default counterSlice.reducer;
// export const {changeValue} = counterSlice.actions;