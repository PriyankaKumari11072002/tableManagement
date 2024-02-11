
import React, { useState ,useMemo} from 'react'

const UseMemo = () => {
    const [countone,setCountone] = useState(0)
    const [counttwo,setCountwo] = useState(0)

    const evenNum  =useMemo(()=>{
    console.log('ek function react ke dusre element ko bhi affect krte h unwanted fun call on other element wlile this function is not releted to other element')
    console.log('use case : unwanted fun call , inc performance and enchance optimization ,stop lazing code execution ,stop re-render fun con element')
   let i = 0
    while(i<1000000000)i++;      //time taken code    to avoiding this use the usememo :when parent compo - affect - that compo element
    return countone%2==0
    },[countone])

  return (
    <>
    <button onClick={()=>setCountone(countone+1)}>countone:{countone}</button>
  {evenNum?'event':'odd'}
    <button onClick={()=>setCountwo(counttwo+1)}>counttwo:{counttwo}</button>

    
    </>
  )
}

export default UseMemo