import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pagination from './pagination/pagination'
import Routing from './routing/routing'
import Carosuol from './carosuol/carosuol'
import PaginatioLikeFlipkart from './pagination/paginationLikeFlipkart'
import PaginationReal from './pagination/paginationReal'
import TodoList from './todoList/todoList'
import { Context } from './store/context'
import ParentMemo from './hooks/parentMemo'
import UseMemo from './hooks/useMemo'
import UseRef from './hooks/useRef'
import UseReducer from './hooks/useReducer'
import { useDispatch, useSelector } from 'react-redux'
import { incriment,decriment } from './redux/actions'
import TodoUsingReducer from './hooks/todoUsingReducer'
import AddTodo from './todoUsingRedux/addTodo'
function App() {
 
// const state = useSelector((state)=>state.changeTheNumber)
// const dispatch = useDispatch()
// console.log(state,'state')

  return (
    <>
 
     {/* <Pagination/> */}
     {/* <Routing/> */}
   <Carosuol/>
   {/* <PaginatioLikeFlipkart/> */}
   {/* <PaginationReal/> */}
   {/* <TodoList/> */}
  {/* <ParentMemo/> */}
  {/* <UseMemo/> */}
  {/* <UseRef/> */}
  {/* <UseReducer/> */}
  {/* <button onClick={()=>dispatch(incriment())}>incriment</button>
  <button onClick={()=>dispatch(decriment())}>decriment</button> */}
{/* <TodoUsingReducer/> */}
{/* <AddTodo/> */}

    </>
  )
}

export default App

