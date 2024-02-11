import axios from 'axios'
import React, { useState,useEffect } from 'react'
import '../index.css'
const PaginationReal = () => {
    const [api,setApi]  = useState([])
    const [page,setPage]  = useState(1)


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos').then(res=>setApi(res.data.slice(0,200)))   
      },[])
      const pagelimit = 20
     const totalpages = Math.ceil(api.length/pagelimit)  //160/20 = 8
     const conArrTotalpages = [...Array(totalpages+1).keys()].slice(1)
    const lastApiIndex =  page*totalpages                                
    const  firstApiIndex =  lastApiIndex -totalpages              
     
    const currentPage = api.slice( firstApiIndex,lastApiIndex)                                   
     console.log(conArrTotalpages,'api')
     function handlePrev(){
        if(page>1){
            setPage((prev)=>prev-1)
        }
     }
function handleNext(){
if(page<totalpages){
    setPage((prev)=>prev+1)
}
}

  return (
    <>
    <div className="d-flex  text-center">
    {page===1?null:<button onClick={handlePrev}>Prev</button>}      
 {/* {!page===1&&<button onClick={handlePrev}>Prev</button>} */}
     {conArrTotalpages.length>0&&conArrTotalpages.map((items)=>(
        <div  key={items.id} >
       <button onClick={()=>setPage(items)} className={page===items?'active':null}>{items}</button>
       </div>
      ))}
        {page!==totalpages&&<button onClick={handleNext}>Next</button>}    

</div>

{page!==totalpages&& <div className=" main-container">
      {currentPage.length>0&&currentPage.map((items)=>(
        <div className=""  style={{width:'25%'}} key={items.id}>
       <img src={items.url}  width='100%'  height='200px'/>
       <p>{items.title}</p>
       </div>
      ))}
     </div>}
    
    
    
    </>
  )
}

export default PaginationReal;