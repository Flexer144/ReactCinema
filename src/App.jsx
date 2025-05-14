import {Provider} from 'react-redux'
import store from './Redux/store.js'
import AppMain from './AppMain.jsx'

function App() { 


  return (
    <>
      <Provider store={store}>
        <AppMain />
      </Provider>
    </>
  )
}

export default App
