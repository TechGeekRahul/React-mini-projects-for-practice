import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux';
import {store} from './store'
import TodoApp from "./TodoApp.jsx";

function App() {

  return (
  <Provider store={store}>
    <TodoApp/>
  </Provider>
  )
}

export default App
