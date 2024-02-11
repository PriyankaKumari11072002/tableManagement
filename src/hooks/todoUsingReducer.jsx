import React,{useEffect, useReducer,useState} from 'react'

const TodoUsingReducer = () => {
  const  getUpdatedTodo = JSON.parse(localStorage.getItem('addUpdateTodo'))

   const initialState = {targetValue:'',addTodo:getUpdatedTodo?getUpdatedTodo.addTodo:["english","syllabus","computer","gym"]
   ,showEditForm:false,editTodo:'',editText:'',editId:''}
  

   const reducer = (state,action)=>{
    switch(action.type){
        case "addTodo":
        return  {...state,targetValue : action.payload}

        case "submitTodo":
      localStorage.setItem('addUpdateTodo',JSON.stringify({...state,addTodo:[...state.addTodo,state.targetValue]}))
    return state
       case "delete":
        localStorage.setItem('addUpdateTodo', JSON.stringify({ ...state, addTodo: action.payload }));

      return  {...state,addTodo:action.payload}

    case "showEditForm":
      return  {...state,showEditForm:action.payload}  
        case "editText":
          return {...state,editText:action.payload} 
          case "editId":
            return  {...state,editId:Number(action.payload)} 
            case "edit":
              localStorage.setItem('addUpdateTodo', JSON.stringify({ ...state, addTodo: action.payload }));

              return {...state,addTodo:action.payload}
       default:
            return state
    }



   }
    const [state,dispatch] = useReducer(reducer,initialState)

  
  const handleSubmit = (e)=>{
    e.preventDefault();
  dispatch({type:"submitTodo"})
 
dispatch({type:"addTodo",payload:""})
  }

function handleDelete(deleteId){

 const filter = state.addTodo.filter((_,id)=>id!==deleteId)
dispatch({type:"delete",payload:filter})

}

function handleEdit(text,id){
dispatch({type:'showEditForm',payload:true})
dispatch({type:"editText",payload:text})

dispatch({type:"editId",payload:id})

 
 }

 const handleEditSubmit = (e)=>{
  e.preventDefault();
  dispatch({type:'editText',payload:''})
  const edited = state.addTodo.map((items,id)=>id===state.editId?state.editText:items)
  dispatch({type:"edit",payload:edited})

  // if(state.editText.length>0){  }

    dispatch({type:"showEditForm",payload:false})


  console.log(edited,'edited')


  }

  return (
    <>

  <form onSubmit={handleSubmit}>
    <input type="text"  placeholder='...add your todo'  value={state.targetValue}  onChange={(e)=>dispatch({type:"addTodo",payload:e.target.value})}/>
    <button type="submit">add todo</button>
    </form>  
   
      <ul>{state.addTodo.map((items,index)=>(<li key={index}>{items}
        <button onClick={()=>handleDelete(index)} >Delete</button>
        <button onClick={()=>handleEdit(items,index)} >Edit</button></li>))}</ul>


        {state.showEditForm&&<form onSubmit={handleEditSubmit}  >
    <input type="text"  placeholder='...add your todo' value={state.editText} onChange={(e)=>dispatch({type:"editText",payload:e.target.value})} />
    <button type="submit">add todo</button>
    </form>}
    </>
  )
}

export default TodoUsingReducer