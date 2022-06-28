import React,{useState, useEffect} from 'react'
import Navbar from './Navbar'
import axios from 'axios'


function Post() {
  const [post, setpost]=useState([])
  useEffect(()=>{

  axios.get('http://localhost:5000/posts')
  .then(res=>setpost(res.data))
  .catch(err=>console.log(err))
})
  
  return (
    <div>
        <Navbar/>
        <h1 className='bg-secondary text-white text-center p-2'>Hey!! Check Out These Posts</h1>
        {
          post.map((data,key) =>(
            // <div class="badge bg-primary text-wrap" style="width: 6rem;">
            <div className="container">
                <hr style={{border:'1px dashed black'}}/>
                
                <h1 className='text-dark'>{data.title}</h1>
                {/* <span class="badge alert-success"></span> */}
                <span class="badge rounded-pill bg-light text-dark">{data.auth}</span>
                <h6 className='text-primary mt-2'>{data.desc}</h6>
            </div>
            // </div>
          ))
        }
    
    
    
    </div>
  )
}

export default Post