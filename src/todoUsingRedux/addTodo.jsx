import { useEffect, useState } from "react"
//import { addNewTodo } from "./action"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import AddTodoList from "./addTodoList"



const AddTodo = () => {
    const [value,setValue] = useState('')
   useEffect(()=>{
   },[value])
  const dispatch = useDispatch()



const state = useSelector((state)=>state)


console.log(state,'statefirst')

function handleSubmit(e){
    e.preventDefault();
    if(value.length>0){
      dispatch({type:"add",text:value,id:state.length+1})

    }

setValue('')

}
  return (
    <>

<form onSubmit={handleSubmit}>
<input type="text" placeholder="...add new todo"  value={value} onChange={(e)=>setValue(e.target.value)}/>
<button type="submit">add todo</button>
</form>

{state.map((items) => (
  <AddTodoList task={items} />
))}


    </>
  )
}

export default AddTodo