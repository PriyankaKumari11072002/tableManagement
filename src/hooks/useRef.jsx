//create mutable variable which will not re-render and access dom element directly

import React, { useState ,useRef, useEffect} from 'react'
import ChildComponent from './childComponent'

const UseRef = () => {
// const [count,setCount] = useState(0)
const [target,settarget] = useState('')
const count = useRef(0)
const  inputElement = useRef('priya')


useEffect(()=>{
  count.current = count.current+1
 

})
const handleSubmit = ()=>{
  inputElement.current.valueOf = "kase ho aap sab"
  inputElement.current.focus();
  inputElement.current.style.backgroundColor = "red"
console.log()
}
  return (
    <>
    
 
  
 <input type="text"  placeholder='...check uses of useref hook'  onChange={(e)=>settarget(e.target.value)}   value={target}   ref={inputElement}/>
    {/* <button onClick={()=>setCount(count+1)}>count : {count}</button> */}

    {/* <button  onClick={()=>count.current = count.current+1}>count : </button> */}
    {/* <button  >count :{count.current} </button>  */}
    <button type="submit" onClick={handleSubmit}>submit</button>
    <ChildComponent/>
    </>

  )
}

export default UseRef