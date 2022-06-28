import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'
function AddPost() {
    const[title, settitle]=useState('')
    const[auth, setauth]=useState('')
    const[desc, setdesc]=useState('')
    const[msg, setmsg]=useState('')

    function handleSubmit(e){
        const blog={
            title:title,
            desc:desc,
            auth:auth
        }

        axios.post('http://localhost:5000/add-post', blog)
        .then(res=>setmsg(res.data))
        .catch(err=>console.log(err))

    }
  return (
    // onSubmit={(e)=>LoginCheck(e)}
    <div>
        <Navbar/>
        <div className='container mt-5'>
            <h2 className='m-5 text-center'>Add Post into the Website</h2>
                <form  className='col-md-5 mx-auto' onSubmit={handleSubmit}>
                <h5 className='p-3 text-center text-white'>{msg}</h5>
                <div className="form-group">
                    <label >Title</label>
                    <input 
                    type="text" 
                    value={title} 
                    className="form-control" 
                    onChange={(e)=>{settitle(e.target.value)}} 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter Title" required/>


                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group ">
                    <label >Description</label>
                    <textarea type="desc" 
                    value={desc} 
                    rows='8'
                    class="form-control" 
                    onChange={(e)=>{setdesc(e.target.value)}} 
                    placeholder="Add Description" required/>
                </div>
                <div className="form-group ">
                    <label >Author Name</label>
                    <input type="auth" 
                    value={auth} 
                    className="form-control" 
                    onChange={(e)=>{setauth(e.target.value)}} 
                    id="exampleInputPassword1" 
                    placeholder="Type Name"required/>
                </div>
                {/* <div className="form-check"> */}
                    {/* <input type="checkbox" className="form-check-input" id="exampleCheck1"/> */}
                    {/* <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
                {/* </div> */}
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                <Link to='/posts' className="btn btn-dark mt-3 ms-3">Back To Home</Link>
                
                </form>

        </div>
    </div>
  )
  }

export default AddPost