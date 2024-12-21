import React from "react";
import { Provider } from 'react-redux'
import Lorem from './Lorem'
import store from './store'

const App = () => {
  return (
    <div>
        <Provider store={store}>
        <Lorem />
      </Provider>
    </div>
  )
}

export default App
