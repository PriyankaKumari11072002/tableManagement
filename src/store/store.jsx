import { useEffect, useState } from "react"
import { Context } from "./context"



const Store = ({children}) => {
const [todo,setTodo] = useState('')
const [edit,setEdit] = useState('')
const [edited,setEdited] = useState('')
const [modal,setModal] = useState(false)

const [updateTodo,setUpdateTodo] = useState(()=>{
    const storeTodoInls = localStorage.getItem('updateTodo')
    return storeTodoInls?JSON.parse(storeTodoInls):['computer','english','syllabus']
})


useEffect(() => {
 const updateTodoInLs = localStorage.setItem('updateTodo',JSON.stringify(updateTodo))
    

  }, [ updateTodo]);



function handleTodoSubmit(e){
    e.preventDefault();
    
    if(todo.length>0){
        setUpdateTodo([...updateTodo,todo])
    }
    setTodo("")
}

function handleEdit(items,index){
setModal(true)
setEdited(index)

setEdit(items)
}

function handleDelete(id){
  console.log(id,'id')
   const deleteUpdateTodo = updateTodo.filter((_,index)=>index!==id)
   setUpdateTodo(deleteUpdateTodo)
}

function handleEditSubmit(e){
  e.preventDefault();

 const editTodolist = updateTodo.map((items,id)=>id===edited?edit:items)

 if(edit.length>0){
    setUpdateTodo(editTodolist)
 }

  setModal(false)
setEdit("")
}
function handleClose(){
    setModal(false)
    
  }
  return (
    <Context.Provider value={{todo,setTodo,edit,setEdit,edited,modal,updateTodo,setUpdateTodo,handleDelete,handleEdit,handleEditSubmit,handleTodoSubmit,handleClose}}>{children}</Context.Provider>
  )
}

export default Store
