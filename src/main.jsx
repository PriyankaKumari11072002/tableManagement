import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Storereducer  from './redux/store/index.js'
import { Provider } from 'react-redux'
import StoreTodoReducer from './todoUsingRedux/storeTodo.js'
// import Store from './store/store.jsx'
Storereducer.subscribe(()=>console.log(Storereducer.getState(),'store'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Store > */}
    {/* <Provider store={Storereducer}> */}
    <Provider store={StoreTodoReducer}>
    <App />
    </Provider>
    {/* </Provider> */}
    {/* </Store> */}
  </React.StrictMode>,
)
