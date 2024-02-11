import React,{useReducer, useState} from 'react'

const UseReducer = () => {
  
  //  const initialState = 0;
  const initialState = {inc:0,dec:0}
   const reducer = (state,action)=>{
    console.log(state,action,'state')

    //without using switch in reducer
  // if(action.type==="inc"){
  //   return state+1
  // }
  // if(action.type==="decc"){
  //   return state-1
  // }
  // return state


  //with using switch without obj key-pair
  // switch(action.type){
  //    case "inc":
  //     return  state = state+1;
  //     case "dec":
  //     return  state = state-1;
  //     default:
  //       return state
  // }

//with obj key pair 

switch(action.type){
  case "inc":
    return {inc:state.inc+1};
    case "dec":
      return {dec:state.dec-1}
    default:
      return state
}


   }
    const [state,dispatch]  = useReducer(reducer,initialState)
  return (
   <>
   {state.inc}
    <button onClick={()=>dispatch({type:"inc"})}>incriment:</button>

    <button onClick={()=>dispatch({type:"dec"})}>decriment:</button>
    
    </>
    

  )
}

export default UseReducer;