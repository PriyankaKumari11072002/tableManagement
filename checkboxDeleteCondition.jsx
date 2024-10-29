import React from 'react'
import { useState } from 'react'

const CheckboxDeleteCondition = () => {
    const game = ["hockey","badmintan","hide and sick","cricket","tennis"]
    const [gameList,setGameList]  = useState(game)
    const [checked,setCheckedValue] = useState(Array(gameList.length).fill(false))

 const handleChangeCheckedValue = (index)=>{
const newCheckValue = [...checked]
newCheckValue[index]  = !newCheckValue[index]
setCheckedValue(newCheckValue)
         console.log(newCheckValue,'newCheckValue')
    }
    const handleDelete = (deleteItems)=>{

        const deleteGameList  = gameList.filter((_,index)=>index!==deleteItems)
        setGameList(deleteGameList)
    }

  return (
    <>
   <div  style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',height:'100vh'}}>
{gameList.length>0&&gameList.map((gameItems,index)=>(
    <div key={index}  >
        <input type="checkbox" name={gameItems} id={gameItems}   onChange={()=>handleChangeCheckedValue(index)}/>
        <label htmlFor={gameItems}>{gameItems}</label>
        {checked[index]?<button  onClick={()=>handleDelete(index)}>X</button>:''}
    </div>

))}
     </div> 
    </>
  )
}

export default CheckboxDeleteCondition
