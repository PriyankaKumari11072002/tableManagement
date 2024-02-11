import { useEffect,useState } from "react";
import axios from 'axios'
import '../index.css'
import { Link} from "react-router-dom";

function ProductList() {
    const [data,setData]  = useState([])
 useEffect(()=>{
 axios.get(`https://jsonplaceholder.typicode.com/photos`).then(res=>setData(res.data.slice(0,20))) 
 },[data])

    return (
      <>
     
  <div className=" main-container">
      {data.length>0&&data.map((items)=>(
        <div className=""  style={{width:'25%'}} key={items.id}>
       <Link to={`/productlist/productdetail/${items.id}`}>  
       <img src={items.url}  width='100%'  height='200px'/>
       <p>{items.title}</p>
       </Link>   
       </div>
      ))}
     </div>
      </>
    )
  }
  
  export default ProductList;