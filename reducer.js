import React,{useReducer} from 'react'

//large project , state management , store many condition in only one function using swicth , similar to usestate , can easily setup with redux
const Reducer = () => {
  const initialState = {inc:0,dec:0,toggle:false}
  const reducer = (state,action)=>{
  switch(action.type){
   case "inc":
    return {inc:state.inc+1}
    case "dec":
      return {dec:state.dec-1}
      case "toggle":
        return {toggle:!state.toggle }
      default:
        return state
  }

  }
    const [state,dispatch] = useReducer(reducer,initialState)
    console.log(state,'state')
    console.log(dispatch,'dispatch')
  return (
    <>
    <button onClick={()=>dispatch({type:"inc"})}>Incriment:{state.inc}</button>
    <button onClick={()=>dispatch({type:"dec"})}>Decriment:{state.dec}</button>
    <button onClick={()=>dispatch({type:"toggle"})}>Toggle</button>
{state.toggle&&<h1>i am magician</h1>}
    </>
  )
}

export default Reducer
