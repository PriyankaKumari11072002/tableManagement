import { useContext } from 'react'

import { Context } from '../store/context'
const TodoList = () => {
const {todo,setTodo,edit,setEdit,modal,updateTodo,handleDelete,handleEdit,handleEditSubmit,handleClose,handleTodoSubmit} = useContext(Context)

  return (
    <>
    <form onSubmit={handleTodoSubmit}>
  <input type="text" placeholder='...type your todo' value={todo}  onChange={(e)=>setTodo(e.target.value)} />
  <button type="submit">Add todo</button>
  </form>
  {updateTodo.length>0&&updateTodo.map((items,index)=>(
    <>
      <ul key={index}>
        <li>{items}&nbsp;&nbsp;&nbsp;<button onClick={()=>handleEdit(items,index)}>Edit</button>&nbsp;&nbsp;&nbsp;<button onClick={()=>handleDelete(index)}>Delete</button></li>
      </ul>
            
</>
      ))}

{modal&&<div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'auto'}}>
 <h1 style={{textAlign:'center',fontFamily:'fantasy'}}>Update Todo list</h1> 
 <form  onSubmit={handleEditSubmit}>
 <input onChange={(e)=>setEdit(e.target.value)} value={edit}/>
 
 <button  type="submit">Save</button>
 <button onClick={handleClose}>Close</button>
 </form>
  </div>}
  </>
  )
}

export default TodoList