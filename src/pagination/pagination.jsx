import { useEffect,useState } from "react";
import axios from 'axios'
import '../index.css'
function Pagination() {
    const [data,setData]  = useState([])
    const [page,setpage]  = useState(1)
  const pagelimit = 10

 useEffect(()=>{
 axios.get(`https://jsonplaceholder.typicode.com/photos?_page=1?_limit=${pagelimit}`).then(res=>setData(res.data)) 
},[])

 function handlePrev (){
    setpage((prev)=>prev-1)
    axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}?_limit=${pagelimit}`).then(res=>setData(res.data)) 
 }

 function handleNext (){
    setpage((prev)=>prev+1)
    axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}?_limit=${pagelimit}`).then(res=>setData(res.data)) 

 }

    return (
      <>
     <div className="pagination  text-center">
   <button className="prev  btn-btn-primary"  onClick={handlePrev}>Prev</button> 
   <button className="next  btn-btn-gray"  onClick={handleNext}>Next</button>
    </div>  

  
<div className=" main-container">
      {data.length>0&&data.map((items)=>(
        <div className=""  style={{width:'25%'}} key={items.id}>
       <img src={items.url}  width='100%'  height='200px'/>
       <p>{items.title}</p>
       </div>
      ))}
     </div>

  

      </>
    )
  }
  
  export default Pagination;
  