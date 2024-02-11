import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const AddTodoList = ({task}) => {
  const [modal,setModal]  = useState(false)
  const [edit,setEdit]  = useState(false)
  const [editFeild,setEditFeild]  = useState('')

  const dispatch = useDispatch()
  let modalContent;

  function handleChangeInput(e){
  setEditFeild(e.target.value)
  dispatch({type:"edit",task:{...task,text:editFeild}})

 }

if(modal){
  modalContent = (<><input  value={task.text} onChange={handleChangeInput}/><button  onClick={()=>setModal(false)}>Save</button></>)
}else{
  modalContent= (<><h1>{task.text}<button onClick={()=>setModal(true)}>Edit</button></h1></>)
}


  let tasked ;
 if(edit){
  tasked = (<><input  type='text'   value={task.text}  onChange={(e)=>dispatch({type:"edit",task:{...task,text:e.target.value}})}/>
 <button  onClick={()=>setEdit(false)}>save</button>

  </>)
 }else{
   tasked =(<> <h1>{task.text} <button  onClick={()=>setEdit(true)}>edit</button></h1></>)

 }
  return (
<>
<h3  style={{display:'flex',justifyContent:'center'}}>{tasked}<button  onClick={()=>dispatch({type:"delete",id:task.id})}>delete</button></h3>
  <label style={{display:'flex',justifyContent:'center'}}>{modalContent}<button  onClick={()=>dispatch({type:"delete",id:task.id})}>delete</button></label>

</>

  )
}

export default AddTodoList