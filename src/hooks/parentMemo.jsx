import React, { useCallback, useState } from 'react'
import Memo from './memo'
//usememo,memo and useCallback are used for  optimazation and inc performance of our application
const ParentMemo = () => {
    const [count,setCount] = useState(0)

    const handleInc  = useCallback(()=>{
     setCount((prev)=>prev+1)
    },[setCount])

  return (
    <>
    {count}
<button onClick={()=>setCount(count+1)}>incriment</button>
<Memo  value={handleInc}/>
    </>
  )
}

export default ParentMemo