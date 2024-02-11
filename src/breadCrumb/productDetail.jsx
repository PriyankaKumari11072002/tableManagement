import React from "react";
import {  Link, useLocation, useParams } from "react-router-dom"
import { useEffect,useState } from "react";
import axios from 'axios'
function ProductDetail() {
const params = useParams();
const location = useLocation()
const pathname = location.pathname.split('/').slice(1,-1)

const [data,setData]  = useState([])
useEffect(()=>{
axios.get(`https://jsonplaceholder.typicode.com/photos/${params.id}`).then(res=>setData(res.data)) 
},[data])

    return (
      <>
  
    {pathname.map((items,index)=>(
        <React.Fragment key={index}>
             <Link to='/productlist'><span>{' > '}{items}</span></Link>
        </React.Fragment>

      
    ))}

  
     
        <div className="d-flex  justify-content-space-between  "  style={{marginTop:'100px',display:'flex',justifyContent:'space-around'}}>
        <div >
       <img src={data.thumbnailUrl}  width='150px'  height='200px'/>
        </div>

        <div   style={{marginTop:'20px'}}>
       <p>{data.title}</p>
       <p>{data.url}</p>
       </div>
       </div>
 
   


 

      </>
    )
  }
  
  export default ProductDetail