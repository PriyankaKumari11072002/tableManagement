import axios from "axios"
import { useEffect, useState } from "react"
import '../index.css'

function PaginatioLikeFlipkart() {
    const [api,setApi]  = useState([])
    const [oldEvent,setOldEvent]  = useState(1)
    const [apiCurrentIndex,setApiCurrentIndex] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const [hideNext,setHideNext] = useState(true)
  const pagelimit = 40
  const totalpages = Math.ceil(api.length/pagelimit)
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/photos').then(res=>setApi(res.data.slice(0,160)))   
  },[])

  const currentApi = api.slice(apiCurrentIndex,apiCurrentIndex+pagelimit)          //0,40  40,80   80,120


const handlePages = (e)=>{
const event = e.target.innerText;
const convertIntoNum = Number(event)
console.log(convertIntoNum,'convertIntoNum')
setOldEvent(convertIntoNum)
axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${event}?_limit=${pagelimit}`).then(res=>setApi(res.data)) 
if(event==='4'){
  setHideNext(false)
}else{
  setHideNext(true)
}
}


const handleNext = ()=>{
  setOldEvent((prev)=>prev+1)
if(oldEvent===4){
  console.log('clicked event is four')
  setHideNext(false)
}else{

  console.log('clicked event is not four')
}
axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${oldEvent}?_limit=${pagelimit}`).then(res=>setApi(res.data))   




}
    return (
      <>

          <div className="pagination  text-center" >
   <button className="prev  btn-btn-primary"  onClick={handlePages}>1</button> 
   <button className="next  btn-btn-gray" onClick={handlePages} >2</button>
   <button className="prev  btn-btn-primary"  onClick={handlePages}>3</button> 
   <button className="next  btn-btn-gray"  onClick={handlePages}>4</button>
  {hideNext?<button className="prev  btn-btn-primary" onClick={handleNext}>Next</button>:null} 
   </div>


   <div className=" main-container">
      {currentApi.length>0&&currentApi.map((items)=>(
        <div className=""  style={{width:'25%'}} key={items.id}>
       <img src={items.url}  width='100%'  height='200px'/>
       <p>{items.title}</p>
       </div>
      ))}
     </div>

      </>
    )
  }
  

  
  export default PaginatioLikeFlipkart;