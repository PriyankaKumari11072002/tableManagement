import axios from "axios"
import { useEffect, useState } from "react"

function Carosuol() {
  const [api,setApi] = useState([])
    const [img,setImage]  = useState([])
    const [page,setPage]  = useState(1)
  const limit = 40
 const [currentIndex,setCurrentIndex] = useState(0)
 const currImagesApi = api.slice(currentIndex,currentIndex+limit)  //40/80  /0-40/40-80/80-120 /120-160  //0

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/photos').then(res=>setApi(res.data.slice(0,160))) 
    },[])

    const handlePrev = () => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - limit + api.length) % api.length );

    };


 function handleNext(){
  setCurrentIndex((prev)=>(prev+limit)%api.length)    // reminder  
  console.log(currentIndex,'current')
 }

    return (
      <>
     
   <div className="carosuol-container  " style={{height:'500px',width:'600px',border:'1px solid red' ,backgroundColor:'gray',text:'white',marginTop:'100px'}}>
    <button  onClick={handlePrev}>{'<'}</button>
   {currImagesApi.length>0&&currImagesApi.map((img)=>(
     <img src={img.thumbnailUrl} alt="" className="src" key={img.id}  style={{marginLeft:'20px',marginRight:'10px'}}/>
   ))}

    <button  onClick={handleNext}>{'>'}</button>
    </div>  
      </>
    )
  }
  
  export default Carosuol;
  